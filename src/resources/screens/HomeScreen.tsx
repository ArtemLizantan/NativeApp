import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/header/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useActions} from '../../hooks/useActions';
import Card from '../../components/home/card/Card';
import {IUnsplashPhoto} from '../../interfaces/interfaces';

export default function HomeScreen() {
  const {photos} = useSelector((state: RootState) => state.photos);
  console.log(photos);

  const {getPhotos} = useActions();

  useEffect(() => {
    if (!photos.length) {
      getPhotos('20');
    }
  }, [getPhotos, photos.length]);

  return (
    <ScrollView>
      <Header />
      <View style={styles.containerCard}>
        {photos.map(
          ({
            urls: {small},
            user: {name},
            id,
            alt_description,
          }: IUnsplashPhoto) => (
            <Card
              srcImg={small}
              name={alt_description}
              author={name}
              key={id}
            />
          ),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
