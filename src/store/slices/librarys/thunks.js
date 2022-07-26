import pocketbase from "pocketbase";
import { added, setBooks } from './Book';


const client =  (import.meta.env.DEV) ? new pocketbase('http://localhost:8090'):new pocketbase('http://brayan1951.sytes.net:81')
// const client =  new pocketbase('http://brayan1951.sytes.net:81')

export const UploadBook=(data)=>{

return async(dispatch)=>{

    
        let formData = new FormData();
        
        formData.append('usuario',data.id)
        formData.append('name',data.name)
        formData.append('portada',data.image)
        
        const record = await client.Records.create("libros", formData);
        const {id,name,portada,usuario}=record
        dispatch(added({id,name,portada,usuario}))
        
}
}


export const getBooks=(id)=>{

        return async(dispatch)=>{
                // await client.Records.baseCrudPath

                const bookList = await client.Records.getList("libros",undefined,undefined,{
                        filter: `usuario = '${id}' `,
                    });
                    const {items}=bookList
                    dispatch(setBooks({books:items}))


        }


}



