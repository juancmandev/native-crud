import { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import getAllPersons from '../api/getAllPersons';
import UserCard from '../components/UserCard';
import { home, productList } from '../styles';
import { useNavigation } from '@react-navigation/native';

const PersonsCRUDList = ({ navigation }) => {
  const navigationRoute = useNavigation();
  const [persons, setPersons] = useState(undefined);
  useEffect(() => {
    (async () => {
      const response = await getAllPersons();

      setPersons(response);
    })();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {},
    });
  }, [navigation]);

  return (
    <View style={home.container}>
      <>
        {!persons ? null : (
          <FlatList
            data={persons}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <UserCard data={item} />}
            contentContainerStyle={productList.flatListContentContainer}
          />
        )}
      </>
      <Button
        title='Add person'
        onPress={() => navigationRoute.push('Add Person')}
      />
    </View>
  );
};

export default PersonsCRUDList;
