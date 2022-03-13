import { useCallback, useRef, useState } from "react";
import "./App.css";
import FileInput from "./components/FileInput";
import FileList from "./components/FileList";

interface User {
  name: string;
  age: number;
}

// TODO: refactor component
const App = () => {
  const [files, setFiles] = useState<File[]>([]);
  const usersRef = useRef<User[]>([]);

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
      const users = usersRef.current;
      const newUsersState = [...users, ...addedUsers];
      usersRef.current = newUsersState;
    },
    []
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

  const handleClick = useCallback(async () => {
    collectUsersFromFiles(files);

    const users = usersRef.current;

    const usernames = users.map((user) => user.name);
    const payload = {
      users: usernames,
    };

    return sendUsersToServer(payload);
  }, [collectUsersFromFiles, files]);

  const sendUsersToServer = (dataObj: any): Promise<Response> => {
    return fetch("https://frontend-homework.getsandbox.com/users", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(dataObj),
    });
  };

  const handleInputChange = useCallback((event: Event) => {
    const files = (event.target as HTMLInputElement)?.files || [];
    const fileArray = Array.from(files);
    setFiles(fileArray);
  }, []);

  return (
    // TODO: extract as main feature
    <div>
      <FileInput onInputChange={handleInputChange} />

      <hr />

      <FileList files={files} />

      {/* // TODO: extract as SubmitButton component */}
      <button onClick={handleClick}>Send users</button>
    </div>
  );
};

export default App;
