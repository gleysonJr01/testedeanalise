import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "100%",
  },
  promoListItem: {
    marginBottom: 20,
    paddingBottom: 10,
  },
  listItemImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 10,
  },
  promoListItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
  },
  storeInfo: {
    flex: 1,
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantCategory: {
    fontSize: 14,
    color: "#888",
    marginBottom: 15,
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
 listItemDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default styles;
