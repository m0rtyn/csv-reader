import { Button } from "@geist-ui/core";
import { Trash } from "@geist-ui/icons";

export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      iconRight={<Trash />}
      onClick={onClick}
      type="error-light"
      scale={0.2}
      ghost
      auto
    />
  );
};
