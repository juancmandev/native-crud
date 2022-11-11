import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { productCard, modal } from '../styles';

const UserCard = ({ data }) => {
  const navigation = useNavigation();

  const { id, firstName, lastName, job } = data;

  const [deleteModal, setDeleteModal] = useState(false);

  const goToPerson = () => {
    navigation.push('Person Edit', {
      id: id,
      firstName: firstName,
      lastName: lastName,
      job: job,
    });
  };

  const deletePerson = async () => {
    const deleteRef = await deleteDoc(doc(db, 'persons', id));

    setDeleteModal(false);
    navigation.push('PersonsCRUDList', {
      edited: true,
    });
  };

  const DeleteModal = () => {
    return (
      <View style={modal.container}>
        <Modal
          onBackdropPress={() => setDeleteModal(false)}
          onSwipeComplete={() => setDeleteModal(false)}
          swipeDirection='up'
          isVisible={deleteModal}>
          <View style={modal.modalBackground}>
            <Text style={modal.title}>
              Delete {firstName} {lastName}?
            </Text>
            <Button
              onPress={deletePerson}
              style={modal.button}
              title='Yes, delete'
            />
            <Button title='No, cancel' />
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={productCard.background}>
      <View style={productCard.fieldContainer}>
        <Text style={productCard.fieldName}>First Name: </Text>
        <Text style={productCard.fieldValue}>{firstName}</Text>
      </View>
      <View style={productCard.fieldContainer}>
        <Text style={productCard.fieldName}>Last Name: </Text>
        <Text style={productCard.fieldValue}>{lastName}</Text>
      </View>
      <View style={productCard.fieldContainer}>
        <Text style={productCard.fieldName}>Job: </Text>
        <Text style={productCard.fieldValue}>{job}</Text>
      </View>
      <View style={productCard.actionsContainer}>
        <MaterialIcons
          onPress={() => setDeleteModal(true)}
          style={productCard.actionSpacing}
          name='delete'
          size={24}
          color='black'
        />
        <Entypo onPress={goToPerson} name='edit' size={24} color='black' />
      </View>
      <DeleteModal />
    </View>
  );
};

export default UserCard;
