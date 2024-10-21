import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return <Text style={styles.title}>Registration</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 35,
    color: 'black',
    margin: 20,
  },
});

export default Title;
