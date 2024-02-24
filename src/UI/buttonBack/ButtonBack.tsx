import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

interface ButtonBackProps {
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonBack: React.FC<ButtonBackProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.back}> ← Go back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    color: 'black',
    fontWeight: '700',
    margin: 10,
    fontSize: 20,
  },
});

export default ButtonBack;
