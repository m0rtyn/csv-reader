import { Spacer, useToasts } from "@geist-ui/core";
import FileList from "./components/FileList/FileList";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "./csvReaderSlice";
import { useEffect } from "react";
import { getStatusText, getStyleTypeFromStatus } from "shared/utils";
import { Form } from "./components/Form";

const CsvReader: React.FC = () => {
  const status = useSelector(selectRequestStatus);
  const { setToast } = useToasts();

  useEffect(() => {
    if (status === "IDLE") return;

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
      <Form />
      <Spacer />
      <FileList />
    </>
  );
};

export default CsvReader;

