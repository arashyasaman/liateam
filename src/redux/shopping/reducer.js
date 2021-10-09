import * as actionTypes from "./types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "سرم ضدچروک صورت",
      price: 3000000,
      capacity: "50ml",
      new: false,
      image: "/assets/images/products/1.jpg",
    },
    {
      id: 2,
      title: "کرم ترمیم کننده",
      price: 200000,
      capacity: "40ml",
      new: true,
      image: "/assets/images/products/2.jpg",
    },
    {
      id: 3,
      title: "سرم ویتامین سی",
      price: 150000,
      capacity: "20ml",
      new: true,
      image: "/assets/images/products/3.jpg",
    },
    {
      id: 4,
      title: "محلول پاک کننده آرایش",
      price: 150000,
      capacity: "100ml",
      new: true,
      image: "/assets/images/products/4.jpg",
    },
    {
      id: 5,
      title: "ماسک موی آبکشی",
      price: 150000,
      capacity: "35ml",
      new: false,
      image: "/assets/images/products/5.jpg",
    },
    {
      id: 6,
      title: "شامپو نعناع",
      price: 150000,
      capacity: "350ml",
      new: true,
      image: "/assets/images/products/6.jpg",
    },
    {
      id: 7,
      title: "کرم دست و بدن انار",
      price: 150000,
      capacity: "10ml",
      new: false,
      image: "/assets/images/products/7.jpg",
    },
    {
      id: 8,
      title: "شامپو فلفل",
      price: 150000,
      capacity: "150ml",
      new: true,
      image: "/assets/images/products/8.jpg",
    },
  ],
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
