import { selectRequests } from "features/CsvReader";
import { useSelector } from "react-redux";

const RequestLogger = () => {
  const requests = useSelector(selectRequests)
  return (
    <ul>
      {requests.map(req => <li>{`${req.status} ${req.timestamp}`}</li>)}
    </ul>
  )
};

export default RequestLogger;
