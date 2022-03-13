import FileInput from "./components/FileInput";
import FileList from "./components/FileList";

interface Props {
  handleInputChange: (event: Event) => void;
  files: File[];
  handleClick: () => void;
}
const CsvReader: React.FC<Props> = ({
  handleInputChange,
  files,
  handleClick,
}) => {
  return (
    <>
      {" "}
      <FileInput onInputChange={handleInputChange} />
      <hr />
      <FileList files={files} />
      {/* // TODO: extract as SubmitButton component */}
      <button onClick={handleClick}>Send users</button>
    </>
  );
};

export default CsvReader;
