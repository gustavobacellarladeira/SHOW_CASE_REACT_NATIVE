import { ActionType } from "redux-promise-middleware";

const INITIAL_STATE = <any>[];

const reducer = (state = INITIAL_STATE, action: { type: any }) => {
  switch (action.type) {
    case `FOO_${ActionType.Pending}`:
    // ..

    case `FOO_${ActionType.Fulfilled}`:
    // ...

    case `FOO_${ActionType.Rejected}`:
    // ...

    default:
      return state;
  }
};
