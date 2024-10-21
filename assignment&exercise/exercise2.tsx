import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Biodata</Text>
      <Image style={styles.image1} source={require('./assets/ppandika.jpg')} />
      <Text style={styles.nama}>Andika Pujianto</Text>
      <Text style={styles.title1}>
        Tempat, Tanggal Lahir : Tondano, 02 Agustus 2005{'\n'}
        Alamat : Tondano{'\n'}
        Agama : Kristen Protestan{'\n'}
        Status : Menikah{'\n'}
        Pendidikan Saat ini : S1 Informatika Fakultas Ilmu Komputer Uiversitas
        Klabat
      </Text>
      <Text style={styles.title1}>Contact : +62 895 397401607</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image1: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  image2: {
    height: 200,
    width: 200,
  },
  image3: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
    margin: 10,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    lineHeight: 25,
    textAlign: 'center',
  },
  title1: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    lineHeight: 25,
    textAlign: 'center',
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  redBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});

export default App;
