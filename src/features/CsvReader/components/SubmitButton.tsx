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

  const getStatus = (status: "IDLE" | "REQUEST" | "SUCCESS" | "FAILURE") => {
    const statusMap = {
      IDLE: 'Send request',
      REQUEST: 'Loading...',
      SUCCESS: '✅',
      FAILURE: '❌'
    }
    return statusMap[status] || '🤷‍♂️'
  }

  return (
    <button onClick={handleClick}>
      {getStatus(requestStatus)}
    </button>
  );
};

export default SubmitButton;
