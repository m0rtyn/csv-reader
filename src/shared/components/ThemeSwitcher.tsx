import { Toggle } from "@geist-ui/core";
import { useDispatch } from "react-redux";
import { settingsSlice } from "shared/store/settingsSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const switchThemes = () => {
    dispatch(settingsSlice.actions.toggleTheme())
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

