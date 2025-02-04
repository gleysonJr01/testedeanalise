import React from 'react';
import {  Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './index.style';
import { useRouter } from 'expo-router';
const App=()=> {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.background}
        resizeMode="cover"
      >
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Image style={styles.logo} source={require('../assets/logo_ifood.png')} />
        <TouchableOpacity style={styles.buttonLogIn} onPress={ ()=> router.push('/login')}>
          <Text style={styles.buttonTextLogIn}>Já tenho uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignIn} onPress={()=> router.push('/cadastro')}>
          <Text style={styles.buttonTextSignIn}>Cadastrar Nova Conta</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}
export default App