import { Card, Spacer } from "@geist-ui/core";
import SubmitButton from "./components/SubmitButton";
import FileInput from "./components/FileInput/FileInput";
import FileList from "./components/FileList/FileList";
import { ResetButton } from "shared/components/ResetButton";
import { useSelector } from "react-redux";
import { selectFiles } from "./csvReaderSlice";

const CsvReader: React.FC = () => {
  const files = useSelector(selectFiles);
  return (
    <>
      <Card>
        <FileInput />
        <Spacer h={1} />
        <SubmitButton />
        <Spacer inline />
        
        { files.length !== 0 && <ResetButton />}
      </Card>
      <Spacer />
      <FileList />
    </>
  );
};

export default CsvReader;
