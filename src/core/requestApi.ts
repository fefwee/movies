
const getRequest = (url: any): Promise<any> => {
  const key = process.env.REACT_APP_X_API_KEY;
  const option: any = {
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': key
    }
  };
  return fetch(url, option);
};

export { getRequest };


