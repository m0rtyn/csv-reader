import { fetchRetry } from "@shared/utils/fetchRetry";

const API_URL = "https://frontend-homework.getsandbox.com";

interface UsersPayload {
  users: string[]
}

export const sendUsersToServer = (usersPayload: UsersPayload): Promise<Response> => {
  const url = `${API_URL}/users`;
  const body = JSON.stringify(usersPayload)
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };

  const options = {
    method: "POST",
    headers,
    body,
  };

  return fetchRetry(url, options, 3);
};
