import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../Components/Header';

const Completed = () => {
  return (
    <View style={StyleSheet.container}>
      <Header
        icon={require('../../src/Images/back.png')}
        title={'Completed Appointments'}
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../../src/Images/doctor.png')}
                  style={styles.doc}
                />
                <View>
                  <Text style={styles.name}>{'Doctor Rohal'}</Text>
                  <Text style={styles.time}>{'08:00-10:00'}</Text>
                </View>
                <Text style={styles.status}>{'Completed'}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  doc: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 5,
  },
  status: {
    marginLeft: 37,
    marginTop: 23,
    backgroundColor: 'white',
    color: 'green',
    height: 45,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    fontSize: 15,
  },
});
