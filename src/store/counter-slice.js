import { createSlice } from "@reduxjs/toolkit";

const counterInitial = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitial,
  reducers: {
    incremenet(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;