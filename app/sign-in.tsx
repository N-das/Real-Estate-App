import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{uri:"https://img.freepik.com/premium-photo/model-house-realestate_1174912-5904.jpg"}} style={styles.logo} resizeMode="cover"/>
        <View style={{marginHorizontal:"auto", alignItems:"center", marginTop:20}}>
          <Text style={{color:"#bababa" ,fontSize:15}}>Welcome To Real Estate</Text>
          <Text style={{color:"black", fontWeight:"bold", fontSize:25}}>Lets Get You Closer To</Text>
          <Text style={{color:"blue", fontSize:25, fontWeight:"bold"}}>Your Dream Home</Text>
        </View>
        <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png',
          }}
          style={styles.image}
        />
        <Text style={styles.buttonText}>Continue With Google</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo:{
    width:"100%",
    height:370
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop:20
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: 240,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Required for Android shadow
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
})

export default signIn