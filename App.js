import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import api from './src/services/api';
import Movies from './src/components/Movies';

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
      
      <FlatList
        data={movies}
        keyExtractor={item =>  String(item.id)}
        renderItem={({item}) => <Movies data={item}/>}
       />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});