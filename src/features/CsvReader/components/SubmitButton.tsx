import { Button } from "@geist-ui/core";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStyleTypeFromStatus } from "shared/utils";
import { selectFiles, selectRequestStatus } from "../csvReaderSlice";
import { addUsersThunk } from "../csvReaderSlice/csvReaderThunks";

const SubmitButton = () => {
  const status = useSelector(selectRequestStatus);
  const files = useSelector(selectFiles);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(addUsersThunk());
  }, [dispatch]);

  return (
    <Button
      type={getStyleTypeFromStatus(status)}
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
