import React from "react";
import { StyleSheet, Text, View} from "react-native";
import allStyle from "./style.js";


// const styles = StyleSheet.create(allStyle.userprofile);


export default class Orgprofile extends React.Component {

  constructor(props) {
    console.log(props)
    super(props);
    this.state = {

      "org_id" : props.org_id,
      "orgDetails" : -1,


    };


  }
  // myFunction(){
  //   return <Createevents/>
  // }
  render() {

    if (this.state.orgDetails !== -1) {
      return (
        <View>
        <Text>
          {this.props.info[0].name}
        </Text>
        
        </View>
      );


    }


    return (
      <View >
        <Text>

          this is org profile {this.state.org_id}
          // <Button title="createevent" onPress={this.myFunction.bind(this)}/>

        </Text>
      </View>
    );
  }
}