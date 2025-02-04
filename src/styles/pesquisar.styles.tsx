import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D9D9D9",
    
    },
    searchBarContainer: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#D9D9D9",
      borderRadius: 10,
      paddingHorizontal: 15,
    },
    searchBar: {
      backgroundColor: "#fff",
      borderRadius: 30,
    },
    scrollContent: {
      padding: 20,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '100%'
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 30,
      textAlign: 'left',
      marginLeft: 10,
      color: "#000",
    },
    categoryButton: {
      backgroundColor: "#FF0000",
      borderRadius: 10,
      paddingVertical: 15, 
      paddingHorizontal: 30,
      marginRight: 10,
      marginBottom: 10,  
      width:'45%',  
      height: 100
    },
    
    categoryButtonContainer: {
      flexDirection: "row",
      flexWrap: "wrap",  
      justifyContent: "space-between",  
    },  
    
    categoryText: {
      color: "#fff",
      fontSize: 16,
    },
    restaurantCard: {
      backgroundColor: "#f9f9f9",
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ddd",
    },
    restaurantName: {
      fontSize: 18,
      fontWeight: "bold",
    },
    restaurantCategory: {
      fontSize: 14,
      color: "#888",
    },
    categoryHeader: {
      backgroundColor: "#FF0000",
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      flexDirection: 'row',  // Para alinhar os elementos horizontalmente
      alignItems: 'center',  // Alinha o conteúdo verticalmente no centro
    },
    
    backButton: {
      padding: 5,
      marginRight: 10,  // Dá um espaço entre o ícone e o nome da categoria
    },
  
    categoryTitle: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "left",  // Alinha o texto à esquerda
      flex: 1,  // Para que o texto ocupe o restante do espaço disponível
    },
  });
  export default styles