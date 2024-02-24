import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICard} from '../../../interfaces/interfaces';
import {useNavigation} from '@react-navigation/native';

export default function Card({srcImg, name, author}: ICard) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('ImageScreen', {
      imageSrc: srcImg,
    });
  };
  return (
    <View style={styles.card}>
      <View>
        <TouchableOpacity onPress={() => handleCardPress()}>
          <Image
            style={styles.img}
            source={{
              uri: srcImg,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textbox}>
        <Text>
          Author: <Text style={styles.textauthor}>{author}</Text>
        </Text>
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
    borderRadius: 10,
  },
  textbox: {
    padding: 5,
  },
  img: {
    width: 200,
    height: 200,
    objectFit: 'cover',
  },
  text: {
    fontSize: 14,
  },
  textauthor: {
    fontSize: 14,
    fontWeight: '900',
  },
});
