import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { removerPedido } from '../redux/pedidosSlice';
import { PedidoItem } from '../redux/pedidosSlice'; 
import { Provider } from 'react-redux';
import store from '../redux/store';
import styles from '../../src/styles/pedidos.styles';

const PedidosScreen = () => {
  const pedidos = useSelector((state: any) => state.pedidos.itens); 
  const dispatch = useDispatch();

  const removerItem = (id: number) => {
    dispatch(removerPedido(id));
  };

  const renderItem = ({ item }: { item: PedidoItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
      <Text style={styles.itemDetails}>Quantidade: {item.quantidade}</Text>
      <TouchableOpacity onPress={() => removerItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remover do pedido</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Meus Pedidos</Text>

      <View style={styles.scrollContent}>
      {pedidos.length === 0 ? (
        <View style={styles.empty_container}>
          <Image
            source={require('../../assets/vazio.png')} 
            style={{ width: 200, height: 200 }} 
          />
          <Text>Nenhum pedido realizado</Text>
          <Text> Faça algum pedido no nosso app!</Text>
        </View>
      ) : (
        <FlatList
          data={pedidos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}

        />
      )}
    </View>
    </View>
  );
};

const PedidosScreenWithProvider: React.FC = () => {
  return (
    <Provider store={store}>  
      <PedidosScreen />
    </Provider>
  );
};

export default PedidosScreenWithProvider;
