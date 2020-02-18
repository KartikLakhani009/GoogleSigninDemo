import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import conf from '../assets/Config/conf';

class GSigninD3 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    GoogleSignin.configure(conf);
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      return this.props.navigation.navigate('GwelScreenD3');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        alert(error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>GSigninD3</Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this.signIn()}
        />
      </View>
    );
  }
}
export default GSigninD3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
