import {createSlice} from '@reduxjs/toolkit'

export const counterSlice=createSlice({
name:'counter',
initialState:{
    value:0
},
reducers:{
    artir:(state)=>{
        state.value+=1;
    },
    azalt:(state)=>{
        state.value-=1;
    },
    degerliartis:(state,action)=>{
        state.value+=Number(action.payload);
    },
},
});

export const {artir,azalt,degerliartis}= counterSlice.actions;
export default counterSlice.reducer;