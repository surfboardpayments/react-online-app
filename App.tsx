/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {OrderService} from "./services/order"
import React, { useState } from 'react';
import { Styles } from "./styles/styles";
import {
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';


function App(): React.JSX.Element {
  const [text,setText] = useState("");
  return (

    <View style={ Styles.styles.mainStyle}>
    <ImageBackground source={require('./assets/test_payment_background.png')} resizeMode="cover" style={Styles.styles.image}>

    <View style ={Styles.styles.logoViewStyling}>
      <Image
       style = {Styles.styles.logoStyling}
        source={require('./assets/surfLogo.png')}
      />
    </View>

    <View>
      <Text style={Styles.styles.text}>
       Create online order
      </Text>
    </View>


    <View > 
      <TextInput
        autoFocus = {true}
        style={Styles.styles.textInput}
        onChangeText={newText=>setText(newText)}
        value={text}
        defaultValue= {text}
        placeholder="Enter a amount"
        placeholderTextColor={Styles.styles.textInput.borderColor}
        keyboardType="numeric"
      />
    </View>


    <View style= {Styles.styles.buttonStyle} >
    <Button 
    onPress={() =>{ 
      if (text!="") {
        OrderService.createOrder(text)
        setText("")
      }
     
      
    }}
    title="Create an Order"
    color="#808080"
    />
    </View>

    </ImageBackground>
  </View>

  );
}
export default App;


