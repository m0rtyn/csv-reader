import { selectRequests } from "features/CsvReader";
import { useSelector } from "react-redux";
import { Text } from "@geist-ui/core";

const getItemStyleType = (status: "failure" | "success") =>
  status === "success" ? "success" : "error";
const getStatusEmoji = (status: "failure" | "success") =>
  status === "success" ? "✅" : "❌"

const RequestLogger = () => {
  const requests = useSelector(selectRequests);

  return (
    <ul>
      {requests.map((logItem, i) => {
        const { status, timestamp, usersCount } = logItem;
        const statusEmoji = getStatusEmoji(status);

        return (
          <li key={i}>
            <Text type={getItemStyleType(status)}>
              {`${statusEmoji} Users count: ${usersCount} | ${timestamp}`}
            </Text>
          </li>
        );
      })}
    </ul>
  );
};

export default RequestLogger;
