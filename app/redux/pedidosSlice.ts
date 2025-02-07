import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Exportando a interface PedidoItem
export interface PedidoItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  complementos: number[];
}

interface PedidosState {
  itens: PedidoItem[];
}

const initialState: PedidosState = {
  itens: [],
};

const pedidosSlice = createSlice({
  name: 'pedidos',
  initialState,
  reducers: {
    addPedido(state, action: PayloadAction<PedidoItem>) {
      state.itens.push(action.payload);
    },
    removerPedido(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(item => item.id !== action.payload);
    },
    // Outros reducers podem ser adicionados aqui, como atualizar quantidade, etc.
  },
});

export const { addPedido, removerPedido } = pedidosSlice.actions;
export default pedidosSlice.reducer;
