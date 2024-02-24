import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICard} from '../../../interfaces/interfaces';
import {useNavigation} from '@react-navigation/native';

export default function Card({srcImg, name, author}: ICard) {
  // const navigation = useNavigation();

  // const handleCardPress = () => {
  //   navigation.navigate('OtherPage', {});
  // };

  return (
    <View style={styles.card}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.img}
            source={{
              uri: srcImg,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: 5}}>
        <Text style={styles.textauthor}>{author}</Text>
        <Text style={styles.text}>Description: {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 200,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  img: {
    width: 200,
    height: 100,
  },
  text: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  textauthor: {
    fontSize: 15,
    fontWeight: '900',
  },
});
