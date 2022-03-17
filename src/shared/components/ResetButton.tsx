import { Button } from "@geist-ui/core";
import { X } from "@geist-ui/icons";
import { resetFiles } from "features/CsvReader";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const ResetButton: React.FC<{ disabled?: boolean }> = ({ disabled = false }) => {
  const dispatch = useDispatch();

  const clickHandler = useCallback(
    () => {
      dispatch(resetFiles());
    },
    [dispatch]
  );

  return (
    <Button
      iconRight={<X />}
      onClick={clickHandler}
      disabled={disabled}
      type="error-light"
      scale={0.6}
      px={0.5}
      auto
      ghost
    />
  );
};
