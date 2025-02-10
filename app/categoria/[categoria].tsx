import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import styles from "../../src/styles/categorias.style";
import { IconButton } from "react-native-paper";

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
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          iconColor='black'
          size={30}
          onPress={onBack}
        />
        <Text style={styles.title}>{categoria}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Produtos Disponíveis</Text>
        <View style={styles.produtosWrapper}>
          {produtos.map((produto) => (
            <View key={produto.id} style={styles.produtoItem}>
              <Image source={{ uri: produto.imagem }} style={styles.productImages} />
              <Text style={styles.listItemTitle}>{produto.nome}</Text>
              <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
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
