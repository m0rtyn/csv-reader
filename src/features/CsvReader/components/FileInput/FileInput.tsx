import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "shared/store/store";
import {
  addFiles,
  addUsers,
  selectFiles,
  selectUsers,
} from "../../csvReaderSlice";
import styles from "./FileInput.module.css";
import { Button, Grid, Text } from "@geist-ui/core";

// TODO: refactor component
const FileInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const files = useSelector(selectFiles);

  const collectUsersFromTexts = useCallback(
    (filename: string, progressEvent: ProgressEvent<FileReader>) => {
      const target = progressEvent?.target;
      const fileText = target?.result as string;
      const rowsOfCSV = fileText?.split("\n");
      const addedUsersRows = rowsOfCSV.slice(1, rowsOfCSV.length);

      const addedUsers = addedUsersRows.map((row: string) => {
        const rowArr = row.split(",");
        return {
          name: rowArr[0],
          age: Number(rowArr[1]),
          filename,
        };
      });

      const newUsersState = [...users, ...addedUsers];
      dispatch(addUsers(newUsersState));
    },
    [dispatch, users]
  );

  const collectUsersFromFiles = useCallback(
    (newFiles: File[]) => {
      return newFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReader.onload = (progressEvent: ProgressEvent<FileReader>) =>
          collectUsersFromTexts(file.name, progressEvent);

        fileReader.readAsText(file);
      });
    },
    [collectUsersFromTexts]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = (event.target as HTMLInputElement)?.files || [];
      const fileArray = Array.from(files);

      collectUsersFromFiles(fileArray);

      const shallowFiles = fileArray.map(
        ({ name, size, type, lastModified }) => ({
          name,
          lastModified,
          size,
          type,
        })
      );

      dispatch(addFiles(shallowFiles));
    },
    [collectUsersFromFiles, dispatch]
  );

  const filesCountText = files.length === 0 ? "No" : files.length;

  return (
    <>
      <Text>Please, choose your CSV files</Text>
      <Grid.Container alignItems="center" gap={1}>
        <Grid>
          <Button auto>
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
        </Grid>
        <Grid>
          {`${filesCountText} files selected.`}
        </Grid>
      </Grid.Container>
    </>
  );
};

export default FileInput;
