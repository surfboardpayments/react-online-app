import { StyleSheet } from "react-native";

export class Styles{
    static  styles = StyleSheet.create({
        appButtonContainer: {
          elevation: 8,
          backgroundColor: "#009688",
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 12
        },
        separator: {
          marginVertical: 20,
        },
        buttonStyle: {
          justifyContent: "center",
          height: 100,
          paddingHorizontal: 20,
          borderRadius: 12,
          alignContent:"center",
        },
        image: {
          flex: 1,
          justifyContent: 'center',
        },
        text: {
          color: 'white',
          fontSize: 20,
          lineHeight: 84,
          fontWeight: 'bold',
          textAlign: 'center',
         
        },
        logoStyling :{
          height: 70,
          width : 70,
          justifyContent:"center",
         
      
        },
        logoViewStyling :{
          alignItems: "center",
         
        },
        mainStyle: {
          flex: 1,
        },
        textInput: {
          color: "white",
          height: 45,
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 12,
          paddingHorizontal: 10,
        },
      });
}