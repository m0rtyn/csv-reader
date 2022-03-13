import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@shared/store";
import {
  addFiles,
  addUsers,
  selectFiles,
  selectUsers,
} from "../csvReaderSlice";

const FileInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);

  const collectUsersFromTexts = useCallback(
    (progressEvent: ProgressEvent<FileReader>) => {
      const fileText = progressEvent?.target?.result as string;
      const rowsOfCSV = fileText?.split("\n");
      const addedUsersRows = rowsOfCSV.slice(1, rowsOfCSV.length);
      const addedUsers = addedUsersRows.map((row: string) => {
        const rowArr = row.split(",");
        return {
          name: rowArr[0],
          age: +rowArr[1],
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
        fileReader.onload = collectUsersFromTexts;
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
      dispatch(addFiles(fileArray.map((file) => file.name)));
    },
    [collectUsersFromFiles, dispatch]
  );

  return (
    <label>
      <p>Please, upload your files</p>
      <input
        onChange={handleInputChange}
        accept=".csv"
        type="file"
        required
        multiple
      />
    </label>
  );
};

export default FileInput;
