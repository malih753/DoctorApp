import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Header({title, icon}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back}>
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
    paddingLeft: 20,
    alignItems: 'center',
  },
  back: {
    width: 24,
    height: 24,
  },
  back: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
