import { StyleSheet } from 'react-native';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export const productCard = StyleSheet.create({
  card: {
    flex: 1,
    padding: 8,
    minWidth: 300,
    maxHeight: 220,
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
  },
  image: {
    flex: 1,
    padding: 4,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
  },
  footer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  description: {
    flex: 1,
    minWidth: 100,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    marginRight: 8,
  },
  actions: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
  },
});
