import { fetch } from 'react-native';


export default getResponseBackend = (data) =>{

 const configForRequest = data.body === null ? {    
    method: data.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  } : {    
    method: data.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data.body
    
      //JSON.stringify({
      //  firstParam: 'yourValue',
      // secondParam: 'yourOtherValue',
      //}),
  };

  fetch(data.url, configForRequest).then(result =>{
        return result
        
      }).catch(err =>{throw err});
}