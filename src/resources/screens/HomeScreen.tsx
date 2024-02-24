import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useActions} from '../../hooks/useActions';
import Card from '../../components/home/card/Card';
import {IUnsplashPhoto} from '../../interfaces/interfaces';

export default function HomeScreen() {
  const {photos} = useSelector((state: RootState) => state.photos);

  const {getPhotos} = useActions();

  useEffect(() => {
    if (!photos.length) {
      getPhotos('10');
    }
  }, [getPhotos, photos.length]);

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        {photos.map(
          ({
            urls: {regular},
            user: {name},
            id,
            alt_description,
          }: IUnsplashPhoto) => (
            <Card
              srcImg={regular}
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
    paddingTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
