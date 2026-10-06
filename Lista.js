import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

export default function Lista() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    setItens([...itens, texto]);
    setTexto('');
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite algo.."
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        style={styles.lista}
        data={itens}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  lista: {
    marginTop: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  item: {
    fontSize: 16,
  },
});