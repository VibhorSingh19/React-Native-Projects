import React,{useState} from 'react'
import { Alert,StyleSheet, Text, View ,TextInput, LogBox,Image,TouchableOpacity, ScrollView} from 'react-native'
// import Snackbar from 'react-native-snackbar';
import SnackBar from 'react-native-snackbar-component'
const CurrencyVal={
    US            :0.013659, 	
    Euro          :0.011228, 	
    British       :0.009638, 	
    Australian    :0.017534, 	
    Canadian      :0.016451, 	
    Singapore  	  :0.018202, 	
    Swiss  	      :0.012324, 	
    Malaysian     :0.056363, 	
    Japanese  	  :1.491959, 	
}

// US                 :'0.013659', 	
// 'Euro'              :'0.011228', 	
// 'British Pound'     :'0.009638', 	
// 'Australian Dollar' :'0.017534', 	
// 'Canadian Dollar'   :'0.016451', 	
// 'Singapore Dollar' 	:'0.018202', 	
// 'Swiss Franc' 	    :'0.012324', 	
// 'Malaysian Ringgit' :'0.056363', 	
// 'Japanese Yen' 	    :'1.491959', 	


export default function Calculator() {
    const [textbox,useTextbox]=useState()
    const [resultbox,useResultbox]=useState()
    
    const buttonHandler=(val)=>{
        if(!textbox)
        {
            // return Snackbar.show({
            //     text: 'Invalid/No Input',
            //     backgroundColor:'#EA7773',
            //     textColor:'#FFFFF',
            //   });
            // <SnackBar 
            //  visible={true} 
            //  textMessage="Invalid/No Input" 
            //  actionHandler={()=>{console.log("snackbar button clicked!")}} 
            //  actionText="Okay"/>
            Alert.alert(
                "",
                "Invalid Input",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
          
             console.log('NO value...')
             useResultbox(0)
        }
        else{
            useResultbox((CurrencyVal[val]*parseFloat(textbox)).toFixed(3))
        }
        
    }
    return (
        <ScrollView
        keyboardDismissMode='true'
        >
        <View style={styles.container}> 
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <View style={styles.textbox}>
                <Text style={styles.text}>{resultbox}</Text>
        </View>
        <View style={styles.textbox}>
                <TextInput style={styles.text}
                    keyboardType='number-pad'
                    placeholder="Enter the INR value"
                    placeholderTextColor='#cbd7df'
                    onChangeText={(val)=>{useTextbox(val)}}
                >
                </TextInput>
        </View>
        <View style={styles.buttonContainer}>
        {
            Object.keys(CurrencyVal).map((currency)=>(
                <TouchableOpacity 
                key={currency}
                onPress={()=>{
                    buttonHandler(currency)
                }}
                style={styles.button}>
                    <Text style={styles.text}>{currency}</Text>
                </TouchableOpacity>
        
            ))
        }
        
        </View>
           </View>
   </ScrollView>
     )
}

const styles = StyleSheet.create({
    container:{
        textAlign:'center',
        justifyContent:'center'
    },
    textbox:{
        justifyContent:'center',
        textAlignVertical:'center',
        width:'85%',
        height:60,
        borderColor:'black',
        marginTop:40,
        marginLeft:30,
        backgroundColor:'#407090',
        borderRadius:10

    },
    text:{
        color: '#ffffff',
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold'
    },
    logo:{
        marginTop:40,
        marginLeft:'37%',
        width:100,
        height:100
    },
    button:{
        margin:6,
        textAlign:'center',
        justifyContent:'center',
        width:'30%',
        height:100,
        backgroundColor:'#0e4163',
        borderColor:'white',
        borderRadius:20
    },
    buttonContainer:{
        marginTop:50,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        width:'100%',
    }
})
