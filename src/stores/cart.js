import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    items:[]
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart(state,action){
            const {productId,quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item=>item.productId === productId)
            if(indexProductId>=0){
                state.items[indexProductId].quantity += quantity;
            }else{
                state.items.push({productId,quantity})
            }
            state.items.push({productId ,quantity})
        }
    }
})
export const {addtocart} = cartSlice.actions;
export default cartSlice.reducer;