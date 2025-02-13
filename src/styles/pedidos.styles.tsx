import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  empty_container: {
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  
  },
  title:{padding: 40, 
    marginLeft: 95,
    fontSize:16,
    fontWeight:'bold'

  },
  scrollContent:{
    
   
      padding: 20,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%'
    },
    itemContainer: {
      flexDirection: 'row',         
      alignItems: 'flex-start',       
      marginBottom: 15,             
      padding: 10,
      backgroundColor: "#f9f9f9",   
      borderRadius: 10,               
      shadowColor: "#000",           
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 3,
    },
  
    itemContent: {
      flexDirection: 'row',           
      alignItems: 'flex-start',       
      flex: 1,
    },
  
    itemImage: {
      width: 80,  // Tamanho da imagem
      height: 80,
      borderRadius: 10,  // Bordas arredondadas para a imagem
      marginRight: 15,   // Espaçamento entre a imagem e o conteúdo
    },
  
    itemInfo: {
      flex: 1,                  // Faz com que o conteúdo ocupe o restante do espaço
      justifyContent: 'space-between', // Para separar o conteúdo de forma adequada
      alignItems: 'flex-start',
    },
  
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#333",
      marginBottom: 5,
    },
  
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "#333", 
      marginBottom: 10,
    },
  
    itemDetails: {
      fontSize: 14,
      color: "#555",
      marginBottom: 10,
    },
  
    removeButton: {
      backgroundColor: "#ff6347",   
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
  
    removeButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: "#fff",
    },

});

export default styles;
