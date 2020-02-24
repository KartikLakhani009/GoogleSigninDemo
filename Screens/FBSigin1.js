import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';

import {LoginManager, AccessToken} from 'react-native-fbsdk';

class FBSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  signin = () => {
    let user;
    Platform.OS = 'android' ? LoginManager.setLoginBehavior('web_only') : null;
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(async data => {
            console.log(data);
            await fetch(
              'https://graph.facebook.com/v2.5/me?fields=id,first_name,last_name,email,picture.type(large)&access_token=' +
                data.AccessToken,
            ).then(res => {
              user = res.json();
              console.log('user : ', user);
              alert('Login Sucessfully');
            });
          });
        }
      },
      function(error) {
        console.log('Login fail with error: ', error);
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
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
          onPress={() => this.signin()}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
            Sign In With FB
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default FBSign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
