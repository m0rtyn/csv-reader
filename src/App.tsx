import { CssBaseline, GeistProvider, Page } from "@geist-ui/core";
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
      <Page>
        {/* //TODO: make absolute and add styling*/}
        <ThemeSwitcher />
        <CsvReader />
      </Page>

    </GeistProvider>
  );
};

export default App;
