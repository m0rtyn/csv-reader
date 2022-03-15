import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, selectUsers } from "../csvReaderSlice";
import { ShallowFile } from "../types";

const FileItem = ({ file }: { file: ShallowFile }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const {usersCount, averageAge} = users
    .filter((user) => user.filename === file.name)
    .reduce((acc, user, i , arr) => {
      return {
        usersCount: acc.usersCount + 1,
        averageAge: acc.averageAge + (user.age / arr.length)
      }
    }, {usersCount: 0, averageAge: 0});

  const handleClick = useCallback(
    (e) => {
      dispatch(deleteFile(file));
    },
    [dispatch, file]
  );

  return (
    <li>
      <span>Filename: {file.name}</span>{" "}
      <span>Users count: {usersCount}</span>{" "}
      <span>Average age: {averageAge}</span>{" "}
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default FileItem;
