import { StyleSheet } from 'react-native';

export const home = StyleSheet.create({
  container: {
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export const button = StyleSheet.create({
  primary: {
    backgroundColor: '#3e83f7',
  },
});

export const editPerson = StyleSheet.create({
  view: {
    paddingTop: 140,
    paddingHorizontal: 40,
  },
  header: {
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export const productList = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: 100,
  },
});

export const productCard = StyleSheet.create({
  background: {
    flex: 1,
    width: 380,
    marginBottom: 40,
    maxHeight: 160,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  fieldName: {
    fontSize: 20,
    fontWeight: '600',
  },
  fieldValue: {
    fontSize: 18,
    fontWeight: '400',
  },
  actionsContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionSpacing: {
    marginRight: 16,
  },
});

export const input = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 12,
  },
  text: {
    height: 40,
    marginBottom: 28,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export const modal = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
});
