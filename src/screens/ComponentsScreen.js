import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
  const greeting = 'This is another component'
  return (
      <>
          <Text style={styles.textStyle}>This is component screen</Text>
          <Text>{greeting}</Text>
      </>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }

})

export default ComponentScreen
