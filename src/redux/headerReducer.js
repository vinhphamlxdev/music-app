const initState = {
  bgHeader: false,
};
const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BG_HEADER":
      return {
        ...state,
        newBg: action.payLoad,
      };
      break;

    default:
      return state;
  }
};
export default headerReducer;
