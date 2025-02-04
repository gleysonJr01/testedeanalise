import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
        },
        image: {
          width: '100%',
          height: 200,
        },
        name: {
          marginLeft: 20,
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 10,
        },
        category: {
            marginLeft: 20,
          fontSize: 18,
          color: '#777',
        },
        price: {
            marginLeft: 20,
            fontWeight: 'bold',

          fontSize: 20,
          color: '#000',
          marginTop: 10,
        },
        promotion: {
          fontSize: 16,
          color: 'red',
          marginTop: 10,
        },
        bestSeller: {
            marginLeft: 20,

          fontSize: 16,
          color: 'green',
          marginTop: 10,
        },
        complementosContainer: {
          marginTop: 16,
        },
        observacaoContainer: {
          marginTop: 16,
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          marginTop: 8,
          height: 40,
        }, complementoItem: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F8F8F8',
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        },
        complementoImagem: {
          width: 40,
          height: 40,
          marginRight: 10,
          borderRadius: 20,
        },
        complementoNome: {
          flex: 1,
          fontSize: 16,
        },
        
        checkbox: {
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#555',
        },
        checkboxSelecionado: {
          backgroundColor: '#28A745',
          borderColor: '#28A745',
        },
        
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
      });
      

export default styles;
