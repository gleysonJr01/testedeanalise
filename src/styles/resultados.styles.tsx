import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    scrollContent: {
        padding: 20,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '100%'
    },
    promoListItem: {
      marginBottom: 20,
      paddingBottom: 10,
    },
    listItemImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
      marginRight: 10, // Espaço entre a imagem e o nome
    },
    promoListItemInfo: {
      marginTop: 10,
      flexDirection: 'row', // Para alinhar o nome e a imagem na mesma linha
      marginBottom: 30,
      alignItems: 'center', // Para alinhar verticalmente o nome com a imagem
    },
    restaurantName: { 
      marginTop:30,
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      flex: 1, // Faz o nome ocupar o restante do espaço
    },
    restaurantCategory: {
      fontSize: 14,
      color: "#888",
      marginBottom: 15
    },
    productItem: {
      marginRight: 15,
      alignItems: "center",
    },
    productImage: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginBottom: 5,
    },
    productName: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    productPrice: {
      fontSize: 14,
      color: "#28a745", // verde para indicar o preço
      fontWeight: "bold",
    },
  });
  export default styles