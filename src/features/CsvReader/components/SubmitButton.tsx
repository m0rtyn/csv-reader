import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { sendAndAddUsers } from "../csvReaderSlice";

const SubmitButton = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(sendAndAddUsers());
  }, [dispatch]);

  return <button onClick={handleClick}>Send users</button>;
};

export default SubmitButton;
