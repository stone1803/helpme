export const actionTip = data => {
  return (dispatch, getState) => {
    // dong bo database
    dispatch({ type: "ADD_TIPS", data });
  };
};
