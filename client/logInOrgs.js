import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Button} from 'react-native';
import OrgProfile from './orgprofile';
import Navbar from './navbar';


export default class logInOrgs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
      signedIn: false,
      orgInfo: []
    };
    fetch('https://thawing-garden-23809.herokuapp.com/orgs/signout',
      {method:'GET'})
  }

submitSignIn () { 
      
     fetch('https://thawing-garden-23809.herokuapp.com/orgs/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            name:this.state.name ,
            password:this.state.password})
        }).then((response) => response.json())
           .then((data) => {
            console.log('------------------------------------>')
            console.log(data) 
              this.state.orgInfo[0] = data;
              this.setState({signedIn: true})
          })
            .catch((error) => {
              console.error(error);
     });
}
  
goToProfile () {
  if(this.state.signedIn)
    return <Navbar info = {this.state.orgInfo[0]} profile = {"org"}/>;

  else{
    return <View style = {{marginTop:200,  alignItems: 'center' }}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10,fontSize:30}}> Sign In </Text>
     <Text style = {{marginRight:80}}>Orgenization name:</Text>
      <TextInput
          style={{height: 50, width: 200 ,alignItems: 'center'}}
          returnKeyType='next'
          placeholder="Enter Yuor Username"
          onChangeText={(name) => this.setState({name})}
          value={this.state.username}
        />
        <Text style = {{marginRight:130}}>Password:</Text>
        <TextInput
          returnKeyType='go'
          style={{height: 50, width: 200,alignItems: 'center'}}
          placeholder="Enter Your Password"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title = "submit" onPress = {this.submitSignIn.bind(this)}/>
      </View>
    }
}



  render() {
    return (
      <View>
      {this.goToProfile()}
      </View>
    );
  }
}
