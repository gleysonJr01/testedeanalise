import React from "react";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "../../src/styles/resultados.styles";

interface Loja {
  id: number;
  nome: string;
  categoria: string;
  image: string;
}

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

interface ResultadosPesquisaProps {
  lojas: Loja[];
  produtos: Produto[];
}

const ResultadosPesquisa: React.FC<ResultadosPesquisaProps> = ({ lojas, produtos }) => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {lojas.length > 0 && (
        <>
          {lojas.map((loja) => (
            <View key={loja.id} style={styles.promoListItem}>
              <View style={styles.promoListItemInfo}>
                <TouchableOpacity
                  onPress={() => router.push(`/estabelecimento/${loja.id}`)}
                  style={styles.productItem}
                >
                  <Image source={{ uri: loja.image }} style={styles.listItemImage} />
                </TouchableOpacity>
                <View style={styles.storeInfo}>
                  <Text style={styles.restaurantName}>{loja.nome}</Text>
                  <Text style={styles.restaurantCategory}>{loja.categoria}</Text>
                </View>
              </View>
              <FlatList
                horizontal
                data={produtos.filter((produto) => produto.lojaId === loja.id)}
                showsHorizontalScrollIndicator={false} 
                keyExtractor={(produto) => produto.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => router.push(`/produto/${item.id}`)}
                    style={styles.productItem}
                  >
                    <Image source={{ uri: item.imagem }} style={styles.productImage} />
                    <Text style={styles.productName}>{item.nome}</Text>
                    <Text style={styles.listItemDescription}>R$ {item.preco.toFixed(2)}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default ResultadosPesquisa;
