import React, { useState, useEffect, useRef } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Navbar() {

  return (
      <View style={tw`flex w-full h-full items-center justify-between flex-wrap bg-teal-500 p-6`}>
        <View style={tw`flex items-center flex-shrink-0 text-white mr-6`}>
          <Text style={tw`font-semibold text-xl tracking-tight`}>OlafCare</Text>
        </View>
        <View style={tw`block lg:hidden`}>
          <Pressable style={tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}>
            <svg style={tw`fill-current h-3 w-3`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </Pressable>
        </View>
        <View style={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <View style={tw`text-sm lg:flex-grow`}>
            <Pressable style={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}>
              <Text>
                Docs
              </Text>
            </Pressable>
            <Pressable style={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}>
              <Text>
                Examples
              </Text>
            </Pressable>
            <Pressable style={tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white`}>
              <Text>
                Blog
              </Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}>
              <Text>
                Download
              </Text>
              </Pressable>
          </View>
        </View>
      </View>
  );
}
