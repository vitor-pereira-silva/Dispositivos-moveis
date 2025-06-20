import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  const jsonValue = await AsyncStorage.getItem('@produtos');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

async function salvar(produto) {
  produto.id = new Date().getTime(); // Gera um ID único com timestamp
  const produtos = await listar();
  produtos.push(produto);
  await AsyncStorage.setItem('@produtos', JSON.stringify(produtos));
}

async function buscar(id) {
  const produtos = await listar();
  return produtos.find(produto => produto.id === id);
}

async function remover(id) {
  const produtos = await listar();
  const novaLista = produtos.filter(produto => produto.id !== id);
  await AsyncStorage.setItem('@produtos', JSON.stringify(novaLista));
}

async function atualizar(novoProduto) {
  const produtos = await listar();
  const novaLista = produtos.map(produto => 
    produto.id === novoProduto.id ? novoProduto : produto
  );
  await AsyncStorage.setItem('@produtos', JSON.stringify(novaLista));
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};
