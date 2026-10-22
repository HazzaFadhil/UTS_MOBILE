//yang diminta itu halaman pertama 
//setiap kata harus sesuai besar kecilnya


import React, { useState } from 'react'; //ini untuk text input
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView } from 'react-native'; //deklarasi apa yang mau gua gunakan
import { NavigationContainer } from '@react-navigation/native'; //ngambil package atau library supaya membungkus seluruh struktur dalam app
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //untuk membuat navigasi antar layar

const Stack = createNativeStackNavigator();

// --- LAYAR 1: HALAMAN UTAMA (Login) ---
function HomeScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [sandi, setSandi] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>UTS Mobile Programming</Text>

      {/* 1. Image Component */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.image} 
      />

      {/* 2. Text & TextInput Nama */}
      <Text style={styles.label}>Masukkan Nama Anda:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ketik di sini..."
        value={nama}
        onChangeText={setNama}
      />

      {/* 3. Text & TextInput Sandi */}
      <Text style={styles.label}>Masukkan sandi anda:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ketik di sini..."
        secureTextEntry={true}
        value={sandi}
        onChangeText={setSandi}
      />

      {/* 4. Button Component untuk Log In */}
      <Button 
        title="Log In" 
        onPress={() => {
          if (!nama || !sandi) {
            alert('Harap isi nama dan sandi terlebih dahulu!');
            return;
          }
          // Mengirim parameter 'nama' ke layar kedua
          navigation.navigate('Detail', { namaUser: nama });
        }} 
      />
    </SafeAreaView>
  );
}

// --- LAYAR 2: HALAMAN DETAIL (Card CSS & Log Out) ---
function DetailScreen({ route, navigation }) {
  const { namaUser } = route.params;

  return (
    <View style={styles.container}>
      
      {/* CARD ALA CSS (Menggunakan View dengan Shadow & BorderRadius) */}
      <View style={styles.card}>
        <Image 
          source={require('./assets/Jeff.jpg')}
          style={styles.cardImage} 
        />

        <Text style={styles.title}>Halaman Detail</Text>
        <Text style={styles.welcomeText}>Halo, {namaUser}!</Text>
        <Text style={styles.subtitle}>Anda berhasil mengimplementasikan Navigation Stack & Card.</Text>

        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>React Native</Text>
          <Text style={styles.skill}>C++</Text>
          <Text style={styles.skill}>HTML & CSS</Text>
        </View>

        {/* Tombol Log Out */}
        <View style={styles.buttonWrapper}>
          <Button 
            title="Log Out" 
            color="#ff5c5c"
            onPress={() => {
              // Kembali ke halaman utama (Home / Login)
              navigation.replace('Home');
            }} 
          />
        </View>
      </View>

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

// --- GAYA / STYLING ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  // Gaya Card ala CSS (Box Shadow & Border Radius)
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    // Efek Bayangan untuk Android & iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#333',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 40,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 40,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },
  welcomeText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 20,
  },
  skill: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
    color: '#333',
    overflow: 'hidden',
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
});