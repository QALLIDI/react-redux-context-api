import  axios  from 'axios'
import { ENV_API } from '../config/Config'
import { GET , POST, PUT, DELETE, PATCH } from '../config/Methods'


let methods = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete: 'delete',
    patch: 'patch', 
}

const url = ENV_API

export function api(call, body, id, method) {
    let response
    let error 
    if(methods[method] === GET) {
        if(id === null) {
            try {
             response = axios.get(url.concat(call))
            }catch(e) {
             error = e.response
            }
        }else {
            try {
                response = axios.get(url.concat(call).concat(id))
               }catch(e) {
                error = e.response
               }
        }  
    }
    if(methods[method] === POST) {
        try {
            response = axios.post(url.concat(call), {body})
           }catch(e) {
            error = e.response
           }
    }
    if(methods[method] === PUT) {
        // put traitement
    }
    if(methods[method] === DELETE) {
        // delete traitement
    }
    if(methods[method] === PATCH) {
        // patch traitement
    } 
    
    
    if(response) {
        return response
    }else {
        return error
    }
}