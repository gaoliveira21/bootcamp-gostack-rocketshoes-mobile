import { put, all, takeLatest, select, call } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  // verificar se o produto ja existe no carrinho
  const productExists = yield select((state) => {
    state.cart.find((p) => p.id === id);
  });

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.error('Quantidade selecionada não disponivel em estoque');
    return;
  }

  console.tron.log(productExists);

  if (productExists) {
    return;
  }

  const response = yield call(api.get, `/products/${id}`);

  const product = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSuccess(product));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
