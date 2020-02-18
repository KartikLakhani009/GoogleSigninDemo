import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {GoogleSignin, statusCodes} from 'react-native-google-signin';

class GwelScreenD3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {},
    };
  }

  async componentDidMount() {
    await GoogleSignin.getCurrentUser()
      .then(res => {
        let u = res.user;
        this.setState({userinfo: u});
      })
      .catch(err => console.log('Error : ', err));
  }

  Logout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut().then(res => {
        console.log(res);
        this.setState({userinfo: {}});
        return this.props.navigation.navigate('Home');
      });
    } catch (error) {
      console.error('Error : ', error);
    }
  };

  render() {
    const {userinfo} = this.state;
    return (
      <View style={styles.container}>
        <Text>GwelScreenD3</Text>
        <Text>{'welcome ' + userinfo.name}</Text>
        <Image
          style={{width: 400, height: 400}}
          source={{uri: userinfo.photo}}
        />
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
          onPress={() => this.Logout()}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Logout from Google Account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default GwelScreenD3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
