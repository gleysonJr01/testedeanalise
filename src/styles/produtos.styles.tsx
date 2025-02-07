import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
        },
        image: {
          width: '100%',
          height: 250,
        },
        name: {
          marginTop:-5,
          fontSize: 24,
          fontWeight: 'bold',
        },
        informationContainer:{
          padding:20
        },
        category: {
          fontSize: 18,
          color: '#777',
        },
        quantidadeContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          justifyContent: 'center',
        },
        
        quantidadeText: {
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 10,
          color: 'white'
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
        
        counterContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 5,
        },
        
        counterButton: {
          padding: 5,
        },
        
        counterText: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#D32F2F', 
        },
        
        counterValue: {
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 10,
        },
        
        addButton: {
          backgroundColor: '#D32F2F',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderWidth:1.5,
          borderColor:'black',
          shadowColor: '#000', 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 5, 
    elevation: 5,
          borderRadius: 8,
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
        
       
        divider: {
          height: 1.5,
          backgroundColor: '#9A9A9A', 
          marginVertical: 5,
        },
        price: {
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

          fontSize: 16,
          color: 'green',
          marginTop: 10,
        },
        complementosContainer: {
          marginTop: 16,
        },
        complementoTextoContainer: {
          flex: 1, 
          flexDirection: 'column', 
        },
        observacaoContainer: {
          marginTop: 16,
        },
        observacaoHeader: {
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 8,
        },
        
        observacaoTitle: {
          color: '#9A9A9A', 
          fontSize: 16,
          marginLeft: 8, 
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#F5F5F5', 
          padding: 8,
          marginTop: 8,
          height: 40,
        },
         complementoItem: {
          flexDirection: 'row',
          alignItems: 'center',
          
          padding: 5,
        },
        complementoImagem: {
          width: 60,
          height: 60,
          marginRight: 10,
        },
        complementoNome: {
          flex: 1,
          fontSize: 16,
        },
        complementoPreco:{
        color:'#9A9A9A'
        },

        
        checkbox: {
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#555',
        },
        checkboxSelecionado: {
          backgroundColor: 'red',
          borderColor: '#ddd',
        },
        
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
      });
      

export default styles;
