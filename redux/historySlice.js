import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({

    name: "history",
    initialState: {
        paths: [],
        lastPath:'/',
    },
    reducers:{
        addPath: (state, action)=>{
            const {paths} = state;
            const lastPath = paths[paths.length - 1];
            const currentPath = action.payload.path;

            if(state.paths.length > 10){
                state.paths = [];
            }

            state.paths.push(currentPath);
            state.lastPath = state.paths[state.paths.length - 2] || '/';
            
        },
        lastPath: (state, action)=>{

            let {paths} = state;
            return paths[paths.length - 1]

        },
        resetHistory: (state)=>{
            state.paths = [];
        }
    }

});

export const { addPath, lastPath, resetHistory } = historySlice.actions;
export default historySlice.reducer;