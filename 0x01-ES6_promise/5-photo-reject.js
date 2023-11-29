export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (fileName) {
      resolve({
        fileName: `${fileName}`,
      });
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
