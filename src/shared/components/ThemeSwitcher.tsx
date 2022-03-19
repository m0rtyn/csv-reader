import { Toggle, Text} from "@geist-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeType, settingsActions } from "shared/store";

export const ThemeSwitcher = () => {
  const theme = useSelector(selectThemeType)
  const dispatch = useDispatch();
  const switchThemes = () => {
    dispatch(settingsActions.toggleTheme());
  };

  return (
    <>
      {theme === "dark" && <Text span>🌝</Text>}
      <Toggle mb="10px" mx="8px" scale={1.5} type="warning" onChange={switchThemes} />
      {theme === "light" && <Text span>🌞</Text>}
    </>
  );
};
