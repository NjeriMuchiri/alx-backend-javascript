function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'Success',
      }).then(() => { console.log('Got a response from the API'); });
    } else {
      reject(new Error(''));
    }
  });
}
export default handleResponseFromAPI;
