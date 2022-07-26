import { CreateUser, loginUser } from "../../../api/fetchUser"
import { checkeout, endLoggin, login, register, startLoggin } from "./User"




export const createUsuaio=(form)=>{
    // createUsuaio()
    return async(dispatch)=>{
        dispatch(startLoggin())


        try {
            const user=await CreateUser(form)
            const payload={
             id:user.id,
             email:user.email
             }
            dispatch(register(payload))
        } catch (error) {
            dispatch(endLoggin())
            
        }
     


    }



}




export const getUsuario=(email,password)=>{

    return async (dispatch)=>{

    dispatch(startLoggin())
    loginUser(email,password).then((data)=>{
        const {token,user}=data
        const payload={

            token,
            id:user.id,
            email:user.email
        }
        


        dispatch(login(payload))
    }).catch(()=>{

        dispatch(endLoggin())
    })

       


    }


}



export const startChecking=()=>{

    const authLocal=localStorage.getItem('pocketbase_auth')
    

    return async(dispatch)=>{
        const payload=JSON.parse( authLocal)
        console.log(payload);
        dispatch(checkeout(payload))


    }
}