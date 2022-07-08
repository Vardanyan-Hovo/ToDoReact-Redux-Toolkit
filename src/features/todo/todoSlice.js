import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoPromisAPI } from './todoPromisAPI';

const initialState = {
  value : [
    {
      id : 1,
      title : "js",
      isComplete : false
    },
    {
      id : 2,
      title : "React Redux Toolkit",
      isComplete : false
    },
    {
      id : 3,
      title : "Go to work",
      isComplete : false
    }
  ],
  status : 'idle',
};

export const getAllToDoAsync = createAsyncThunk(
  'TodoforFetch',
  async (amount) => {
    const response = await TodoPromisAPI(amount);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      if (action.payload)
      state.value.push({
        id : Math.random(),
        title : action.payload,
        isComplete : false
      }) ;
    },
    deletetodoelement: (state, action) => {
     state.value = state.value.filter((e)=> e.id !== action.payload.id) 
    },
    isCompletecheng: (state, action) => {
     state.value.find((e)=>e.id === action.payload.id).isComplete = !action.payload.isComplete;
    },
    setLocalStorage : (state)=>{
     state.value.filter((elementtodo)=>elementtodo.isComplete)
      .forEach((todoComplete)=>{
        localStorage.setItem(todoComplete.id, JSON.stringify(todoComplete))
      });
      state.value = state.value.filter((elementtodo)=>!elementtodo.isComplete)
    }
  },

  //Async & createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(getAllToDoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllToDoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;//when ToDo initial state is fetch
      });
  },
});

export const { addtodo, deletetodoelement, isCompletecheng, setLocalStorage } = todoSlice.actions;

export const lengthComplete = function(state){
  return state.todo.value.filter((e)=>e.isComplete === true).length;
}
export const lengthAlltodo = (state,action)=>state.todo.value.length;

export const selecttodoall = (state) => state.todo.value;

export const selecttodoany = function* (state){
  for(const any of state.todo.value){
    yield any;
  }
}



export default todoSlice.reducer;