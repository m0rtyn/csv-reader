import { Card, Spacer } from "@geist-ui/core";
import { useSelector } from "react-redux";
import { ResetButton } from "shared/components/ResetButton";
import { selectFiles } from "../csvReaderSlice";
import FileInput from "./FileInput/FileInput";
import SubmitButton from "./SubmitButton";

export const Form = ({}) => {
  const files = useSelector(selectFiles);

  return (
    <Card>
      <FileInput />
      <Spacer h={1} />
      <SubmitButton />
      <Spacer inline />

      {files.length !== 0 && <ResetButton />}
    </Card>
  );
};
