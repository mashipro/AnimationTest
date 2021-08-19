import React, {useRef, useEffect} from 'react';
import {useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

const Chapter2 = () => {
  const translation = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.Value(0)).current;
  const translation4 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translation5 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const opacity1 = useRef(new Animated.Value(1)).current;
  const opacity2 = useRef(new Animated.Value(1)).current;
  const opacity3 = useRef(new Animated.Value(1)).current;
  const opacity4 = useRef(new Animated.Value(1)).current;
  const opacity5 = useRef(new Animated.Value(1)).current;
  const [isBounced, setIsBounced] = useState(false);
  const size = 100;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: screenWidth - size,
      delay: 1000,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleObaho() {
    Animated.timing(translation2, {
      toValue: isBounced ? screenWidth - size : 0,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
    Animated.spring(translation3, {
      toValue: isBounced ? screenWidth - size : 0,
      speed: 1,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.spring(translation4.x, {
        toValue: isBounced ? screenWidth - size : 0,
        useNativeDriver: true,
      }),
      Animated.spring(translation4.y, {
        toValue: isBounced ? screenHeight / 2 - size : 0,
        useNativeDriver: true,
      }),
    ]).start();
    Animated.parallel([
      Animated.spring(translation5.x, {
        toValue: isBounced ? screenWidth - size : 0,
        useNativeDriver: true,
      }),
      Animated.spring(translation5.y, {
        toValue: isBounced ? screenHeight / 2.5 - size : 0,
        useNativeDriver: true,
      }),
    ]).start();
    Animated.stagger(1000, [
      Animated.timing(opacity1, {
        toValue: !isBounced ? 1 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity2, {
        toValue: !isBounced ? 1 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity3, {
        toValue: !isBounced ? 1 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity4, {
        toValue: !isBounced ? 1 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity5, {
        toValue: !isBounced ? 1 : 0,
        useNativeDriver: true,
      }),
    ]).start();
    setIsBounced(!isBounced);
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleObaho()}
        style={{backgroundColor: 'red', padding: 10}}>
        <Text>OBAHO!</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'gold',
          transform: [{translateX: translation}],
          opacity: opacity1,
        }}>
        <Text>Bounce C1</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'skyblue',
          transform: [{translateX: translation2}],
          opacity: opacity2,
        }}>
        <Text>Bounce C1</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'tomato',
          transform: [{translateX: translation3}],
          opacity: opacity3,
        }}>
        <Text>Spring C2</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'red',
          transform: [
            {translateX: translation4.x},
            {translateY: translation4.y},
          ],
          opacity: opacity4,
        }}>
        <Text>sequential C2</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'blue',
          transform: [
            {translateX: translation5.x},
            {translateY: translation5.y},
          ],
          opacity: opacity5,
        }}>
        <Text>paralel C2</Text>
      </Animated.View>
    </View>
  );
};

export default Chapter2;

const styles = StyleSheet.create({});
