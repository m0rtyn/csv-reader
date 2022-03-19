import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { CsvReader } from "features/CsvReader";
import { useSelector } from "react-redux";
import { PageWrapper } from "shared/components/PageWrapper";
import { selectThemeType } from "shared/store";

const App: React.FC = () => {
  const themeType = useSelector(selectThemeType);

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <PageWrapper>
        <CsvReader />
      </PageWrapper>
    </GeistProvider>
  );
};

export default App;
