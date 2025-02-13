import React from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "../../src/styles/categorias.style";
import Header from "../../src/components/header";
import { router } from "expo-router";

interface Produto {
  id: number;
  nome: string; 
  preco: number;
  categoria: string;
  maisVendido: boolean;
  promocao: boolean;
  imagem: string;
}

interface CategoriaDetalheProps {
  categoria: string;
  produtos: Produto[];
  maisVendidos: Produto[];
  promocao: Produto[];
  onBack: () => void;
}

const CategoriaDetalhe: React.FC<CategoriaDetalheProps> = ({ categoria, produtos, maisVendidos, promocao, onBack }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerRow}>
  <Header onBackPress={onBack} />
  <Text style={styles.headerTitle}>Produtos Disponíveis</Text>
</View>
        <View style={styles.produtosWrapper}>
          {produtos.map((produto) => (
            <View key={produto.id} style={styles.produtoItem}>
              <View style={styles.ListItemInfo}>
                <TouchableOpacity
                      style={styles.produtoItem} // Garante que a área clicável envolva tudo
                  onPress={() => router.push(`/produto/${produto.id}`)}
                >
              <Image source={{ uri: produto.imagem }} style={styles.productImages} />
              <Text style={styles.listItemTitle}>{produto.nome}</Text>
              <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
              </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Famosos</Text>
          <FlatList
            data={maisVendidos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image source={{ uri: item.imagem }} style={styles.listItemImage} />
                <Text style={styles.listItemTitle}>{item.nome}</Text>
              </View>
            )}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Promoções</Text>
          <Text>Confira nossas promoções incríveis!</Text>
          <FlatList
            data={promocao}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItemLarge}>
                <Image source={{ uri: item.imagem }} style={styles.listItemImageLarge} />
                <Text style={styles.listItemTitle}>{item.nome}</Text>
                <Text style={styles.listItemDescription}>R$ {item.preco.toFixed(2)}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriaDetalhe;
