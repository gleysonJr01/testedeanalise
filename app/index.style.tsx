import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      width: '100%',
      height: 500, 
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',  // Tornamos a imagem de fundo fixa
      top: 0,  // Fixa a imagem no topo da tela
      left: 0,
      right: 0,
    },
    buttonContainer: {
      flex: 1, // Garante que o container ocupe o restante da tela
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginTop: 475,  // Ajusta a distância para que o container fique abaixo da imagem
      paddingBottom: 40, // Ajuste conforme necessário
    },
    buttonLogIn: {
      backgroundColor: '#E9212E',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 10,
      borderRadius: 5,
      width: 300
    },
    buttonSignIn: {
      alignItems:'center',
      borderColor: '#E9212E',
      borderWidth: 2,
      backgroundColor: '#ffffff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginVertical: 10,
      borderRadius: 5,
      width: 300
    },
    buttonTextLogIn: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonTextSignIn: {
      color: '#E9212E',
      fontSize: 18,
      fontWeight: 'bold'
    },
    logo: {
      width: 200,
      height: 100,
    }
  });
export default styles  