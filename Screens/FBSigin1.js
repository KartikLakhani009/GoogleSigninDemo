import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';

class FBSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      token: '',
      profile_pic: '',
    };
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('Success fetching data: ' + result.toString());
    }
  };

  signin = () => {
    var user = this;

    // if(Login)
    let res = LoginManager.logOut();
    // LoginManager.getDefaultAudience(user)
    console.log('Logout res :', res);
    // .then(res => console.log('Logout  res : ', res));
    Platform.OS = 'android' ? LoginManager.setLoginBehavior('web_only') : null;
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(async data => {
            console.log(data);
            const infoRequest = new GraphRequest(
              '/me?fields=name,email,picture.type(large)',
              null,
              (error, result) => {
                if (error) {
                  console.log('Error fetching data: ', error);
                } else {
                  alert(JSON.stringify(result));
                  console.log(
                    'Success fetching data: ',
                    JSON.stringify(result),
                  );
                  //   user = JSON.stringify(result);
                  user.setState({user_name: 'Welcome' + ' ' + result.name});
                  user.setState({token: 'User Token: ' + ' ' + result.id});
                  user.setState({profile_pic: result.picture.data.url});
                }
              },
            );

            new GraphRequestManager().addRequest(infoRequest).start();

            //second way
            // await fetch(
            //   'https://graph.facebook.com/v2.5/me?fields=id,first_name,last_name,email,picture.type(large)&access_token=' +
            //     data.AccessToken,
            // ).then(res => {
            //   user = res.json();
            //   console.log('user : ', user);
            //   alert('Login Sucessfully');
            // });
          });
        }
      },
      function(error) {
        console.log('Login fail with error: ', error);
      },
    );

    // this.setState({user_name: 'Welcome' + ' ' + user.name});
    // this.setState({token: 'User Token: ' + ' ' + user.id});
    // this.setState({profile_pic: user.picture.data.url});
    console.log('this.state.user_name : ', this.state.user_name);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.profile_pic ? (
          <Image
            source={{uri: this.state.profile_pic}}
            style={{width: 200, height: 200}}
          />
        ) : null}
        <Text style={styles.text}> {this.state.user_name} </Text>
        <Text> {this.state.token} </Text>
        <TouchableOpacity
          style={styles.buttonGreen}
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
  buttonGreen: {
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
  },
});
