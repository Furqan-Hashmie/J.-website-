import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  carts:[]
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
     add(state,action){
       const getindex = state.carts.findIndex((x)=>x.id === action.payload.id)
       console.log(action.payload)
       if(getindex>=0){
            state.carts[getindex].qty +=1 
       }
       else
       {
        const newentry={...action.payload , qty:1};
        state.carts=[...state.carts , newentry];
       }
     },
     removetocart(state ,action){
       const delitem = state.carts.filter((item)=>item.id !== action.payload)
       state.carts = delitem ;
     },
     remove(state,action){
       const removedata = state.carts.findIndex((x)=>x.id === action.payload.id)
       if(state.carts[removedata].qty>1){
        state.carts[removedata].qty -=1
       }
     },
     
    }
})
export const {add,remove,removetocart} = cartSlice.actions;
export default cartSlice.reducer;