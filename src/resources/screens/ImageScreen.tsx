import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonBack from '../../UI/buttonBack/ButtonBack';

const ImageScreen = ({route}) => {
  const {imageSrc} = route.params;
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ButtonBack onPress={() => navigation.goBack()} />

      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: imageSrc,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  back: {
    color: 'black',
    fontWeight: '700',
    margin: 10,
    fontSize: 20,
  },
});

export default ImageScreen;
