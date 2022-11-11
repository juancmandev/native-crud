import { useState } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

  const DeleteModal = () => {
    return (
      <View style={modal.container}>
        <Modal
          onBackdropPress={() => setDeleteModal(false)}
          onSwipeComplete={() => setDeleteModal(false)}
          swipeDirection='up'
          isVisible={deleteModal}>
          <View style={modal.modalBackground}>
            <Text>Delete</Text>
            <Text>{id}</Text>
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
