import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
  },
  produtoItem: {
    width: '30%',
    marginBottom: 16,
    alignItems: 'center',
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
