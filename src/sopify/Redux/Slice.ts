import {createSlice} from '@reduxjs/toolkit';
import {collections} from '../../Types/collection';
import {Products, product} from '../../Types/product';
import {Customer} from '../../Types/user';
import {Cart} from '../../Types/cart';
import {Checkout} from '../../Types/checkoutdata';
import {Menu} from '../../Types/Menu';
import {Data, Edge, Pages} from '../../Types/Pages';
import {updateCheckouts} from '../../Types/updateCheckout';
import {SearchProducts} from '../../Types/SerachProduct';
import {ProductDetails} from '../../Types/ProductDetail';
import {HomeData} from '../../Types/HomeType';

type initialStates = {
  collection: collections;
  isLoading: boolean;  
  products: Products;
  product: product;
  lineItems: null;
  cartItem: Cart;
  vid: null;
  checkoutId: string;
  userDetails: null;
  userToken: null;
  userRegDetails: null;
  userData: Customer;
  item: Products;
  deletCart: null;
  checkoutData: Checkout;
  checkout: null;
  menu: Menu;
  id: string;
  about: string;
  pages: Data;
  deleteAddress: null;
  updateAddress: null;
  updateCheckout: updateCheckouts;
  searchProduct: SearchProducts;
  productDetail: ProductDetails;
  homeData: HomeData;
};
const initialState: initialStates = {
  collection: [],
  isLoading: false,
  products: [] as any,
  product: {} as any,
  lineItems: null,
  cartItem: {} as any,
  vid: null,
  checkoutId: '',
  userDetails: null,
  userToken: null,
  userRegDetails: null,
  userData: {} as any,
  item: [],
  deletCart: null,
  checkoutData: {} as any,
  checkout: null,
  menu: {} as any,
  id: '',
  about: '',
  pages: {} as any,
  deleteAddress: null,
  updateAddress: null,
  updateCheckout: {} as any,
  searchProduct: {} as any,
  productDetail: {} as any,
  homeData: {} as any,
};

export const MySlice = createSlice({
  name: 'sopify',
  initialState,
  reducers: {
    getCollection: state => {
      state.isLoading = true;
    },
    getCollectionSuccess: (state, action) => {
      (state.isLoading = false), (state.collection = action.payload);
    },
    getCollectionFail: state => {
      state.isLoading = false;
    },
    fetchProductById: state => {
      state.isLoading = true;
    },
    fetchProductByIdSuccess: (state, action) => {
      (state.isLoading = false),
        ((state.products = action.payload), (state.id = action.id));
    },
    fetchProductByIdFaill: state => {
      state.isLoading = false;
    },
    fetchPorductOption: state => {
      state.isLoading = true;
    },
    fetchPorductOptionSuccess: (state, action) => {
      (state.isLoading = false), (state.product = action.payload);
    },
    fetchPorductOptionFail: (state, action) => {
      state.isLoading = false;
    },

    createCheckout: state => {
      state.isLoading = true;
    },
    createCheckoutSuccess: (state, action) => {
      state.isLoading = false;
      state.checkoutData = action.payload;
    },
    createCheckoutFaill: state => {
      state.isLoading = false;
    },
    addLineItem: state => {
      state.isLoading = true;
    },
    addLineItemSucess: (state, action) => {
      (state.isLoading = false), (state.lineItems = action.payload);
    },
    addLineItemFaill: state => {
      state.isLoading = false;
    },
    fetchAllProducts: state => {
      state.isLoading = true;
    },
    fetchAllProductsSuccess: (state, action) => {
      (state.isLoading = false),
        (state.products = action.payload),
        (state.checkoutId = action.checkId),
        (state.id = action.id);
    },
    fetchAllProductsFlaill: (state, action) => {
      state.isLoading = false;
    },
    createCheckoutcart: state => {
      state.isLoading = false;
    },
    login: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      (state.isLoading = false), (state.userToken = action.payload);
    },
    loginFail: state => {
      state.isLoading = false;
    },
    register: state => {
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      (state.isLoading = false), (state.userRegDetails = action.payload);
    },
    registerError: state => {
      state.isLoading = false;
    },
    userDatareq: state => {
      state.isLoading = true;
    },
    userDataSuccess: (state, action) => {
      (state.isLoading = false), (state.userData = action.payload);
    },
    userDataError: state => {
      state.isLoading = false;
    },
    createCart: state => {
      state.isLoading = true;
    },
    createCartSuccess: (state, action) => {
      (state.isLoading = false), (state.cartItem = action.payload);
    },
    createCartError: state => {
      state.isLoading = false;
    },
    getCartItem: state => {
      state.isLoading = true;
    },
    getCartItemSuccess: (state, action) => {
      (state.isLoading = false), (state.cartItem = action.payload);
    },
    getCartItemFaill: state => {
      state.isLoading = false;
    },
    fetchProduct: state => {
      state.isLoading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.item.push(action.payload), (state.isLoading = false);
    },
    fetchProductFaill: state => {
      state.isLoading = false;
    },
    cartItemRemove: state => {
      state.isLoading = true;
    },
    cartItemSuccess: (state, action) => {
      (state.isLoading = false), (state.cartItem = action.payload);
    },
    cartItemRemoveError: state => {
      state.isLoading = false;
    },
    updateCart: state => {
      state.isLoading = true;
    },
    updateCartSuccess: (state, action) => {
      (state.isLoading = false), (state.cartItem = action.payload);
    },
    updateCartFaill: state => {
      state.isLoading = false;
    },
    addAddressFaill: state => {
      state.isLoading = false;
    },
    addAddressSucess: (state, action) => {
      state.isLoading = false;
      state.checkout = action.payload;
    },
    addAdress: state => {
      state.isLoading = true;
    },
    fetchMenu: state => {
      state.isLoading = true;
    },
    fetchMenuSuccess: (state, action) => {
      state.isLoading = false;
      state.menu = action.payload;
    },
    fetchMenuError: state => {
      state.isLoading = false;
    },
    pageDeatails: state => {
      state.isLoading = true;
    },
    pageDeatailsSuccess: (state, action) => {
      (state.isLoading = false), (state.about = action.payload);
    },
    pageDeatailsFaill: state => {
      state.isLoading = false;
    },
    fetchPages: state => {
      state.isLoading = true;
    },
    fetchPagesSuccess: (state, action) => {
      (state.isLoading = false), (state.pages = action.payload);
    },
    fetchPagesError: state => {
      state.isLoading = false;
    },
    deleteAddress: state => {
      state.isLoading = true;
    },
    deleteAddressSuccess: (state, action) => {
      (state.isLoading = true), (state.deleteAddress = action.payload);
    },
    deleteAddressError: state => {
      state.isLoading = false;
    },
    updateAddress: state => {
      state.isLoading = true;
    },
    updateAddressSuccess: (state, action) => {
      (state.isLoading = false), (state.updateAddress = action.payload);
    },
    updateAddressFail: state => {
      state.isLoading = false;
    },
    userLogout: state => {
      state.userData = {} as Customer;
    },
    setDefaulAddress: state => {
      state.isLoading = true;
    },
    setDefaulAddressSuccess: state => {
      state.isLoading = true;
    },
    setDefaulAddressError: state => {
      state.isLoading = false;
    },
    updateProfile: state => {
      state.isLoading = true;
    },
    updateProfileSuccess: state => {
      state.isLoading = false;
    },
    updateProfileFaill: state => {
      state.isLoading = false;
    },
    resetPassword: state => {
      state.isLoading = true;
    },
    resetPasswordSuccess: state => {
      state.isLoading = false;
    },
    resetPasswordError: state => {
      state.isLoading = false;
    },
    updateCheckout: state => {
      state.isLoading = true;
    },
    updateCheckoutSuccess: (state, action) => {
      (state.isLoading = false), (state.updateCheckout = action.payload);
    },
    updateCheckoutError: state => {
      state.isLoading = false;
    },
    searchProductSuccess: (state, action) => {
      state.searchProduct = action.payload;
    },
    ProductDetails: state => {
      state.isLoading = true;
    },
    ProductDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    },
    ProductDetailsError: state => {
      state.isLoading = false;
    },
    fetchHome: state => {
      state.isLoading = true;
    },
    fetchHomeSuccess: (state, action) => {
      (state.isLoading = false), (state.homeData = action.payload);
    },
    fetchHomeFail: state => {
      state.isLoading = false;
    },
    updateCheckoutEMail: state => {
      state.isLoading = true;
    },
    updateCheckoutEMailSuccess: state => {
      state.isLoading = false;
    },
    updateCheckoutEMailError: state => {
      state.isLoading = false;
    },
  },
});
export const {getCollection, getCollectionSuccess, getCollectionFail} =
  MySlice.actions;
export default MySlice.reducer;
