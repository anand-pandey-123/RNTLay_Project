import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import itemReducer from "./itemSlice";



const appStore= configureStore({
  reducer: {
   cart: cartReducer,
   user: userReducer,
   items: itemReducer,
  }
});

export default appStore;