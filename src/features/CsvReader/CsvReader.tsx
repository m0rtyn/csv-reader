import { Card, Page, Spacer, Tabs, useTabs, useToasts } from "@geist-ui/core";
import FileList from "./components/FileList/FileList";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "./csvReaderSlice";
import { useEffect } from "react";
import { getStatusText, getStyleTypeFromStatus } from "shared/utils";
import { Form } from "./components/Form";
import { RequestLogger } from "features/RequestLogger";

const CsvReader: React.FC = () => {
  const status = useSelector(selectRequestStatus);
  const { setToast } = useToasts();
  const { bindings } = useTabs("1");

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
    <Page.Content>
      <Card px={1.5} pb={1.5}>
        <Tabs {...bindings}>
          <Tabs.Item label="CSV Reader" value="1">
            <Form />
            <Spacer />
            <FileList />
          </Tabs.Item>
          <Tabs.Item label="Request Logger" value="2">
            <RequestLogger />
          </Tabs.Item>
        </Tabs>
      </Card>
    </Page.Content>
  );
};

export default CsvReader;
