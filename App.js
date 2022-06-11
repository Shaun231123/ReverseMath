/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import Props from 'prop-types';
import MyButton from './src/components/Button';
import ButtonStyle from './src/Styles/ButtonStyle';

const App = () => {

  return (
    <View style={styles.container}>
      {/*層疊方式進行css修改*/}
      <MyButton
        buttonStyle={[ButtonStyle.button, {backgroundColor: '#FF60AF'}]}
        textStyle={ButtonStyle.titleText}
        title={'Enter'}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005757',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
