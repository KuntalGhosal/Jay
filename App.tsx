import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Mic} from './Images/icons/Mic';

import {TextInput} from 'react-native';
import {Camera} from './Images/icons/Camera';

// import Dropdown1 from './Component/Dropdown1';

declare const global: {HermesInternal: null | {}};
const App = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={{backgroundColor: '#E5E5E5', height: '90%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              borderBottomColor: 'gray',
            }}>
            <Text
              style={{fontSize: 15, fontStyle: 'normal', fontWeight: 'bold'}}>
              Roadster 007
            </Text>
            <Text style={{color: 'gray', fontSize: 13}}>
              Vechile ID VH1234567
            </Text>
          </View>
          <View style={{backgroundColor: '#FFFFFF', marginTop: 5}}>
            <TextInput
              style={{
                height: 150,
                // borderWidth: 1,
                // borderBottomColor: '#FFFFFF',
                // borderColor: 'gray',
                textAlign: 'auto',
              }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Describe the issue here"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
              marginTop: 1,

              borderBottomColor: 'black',
            }}>
            <View
              style={{
                borderBottomWidth: 0,
                borderColor: 'gray',
                backgroundColor: '#FFFFFF',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  paddingBottom: 5,
                  marginLeft: 10,
                }}>
                Record Voice Message
              </Text>
              <Text style={{color: 'gray', paddingBottom: 20, marginLeft: 10}}>
                File size limit 1 MB
              </Text>
            </View>
            <View style={{marginTop: 28, marginRight: 10}}>
              <Mic />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
              marginTop: 8,
            }}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: 'gray',
                marginTop: 5,
                backgroundColor: '#FFFFFF',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  paddingBottom: 5,
                  marginLeft: 10,
                }}>
                Attach Photos
              </Text>
              <Text style={{color: 'gray', paddingBottom: 20, marginLeft: 10}}>
                File size limit 1 MB each
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Camera />
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#AFAFAF',
                height: 40,
                width: '40%',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 8,
              }}>
              <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Text style={{color: '#142F6A', fontSize: 15}}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
