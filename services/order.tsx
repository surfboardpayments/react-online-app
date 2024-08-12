import{Alert,Linking} from "react-native"
import { InAppBrowser } from 'react-native-inappbrowser-reborn'

export class OrderService {
///URl needs to be changed to Production   
///creates an order using api 
public static async createOrder(orderAmount: string): Promise<string>{
    const vatPercentage = 10;
    const convertedOrderAmount = (parseInt(orderAmount)*100)
    const calTaxAmount = (convertedOrderAmount - (convertedOrderAmount / (1 + (vatPercentage / 100)))).toFixed(0)
    const url = "https://lithium.surfgw.com/api/orders"

    const data = JSON.stringify(     
            {
                "terminal$id": "82730f34e8fa300504",
                "type": "purchase",
                "referenceId": "orderabc",
                "orderLines": [
                  {
                    "id": "1234",
                    "name": "Bucket hat",
                    "quantity": 1,
                    "itemAmount": {
                      "regular": convertedOrderAmount,
                      "total": convertedOrderAmount,
                      "currency": "SEK",
                      "tax": [
                        {
                          "amount": calTaxAmount,
                          "percentage": vatPercentage,
                          "type": "vat"
                        }
                      ]
                    }
                  }
                ],
                "totalOrderAmount": {
                  "total": convertedOrderAmount,
                  "regular": convertedOrderAmount,
                  "currency": "SEK",
                  "tax": [
                    {
                      "amount": calTaxAmount,
                      "percentage": vatPercentage,
                      "type": "vat"
                    }
                  ]
                }
              });
      const response = await fetch(
            url,
            {
                method: "POST",
                body:data,
                headers: {
                    "API-KEY": "YOUR_API_KEY",
                    "API-SECRET": "YOUR_API_SECRET",
                    "MERCHANT-ID": "YOUR_MERCHANT_ID",
                    "Content-Type": "application/json"
                }
            }
          )     
        const responseData = await response.json();
        var paymentLink:string = "";


if (response.ok&&responseData!=null) {
  console.log(response.status)
  paymentLink = responseData["data"]["paymentPageLink"]

  Alert.alert("OrderCreated Successfully",paymentLink, [  
     
    {text: 'OK', onPress: () => ""
    },  
    {text: 'Open Link', onPress: () => OrderService.openInAppBrowser(paymentLink) },  

]);
    
    
}else{
  Alert.alert("Order Creation failed","", [  
     
    {text: 'OK', onPress: () => ("Order Creation failed")},  
]);
     
}   
 return paymentLink;
}
///Opens a in app browser 
public static async  openInAppBrowser(url: string){
  const canOpen : Boolean = await InAppBrowser.isAvailable()
  if (canOpen) {
  const result = await  InAppBrowser.open(url,{
    //Iso Properties
    dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#FF04032E',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#FF04032E',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        animations:{startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right'}
  }) 
    } else {
      Linking.openURL(url);
    }
}

}

