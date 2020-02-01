const initState = {
  data: [
    { title: "Giáp Mộc", content: "balabalabalabal1" },
    { title: "balabalabala2", content: "balabalabalabal2" },
    { title: "balabalabala3", content: "balabalabalabal3" }
  ]
};

const tipsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TIPS":
      console.log("PHUC" + action.data.content);
      state.data = [...state.data, action.data];

      return { ...state };

      break;
    default:
      return { ...state };
      break;
  }
};
export default tipsReducer;
