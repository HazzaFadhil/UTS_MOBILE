import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// // --- LAYAR 1: HALAMAN UTAMA (Input & Navigasi) ---
// function HomeScreen({ navigation }) {
//   const [nama, setNama] = useState('');

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>UTS Mobile Programming</Text>

//       {/* 1. Image Component */}
//       <Image 
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
//         style={styles.image} 
//       />

//       {/* 2. Text Component */}
//       <Text style={styles.label}>Masukkan Nama Anda:</Text>

//       {/* 3. TextInput Component */}
//       <TextInput
//         style={styles.input}
//         placeholder="Ketik di sini..."
//         value={nama}
//         onChangeText={setNama}
//       />

//       {/* 4. Button Component untuk Navigasi */}
//       <Button 
//         title="Kirim & Pindah Halaman" 
//         onPress={() => {
//           if (!nama) {
//             alert('Harap isi nama terlebih dahulu!');
//             return;
//           }
//           // Mengirim parameter 'nama' ke layar kedua
//           navigation.navigate('Detail', { namaUser: nama });
//         }} 
//       />
//     </SafeAreaView>
//   );
// }

