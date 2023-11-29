import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  Promise.all([photo, user])
    .then(([responseFromUser]) => {
      const { firstName, lastName } = responseFromUser.body;
      console.log(`Body: ${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline', error);
    });
}
export default handleProfileSignup;
