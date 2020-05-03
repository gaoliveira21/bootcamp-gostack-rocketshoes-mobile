import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, (draft) => {
        const { product } = action;

        const productIndex = draft.findIndex((p) => p.id === product.id);

        if (productIndex >= 0) {
          product.amount = draft[productIndex].amount + 1;
          draft[productIndex] = product;
          return;
        }

        draft.push(product);
      });
    default:
      return state;
  }
}
