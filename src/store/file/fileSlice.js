import { createSlice } from '@reduxjs/toolkit';

export const fileSlice = createSlice({
    name: 'file',
    initialState: {
        files: [],
        isLoading: false
    },
    reducers: {
        startLoadingFiles: (state) => {
            state.isLoading = true;
        },
        setFiles: (state, action) => {
            state.isLoading = false;
            state.files = action.payload.files;
        }
    }
});

export const { startLoadingFiles, setFiles } = fileSlice.actions;