import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../../src/styles/cadastro.styles";
const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleCadastro = async () => {
    try {
    
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userEndereco', endereco);
      await AsyncStorage.setItem('userTelefone', telefone);
      await AsyncStorage.setItem('userSenha', senha);
      
      alert('Cadastro realizado com sucesso!');
      router.push('/login'); 
    } catch (error) {
      console.log(error);
      alert('Erro ao salvar dados!');
    }
  };

  const cadastrar = () => {
    if (email && endereco && telefone && senha) {
      handleCadastro();
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <IconButton
    icon="arrow-left"
    iconColor= 'black'
    size={30}
    onPress={() => router.push('/')}
  />
         </View > 

      <Text>Qual o seu E-mail ?</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={[styles.input, { borderColor: 'gray' }]}
        theme={{
          colors: {
            primary: 'gray',
          },
        }}
      />

      <Text>Endereço de Entrega</Text>
      <TextInput
        label="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        mode="outlined"
        style={[styles.input, { borderColor: 'gray' }]}
        theme={{
          colors: {
            primary: 'gray',
          },
        }}
      />

      <Text>Número para Contato</Text>
      <TextInput
        label="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        mode="outlined"
        keyboardType="phone-pad"
        style={[styles.input, { borderColor: 'gray' }]}
        theme={{
          colors: {
            primary: 'gray',
          },
        }}
      />

      <Text>Crie uma senha</Text>
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        mode="outlined"
        style={[styles.input, { borderColor: 'gray' }]}
        theme={{
          colors: {
            primary: 'gray',
          },
        }}
      />

      <TouchableOpacity onPress={cadastrar} style={styles.bottomButton}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
