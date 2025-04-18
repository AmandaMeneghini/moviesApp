import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import api from './src/services/api'

export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('r-api/?api=filmes');

      setMovies(response.data);
    }

    loadMovies();

  }, []);

  return(
    <View styles={styles.container}>
      <Text> 
        Movies
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});