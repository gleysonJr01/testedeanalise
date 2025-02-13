import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    horizontalList:{
        },
    header: {
      backgroundColor: "#6200ee",
      padding: 20,
    },
    headerText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
    },
    section: {
      padding: 15,
    },
    sectionContent: {
        fontSize: 16,
        color: "#333",
        marginBottom:15
      },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    imageContainer: {
      marginTop: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    largeImage: {
      width: "48%",
      height: 100,
      borderRadius: 10,
    },
    smallImage: {
      width: "23%",
      height: 100,
      borderRadius: 10,
    },
    listItem: {
      alignItems: "center",
      marginRight: 20, 
    },
    listItemTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 8, 
   },
    listItemImage: {
      width: 80,
      height: 80,
      borderRadius: 40, 
      backgroundColor: "#ccc", 
    },
    footer: {
      padding: 15,
      backgroundColor: "#ffffff",
      alignItems: "center",
    },
    
    listItemLarge: {
      alignItems: 'flex-start',
      marginRight: 20,
    },
    listItemImageLarge: {
      marginTop:20,
      width: 150, 
      height: 150,
      borderRadius: 20,
      marginBottom: 10, 
    },
    listItemDescription: {
      fontSize: 14,
      color: "#555",
      textAlign: "center",
    },
    promoListItem: {
      flexDirection: "row", 
      alignItems: "center",
      padding: 10,
      backgroundColor: "#fff",
      marginRight: 20, 
    },
  
    promoListItemImage: {
      width: 100,
      height: 100,
      borderRadius: 15,
      marginRight: 10, 
      backgroundColor: "#eee",
    },
    promoListItemInfo: {
      flex: 1,
      marginLeft: 30
    },
    promoListItemTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    promoListItemDescription: {
      fontSize: 14,
      color: "#555",
      marginBottom: 5,
    },
    promoListItemAddress: {
      fontSize: 12,
      color: "#999",
    },
  
  });
  
export default styles