import { Card, Grid, Spacer, Toggle, Text } from "@geist-ui/core";
import { useDispatch } from "react-redux";
import { settingsActions } from "shared/store";

{/* //TODO: make absolute and add styling*/}
export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const switchThemes = () => {
    dispatch(settingsActions.toggleTheme())
  };
  
  return (
    <Card>
      <Grid.Container   justify="flex-end">
        <Grid justify="flex-end">
          <Text font={"12px"} my={0} type="secondary">
            Theme
          </Text>
          <Spacer h={0} />
          <Toggle scale={1.5} type="warning" onChange={switchThemes}/>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

