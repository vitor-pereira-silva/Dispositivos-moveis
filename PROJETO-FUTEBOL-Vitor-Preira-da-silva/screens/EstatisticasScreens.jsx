import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Text } from 'react-native-paper';

export default function EstatisticasScreens() {
  const estatisticas = {
    totalPublico: 3404252,
    totalJogos: 64,
    totalGols: 172,
    totalCartoes: 301,
    totalCartoesAmarelos: 288,
    totalCartoesVermelhos: 13,
    totalEstadios: 8,
    totalSelecoes: 32,
    totalJogadores: 831
  };

  // Funções para cálculo de médias
  const mediaGolsPorJogo = (estatisticas.totalGols / estatisticas.totalJogos).toFixed(2);
  const mediaPublicoPorJogo = (estatisticas.totalPublico / estatisticas.totalJogos).toFixed(0);
  const mediaCartoesPorJogo = (estatisticas.totalCartoes / estatisticas.totalJogos).toFixed(2);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Estatísticas da Copa do Mundo 2022</Title>

            {/* Dados principais */}
            <Text>Total de Gols: {estatisticas.totalGols}</Text>
            <Text>Total de Jogos: {estatisticas.totalJogos}</Text>
            <Text>Total de Público: {estatisticas.totalPublico.toLocaleString()}</Text>

            {/* Médias calculadas */}
            <Text>Média de Gols por Jogo: {mediaGolsPorJogo}</Text>
            <Text>Média de Público por Jogo: {mediaPublicoPorJogo}</Text>
            <Text>Média de Cartões por Jogo: {mediaCartoesPorJogo}</Text>

            {/* Outros dados */}
            <Text>Total de Cartões Amarelos: {estatisticas.totalCartoesAmarelos}</Text>
            <Text>Total de Cartões Vermelhos: {estatisticas.totalCartoesVermelhos}</Text>
            <Text>Total de Estádios: {estatisticas.totalEstadios}</Text>
            <Text>Total de Seleções: {estatisticas.totalSelecoes}</Text>
            <Text>Total de Jogadores: {estatisticas.totalJogadores}</Text>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#00BFFF' 
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#87CEEB', 
    padding: 10,
    borderRadius: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00008B', 
  }
});
