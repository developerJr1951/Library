import { createSlice } from '@reduxjs/toolkit'


const usuario={   
    token:'',
    id:'',
    email:'',
    name:'',
}

const initialState = {
    isLoading:false,
    isAutenticate:false,
    usuario
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        startLoggin:(state,/*action*/) => {
            state.isLoading=true
        },
        endLoggin:(state,/*action*/) => {
            state.isLoading=false
        },
        login: (state,{payload}) => {
            state.usuario={...payload}
            state.isAutenticate =true
            state.isLoading=false
            
        },

        register:(state,{payload})=>{
        state.usuario={...state.usuario,...payload}
        state.isLoading=false
        },

        logout: (state,/*action*/) => {
            localStorage.clear()
            state.isAutenticate=false
            state.isLoading=false
            state.usuario={ token:'',
            id:'',
            email:'',}
        },
        checkeout:(state,{payload})=>{

            if (payload) {
                
                state.usuario={...payload}
                state.usuario={...state.usuario,...payload.model}
                state.isAutenticate=true
            }
            
        }
        
    },
})
// Action creators are generated for each case reducer function
export const { login,logout,startLoggin,endLoggin,register,checkeout} = userSlice.actions