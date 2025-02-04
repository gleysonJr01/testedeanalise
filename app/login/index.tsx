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
    
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userSenha");

      if (email === storedEmail && password === storedPassword) {
        handleLogin(); 
      } else {
        Alert.alert("Erro", "Credenciais inválidas!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro ao verificar as credenciais!");
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
      <Text>Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={[styles.input, { borderColor: "gray" }]}
        theme={{
          colors: {
            primary: "gray",
          },
        }}
      />

      <Text>Senha</Text>
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        mode="outlined"
        style={[styles.input, { borderColor: "gray" }]}
        theme={{
          colors: {
            primary: "gray",
          },
        }}
      />

      <TouchableOpacity onPress={login} style={styles.bottomButton}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
