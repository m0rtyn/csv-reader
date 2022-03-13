interface Props {
  files: File[];
}

const FileList: React.FC<Props> = ({ files }) => {
  return (
    <>
      <p>Files count: {files.length}</p>
      <ul>
        {files.map((file, i) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FileList;
