export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      console.tron.log(state);
      return 1;
    default:
      return state;
  }
}
