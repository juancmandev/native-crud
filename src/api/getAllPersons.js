import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const getAllPersons = async () => {
  const personsArray = [];
  const personsRef = collection(db, 'persons');
  const personsSnap = await getDocs(personsRef);

  personsSnap.forEach((item) => {
    const personData = {
      id: item.id,
      firstName: item.data().firstName,
      lastName: item.data().lastName,
      job: item.data().job,
    };

    personsArray.push(personData);
  });

  return personsArray;
};

export default getAllPersons;
