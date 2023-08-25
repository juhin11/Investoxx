import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Empty = () => {
    <View style={styles.imgContainer}>
      <Image
        style={styles.img}
        source={{
          uri: "https://investoxx-assets.oss-ap-south-1.aliyuncs.com/noData.png",
        }}
        resizeMode="contain"
      />
      <TouchableOpacity style={{backgroundColor:"blue", paddingHorizontal:20,paddingVertical:10,marginTop:20}}>
        <Text style={styles.text}>Add +</Text>
      </TouchableOpacity>
    </View>
  
}

export default Empty

const styles = StyleSheet.create({
    imgContainer: {
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
    },
  
    img: {
      width: "50%",
      height: "50%",
    },
  
    text: {
      fontSize: 32,
      fontWeight: "700",
      color:"white"
    },
  
    tagLine: {
      fontSize: 20,
    },
  });