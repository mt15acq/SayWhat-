import { getResponseBackend } from '../api';
import {resolveUrl} from '../config';


export default findUser = function(user) {
    const data = {
        url: resolveUrl(`findUser/${user.userName}&${user.password}`),
        method: "GET",
        body: null
    }   
    return getResponseBackend(data).then(result =>{
        return result
    })
}