import { Card } from "@geist-ui/core";
import { Divider } from "@geist-ui/icons";
import { useSelector } from "react-redux";
import { selectFiles } from "../../csvReaderSlice";
import FileItem from "../FileItem/FileItem";
import { FileListHeader } from "../FileItem/FileListHeader";
import styles from "./FileList.module.css";

const FileList: React.FC = () => {
  const files = useSelector(selectFiles);
  const isFilesExist = files.length > 0;

  return isFilesExist ? (
    <Card>
      <ul className={styles["file-list"]}>
        <FileListHeader key={1000}/>

        {files.map((file, i) => (
          <>
            <FileItem key={i} file={file} isLast={i !== files.length - 1} />
          </>
        ))}
      </ul>
    </Card>
  ) : null;
};

export default FileList;
