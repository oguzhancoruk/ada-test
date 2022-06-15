import { createSlice } from "@reduxjs/toolkit";


import veri from "../Data/veri.json"
const data=veri
export const testSlice=createSlice({
    name:"test",
    initialState:{
        item:data,
        count:1,
        cevap:"none",
        newItem: [{
            "id": 1,
            "soru": "Aleyna'nın doğum tarihi nedir?",
            "resim": data.ada.resim,
            "resim2": "resim",
            "cevap": "A"

        }],
        puan:0,
        disabled:false,
        answerCountA:false,
        answerCountB: false, 
        resultShow:false,   
    },
    reducers:{
        changeCount:(state,action)=>{
            state.count=action.payload
        },
        changeDisabled: (state, action) => {
            state.disabled = action.payload
        },
        changeItem:(state,action)=>{
            state.newItem=action.payload
        },
        changeCevap:(state,action)=>{
            state.cevap=action.payload
        },
        changePuan:(state,action)=>{
            state.puan=action.payload
        },
        chanceAnswerCountA:(state,action)=>{
            state.answerCountA=action.payload
        },
        chanceAnswerCountB: (state, action) => {
            state.answerCountB = action.payload
        },
        chanceResultShow:(state,action)=>{
            state.resultShow=action.payload
        }
    }
})
export const {changeCount,changeDisabled,changeItem,changeCevap,changePuan,chanceAnswerCountA,chanceAnswerCountB,chanceResultShow}=testSlice.actions
export default testSlice.reducer