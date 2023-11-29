function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return new Promise((resolve, reject) => {
        if (promise) {
          resolve({
            statuc: 200,
            body: 'success',
          });
        } else {
          reject(new Error());
        }
      });
    });
}
export default handleResponseFromAPI;
