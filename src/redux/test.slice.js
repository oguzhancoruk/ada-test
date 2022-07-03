import { createSlice } from "@reduxjs/toolkit";


import veri from "../Data/veri.json"
const data = veri
export const testSlice = createSlice({
    name: "test",
    initialState: {
        item: data,
        admin: false,
        count: 1,
        cevap: "none",
        userShow: true,
        newItem: [{
            "id": 1,
            "soru": "Aleyna'nın doğum tarihi nedir?",
            "resim": data.ada.resim,
            "resim2": "resim",
            "cevap": "A"


        }],
        puan: 0,
        disabled: false,
        answerCountA: false,
        answerCountB: false,
        resultShow: false,
        userName: "",
        text: "",
        adminShow: false

    },
    reducers: {
        changeCount: (state, action) => {
            state.count = action.payload
        },
        changeDisabled: (state, action) => {
            state.disabled = action.payload
        },
        changeItem: (state, action) => {
            state.newItem = action.payload
        },
        changeCevap: (state, action) => {
            state.cevap = action.payload
        },
        changePuan: (state, action) => {
            state.puan = action.payload
        },
        chanceAnswerCountA: (state, action) => {
            state.answerCountA = action.payload
        },
        chanceAnswerCountB: (state, action) => {
            state.answerCountB = action.payload
        },
        chanceResultShow: (state, action) => {
            state.resultShow = action.payload
        },
        user_post: (state, action) => {
            state.userShow = action.payload
        },
        getUserName: (state, action) => {
            state.userName = action.payload
        },
        getText: (state, action) => {
            state.text = action.payload
        },
        getAdmin: (state, action) => {
            state.admin = action.payload
        },
        getadminShow: (state, action) => {
            state.adminShow = action.payload
        }
    }
})
export const { changeCount, getAdmin, getUserName, changeDisabled, changeItem, changeCevap, changePuan, getText, chanceAnswerCountA, chanceAnswerCountB, chanceResultShow, user_post, getadminShow } = testSlice.actions
export default testSlice.reducer