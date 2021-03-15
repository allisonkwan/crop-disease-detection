
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

export default class App extends React.Component {
    state = {
        photo: null,
    }
    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibraryAsync(options, (response) =>{
            // console.log("response",response);
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    };

    render() {
      const { photo } = this.state;
      return (
          <View style={ styles.container }>
              <Text style={styles.boldText}>Crop Disease Detector</Text>
              <View style = {styles.white}>
              </View>
              <View style = {styles.gray}>
              </View>
              {photo && (
                  <Image
                      source={{ uri: photo.uri }}
                      style={{width: 180, height: 200 }}
                  />
              )}
                <Button
                  title="Upload Image Here"
                  color="#000000"
                  onPress={this.handleChoosePhoto}
                />
          </View>
      );
  }
}

const styles = StyleSheet.create({ // <View style={styles.container}>
  container: {
    flex: 1,
    backgroundColor: '#00ffff', // teal background color
    justifyContent: 'center',
      alignItems: "center"
  },
    boldText: {
      fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        top: 20,
        left: 20,
        position: 'absolute'
    },
    white: {
      backgroundColor: '#ffffff',
        top: 70,
        left: 20,
        width: 280,
        height: 600,
        position: 'absolute'
    },
    gray: {
        backgroundColor: '#BEBEBE',
        top: 180,
        left: 65,
        width: 180,
        height: 200,
        position: 'absolute'
    }
});
