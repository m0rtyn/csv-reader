import SubmitButton from "./components/SubmitButton";
import FileInput from "./components/FileInput";
import FileList from "./components/FileList";

const CsvReader: React.FC = () => {
  return (
    <>
      <FileInput />
      <hr />
      <FileList />
      <SubmitButton />
    </>
  );
};

export default CsvReader;
