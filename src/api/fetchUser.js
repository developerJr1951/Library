import pocketbase from "pocketbase";
// import { fetchEnpoint } from "../helpers/fetch";
const client =  (import.meta.env.DEV) ? new pocketbase('http://localhost:8090'): new pocketbase('http://brayan1951.sytes.net:81')


// Creacion de usuarios
const CreateUser =async(data)=>{

    try {
        
        const users= await client.Users.create({ ...data})
        return users
    } catch (error) {
        console.log('error: ',error);
        return ;
    }
} 

// envio de correo de verificacion
const verifyUser=async(email)=>{
    try {
        const userVeridy=await client.Users.requestVerification(email)
        return userVeridy
    } catch (error) {
        console.log('error: ',error);
        return;
    }
}
// Conectar usuario

const loginUser=async(email,password)=>{

        
        // const data={email,password}
        // const resp =await  fetchEnpoint('api/users/auth-via-email',data,'POST')
        
        
        // const authData=await resp.json()


        
        const authData = await client.Users.authViaEmail(email, password);
        return authData
}


export {CreateUser,verifyUser,loginUser}