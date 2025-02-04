import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
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

interface Complemento {
  id: number;
  nome: string;
  imagem: string;
}

const complementosDisponiveis: Complemento[] = [
  { id: 1, nome: 'Banana', imagem: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
  { id: 2, nome: 'Creme de Ninho', imagem: 'https://cdn-icons-png.flaticon.com/512/616/616490.png' },
  { id: 3, nome: "M&M's", imagem: 'https://cdn-icons-png.flaticon.com/512/414/414967.png' },
];

const ProdutoDetalhes: React.FC<{ produto: Produto | null }> = ({ produto }) => {
  const [complementosSelecionados, setComplementosSelecionados] = useState<number[]>([]);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  // Função para alternar a seleção do complemento
  const toggleComplemento = (id: number) => {
    setComplementosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem do Produto */}
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      
      {/* Informações do Produto */}
      <View>
        <Text style={styles.name}>{produto.nome}</Text>
        <Text style={styles.category}>{produto.categoria}</Text>
        <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
        {produto.promocao && <Text style={styles.promotion}>Em promoção!</Text>}
        {produto.maisVendido && <Text style={styles.bestSeller}>Mais Vendido!</Text>}
      </View>

      {/* Complementos */}
      <View style={styles.complementosContainer}>
        <Text style={styles.sectionTitle}>Escolha Complementos:</Text>
        {complementosDisponiveis.map((complemento) => (
          <TouchableOpacity 
            key={complemento.id} 
            style={styles.complementoItem} 
            onPress={() => toggleComplemento(complemento.id)}
          >
            <Image source={{ uri: complemento.imagem }} style={styles.complementoImagem} />
            <Text style={styles.complementoNome}>{complemento.nome}</Text>
            <View style={[styles.checkbox, complementosSelecionados.includes(complemento.id) && styles.checkboxSelecionado]} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const ProdutoScreen = () => {
  const { id } = useLocalSearchParams();  

  const produtos: Produto[] = [
    { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];

  const produto = produtos.find((produto) => produto.id === Number(id));

  return <ProdutoDetalhes produto={produto || null} />;
};

export default ProdutoScreen;
