import { Page, Text } from "@geist-ui/core";

export const Footer = () => {
  return (
    <Page.Footer py={"8px"}>
      <Text
        style={{
          textAlign: "center",
        }}
        type="secondary"
        p
      >
        made by @m0rtyn with ❤️
      </Text>
    </Page.Footer>
  );
};
