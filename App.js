import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [gempa, setGempa] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDataGempa = async () => {
    try {
      setLoading(true);
      const http = await fetch(
        "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
      );
      const response = await http.json();

      // Struktur JSON BMKG menyimpan data di dalam response.Infogempa.gempa
      setGempa(response.Infogempa.gempa);
    } catch (error) {
      console.error("Gagal mengambil data gempa:", error);
    } finally {
      setLoading(false);
    }
  };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Gempa Terkini (BMKG)</Text>

      {/* Tombol untuk memuat data gempa saat diklik */}
      <Button title={loading ? "Memuat..." : "Tampilkan Data Gempa"} onPress={getDataGempa} />

      {/* Menampilkan data gempa jika sudah berhasil diambil */}
      {gempa && (
        <View style={styles.card}>
          <Text style={styles.text}>📅 Tanggal: {gempa.Tanggal}</Text>
          <Text style={styles.text}>⏰ Jam: {gempa.Jam}</Text>
          <Text style={styles.text}>🌍 Wilayah: {gempa.Wilayah}</Text>
          <Text style={styles.text}>⚡ Magnitudo: {gempa.Magnitude}</Text>
          <Text style={styles.text}>🌊 Kedalaman: {gempa.Kedalaman}</Text>
          <Text style={styles.text}>⚠️ Potensi: {gempa.Potensi}</Text>
        </View>
      )}

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
    padding: 56, 
  },

  buttonContainer: {
    gap: 10,
  },

card: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
}
});