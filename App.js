import { StyleSheet, Text, View } from 'react-native';
import Lista from './Lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Checkpoint 2</Text>


      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 25,
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  
});