import { getResponseBackend } from '../api';
import { resolveUrl } from '../config';

export default postUser = (newUser) => {
    const data = {
        url: resolveUrl(`createUser`),
        method: "POST",
        body: JSON.stringify({
            name: newUser.name,
            user_name: newUser.userName,
            password: newUser.password,
            email: newUser.email,
            access_token: newUser.token
        }),
    }

    return getResponseBackend(data).then(result => { return result} )
}