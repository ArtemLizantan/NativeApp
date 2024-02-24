import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>AppTest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blueviolet',
    padding: 10,
    alignItems: 'flex-start',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
