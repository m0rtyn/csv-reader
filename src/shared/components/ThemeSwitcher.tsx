import { Toggle } from "@geist-ui/core";
import { useDispatch } from "react-redux";
import { settingsActions } from "shared/store";

{/* //TODO: make absolute and add styling*/}
export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const switchThemes = () => {
    dispatch(settingsActions.toggleTheme())
  };
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      Theme: <Toggle  type="warning" onChange={switchThemes}/>
    </div>
  );
};

