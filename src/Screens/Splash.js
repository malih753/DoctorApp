import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/Images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.doct}>Doctor APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8dbab9',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: 'white',
  },
  doct: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
  },
});
