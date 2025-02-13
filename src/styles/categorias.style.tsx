import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 15,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center", 
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    marginLeft: -25,
    marginBottom: 5,
    marginTop: -10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  produtosWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    gap: 10, 
    marginBottom: 20,
  },
  

  produtoItem: {
    marginBottom: 20,
  },
  ListItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: -50,
    alignItems: "center",
  },
  productImages: {
    width: '100%', 
    height: 100,  
    borderRadius: 8,
    marginBottom: 8,
  },

  listItem: {
    alignItems: 'center',
    marginRight: 20,
  },

  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  listItemDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },

  listItemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
  },

  flatListContainer: {
    paddingHorizontal: 8,
  },

  listItemLarge: {
    alignItems: 'center',
    marginRight: 20,
  },

  listItemImageLarge: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },

  section: {
    padding: 16,
    marginLeft: -15,
  },
});

export default styles;
