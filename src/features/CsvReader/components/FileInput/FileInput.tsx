import { Button } from "@geist-ui/core";
import { addFiles, collectUsersFromTextThunk, resetUsers } from "features/CsvReader/csvReaderSlice";
import { getShallowFiles } from "features/CsvReader/utils";
import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./FileInput.module.css";

export const FileInput = () => {
  const dispatch = useDispatch();

  const collectUsersFromFiles = useCallback(
    (newFiles: File[]) => {
      const readFileText = (file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = (progressEvent: ProgressEvent<FileReader>) =>
          dispatch(
            collectUsersFromTextThunk({
              filename: file.name,
              progressEvent,
            })
          );

        fileReader.readAsText(file);
      };

      return newFiles.forEach((file) => readFileText(file));
    },
    [dispatch]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = (event.target as HTMLInputElement)?.files || [];
      const fileArray = Array.from(files);

      dispatch(resetUsers());
      collectUsersFromFiles(fileArray);

      const shallowFiles = getShallowFiles(fileArray);
      dispatch(addFiles(shallowFiles));
    },
    [collectUsersFromFiles, dispatch]
  );

  return (
    <Button type="secondary-light" auto ghost>
      <label className={styles["file-input"]} htmlFor="file-input">
        Browse...
      </label>
      <input
        onChange={handleInputChange}
        id="file-input"
        accept=".csv"
        type="file"
        required
        multiple
      />
    </Button>
  );
};
