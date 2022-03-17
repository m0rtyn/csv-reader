import SubmitButton from "./components/SubmitButton";
import FileInput from "./components/FileInput/FileInput";
import FileList from "./components/FileList/FileList";
import { Card, Spacer } from "@geist-ui/core";

const CsvReader: React.FC = () => {
  return (
    <>
      <Card>
        <FileInput />
        <Spacer h={1}/>
        <SubmitButton />
      </Card>
      <FileList />
    </>
  );
};

export default CsvReader;
