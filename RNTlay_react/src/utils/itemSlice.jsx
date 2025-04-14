import { createSlice } from "@reduxjs/toolkit";


const itemSlice= createSlice({
  name:"item",
  initialState:{
    items:null,
    filteredCart: [],
  },
  reducers:{
    addItem: (state, action)=>{
    //   console.log(action.payload)
      state.items = (action.payload);
    },
    removeItem: (state, action)=>{
      state.items.length = 0;
      state.items = action.payload;
    },
    updateItem: (state, action) => {
      state.items = null;
      state.items = action.payload;
    }
  }
})

export const {addItem, removeItem, updateItem}=itemSlice.actions;

export default itemSlice.reducer;