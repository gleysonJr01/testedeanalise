import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  
  informationContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 18,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tentando: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  sectionProduts: {
    width: '45%', 
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 8,
    elevation: 3,
  },
  productImages: {
    width: '100%',
    height: 100, 
    borderRadius: 8,
    marginBottom: 8,
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D32F2F', 
    padding: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'black',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
