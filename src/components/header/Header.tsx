import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
