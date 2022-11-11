import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { input, editPerson } from '../styles';

const PersonEdit = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const { id, firstName, lastName, job } = params;

  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorJob, setErrorJob] = useState('');

  const editPersonData = async (props) => {
    const { firstName, lastName, job } = props;
    const personRef = doc(db, 'persons', id);

    await updateDoc(personRef, {
      firstName: firstName,
      lastName: lastName,
      job: job,
    });

    navigation.push('PersonsCRUDList', {
      edited: true,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={editPerson.header}>
          <Text style={editPerson.headerText}>Editing person</Text>
        </View>
      ),
    });
  }, [navigation, params]);

  const initialValues = () => ({
    firstName: firstName,
    lastName: lastName,
    job: job,
  });

  const validationSchema = () => ({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    job: Yup.string().required('Job required'),
  });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      const { firstName, lastName, job } = formValue;

      setErrorFirstName('');
      setErrorLastName('');
      setErrorJob('');

      if (firstName === '') {
        setErrorFirstName('First name required');
      }

      if (lastName === '') {
        setErrorLastName('Last name required');
      }

      if (job === '') {
        setErrorJob('Job required');
      }

      if (firstName !== '' && lastName !== '' && job !== '') {
        editPersonData({ firstName, lastName, job });
      } else {
      }
    },
  });

  return (
    <View style={editPerson.view}>
      <TextInput
        editable
        style={input.text}
        placeholder='First name'
        value={formik.values.firstName}
        onChangeText={(text) => formik.setFieldValue('firstName', text)}
      />

      <TextInput
        style={input.text}
        placeholder='Last name'
        value={formik.values.lastName}
        onChangeText={(text) => formik.setFieldValue('lastName', text)}
      />
      <TextInput
        style={input.text}
        placeholder='Job'
        value={formik.values.job}
        onChangeText={(text) => formik.setFieldValue('job', text)}
      />
      <Button title='Edit' onPress={formik.handleSubmit} />
      <Button title='Cancel' onPress={navigation.goBack} />
    </View>
  );
};

export default PersonEdit;
