import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
