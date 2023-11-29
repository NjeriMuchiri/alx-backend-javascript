function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return new Promise((resolve, reject) => {
        if (promise) {
          resolve({
            status: 200,
            body: 'success',
          });
        } else {
          reject();
        }
      });
    });
}
export default handleResponseFromAPI;
