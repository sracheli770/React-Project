import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comments } from "../../@types/types";
import { comments } from "../../services/comments";


const initialState = {
    comments: comments,
};


export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<Comments>) => {
            state.comments.push(action.payload)
        },

        editComment: (state, action: PayloadAction<Comments>) => {
            const commentToEdit = action.payload;
            const index = state.comments.findIndex((c) => c.id === commentToEdit.id)
            state.comments[index] = commentToEdit
        },

        deleteComment: (state, action: PayloadAction<string>) => {
            const index = state.comments.findIndex(c => c.id === action.payload)
            state.comments.splice(index, 1)
        }
    }
})

export const { addComment, editComment, deleteComment } = commentsSlice.actions
export default commentsSlice.reducer