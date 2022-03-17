import { Card, Spacer, useToasts } from "@geist-ui/core";
import SubmitButton from "./components/SubmitButton";
import FileInput from "./components/FileInput/FileInput";
import FileList from "./components/FileList/FileList";
import { ResetButton } from "shared/components/ResetButton";
import { useSelector } from "react-redux";
import { selectFiles, selectRequestStatus } from "./csvReaderSlice";
import { useEffect } from "react";
import { getStyleTypeFromStatus } from "shared/utils";
import { RequestStatus } from "shared/types";

const getStatusText = (status: RequestStatus) => {
  const statusMap = {
    IDLE: null,
    REQUEST: "Request to server",
    FAILURE: "Request error, please repeat the action",
    SUCCESS: "Request was successfully sent",
  };

  return statusMap[status] || "";
};

const CsvReader: React.FC = () => {
  const files = useSelector(selectFiles);
  const status = useSelector(selectRequestStatus);
  const { setToast } = useToasts();

  useEffect(() => {
    if (status === 'IDLE') return
    
    const THREE_SECONDS = 3000;
    return setToast({
      text: getStatusText(status),
      type: getStyleTypeFromStatus(status),
      delay: THREE_SECONDS,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      {/* // TODO: extract component */}
      <Card>
        <FileInput />
        <Spacer h={1} />
        <SubmitButton />
        <Spacer inline />

        {files.length !== 0 && <ResetButton />}
      </Card>
      <Spacer />
      <FileList />
    </>
  );
};

export default CsvReader;
