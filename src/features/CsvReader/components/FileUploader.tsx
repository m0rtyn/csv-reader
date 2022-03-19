import { FileInput } from "./FileInput/FileInput";
import {
  selectFiles,
} from "../csvReaderSlice";
import { Grid, Text } from "@geist-ui/core";
import { useSelector } from "react-redux";

export const FileUploader: React.FC = () => {
  const files = useSelector(selectFiles);
  const isFilesExist = files.length > 0;

  const filesCountText = isFilesExist ? files.length : "No";

  return (
    <>
      <Text>Please, choose your CSV files</Text>
      <Grid.Container alignItems="center" gap={1}>
        <Grid>
          <FileInput />
        </Grid>
        <Grid>{`${filesCountText} files selected.`}</Grid>
      </Grid.Container>
    </>
  );
};
