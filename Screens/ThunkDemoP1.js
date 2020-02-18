import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// import {  } from "..";
import WithEmployee from '../Hoc/WithEmployee';
import WithLoader from '../Hoc/WithLoader';

class TDP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      firstTime: false,
    };
  }

  componentDidMount = () => {
    // this.setState({data: this.props.employee.temp});
    console.log('componentDidMount called', this);

    if (this.state.firstTime == false) {
      this.setState({firstTime: true});

      // this.props.TurnOnLoaderDispatch(false);
      this.props.GetEmpAPIDispatch();
      this.onEndReached();
    }
    let data = this.props.employee.temp;
    console.log('this.props.employee.temp :', data);
    this.setState({data: data});
  };

  // componentDidUpdate = () => {
  //   console.log('componentDidUpdate called ', this);
  //   let data = this.props.employee.temp;
  //   console.log('this.props.employee.temp :', data);
  //   this.setState({data: data});
  // };

  // componentWillUpdate = () => {
  //   console.log('componentWillUpdate called ', this);
  //   let data = this.props.employee.temp;
  //   console.log('this.props.employee.temp :', data);
  //   this.setState({data: data});
  // };
  /*error  in componentWillUpdate, componentDidUpdate

  error Invariant Violation: Maximum update depth exceeded. 
  This can happen when a component repeatedly calls setState inside componentWillUpdate 
  or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
  */

  // componentWillMount() {
  //   // this.props.TurnOnLoaderDispatch(true);
  //   console.log('componentWillMount called');

  //   let data = this.props.employee.temp;
  //   console.log('this.props.employee.temp :', data);
  //   this.setState({data: data});
  // }

  getdata = (index, taken) => {
    console.log('Getdata called');

    let start = index;
    let end = index + taken;
    this.props.GetFreqEmpDispatch(start, end);

    return this.props.employee.temp;
  };

  onEndReached = () => {
    console.log('onEndReached called');
    let data = this.state.data;
    let start = data.length;
    console.log(
      'data.length :' +
        data.length +
        'this.state.data.length :' +
        this.state.data.length +
        'this.props.employee.temp.length : ' +
        this.props.employee.temp.length,
    );
    let newData = data.concat(this.getdata(Number(start), Number(7)));
    // console.log('onend ', newData);
    this.setState({data: newData});
    // console.log(new )
  };

  render() {
    console.log(this.props.employee.temp);
    if (this.state.data.length == 0 && this.props.employee.temp.length != 0) {
      this.onEndReached();
    }
    console.log('State Data ', this.state.data);
    return (
      <View style={styles.container}>
        {/* <View style={([styles.container, styles.horizontal], {marginTop: 10})}>
           <ActivityIndicator size="large" color="#0000ff" /> 
           {this.props.loader == true && (
            <ActivityIndicator size="large" color="#00ff00" />
          )} 
          }<ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </View> */}
        <TouchableOpacity
          onPress={() => {
            // this.forceUpdate();
          }}>
          <Text>Hello</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginBottom: 5,
                minWidth: 350,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2AC062',
                display: 'flex',
                borderRadius: 10,
                // borderRadius: 5,
                shadowColor: '#2AC062',
                shadowOpacity: 0.4,
                shadowRadius: 20,
                shadowOffset: {height: 10, width: 5},
              }}
              onPress={() => {
                alert('button pressed');
              }}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'Emp NAme :' + item.id}
              </Text>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'Emp NAme :' + item.employee_name}
              </Text>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                {'salary :' + item.employee_salary}
              </Text>
            </TouchableOpacity>
          )}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.9}
        />
      </View>
    );
  }
}
export default WithLoader(WithEmployee(TDP));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
