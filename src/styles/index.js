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
    maxHeight: 520,
    borderRadius: 16,
  },
  imageContainer: {
    maxHeight: 340,
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
  },
  image: {
    width: 300,
    height: 340,
    borderRadius: 16,
  },
  footer: {
    flex: 1,
    maxHeight: 140,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  description: {
    flex: 1,
    minWidth: 140,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    marginRight: 8,
  },
  actions: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: '#F1F1F1',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 4,
    marginBottom: 8,
  },
});
