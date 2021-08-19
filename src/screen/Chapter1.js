import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

const Chapter1 = () => {
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const size = 100;
  const screenWidth = Dimensions.get('window').width;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: screenWidth - size,
      delay: 1000,
      duration:5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleObaho() {
    Animated.timing(translation2, {
      toValue: screenWidth - size,
      delay: 1000,
      duration:5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'gold',
          transform: [{translateX: translation}],
        }}></Animated.View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'gold',
          transform: [{translateX: translation2}],
        }}></Animated.View>

      <TouchableOpacity onPress={() => handleObaho()}>
        <Text>OBAHO!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Chapter1;

const styles = StyleSheet.create({});
