import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect} from 'react';


export default function App() {

  console.log('atiku')
  const [angka, ubahAngka] = useState(0);

  const tambahAngka = () => {
    ubahAngka(angka + 1);
  };

  const kurangAngka = () => {
    if (angka > 0) {
      ubahAngka(angka - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{angka}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Kurang Angka" onPress={kurangAngka} color="#ff5252" />
        <Button title="Tambah Angka" onPress={tambahAngka} color="#4CAF50" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  buttonContainer: {
    gap: 10,
  }
});