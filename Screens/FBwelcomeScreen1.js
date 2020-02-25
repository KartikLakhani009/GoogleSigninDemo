import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FBWel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FBWel</Text>
      </View>
    );
  }
}
export default FBWel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
