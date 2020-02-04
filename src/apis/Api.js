import { ENV_API } from '../config/Config'
import  axios  from 'axios'

let methods = {
    'get': 'get',
    'post': 'post',
    'put': 'put',
    'delete': 'delete',
    'patch': 'patch', 
}

const url = ENV_API;    

export function api(call, body, id, method) {
    if(methods[method] === methods['get']) {
        if(id === null) {
            axios.get(url.concat(call))
            .then(response => {{ response }})
            .catch(error => {{ error }})
        }else {
            axios.get(url.concat(call).concat(id))
            .then(response => {{ response }})
            .catch(error => {{ error }})
        }  
    }
    if(methods[method] === methods['post']) {
        // post traitement
        axios.post(url.concat(call), {body})
        .then(response => {{ response }})
        .catch(error => {{ error }})
    }
    if(methods[method] === methods['put']) {
        // put traitement
    }
    if(methods[method] === methods['delete']) {
        // delete traitement
    }
    if(methods[method] === methods['patch']) {
        // patch traitement
    }    
} 