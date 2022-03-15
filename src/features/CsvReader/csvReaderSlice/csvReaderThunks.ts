import { AppThunk } from "@shared/store";
import { sendUsersToServer } from "../csvReaderAPI";
import { csvReaderActions } from "./csvReaderReducer";

const {
  requestStatusPending,
  requestStatusFailure,
  requestStatusSuccess,
  requestStatusReset,
} = csvReaderActions;

// eslint-disable-next-line max-statements
export const sendAndAddUsers = (): AppThunk => async (dispatch, getState) => {
  const {
    csvReader: { users },
  } = getState();

  dispatch(requestStatusPending());

  const usernames = users.map((user) => user.name);
  const response = await sendUsersToServer({
    users: usernames,
  });

  if (response.ok) {
    dispatch(requestStatusSuccess(response));
  } else {
    dispatch(requestStatusFailure(response));
  }

  dispatch(requestStatusReset());
};
