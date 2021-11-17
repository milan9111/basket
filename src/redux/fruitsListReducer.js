const GET_FRUITS = "GET-FRUITS";

let initialState = {
  fruits: [
    {
      id: 1,
      title: "Banana",
      price: 10,
      image:
        "https://f.varus.ua/rest/file/bySkuAndImageType/VARUS/127622/glovo",
      description:
        "Bananas are recommended for intensive mental and physical work.",
    },
    {
      id: 2,
      title: "Apple",
      price: 8,
      image:
        "https://img.fozzyshop.com.ua/211091-thickbox_default/yabloko-slava-pobeditelyam.jpg",
      description:
        "Apples contain P-active substances and ascorbic acid, which increases and strengthens the immune system.",
    },
    {
      id: 3,
      title: "Papaya",
      price: 10,
      image:
        "https://img2.zakaz.ua/fruit.1596125541.ad72436478c_2020-07-31_Svetlana/fruit.1596125541.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
      description:
        "Ripe fruits are an excellent, low-calorie, easily digestible food that is especially appreciated by weight watchers.",
    },
  ],
};

export const fruitsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRUITS:
      return { ...state, fruits: action.data };
    default:
      return state;
  }
};

export let getFruits = (data) => ({ type: GET_FRUITS, data });

export const requestFruits = (data) => {
  return (dispatch) => {
    // thunk created for share in API REST
    dispatch(getFruits(data));
  };
};
