import { CssBaseline, GeistProvider, Page, Spacer } from "@geist-ui/core";
import { CsvReader } from "features/CsvReader";
import { useSelector } from "react-redux";
import { selectThemeType } from "shared/store/settingsSlice";
import { ThemeSwitcher } from "shared/components/ThemeSwitcher";

// TODO: refactor component
const App = () => {
  const themeType = useSelector(selectThemeType)
  
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page dotBackdrop dotSize={"4px"}>
        <ThemeSwitcher />
        <CsvReader />
      </Page>

    </GeistProvider>
  );
};

export default App;
