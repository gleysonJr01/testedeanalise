import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './index.style';
import { useRouter } from 'expo-router';
import { Provider } from 'react-redux'; 
import store from './redux/store';

const App = () => {
  const router = useRouter();
  return (
    <Provider store={store}> 
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/fundo.png')}
          style={styles.background}
          resizeMode="cover"
        >
        </ImageBackground>
        <View style={styles.buttonContainer}>
          <Image style={styles.logo} source={require('../assets/logo_ifood.png')} />
          <TouchableOpacity style={styles.buttonLogIn} onPress={() => router.push('/login')}>
            <Text style={styles.buttonTextLogIn}>Já tenho uma conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => router.push('/cadastro')}>
            <Text style={styles.buttonTextSignIn}>Cadastrar Nova Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>  
  );
};

export default App;
