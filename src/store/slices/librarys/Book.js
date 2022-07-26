import { createSlice } from '@reduxjs/toolkit'
const newBook = {
    id:'',
    name: '',
    portada:'',
    usuario:''
}
const initialState = {
 newBook,
 books:[]
}
export const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        added: (state,{payload}) => {
            // const {id,name,portada,usuario}=payload
            state.newBook={...payload}
        },
        setBooks:(state,{payload})=>{
            state.books=payload.books
        }

    },
})
// Action creators are generated for each case reducer function
export const { added,setBooks} = BookSlice.actions