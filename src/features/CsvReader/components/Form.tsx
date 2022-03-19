import { Spacer } from "@geist-ui/core";
import { useSelector } from "react-redux";
import { ResetButton } from "shared/components/ResetButton";
import { selectFiles } from "../csvReaderSlice";
import { FileUploader } from "./FileUploader";
import SubmitButton from "./SubmitButton";

export const Form = () => {
  const files = useSelector(selectFiles);

  return (
    <>
      <FileUploader />
      <Spacer h={1} />
      <SubmitButton />
      <Spacer inline />

      {files.length !== 0 && <ResetButton />}
    </>
  );
};
