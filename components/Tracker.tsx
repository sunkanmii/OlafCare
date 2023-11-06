import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { useSharedState } from '../store';
import Navbar from './Navbar';
import tw from 'twrnc';

export default function Tracker() {

  return (
    <View style={tw`flex w-full h-full`}>
      <Navbar/>
      <View>
        <Text>Demo text</Text>
      </View>
    </View>
  );
}
