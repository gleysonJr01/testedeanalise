import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import styles from '../../src/styles/detalhes-conta.styles';

const DetalhesConta = () => {
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
    endereco: '',
    telefone: '',
    cpf: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Pegar o token JWT do AsyncStorage
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          Alert.alert('Erro', 'Usuário não autenticado!');
          return;
        }

        // Fazer a requisição com o token no cabeçalho Authorization
        const response = await fetch('https://ifood-backend-aedi.onrender.com/clients', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao obter dados');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Erro', 'Usuário não autenticado!');
        return;
      }

      await fetch('https://sua-api.com/usuario', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Passar o token JWT aqui
        },
        body: JSON.stringify(userData),
      });

      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setIsEditing(false);
      router.replace('/detalhes-conta'); // Recarrega a tela
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar os dados.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userData.nome}
          onChangeText={(text) => setUserData({ ...userData, nome: text })}
        />
      ) : (
        <Text style={styles.text}>{userData.nome}</Text>
      )}

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{userData.email}</Text>

      <Text style={styles.label}>Senha:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userData.senha}
          onChangeText={(text) => setUserData({ ...userData, senha: text })}
          secureTextEntry
        />
      ) : (
        <Text style={styles.text}>********</Text>
      )}

      <Text style={styles.label}>Endereço:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userData.endereco}
          onChangeText={(text) => setUserData({ ...userData, endereco: text })}
        />
      ) : (
        <Text style={styles.text}>{userData.endereco}</Text>
      )}

      <Text style={styles.label}>Telefone:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={userData.telefone}
          onChangeText={(text) => setUserData({ ...userData, telefone: text })}
          keyboardType="phone-pad"
        />
      ) : (
        <Text style={styles.text}>{userData.telefone}</Text>
      )}

      <Text style={styles.label}>CPF:</Text>
      <Text style={styles.text}>{userData.cpf}</Text>

      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DetalhesConta;
