import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../src/styles/login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/tabs");
  };

  const login = async () => {
    try {
      const response = await fetch('https://ifood-backend-aedi.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          userType: 'CLIENT',
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        handleLogin();
      } else {
        Alert.alert("Erro", data.message || "Credenciais inválidas!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro ao tentar fazer login. Verifique sua conexão.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          iconColor="black"
          size={30}
          onPress={() => router.push("/")}
        />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
        theme={{ colors: { primary: "gray" } }}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: "gray" } }}
      />

      <TouchableOpacity onPress={login} style={styles.bottomButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
