import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router'; 
import { View, Text, Image, ScrollView,  } from 'react-native';
import styles from '../../src/styles/estabelecimento.styles';
import {  IconButton,  } from 'react-native-paper';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  maisVendido: boolean;
  lojaId: number;
  promocao: boolean;
  imagem: string;
}
interface Loja {
    id: number;
    nome: string;
    categoria: string;
    image: string;
  }


  const LojaDetalhes: React.FC<{ loja: Loja | null; produtosFiltrados: Produto[] }> = ({ loja, produtosFiltrados }) => {
    const router = useRouter()

 
  if (!loja) {
    return (
      <View style={styles.container}>
        <Text>Loja não encontrado.</Text>
      </View>
    );
  }

  
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
         <IconButton
    icon="arrow-left"
    iconColor={'black'}
    size={20}
    onPress={() => router.push('/tabs/pesquisar')}
  />
      <Image source={{ uri: loja.image }} style={styles.image} />
      <View style={styles.informationContainer}>
        <Text style={styles.name}>{loja.nome}</Text>
        <Text style={styles.category}>{loja.categoria}</Text>
      </View>
      <Text style={styles.sectionTitle}>Produtos Disponíveis</Text>
        <View style={styles.tentando}>
        {produtosFiltrados.length > 0 ? (
  <View style={styles.tentando}>
    {produtosFiltrados.map((produto) => (
      <View key={produto.id} style={styles.sectionProduts}>
        <Image source={{ uri: produto.imagem }} style={styles.productImages} />
        <Text style={styles.listItemTitle}>{produto.nome}</Text>
        <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
      </View>
    ))}
  </View>
) : (
  <Text style={styles.sectionTitle}>Nenhum produto disponível</Text>
)}
        </View>

    
    </ScrollView>
  );
};

const LojaScreen = () => {
  const { id } = useLocalSearchParams();  

  const lojas: Loja[] = [
    { id: 3, nome: "Pizza Express", categoria: "Pizza",image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 7, nome: "Pizza Kelly", categoria: "Pizza", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];
  const produtos: Produto[]=[
    { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 7, nome: "Pizza Portuguesa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];
  const lojaId = id ? Number(id) : 0; 
  const loja = lojas.find((loja) => loja.id === Number(id));
  const produtosFiltrados = produtos.filter((produto) => produto.lojaId === Number(id));

  return (
      <LojaDetalhes loja={loja || null} produtosFiltrados={produtosFiltrados}  />
  );
};

export default LojaScreen;
