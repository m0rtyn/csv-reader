import {
  Card,
  CssBaseline,
  GeistProvider,
  Page,
  Tabs,
  useTabs,
  Text
} from "@geist-ui/core";
import { CsvReader } from "features/CsvReader";
import { useSelector } from "react-redux";
import { selectThemeType } from "shared/store/settingsSlice";
import { RequestLogger } from "features/RequestLogger";
import { Header } from "./features/CsvReader/components/Header";

// TODO: refactor component
const App = () => {
  const themeType = useSelector(selectThemeType);
  const { bindings } = useTabs("1");

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page dotBackdrop dotSize={"4px"}>
        <Header />

        <Page.Content>
          <Card px={1.5} pb={1.5}>
            <Tabs {...bindings}>
              <Tabs.Item label="CSV Reader" value="1">
                <CsvReader />
              </Tabs.Item>
              <Tabs.Item label="Request Logger" value="2">
                <RequestLogger />
              </Tabs.Item>
            </Tabs>
          </Card>
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
