// import React,{useState} from 'react'
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import wd from 'word-definition';
 
// export default function Wordmeaning() {
    
//     cont [meaning,setMeaning]=useState()

//     const inputHandler=(val)=>{
//         wd.getDef(val, "en", null, function(definition) {
//             setMeaning(definition);
//         });
        
//     }
    

//     return (
//         <View style={styles.container}>
//             <View style={styles.textbox}>
//             <Text>Word Collection..</Text>
//             </View>
//             <View style={styles.textbox}>
//             <Text>Meaning:{meaning}</Text>
//             </View>
//             <View style={styles.textbox}>
//             <TextInput
//             onChangeText={(data)=>{inputHandler(data)}}
//             >
//             </TextInput>
//             </View>
        
//                    </View>


//     )
// }

// const styles = StyleSheet.create({

//     container:{
//         textAlign:'center',
//         justifyContent:'center'
//     },
//     textbox:{
//         justifyContent:'center',
//         textAlignVertical:'center',
//         width:'85%',
//         height:60,
//         borderColor:'black',
//         marginTop:40,
//         marginLeft:30,
//         backgroundColor:'#407090',
//         borderRadius:10

//     }
// })
