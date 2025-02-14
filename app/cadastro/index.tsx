import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';
import styles from "../../src/styles/cadastro.styles";
import Header from "../../src/components/header";

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();

  const onBackPress = () => {
    router.push('/');
  };

  const limparMascara = (valor: string) => {
    return valor.replace(/\D/g, ''); // Remove tudo que não for número
  };

  const handleCadastro = async () => {
    if (!senha) {
      Alert.alert("Erro", "A senha não pode ser vazia!");
      return;
    }

    try {
      const telefoneLimpo = limparMascara(telefone);
      const cpfLimpo = limparMascara(cpf);

      const response = await fetch('https://ifood-backend-aedi.onrender.com/auth/signup/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: senha,
          cpf: cpfLimpo,
          phone: telefoneLimpo,
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

  const validarSenha = (senha: string) => {
    if (senha.length < 8) {
      setErroSenha("*A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      setErroSenha("*A senha deve conter um caractere especial.");
      return false;
    }
    setErroSenha('');
    return true;
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header onBackPress={onBackPress} />
          </View>

          <Text>Informe seu nome</Text>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
            mode="outlined"
            style={[styles.input, { borderColor: 'gray' }]}
            theme={{ colors: { primary: 'gray' } }}
          />

          <Text>Qual o seu E-mail?</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            style={[styles.input, { borderColor: 'gray' }]}
            theme={{ colors: { primary: 'gray' } }}
          />

          <Text>Endereço de Entrega</Text>
          <TextInput
            label="Endereço"
            value={endereco}
            onChangeText={setEndereco}
            mode="outlined"
            style={[styles.input, { borderColor: 'gray' }]}
            theme={{ colors: { primary: 'gray' } }}
          />

          <Text>Número para Contato</Text>
          <TextInputMask
            type={'cel-phone'}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="Telefone"
            style={[styles.maskInputs, { borderColor: 'gray' }]}
            keyboardType="phone-pad"
          />

          <Text>Crie uma senha</Text>
          {erroSenha ? <Text style={{ color: 'red' }}>{erroSenha}</Text> : null}

          <TextInput
            label="Senha"
            value={senha}
            onChangeText={(text) => {
              setSenha(text);
              validarSenha(text);
            }}
            secureTextEntry={true}
            mode="outlined"
            style={[styles.input, { borderColor: 'gray' }]}
            theme={{ colors: { primary: 'gray' } }}
          />

          <Text>Insira seu CPF</Text>
          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={setCpf}
            placeholder="CPF"
            style={[styles.maskInputs, { borderColor: 'gray' }]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <TouchableOpacity
            onPress={cadastrar}
            style={[styles.bottomButton, { pointerEvents: isFocused ? 'none' : 'auto' }]}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
