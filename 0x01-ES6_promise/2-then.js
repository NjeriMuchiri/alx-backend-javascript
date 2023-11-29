function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return new Promise((resolve) => {
        if (promise) {
          resolve({
            status: 200,
            body: 'success',
          });
        } else {
          console.error();
        }
      });
    });
}
export default handleResponseFromAPI;
