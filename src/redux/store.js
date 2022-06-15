import { configureStore } from "@reduxjs/toolkit";
import testSlice  from "./test.slice";


export const store=configureStore({
   reducer:{
        test: testSlice
   }
})