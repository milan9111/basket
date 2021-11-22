const ADD_FRUITS_IN_BASKET = "ADD-FRUITS-IN-BASKET";
const REMOVE_FRUITS_IN_BASKET = "REMOVE-FRUITS-IN-BASKET";
const REMOVE_ALL_CARD = "REMOVE-ALL-CARD";
const SET_FRUITS_PRICE = "SET-FRUITS-PRICE";
const REMOVE_ONE_ITEM_FRUIT_IN_BASKET = "REMOVE-ONE-ITEM-FRUIT-IN-BASKET";

let initialState = {
  fruitsInBasket: JSON.parse(localStorage.getItem("fruitsInBasket") || "[]"),
  price: JSON.parse(localStorage.getItem("priceInBasket") || "[]"),
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRUITS_IN_BASKET:
      localStorage.setItem(
        "fruitsInBasket",
        JSON.stringify(Array.from([
          ...state.fruitsInBasket,
          Number(action.event),
        ]))
      );
      return {
        ...state,
        fruitsInBasket: Array.from([
          ...state.fruitsInBasket,
          Number(action.event),
        ]),
      };

    case REMOVE_FRUITS_IN_BASKET:
      let newFruitsInBasket = state.fruitsInBasket.filter(
        (item) => item !== Number(action.event)
      );
      let removeProductIndex = state.price.findIndex(
        (item) => item.id === action.event
      );
      state.price.splice(removeProductIndex, 1);
      localStorage.setItem("fruitsInBasket", JSON.stringify(newFruitsInBasket));
      localStorage.setItem("priceInBasket", JSON.stringify(state.price));

      return {
        ...state,
        fruitsInBasket: [...newFruitsInBasket],
        price: [...state.price],
      };
    case REMOVE_ONE_ITEM_FRUIT_IN_BASKET:
      if (state.fruitsInBasket.indexOf(Number(action.event)) > -1) {
        state.fruitsInBasket.splice(
          state.fruitsInBasket.indexOf(Number(action.event)),
          1
        );
      }
      localStorage.setItem(
        "fruitsInBasket",
        JSON.stringify(state.fruitsInBasket)
      );
      return {
        ...state,
        fruitsInBasket: [...state.fruitsInBasket],
      };

    case REMOVE_ALL_CARD:
      return { ...state, fruitsInBasket: [], price: [] };

    case SET_FRUITS_PRICE:
      let priceForBasket = {};
      priceForBasket.id = action.item;
      priceForBasket.sum = action.sum;
      let productIndex = state.price.findIndex(
        (item) => item.id === action.item
      );
      if (productIndex === -1) {
        state.price.push(priceForBasket);
      } else {
        state.price.splice(productIndex, 1, priceForBasket);
      }
      localStorage.setItem("priceInBasket", JSON.stringify(state.price));
      return {
        ...state,
        price: [...state.price],
      };
    default:
      return state;
  }
};

export let addFruitsInBasket = (event) => ({
  type: ADD_FRUITS_IN_BASKET,
  event,
});
export let removeFruitsInBasket = (event) => ({
  type: REMOVE_FRUITS_IN_BASKET,
  event,
});

export let removeOneItemFruitInBasket = (event) => ({
  type: REMOVE_ONE_ITEM_FRUIT_IN_BASKET,
  event,
});

export let removeAllCard = () => ({
  type: REMOVE_ALL_CARD,
});

export let setFruitsPrice = (item, sum) => ({
  type: SET_FRUITS_PRICE,
  item,
  sum,
});

export const addInBasket = (event) => {
  return (dispatch) => {
    dispatch(addFruitsInBasket(event));
  };
};

export const removeInBasket = (event) => {
  return (dispatch) => {
    dispatch(removeFruitsInBasket(event));
  };
};

export const removeOneItemInBasket = (event) => {
  return (dispatch) => {
    dispatch(removeOneItemFruitInBasket(event));
  };
};

export const clearAllCard = () => {
  return (dispatch) => {
    dispatch(removeAllCard());
  };
};

export const setFruitsCalcSum = (item, sum) => {
  return (dispatch) => {
    dispatch(setFruitsPrice(item, sum));
  };
};
