import { Grid, Page, Text } from "@geist-ui/core";
import { ThemeSwitcher } from "shared/components/ThemeSwitcher";

export const Header = () => {
  const version = process.env.REACT_APP_VERSION;

  return (
    <Page.Header py={"4px"}>
      <Grid.Container gap={2} justify="space-between" alignItems="center">
        <Grid py={0}>
          <Text
            font="16px"
            my={0}
            h1
          >
            CSV Reader 3000
            <Text span mx="8px" font={"8px"} type="secondary">v{version}</Text>
          </Text>
        </Grid>
        <Grid>
          <ThemeSwitcher />
        </Grid>
      </Grid.Container>
    </Page.Header>
  );
};
