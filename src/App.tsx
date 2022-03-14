import { CsvReader } from "./features/CsvReader";
import { useCallback, useRef, useState } from "react";
import { User } from "./shared/types";

// TODO: refactor component
const App = () => {
  return (
    <div>
      <CsvReader />
    </div>
  );
};

export default App;
