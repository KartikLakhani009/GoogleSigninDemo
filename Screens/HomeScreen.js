import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import WithLoader from '../Hoc/WithLoader';

const list = [
  {
    id: 101,
    name: 'Thunk Demo redux here',
    screen: 'ThunkDemo',
  },
  {
    id: 102,
    name: 'Google Sign in Demo ',
    screen: 'GSigninD3',
  },
];

class HomeScreen extends Component {
  // combineFuncCalled = item => {
  //   this.props.TurnOnLoaderDispatch(true);
  //   setTimeout(() => this.props.navigation.navigate(item.screen), 3000);

  //   // this.props.navigation.navigate(item.screen);
  //   this.props.TurnOnLoaderDispatch(false);
  // };

  combineFuncForAPI = item => {
    this.props.navigation.navigate(item.screen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from screen Home</Text>
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  minWidth: 150,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#2AC062',
                  display: 'flex',
                  borderRadius: 5,
                  shadowColor: '#2AC062',
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  shadowOffset: {height: 10, width: 5},
                }}
                // onPress={() => this.combineFuncCalled(item)}
                onPress={() => this.props.navigation.navigate(item.screen)}>
                <View>
                  <Text
                    style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
export default WithLoader(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
