import { useSelector } from "react-redux";
import { selectFiles } from "../csvReaderSlice";
import FileItem from "./FileItem";

const FileList: React.FC = () => {
  const fileNames = useSelector(selectFiles);

  return (
    <>
      <p>Files count: {fileNames.length}</p>
      <ul>
        {fileNames.map((file, i) => (
          <FileItem key={i} file={file} />
        ))}
      </ul>
    </>
  );
};

export default FileList;
