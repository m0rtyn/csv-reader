// TODO: specify function types
export const sendUsersToServer = (dataObj: any): Promise<Response> => {
  return fetch("https://frontend-homework.getsandbox.com/users", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(dataObj),
  });
};
