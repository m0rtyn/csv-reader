import { useSelector } from "react-redux";
import { selectFiles } from "../../csvReaderSlice";
import FileItem from "./FileItem";
import { FileListHeader } from "./FileListHeader";
import styles from "./FileList.module.css"

const FileList: React.FC = () => {
  const files = useSelector(selectFiles);
  const filesLen = files.length;
  const isFilesExist = filesLen > 0;

  return isFilesExist ? (
    <ul className={styles["file-list"]}>
      <FileListHeader />

      {files.map((file, i) => (
        <FileItem key={i} file={file} isLast={i !== filesLen - 1} />
      ))}
    </ul>
  ) : null;
};

export default FileList;
