import React from "react";

interface Props {
  // TODO: specify param type
  onInputChange: (event: any) => void;
}

const FileInput: React.FC<Props> = ({ onInputChange }) => {
  return (
    <label>
      Please, upload your files
      <input
        onChange={onInputChange}
        accept=".csv"
        type="file"
        required
        multiple
      />
    </label>
  );
};

export default FileInput;
