import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native'
import { Avatar, Card, Text, Divider } from 'react-native-paper'

export default function UsuarioScreen({ navigation, route }) {

  const idUsuario = route.params
  const [usuario, setUsuario] = useState({})
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)   // Estado para controlar carregamento

  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`https://dummyjson.com/users/${idUsuario}`)
        setUsuario(userResponse.data)

        const postsResponse = await axios.get(`https://dummyjson.com/users/${idUsuario}/posts`)
        setPosts(postsResponse.data.posts)
      } catch (erro) {
        alert('Erro ao buscar dados do usuário!')
      } finally {
        setLoading(false)   // Finaliza o carregamento, mesmo com erro
      }
    }

    fetchData()
  }, [])

  // Enquanto estiver carregando, exibe o ActivityIndicator
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text>Carregando dados...</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={usuario.firstName + " " + usuario.lastName}
          subtitle={usuario.email}
          left={(props) => <Avatar.Image {...props} source={{ uri: usuario.image }} />}
        />
        <Card.Content>

          <Text variant='titleLarge' style={styles.sectionTitle}>Imagem:</Text>
          <Card.Cover source={{ uri: usuario.image }} style={styles.image} />

          <Text variant='titleLarge' style={styles.sectionTitle}>Dados:</Text>
          <Text>Username: {usuario.username}</Text>
          <Text>Idade: {usuario.age}</Text>
          <Text>Gênero: {usuario.gender}</Text>
          <Text>Telefone: {usuario.phone}</Text>
          <Text>Data de Nascimento: {usuario.birthDate}</Text>
          <Text>Universidade: {usuario.university}</Text>

          <Text variant='titleLarge' style={styles.sectionTitle}>Posts:</Text>
          {posts.map(post => (
            <View key={post.id} style={styles.postItem}>
              <Text variant='titleMedium'>{post.title}</Text>
              <Text>{post.body}</Text>
              <Divider style={styles.divider} />
            </View>
          ))}

        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginBottom: 20,
  },
  image: {
    marginVertical: 10,
  },
  sectionTitle: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  postItem: {
    marginBottom: 10,
  },
  divider: {
    marginVertical: 8,
  },
})
