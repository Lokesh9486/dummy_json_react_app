import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Products:[]
}

const ProductSlice=createSlice({
    name:"ProductSlice",
    initialState,
    reducers:{
        searchProduct(state,{payload}){
            state.searchProduct=payload;
          }
     }
})

export const {searchProduct} = ProductSlice.actions;

export const getSearchProduct=(state)=>state.product.searchProduct;


export default ProductSlice.reducer;