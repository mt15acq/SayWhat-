

export const getResponseBackend = (data) =>{
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

  return fetch(data.url, configForRequest)
    .then(response =>{
      if (response.status >= 400) {
        return false;
      } else if (response.status == 200) {
        return response.json();
      }
    }).catch(err =>{  throw err});
}