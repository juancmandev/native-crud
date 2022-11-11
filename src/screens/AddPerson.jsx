import { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { editPerson, input } from '../styles';

const AddPerson = (props) => {
  const navigationRoute = useNavigation();
  const {
    navigation,
    route: { params },
  } = props;

  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorJob, setErrorJob] = useState('');

  const initialValues = () => ({
    firstName: '',
    lastName: '',
    job: '',
  });

  const validationSchema = () => ({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    job: Yup.string().required('Job required'),
  });

  const addPerson = async (data) => {
    const { firstName, lastName, job } = data;

    const newPerson = {
      firstName: firstName,
      lastName: lastName,
      job: job,
    };

    const newPersonRef = await addDoc(collection(db, 'persons'), newPerson);

    if (newPersonRef) {
      navigationRoute.push('PersonsCRUDList', {
        edited: true,
      });
    }
  };

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
        addPerson({ firstName, lastName, job });
      } else {
      }
    },
  });

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={editPerson.header}>
          <Text style={editPerson.headerText}>Adding person</Text>
        </View>
      ),
    });
  }, [navigation, params]);

  return (
    <View style={editPerson.view}>
      <Text style={input.label}>First name</Text>
      <TextInput
        editable
        style={input.text}
        placeholder='John'
        value={formik.values.firstName}
        onChangeText={(text) => formik.setFieldValue('firstName', text)}
      />
      <Text style={input.label}>Last name</Text>
      <TextInput
        style={input.text}
        placeholder='Smith'
        value={formik.values.lastName}
        onChangeText={(text) => formik.setFieldValue('lastName', text)}
      />
      <Text style={input.label}>Job</Text>
      <TextInput
        style={input.text}
        placeholder='Frontend Developer'
        value={formik.values.job}
        onChangeText={(text) => formik.setFieldValue('job', text)}
      />
      <Button title='Add' onPress={formik.handleSubmit} />
      <Button title='Cancel' onPress={navigation.goBack} />
    </View>
  );
};

export default AddPerson;
