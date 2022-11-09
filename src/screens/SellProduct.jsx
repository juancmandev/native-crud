import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { home, inputs } from '../styles';

const SellProduct = () => {
  const [nameError, setNameError] = useState('');

  const initialValues = () => ({ name: '', price: '', description: '' });

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      setNameError('');
      const { name, price, description } = formValue;

      if (name === '') {
        setNameError('Product name required');
      }
    },
  });

  return (
    <View style={home.container}>
      <Text>Hola</Text>
      {nameError !== '' ? <Text>Required</Text> : null}
      <TextInput
        style={inputs.text}
        placeholder='Amazing product!'
        autoCapitalize='none'
        value={formik.values.name}
        onChangeText={(text) => formik.setFieldValue('name', text)}
      />
      <TextInput
        keyboardType='numeric'
        style={inputs.text}
        placeholder='9.99'
        autoCapitalize='none'
        value={formik.values.price}
        onChangeText={(text) => formik.setFieldValue('price', text)}
      />
      <TextInput
        style={inputs.text}
        placeholder='This product gives super powers'
        autoCapitalize='none'
        value={formik.values.description}
        onChangeText={(text) => formik.setFieldValue('description', text)}
      />
      <Button title='Create' onPress={formik.handleSubmit} />
    </View>
  );
};

export default SellProduct;
