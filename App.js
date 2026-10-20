import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// --- LAYAR 1: HALAMAN UTAMA (Input & Navigasi) ---
function HomeScreen({ navigation }) {
  const [nama, setNama] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>UTS Mobile Programming</Text>

      {/* 1. Image Component */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.image} 
      />

      {/* 2. Text Component */}
      <Text style={styles.label}>Masukkan Nama Anda:</Text>

      {/* 3. TextInput Component */}
      <TextInput
        style={styles.input}
        placeholder="Ketik di sini..."
        value={nama}
        onChangeText={setNama}
      />

      {/* 4. Button Component untuk Navigasi */}
      <Button 
        title="Kirim & Pindah Halaman" 
        onPress={() => {
          if (!nama) {
            alert('Harap isi nama terlebih dahulu!');
            return;
          }
          // Mengirim parameter 'nama' ke layar kedua
          navigation.navigate('Detail', { namaUser: nama });
        }} 
      />
    </SafeAreaView>
  );
}

// --- LAYAR 2: HALAMAN DETAIL (Hasil & View) ---
function DetailScreen({ route }) {
  const { namaUser } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Detail</Text>
      <Text style={styles.welcomeText}>Halo, {namaUser}!</Text>
      <Text style={styles.subtitle}>Anda berhasil mengimplementasikan Navigation Stack.</Text>
    </View>
  );
}

// --- MAIN APP DENGAN NAVIGATION STACK ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Utama' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- GAYA / STYLING YANG SEDERHANA ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});