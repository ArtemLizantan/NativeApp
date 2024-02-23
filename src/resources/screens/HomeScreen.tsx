import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Header />
        <View>
          <Text>Main</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
