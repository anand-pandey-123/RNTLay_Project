import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
  name:"cart",
  initialState:{
    items:[],
    filteredCart: [],
  },
  reducers:{
    addItem: (state, action)=>{
      console.log(action.payload)
      state.items.push(action.payload);
    },
    removeItem: (state, action)=>{
      state.items.length = 0;
      state.items = action.payload;
    },
    clearCart: (state)=>{
      state.items.length=0;
    },
    updateCart: (state, action) => {
      state.items = [];
      state.items = action.payload;
    }
  }
})

export const {addItem, removeItem, clearCart, updateCart}=cartSlice.actions;

export default cartSlice.reducer;