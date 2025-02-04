import React from 'react';
import { useLocalSearchParams } from 'expo-router';  // Corrigido para usar o useLocalSearchParams
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from '../../src/styles/produtos.styles';

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


interface ProdutoDetalhesProps {
  produto: Produto | null;
}

const ProdutoDetalhes: React.FC<ProdutoDetalhesProps> = ({ produto }) => {
  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <View>
      <Text style={styles.name}>{produto.nome}</Text>
      <Text style={styles.category}>{produto.categoria}</Text>
      <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
      {produto.promocao && <Text style={styles.promotion}>Em promoção!</Text>}
      {produto.maisVendido && <Text style={styles.bestSeller}>Mais Vendido!</Text>}
   
      </View>
     
        <View>

      </View>
    </ScrollView>
  );
};

const ProdutoScreen = () => {
  const { id } = useLocalSearchParams();  

  const produtos: Produto[] = [      { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];

  const produto = produtos.find((produto) => produto.id === Number(id));

  return <ProdutoDetalhes produto={produto || null} />;
};


export default ProdutoScreen;
