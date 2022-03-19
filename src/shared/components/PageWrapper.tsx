import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { CssBaseline, GeistProvider, Page } from "@geist-ui/core";
import { selectThemeType } from "shared/store";
import { Header } from "./Header";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeType = useSelector(selectThemeType);

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page dotBackdrop dotSize={"4px"}>
        <Header />

        {children}

        <Footer />
      </Page>
    </GeistProvider>
  );
};
