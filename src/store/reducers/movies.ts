const INITIAL_STATE = <any>[];

export const movieReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: { id: any } }
) => {
  switch (action.type) {
    case "SET_MOVIE":
      return (state = action.payload);
    default:
      return state;
  }
};
