import { Page } from "@geist-ui/core";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Page dotBackdrop dotSize={"4px"}>
      <Header />

      <Page.Content>
        {children}
      </Page.Content>

      <Footer />
    </Page>
  );
};
