import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CommonBtn from '../Components/CommonBtn';

const CallAmb = () => {
  return (
    <View style={styles.container}>
      <Header
        icon={require('../../src/Images/back.png')}
        title={'Call Ambulance'}
      />
      <TextInput placeholder="Address" style={styles.add} />
      <CommonBtn w={200} h={50} txt={'Call Now'} status={true} />
    </View>
  );
};

export default CallAmb;
const styles = StyleSheet.create({
  container: {flex: 1},
  add: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
});
