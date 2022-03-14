import { useSelector } from "react-redux";
import { selectFiles } from "../csvReaderSlice";
import FileItem from "./FileItem";

const FileList: React.FC = () => {
  const files = useSelector(selectFiles);

  return (
    <>
      <p>Files count: {files.length}</p>
      <ul>
        {files.map((file, i) => (
          <FileItem key={i} file={file} />
        ))}
      </ul>
    </>
  );
};

export default FileList;
