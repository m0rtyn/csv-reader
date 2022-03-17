import { Button } from "@geist-ui/core";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, selectUsers } from "../../csvReaderSlice";
import { ShallowFile } from "../../types";
import { Trash } from "@geist-ui/icons";
import styles from "./FileItem.module.css";
import { roundToFirstDecimal } from "shared/utils/utils";

interface Props {
  file: ShallowFile;
  isLast: boolean;
}

const FileItem: React.FC<Props> = ({ file, isLast }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const { usersCount, averageAge } = users
    .filter((user) => user.filename === file.name)
    .reduce(
      (acc, user, i, arr) => {
        return {
          usersCount: roundToFirstDecimal(acc.usersCount + 1),
          averageAge: roundToFirstDecimal(acc.averageAge + user.age / arr.length),
        };
      },
      { usersCount: 0, averageAge: 0 }
    );

  const handleClick = useCallback(() => {
    dispatch(deleteFile(file));
  }, [dispatch, file]);

  return (
    <>
      <li className={styles["file-item"]}>
        <span>{file.name}</span>
        <span>{usersCount}</span>
        <span>{averageAge}</span>
        <Button
          iconRight={<Trash />}
          onClick={handleClick}
          type="error-light"
          scale={0.2}
          ghost
          auto
        />
      </li>
      {isLast && <hr style={{ margin: 0 }} />}
    </>
  );
};

export default FileItem;
