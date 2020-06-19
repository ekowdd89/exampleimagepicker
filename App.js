import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
export default function App() {
  const [selectImg, setSelectedImg] = React.useState(null)
  let openImage = async () =>{
    let permission = await ImagePicker.requestCameraRollPermissionsAsync();


    if(permission.granted === false){
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync()

    if(picker.cancelled ===true){
      return;
    }
    setSelectedImg({localUri:picker.uri})
    console.log(picker)
  }

  return (
    <View style={styles.container}>
        {
          selectImg !== null ?  (
            <Image 
              style={styles.image} 
              source={{uri:(selectImg.localUri !== null) ? selectImg.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'}} />
          ) : <Text>Kosong</Text>
        }
      <TouchableOpacity 
        onPress={openImage}
        style={styles.button}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderRadius:10,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  image:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
});
