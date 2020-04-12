import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
  const greeting = 'This is another component'
  const element = <Text>This is text element</Text>
  return (
      <>
          <Text style={styles.textStyle}>This is component screen</Text>
          <Text>{greeting}</Text>
          {element}
      </>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }

})

export default ComponentScreen
