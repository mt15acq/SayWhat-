export const resolveUrl = path => {
    let URL = undefined;
    if (__DEV__) {
      URL = `http://localhost:8000/${path}`;
    } else {
      URL = `http://localhost:8000/${path}`;
    }
    return URL;
  };
  