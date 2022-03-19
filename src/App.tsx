import { Header } from "./features/CsvReader/components/Header";
import { CssBaseline, GeistProvider, Grid, Page, Text } from "@geist-ui/core";
import { CsvReader } from "features/CsvReader";
import { useSelector } from "react-redux";
import { selectThemeType } from "shared/store/settingsSlice";
import { ThemeSwitcher } from "shared/components/ThemeSwitcher";

// TODO: refactor component
const App = () => {
  const themeType = useSelector(selectThemeType);

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page dotBackdrop dotSize={"8px"}>
        <Header />

        <Page.Content>
          <CsvReader />
        </Page.Content>

        <Page.Footer py={"8px"}>
          <Text p type="secondary" style={{textAlign: "center"}}>
            made by @m0rtyn with ❤️
          </Text>
        </Page.Footer>
      </Page>
    </GeistProvider>
  );
};

export default App;
