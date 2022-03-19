import { Divider } from "@geist-ui/core";
import styles from "./FileList.module.css";

export const FileListHeader = () => {
  const className = `${styles["file-item"]} ${styles["file-list-header"]}`;

  return (
    <>
      <li className={className}>
        <span title="Name">Name</span>
        <span title="Users Count">Users Count</span>
        <span title="Avg. age">Avg. age</span>
        <span title="Action">Action</span>
      </li>
      <Divider style={{ margin: 0 }} />
    </>
  );
};

