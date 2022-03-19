import { CsvReader } from "features/CsvReader";
import { PageWrapper } from "shared/components/PageWrapper";

const App: React.FC = () => {
  return (
    <PageWrapper>
      <CsvReader />
    </PageWrapper>
  );
};

export default App;
