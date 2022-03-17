import styles from "./FileItem.module.css";

// TODO: move component to shared foledr
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
      <hr style={{ margin: 0 }} />
    </>
  );
};
