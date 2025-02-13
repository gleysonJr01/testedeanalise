import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  imageFloating: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    position: 'absolute',
    top: -30, 
    alignSelf: 'center', 
  
  },
  text:{ fontSize: 18,
    top:15,
    color: '#777',
  },
  
  containerImage: {
    position: 'relative', 
  },
  iconButton: {
    position: 'absolute',
    top: 10, 
    left: 10, 
    backgroundColor: '#000'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth:1,
    marginHorizontal: 5,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productsContainer:{
    padding:16,
  },
  divider: {
  
      height: 1,  
      backgroundColor: '#000',  
      width: '100%', 
      top:15,
      marginVertical: 8, 
    },
    
  image: {
    
      width: '100%',
      height: 180,
  },
  
  informationContainer: {
    width: 300,
    padding:25,
    alignItems: 'flex-start',
    marginLeft:35,
    borderWidth:1,
    backgroundColor:'#fff',
    marginTop:-40,
    borderRadius: 15
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    top:20
  },
  category: {
    fontSize: 18,
    top:15,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tentando: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  sectionProduts: {
    width: '33%', 
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
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
