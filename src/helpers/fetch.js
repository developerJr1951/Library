export const baseUrl =  (import.meta.env.DEV) ? 'http://localhost:8090':'http://brayan1951.sytes.net:81'

const fetchEnpoint = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`
    if (method === 'GET') {
        return  fetch(url)
    } else {
        return  fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                "origin": "brayan1951.sytes.net:81"
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        })
       
    }
   


    
}


export { fetchEnpoint }