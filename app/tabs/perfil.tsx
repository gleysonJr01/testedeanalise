import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../../src/styles/perfil.styles';

const Perfil = () => {
  const [user, setUser] = useState<{ nome: string; email: string; endereco: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const nome = await AsyncStorage.getItem('userNome');
        const email = await AsyncStorage.getItem('userEmail');
        const endereco = await AsyncStorage.getItem('userEndereco');

        if (nome && email && endereco) {
          setUser({ nome, email, endereco });
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário", error);
        Alert.alert("Erro", "Erro ao carregar informações do usuário.");
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userNome');
      await AsyncStorage.removeItem('userEmail');
      await AsyncStorage.removeItem('userEndereco');
      router.replace('/login');
    } catch (error) {
      console.error("Erro ao fazer logout", error);
      Alert.alert("Erro", "Erro ao tentar fazer logout.");
    }
  };

  const navigateToAccountDetails = () => {
    router.push('/detalhes-conta'); 
  };

  const navigateToFavorits = () => {
    router.push('/favoritos'); 
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    

      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://wallpapers.com/images/hd/weird-profile-pictures-v8a7neut17yflidr.jpg' }} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{user.nome}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <IconButton
          icon="account-circle"
          iconColor="#F16463"
          size={40}
        />
        <Text style={styles.detailsText}>Detalhes da conta</Text>
        <IconButton
          icon="chevron-right"
          iconColor="black"
          size={30}
          onPress={navigateToAccountDetails}
        />
      </View>
      <View style={styles.detailsContainer}>
        <IconButton
          icon="heart"
          iconColor="#F16463"
          size={40}
        />
        <Text style={styles.detailsText}>Favoritos</Text>
        <IconButton
          icon="chevron-right"
          iconColor="black"
          size={30}
          onPress={navigateToFavorits}
        />
      </View>

      <View style={styles.logoutContainer}>
        <IconButton
          icon="logout"
          iconColor="#F16463"
          size={30}
          onPress={handleLogout}
        />
        <Text style={styles.logoutText}>Log Out</Text>
      </View>
    </View>
  );
};

export default Perfil;
