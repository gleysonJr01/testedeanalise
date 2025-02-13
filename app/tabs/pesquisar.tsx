  import React, { useState } from "react";
  import { View, Text, ScrollView, TouchableOpacity } from "react-native";
  import { Searchbar } from "react-native-paper";
  import styles from "../../src/styles/pesquisar.styles";
  import CategoriaDetalhe from "../categoria/[categoria]";
  import ResultadosPesquisa from "../resultados";
  export default function Pesquisar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categorias = ["Lanches", "Açaí", "Pizza", "Sushi", "Farmácia"];

    const produtos = [
      { id: 1, nome: "Açaí Tradicional", preco: 10.99, categoria: "Açaí", maisVendido: true,lojaId: 1, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 2, nome: "Açaí com Banana", preco: 12.99, categoria: "Açaí", maisVendido: true, lojaId: 1,promocao: true, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 7, nome: "Pizza Portuguesa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 4, nome: "Sushi Combo", preco: 39.99, categoria: "Sushi", maisVendido: false,lojaId: 4, promocao: true, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 8, nome: "Pizza Calabresa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 9, nome: "Pizza de Chocolate", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },  
      { id: 5, nome: "Hambúrguer Artesanal", preco: 18.99, categoria: "Lanches", maisVendido: true,lojaId: 5, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 6, nome: "Pizza Calabresa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 6, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },

    ];

    const lojas = [
      { id: 1, nome: "Açaí da Praia", categoria: "Açaí", image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 2, nome: "Açaí Tropical", categoria: "Açaí", image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 3, nome: "Pizza Express", categoria: "Pizza" , image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg"},
      { id: 4, nome: "Sushi House", categoria: "Sushi" , image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg"},
      { id: 5, nome: "Lanches & Açaí", categoria: "Lanches", image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
      { id: 6, nome: "Pizza Kelly", categoria: "Pizza" , image:"https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg"},

    ];

    const filteredLojas = lojas.filter(
      (loja) =>
        loja.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loja.categoria.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredProdutos = produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <View style={styles.container}>
        
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="O que vai pedir hoje?"
            onChangeText={(text) => {
              setSearchQuery(text);
              setSelectedCategory(null);
            }}
            style={styles.searchBar}
            iconColor="red"
            value={searchQuery}
          />
        </View>

        {!searchQuery && !selectedCategory && (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Categorias</Text>
            <View style={styles.categoryButtonContainer}>
              {categorias.map((categoria) => (
                <TouchableOpacity
                  key={categoria}
                  style={styles.categoryButton}
                  onPress={() => setSelectedCategory(categoria)}
                >
                  <Text style={styles.categoryText}>{categoria}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}

        {selectedCategory && (
          <CategoriaDetalhe
            categoria={selectedCategory}
            produtos={filteredProdutos.filter((produto) => produto.categoria === selectedCategory)}
            maisVendidos={filteredProdutos.filter((produto) => produto.maisVendido && produto.categoria === selectedCategory)}
            promocao={filteredProdutos.filter((produto) => produto.promocao && produto.categoria === selectedCategory)}
            onBack={() => setSelectedCategory(null)}
          />
        )}

        {searchQuery && (
          <ResultadosPesquisa lojas={filteredLojas} produtos={filteredProdutos} />
        )}
      </View>
    );
  }
