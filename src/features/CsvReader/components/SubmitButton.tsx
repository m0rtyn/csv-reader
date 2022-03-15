import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../csvReaderSlice";
import { sendAndAddUsers } from "../csvReaderSlice/csvReaderReducer";

const SubmitButton = () => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectStatus);

  const handleClick = useCallback(() => {
    dispatch(sendAndAddUsers());
  }, [dispatch]);

  return (
    <button onClick={handleClick}>
      {requestStatus === "REQUEST" ? "Loading..." : "Send users"}
    </button>
  );
};

export default SubmitButton;
