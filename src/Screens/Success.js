import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Success = ({navigation, route}) => {
  const {gender, username} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/Images/checked.png')}
        style={styles.sucess}
      />

      <Text style={styles.msg}>{'Your Appointment Sucessfully Booked'}</Text>
      <TouchableOpacity
        style={styles.goto}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <View style={styles.data}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 15,
            color: 'green',
          }}>
          {gender}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 15,
            color: 'blue',
          }}>
          {username}
        </Text>
        <Image
          source={require('../../src/Images/patient.png')}
          style={{width: 42, height: 42, marginTop: 13}}
        />
      </View>
    </View>
  );
};

export default Success;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sucess: {
    width: 100,
    height: 100,
  },
  msg: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
  },
  goto: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 0.5,
  },
  data: {
    width: '70%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,

    paddingHorizontal: 20,
    paddingLeft: 20,
    height: 70,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
