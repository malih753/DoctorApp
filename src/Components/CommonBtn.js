import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function CommonBtn({w, h, txt, onClick, status}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{marginBottom: 10, alignSelf: 'center'}}>
      {status ? (
        <LinearGradient
          colors={['#380036', '#0CBABA']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#ffff', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#BeBeBe', '#BeBeBe']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            opacity: 0.5,
          }}>
          <Text style={{color: '#ffff', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
