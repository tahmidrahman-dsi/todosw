const INITIAL_STATE = { lvl_1: false, lvl_2: false, lvl_3: false, lvl_4: false, lvl_5: false };


export default (state=INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "lvl_1":
      return Object.assign({},state,{ lvl_1: !state.lvl_1});
    case "lvl_2":
      return Object.assign({},state,{ lvl_2: !state.lvl_2});
    case "lvl_3":
      return Object.assign({},state,{ lvl_3: !state.lvl_3});
    case "lvl_4":
      return Object.assign({},state,{ lvl_4: !state.lvl_4});
    case "lvl_5":
      return Object.assign({},state,{ lvl_5: !state.lvl_5});
    default:
      return state;
  }
}
