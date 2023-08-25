import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    }


})