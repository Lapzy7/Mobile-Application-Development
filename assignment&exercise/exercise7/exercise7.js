import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Users List</Text>
      </View>

      {users.map(user => (
        <View key={user.id} style={styles.userCard}>
          <Text style={styles.text}>
            <Text style={styles.label}>Name: </Text>
            {user.name}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Username: </Text>
            {user.username}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Email: </Text>
            {user.email}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Address: </Text>
            {user.address.street}, {user.address.suite}, {user.address.city},{' '}
            {user.address.zipcode}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Phone: </Text>
            {user.phone}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    padding: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: 'black',
  },
  userCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1,
    alignContent: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default App;
