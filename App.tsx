import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Env from './src/configs/env.json';


export default function App() {
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(Env)}</Text>
    </SafeAreaView>
  )
}
