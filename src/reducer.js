import cards from "./data/cards.json";

export const initialState = cards;

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        response: state,
      };
    case "FILTER_BY_STATUS":
      return {
        response:
          action.value.toLowerCase() === "all campaigns" ? initialState : filterByValue(initialState, action.value),
      };
    default:
      return state;
  }
};

const filterByValue = (state = [], value) => {
  const response = [];

  // eslint-disable-next-line
  state.find((item) => {
    if (item.currentWorkflow === value.toLowerCase()) {
      response.push(item);
    }
  });

  return response;
};

export default reducer;
