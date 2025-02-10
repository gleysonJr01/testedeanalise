import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../../src/styles/cadastro.styles";

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  const handleCadastro = async () => {
    if (!senha) {
      Alert.alert("Erro", "A senha não pode ser vazia!");
      return;
    }

    try {
      const response = await fetch('https://ifood-backend-aedi.onrender.com/api/auth/signup/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,       
          email: email,      
          password: senha,  
          cpf: cpf,          
          phone: telefone,   
          address: endereco, 
        }),
      });
          
      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userNome', nome);
        await AsyncStorage.setItem('userEndereco', endereco);


        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        router.push('/login'); 
      } else {
        Alert.alert("Erro", data.message || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro ao tentar cadastrar. Verifique sua conexão.");
    }
  };

  const cadastrar = () => {
    if (email && endereco && telefone && senha && nome && cpf) {
      handleCadastro();
    } else {
      Alert.alert("Erro", "Preencha todos os campos!");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton
              icon="arrow-left"
              iconColor="black"
              size={30}
              onPress={() => router.push('/')}
            />
          </View>

          <Text>Qual o seu E-mail?</Text>
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

          <Text>Insira seu CPF</Text>
          <TextInput
            label="Cpf"
            value={cpf}
            onChangeText={setCpf}
            mode="outlined"
            style={[styles.input, { borderColor: 'gray' }]}
            theme={{
              colors: {
                primary: 'gray',
              },
            }}
          />

          <Text>Informe seu nome</Text>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
