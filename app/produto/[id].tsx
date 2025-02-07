import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router'; 
import { useDispatch } from 'react-redux'; 
import { addPedido } from '../redux/pedidosSlice';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from '../../src/styles/produtos.styles';
import { Divider, Icon, IconButton, TextInput } from 'react-native-paper';
import { Provider } from 'react-redux'; 
import store from '../redux/store';
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
  preco:number;
  imagem: string;
}

const complementosDisponiveis: Complemento[] = [
  { id: 1, nome: 'Cebola', preco: 2.50, imagem: 'https://www.gastronomia.com.br/wp-content/uploads/2023/10/1o-festival-comidas-do-mundo-ocorre-em-sao-paulo-no-fim-de-semana.jpg' },
  { id: 2, nome: 'Pimentao', preco: 2.50, imagem: "https://www.gastronomia.com.br/wp-content/uploads/2023/10/1o-festival-comidas-do-mundo-ocorre-em-sao-paulo-no-fim-de-semana.jpg" },
  { id: 3, nome: "Cogumelo", preco: 2.50, imagem: "https://www.gastronomia.com.br/wp-content/uploads/2023/10/1o-festival-comidas-do-mundo-ocorre-em-sao-paulo-no-fim-de-semana.jpg" },
];

const ProdutoDetalhes: React.FC<{ produto: Produto | null }> = ({ produto }) => {
  const router = useRouter()
  const [quantidade, setQuantidade] = useState(1);  
  const [complementosSelecionados, setComplementosSelecionados] = useState<number[]>([]);
  const [observacao, setObservacao] = useState<string>(''); 

  const aumentarQuantidade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };
  
  const diminuirQuantidade = () => {
    setQuantidade((prevQuantidade) => (prevQuantidade > 1 ? prevQuantidade - 1 : 1));
  };

  const toggleComplemento = (id: number) => {
    setComplementosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calcularTotalComplementos = () => {
    return complementosSelecionados.reduce((total, id) => {
      const complemento = complementosDisponiveis.find((item) => item.id === id);
      return complemento ? total + complemento.preco : total;
    }, 0);
  };

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  // Definindo a função que vai adicionar o produto ao pedido
  const dispatch = useDispatch();
  const adicionarAoPedido = () => {
    if (produto) {
      const pedidoItem = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: quantidade,
        complementos: complementosSelecionados,
      };

      // Despachar a ação para adicionar o produto ao pedido
      dispatch(addPedido(pedidoItem));
      Alert.alert("Sucesso", "Pedido adicionado com sucesso! Agora confirme-o "); 
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
         <IconButton
    icon="arrow-left"
    iconColor={'black'}
    size={20}
    onPress={() => router.push('/tabs/pesquisar')}
  />
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <View style={styles.informationContainer}>
        <Text style={styles.name}>{produto.nome}</Text>
        <Text style={styles.category}>{produto.categoria}</Text>
        <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
        {produto.promocao && <Text style={styles.promotion}>Em promoção!</Text>}

        <View style={styles.complementosContainer}>
          <Text style={styles.sectionTitle}>Adicionais:</Text>
          {complementosDisponiveis.map((complemento, index) => (
            <View key={complemento.id}>
              <TouchableOpacity  
                style={styles.complementoItem} 
                onPress={() => toggleComplemento(complemento.id)}
              >
                <Image source={{ uri: complemento.imagem }} style={styles.complementoImagem} />
                
                <View style={styles.complementoTextoContainer}>
                  <Text style={styles.complementoNome}>{complemento.nome}</Text>
                  <Text style={styles.complementoPreco}>+R$ {complemento.preco.toFixed(2)}</Text>
                </View>

                <View style={[styles.checkbox, complementosSelecionados.includes(complemento.id) && styles.checkboxSelecionado]} />
              </TouchableOpacity>
              {index < complementosDisponiveis.length - 1 && <Divider style={styles.divider} />}
            </View>
          ))}
        </View>

        <View>
          <Divider style={styles.divider} />
          <View style={styles.observacaoContainer}>
            <View style={styles.observacaoHeader}>
              <Icon source="message-text" color="#9A9A9A" size={20} />
              <Text style={styles.observacaoTitle}>Alguma Observação?</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Ex: Tirar cebola, ketchup..."
              placeholderTextColor="#B0B0B0" 
              right={<TextInput.Affix text="/100" />}
              value={observacao}
              onChangeText={setObservacao}
              multiline
            />
          </View>
        </View>

      </View>

      <View style={styles.footer}>
        <View style={styles.quantidadeContainer}>
          <TouchableOpacity onPress={diminuirQuantidade}>
            <Icon source="minus" size={25} color="white" />
          </TouchableOpacity>

          <Text style={styles.quantidadeText}>{quantidade}</Text>

          <TouchableOpacity onPress={aumentarQuantidade}>
            <Icon source="plus" size={25} color="white" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.addButton} onPress={adicionarAoPedido}>
          <Text style={styles.addButtonText}>
            Adicionar • R$ {(produto.preco * quantidade + calcularTotalComplementos()).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const ProdutoScreen = () => {
  const { id } = useLocalSearchParams();  

  const produtos: Produto[] = [
    { id: 3, nome: "Pizza Marguerita", preco: 25.99, categoria: "Pizza", maisVendido: true, lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
    { id: 7, nome: "Pizza Portuguesa", preco: 25.99, categoria: "Pizza", maisVendido: true,lojaId: 3, promocao: false, imagem: "https://i.ytimg.com/vi/lfSrHbm18lo/hqdefault.jpg" },
  ];

  const produto = produtos.find((produto) => produto.id === Number(id));

  return (
    <Provider store={store}>  
      <ProdutoDetalhes produto={produto || null} />
    </Provider>
  );
};

export default ProdutoScreen;
