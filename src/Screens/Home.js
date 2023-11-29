import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import CommonBtn from '../Components/CommonBtn';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Header
            title={'Doctor App'}
            icon={require('../../src/Images/logo.png')}
          />
          <Image
            source={require('../../src/Images/doc.jpg')}
            style={styles.banner}
          />
          <Text style={styles.heading}>Select Category</Text>
          <View style={{marginTop: 10}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#E0D2C7', '#44B09E']}
                      style={styles.linearGradient}>
                      <Text style={styles.cat}>{'Category' + index + 1}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text style={styles.heading}>Top Rated Doctors</Text>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <FlatList
              data={[1, 1, 1, 1, 1, 1]}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.docItem}>
                    <Image
                      source={require('../../src/Images/doctor.png')}
                      style={styles.img}
                    />
                    <Text style={styles.docname}>Doctor {index + 1}</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        alignSelf: 'center',
                        color: 'green',
                        marginTop: 5,
                        padding: 5,
                        backgroundColor: '#f2f2f2',
                        borderRadius: 10,
                      }}>
                      Skin Specialist
                    </Text>
                    <Text
                      style={[
                        styles.docname,
                        {
                          color: index / 2 == 0 ? 'green' : 'red',
                          opacity: index / 2 == 0 ? 1 : 0.5,
                        },
                      ]}>
                      {' '}
                      {index / 2 == 0 ? 'Avaiable' : 'Busy'}
                    </Text>
                    <CommonBtn
                      w={140}
                      h={40}
                      status={index / 2 == 0 ? true : false}
                      txt={'Book Appointment'}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate('BookAppoint');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../../src/Images/tick.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../../src/Images/time.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmb');
          }}>
          <Image
            source={require('../../src/Images/ambulance.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: '70%',
    height: 220,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  linearGradient: {
    width: 90,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cat: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '44%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    margin: 10,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  docname: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  bottomView: {
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
