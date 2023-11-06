import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tracker from './components/Tracker';
import { SharedStateProvider } from './store';


export default function App() {
  return (
    <SharedStateProvider>
      <Tracker/>
    </SharedStateProvider>
  );
}
