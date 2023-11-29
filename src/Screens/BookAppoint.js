import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CommonBtn from '../Components/CommonBtn';

export default function BookAppoint({navigation}) {
  const [select, setSelect] = useState(-1);
  const [selectGen, setSelectGen] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);

  const [name, setName] = useState(0);

  const data = Array.from({length: 31}, (_, index) => index + 1);

  const [slots, setSlots] = useState([
    {slot: '10:00-12:00PM', selected: false},
    {slot: '12:00-02:00PM', selected: false},
    {slot: '02:00-04:00PM', selected: false},
    {slot: '04:00-06:00PM', selected: false},
    {slot: '06:00-08:00PM', selected: false},
    {slot: '08:00-10:00PM', selected: false},
  ]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelectedDay(item)}
      style={[
        styles.numberContainer,
        {
          backgroundColor: item === selectedDay ? '#0CBABA' : 'white',
          marginHorizontal: 10,
          padding: 15,
        },
      ]}>
      <Text
        style={[
          styles.numberText,
          {
            color: item === selectedDay ? 'white' : 'blue',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header
          icon={require('../../src/Images/back.png')}
          title={'Book Appointment'}
        />
        <Image
          source={require('../../src/Images/doctor.png')}
          style={styles.doc}
        />
        <Text style={styles.name}>Doctor Jack</Text>
        <Text style={styles.spec}>Skin Doctor</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{width: '100%', height: 55, borderRadius: 20}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.toString()}
            horizontal
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={[
              '10:00-12:00PM',
              '12:00-02:00PM',
              '02:00-04:00PM',
              '04:00-06:00PM',
              '06:00-08:00PM',
              '08:00-11:00PM',
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.time,
                    {borderColor: select == item ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    setSelect(item);
                  }}>
                  <Text style={{color: select == item ? 'blue' : 'black'}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter Name'}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.gender}>
          <TouchableOpacity
            style={[
              styles.genview,
              {
                borderWidth: 0.5,
                borderColor: selectGen == 0 ? 'blue' : 'black',
              },
            ]}
            onPres={() => {
              setSelectGen(0);
            }}>
            <Image
              source={require('../../src/Images/man.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genview,
              {
                borderWidth: 0.5,
                borderColor: selectGen == 1 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectGen(1);
            }}>
            <Image
              source={require('../../src/Images/woman.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginBottom: 10}}>
          <CommonBtn
            w={200}
            h={45}
            txt={'Book Now'}
            status={true}
            onClick={() => {
              navigation.navigate('Success', {
                gender: selectGen,
                username: name,
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  doc: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  spec: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  time: {
    width: '40%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '94%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 0.5,
    paddingLeft: 10,
  },
  gender: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  genview: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainer: {
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomColor: '#ccc',
    elevation: 5,
  },
  numberText: {
    fontSize: 18,
  },
});
