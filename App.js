/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';

const App = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();

  const correctAccount = 'shaun779@gmail.com';
  const correctPassword = 'Asd12345';

  const correctDom = <Text style={{color:'#FFA6FF', fontSize:30}}>登入成功</Text>;
  const wrongDom = <Text style={{color:'#EA0000', fontSize:30}}>帳號或密碼錯誤</Text>

  const loginCheck = () => {
    if(account === correctAccount & password === correctPassword){
      return setMessage(correctDom)
    }else {
      return setMessage(wrongDom)
    };
  }

  return (
    <View style={styles.container}>
      <TextInput 
        maxLength={50}
        style={styles.inputBox}
        keyboardType='email-address'
        placeholder='請輸入帳號'
        onChangeText={(text) => setAccount(text)}
        value={account}
      />
      <TextInput 
        maxLength={8}
        style={styles.inputBox}
        keyboardType='numbers-and-punctuation'
        secureTextEntry='true'
        placeholder='請輸入密碼'
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {message}
      <TouchableOpacity style={styles.button} onPress={loginCheck}>
        <Text style={{color:'white', textAlign:'center', fontSize:25, fontWeight: 'bold', padding: 10}}>
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005757',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    height: 50,
    borderRadius: 0,
    borderColor: 'darkgray',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#00A600',
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 30
  }
});

export default App;
