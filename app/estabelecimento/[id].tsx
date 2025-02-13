import React, { useRef } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router'; 
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../src/styles/estabelecimento.styles';
import { Divider, IconButton } from 'react-native-paper';

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
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToSection = (section: string) => {
    if (scrollViewRef.current) {
      const sectionY = section === 'destaques' ? 0 : section === 'promocoes' ? 1 : 2;
      scrollViewRef.current.scrollTo({ y: sectionY * 600, animated: true });
    }
  };

  if (!loja) {
    return (
      <View style={styles.container}>
        <Text>Loja não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView ref={scrollViewRef} style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.containerImage}>
        <Image source={{ uri: loja.image }} style={styles.image} />
        <IconButton
          icon="chevron-left"
          iconColor="white"
          size={30}
          onPress={() => router.push('/tabs/pesquisar')}
          style={styles.iconButton}
        />
      </View>
      <View style={styles.informationContainer}>
        <Image source={{ uri: loja.image }} style={styles.imageFloating} />
        <Text style={styles.name}>{loja.nome}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.category}>{loja.categoria}</Text>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => scrollToSection('destaques')} style={styles.navButton}>
          <Text style={styles.navText}>Destaques</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('promocoes')} style={styles.navButton}>
          <Text style={styles.navText}>Promoções</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollToSection('tudo')} style={styles.navButton}>
          <Text style={styles.navText}>Tudo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productsContainer}>
        <Text style={styles.sectionTitle}>Destaques</Text>
        <View style={styles.tentando}>
          {produtosFiltrados.filter(produto => produto.maisVendido).length > 0 ? (
            produtosFiltrados.filter(produto => produto.maisVendido).map(produto => (
              <View key={produto.id} style={styles.sectionProduts}>
                <Image source={{ uri: produto.imagem }} style={styles.productImages} />
                <Text style={styles.listItemTitle}>{produto.nome}</Text>
                <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.sectionTitle}>Nenhum destaque disponível</Text>
          )}
        </View>
      </View>

      {/* Seção de Promoções */}
      <View style={styles.productsContainer}>
        <Text style={styles.sectionTitle}>Promoções</Text>
        <View style={styles.tentando}>
          {produtosFiltrados.filter(produto => produto.promocao).length > 0 ? (
            produtosFiltrados.filter(produto => produto.promocao).map(produto => (
              <View key={produto.id} style={styles.sectionProduts}>
                <Image source={{ uri: produto.imagem }} style={styles.productImages} />
                <Text style={styles.listItemTitle}>{produto.nome}</Text>
                <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.sectionTitle}>Nenhuma promoção disponível</Text>
          )}
        </View>
      </View>

      {/* Seção Tudo */}
      <View style={styles.productsContainer}>
        <Text style={styles.sectionTitle}>Tudo</Text>
        <Text>Tudo que {loja.nome} tem a oferecer!</Text>
        <View style={styles.tentando}>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map(produto => (
              <View key={produto.id} style={styles.sectionProduts}>
                <Image source={{ uri: produto.imagem }} style={styles.productImages} />
                <Text style={styles.listItemTitle}>{produto.nome}</Text>
                <Text style={styles.listItemDescription}>R$ {produto.preco.toFixed(2)}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.sectionTitle}>Nenhum produto disponível</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const LojaScreen = () => {
  const { id } = useLocalSearchParams();  

  const lojas: Loja[] = [
    { id: 3, nome: "Pizza Express", categoria: "Pizza", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 7, nome: "Pizza Kelly", categoria: "Pizza", image: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];
  
  const produtos: Produto[] = [
    { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: true, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 7, nome: "Pizza Portuguesa", preco: 22.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: true, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 8, nome: "Pizza Calabresa", preco: 20.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: true, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 9, nome: "Pizza de Chocolate", preco: 18.99, categoria: "Pizza", maisVendido: false, lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];

  const lojaId = id ? Number(id) : 0; 
  const loja = lojas.find((loja) => loja.id === lojaId);
  const produtosFiltrados = produtos.filter((produto) => produto.lojaId === lojaId);

  return <LojaDetalhes loja={loja || null} produtosFiltrados={produtosFiltrados} />;
};

export default LojaScreen;
