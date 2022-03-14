import { useSelector } from "react-redux";
import { selectFiles } from "../csvReaderSlice";

const FileList: React.FC = () => {
  const fileNames = useSelector(selectFiles);

  return (
    <>
      <p>Files count: {fileNames.length}</p>
      <ul>
        {fileNames.map((filename, i) => (
          <li key={i}>{filename}</li>
        ))}
      </ul>
    </>
  );
};

export default FileList;
