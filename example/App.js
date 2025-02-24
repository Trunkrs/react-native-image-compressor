/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ImageCompressor from '@trunkrs/react-native-image-compressor';
import * as Base64 from 'base-64'

import * as data from './data.json'

function base64Length(base64) {
  const buffer = Base64.decode(base64)
  return Math.round(buffer.length / 1024)
}

export default class App extends Component {
  state = {
    status: 'compressing...',
    compressedData1: null,
    compressedData2: null,
    compressedData3: null,
  };

  async componentDidMount() {
    try {
      const [
        compressedData1,
        compressedData2,
        compressedData3,
      ] = await Promise.all([
        ImageCompressor.compress(data.image1, {
          maxWidth: 1000,
          maxHeight: 1000,
          input: 'base64',
          output: 'jpg',
          quality: 0.9,
        }),
        ImageCompressor.compress(data.image2, {
          maxWidth: 1000,
          maxHeight: 1000,
          input: 'base64',
          output: 'jpg',
          quality: 0.9,
        }),
        ImageCompressor.compress(data.image3, {
          maxWidth: 1000,
          maxHeight: 1000,
          input: 'base64',
          output: 'jpg',
          quality: 0.9,
        }),
      ])

      this.setState({
        compressedData1,
        compressedData2,
        compressedData3,
        status: 'Compression done.',
      })
    } catch (error) {
      console.error(error)
      this.setState({status: `Error: ${error.message}`});
    }
  }

  render() {
    const {compressedData1, compressedData2, compressedData3} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ☆TRNReactNativeImageCompressor example☆
        </Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>

        <ScrollView style={styles.instructions}>
          <Text style={styles.instructions}>
            Original 1: ({base64Length(data.image1)} KB)
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${data.image1}`}} />
          <Text style={styles.instructions}>
            Compressed 1{!!compressedData1 && ` (${base64Length(compressedData1)} KB)`}:
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${compressedData1}`}} />

          <Text style={styles.instructions}>
            Original 2: ({base64Length(data.image2)} KB)
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${data.image2}`}} />
          <Text style={styles.instructions}>
            Compressed 2{!!compressedData2 && ` (${base64Length(compressedData2)} KB)`}:
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${compressedData2}`}} />

          <Text style={styles.instructions}>
            Original 3: ({base64Length(data.image3)} KB)
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${data.image3}`}} />
          <Text style={styles.instructions}>
            Compressed 3{!!compressedData3 && ` (${base64Length(compressedData3)} KB)`}:
          </Text>
          <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${compressedData3}`}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  scrollView: {
    minWidth: '100%',
    flex: 1,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    minWidth: '90%',
    height: Dimensions.get('screen').width * 0.8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.12)',
    resizeMode: 'cover',
  },
});
