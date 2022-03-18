import { CssBaseline, GeistProvider, Page, Spacer, Tabs, useTabs } from "@geist-ui/core";
import { CsvReader } from "features/CsvReader";
import { useSelector } from "react-redux";
import { selectThemeType } from "shared/store/settingsSlice";
import { ThemeSwitcher } from "shared/components/ThemeSwitcher";
import { RequestLogger } from "features/RequestLogger";

// TODO: refactor component
const App = () => {
  const themeType = useSelector(selectThemeType)
  const { setState, bindings } = useTabs('1')
  
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page dotBackdrop dotSize={"4px"}>
        <ThemeSwitcher />

        <Tabs {...bindings}>
          <Tabs.Item label="CSV Reader" value="1">
            <CsvReader />
          </Tabs.Item>
          <Tabs.Item label="Request Logger" value="2">
            <RequestLogger />
          </Tabs.Item>
        </Tabs>
      </Page>

    </GeistProvider>
  );
};

export default App;
