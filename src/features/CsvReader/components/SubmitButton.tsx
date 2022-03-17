import { Button } from "@geist-ui/core";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFiles, selectRequestStatus } from "../csvReaderSlice";
import { sendUsers } from "../csvReaderSlice/csvReaderThunks";

// TODO: extract constant and type
const REQUEST_STATUS_TO_TYPE_MAP = {
  IDLE: "secondary" as const,
  REQUEST: "secondary" as const,
  SUCCESS: "success" as const,
  FAILURE: "error" as const,
};
type RequestStatus = keyof typeof REQUEST_STATUS_TO_TYPE_MAP

const SubmitButton = () => {
  const status = useSelector(selectRequestStatus);
  const files = useSelector(selectFiles);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(sendUsers());
  }, [dispatch]);

  const getButtonTypeFromStatus = (status: RequestStatus) => {
    return REQUEST_STATUS_TO_TYPE_MAP[status] || "default";
  };

  return (
    <Button
      type={getButtonTypeFromStatus(status)}
      onClick={handleClick}
      loading={status === "REQUEST"}
      disabled={files.length === 0}
      auto
      ghost
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
