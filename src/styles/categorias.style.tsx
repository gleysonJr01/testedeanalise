import { StyleSheet } from "react-native";

const styles = StyleSheet.create({


      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      flatListContainer: {
        paddingHorizontal: 8,
        
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


      subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      tentando: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite a quebra da linha
        justifyContent: 'space-between', // Espaça os itens uniformemente
      },
      section:{
        padding: 16,
        marginLeft:-15
      },

      sectionProduts: {
        width: '30%', // Cada item ocupará 30% da largura (para 3 itens por linha)
        marginBottom: 16, // Espaço entre as linhas
        alignItems: 'center', // Alinha os itens ao centro
      },
      productImages: {
        width: '100%',
        height: 100, // Ajuste a altura conforme necessário
        borderRadius: 8,
        marginBottom: 8,
      },
   
      listItemLarge: {
        alignItems: "center",
        marginRight: 20,
      },
      listItemImageLarge: {
        marginTop:20,
        width: 150, // Imagem maior e quadrada
        height: 150,
        borderRadius: 20,
        marginBottom: 10, // Espaço entre a imagem e a descrição
      },
      listItemDescription: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
      },


  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20
  },
  backButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  backText: {
    fontSize: 16,
    color: "#333",
  },
  
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', // Distribui o botão e o título nas extremidades
    alignItems: 'center', // Alinha verticalmente os itens
    marginBottom: 16, // Espaço entre o header e o conteúdo
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1, // Permite que o título ocupe o restante do espaço
   marginLeft: 20// Centraliza o título
  },
 
 
});

export default styles;
