import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { csvReaderActions } from "../csvReaderSlice";
import { ShallowFile } from "../types";

const { deleteFile } = csvReaderActions;

const FileItem = ({ file }: { file: ShallowFile }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e) => {
      dispatch(deleteFile(file));
    },
    [dispatch, file]
  );

  return (
    <li>
      <span>{file.name}</span>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default FileItem;
