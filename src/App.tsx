import { useCallback, useState } from "react";
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
  const [users, setUsers] = useState<User[]>([]);

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
      setUsers(newUsersState);
    },
    [users]
  );

  const collectUsersFromFiles = useCallback(
    async (newFiles: File[]) => {
      const fileReader = new FileReader();
      console.log("🚀 ~ App ~ newFiles", newFiles)
      fileReader.onload = collectUsersFromTexts;

      return await newFiles.forEach(async (file) => {
        console.log("🚀 ~ newFiles.forEach ~ file", file)
        /* FIXME: Request error:
          Uncaught (in promise) DOMException: An attempt was made to use an object that is not, or is no longer, usable
          * possible solution is using of useEffect hook
          * possible solution is using of Redux async side effect
        */
        await fileReader.readAsText(file)
      });
    },
    [collectUsersFromTexts]
  );

  const handleClick = useCallback(async () => {
    await collectUsersFromFiles(files);

    const dataObj = {
      users: users.map((user) => user.name),
    };

    return sendUsersToServer(dataObj);
  }, [collectUsersFromFiles, files, users]);

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

      <FileList files={files} />

      {/* // TODO: extract as SubmitButton component */}
      <button onClick={handleClick}>Send users</button>
    </div>
  );
};

export default App;
