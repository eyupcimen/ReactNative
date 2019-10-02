    import React from 'react';
    import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

    export default function App() {
      return (
        
        // <View style={ {padding:50} } > 
        //   <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}} > 
        //     <TextInput  placeholder="Course Goal" style={{ width:'80%', borderColor:'black',borderWidth:1,padding:10}}
        //     />
        //     <Button title="ADD"/>
        //   </View>
        //   <View> 
        //   </View>
        // </View>

        // padding:50,
        //     flexDirection: 'row',
        //     width: '80%',
        //     height: 300 ,
        //     justifyContent : 'space-around',
        //     alignItems : 'stretch'

        <View style={{
              padding:20 , 
              backgroundColor: 'gray',
              flexDirection: 'row', 
              width: '80%', 
              height: 300,
              justifyContent: 'space-around', 
              alignItems: 'stretch'
            }}>
        <View 
          style={{ 
            backgroundColor: 'red',
            flex : 2,
            justifyContent: 'center',
            alignItems: 'center'
        }} > 
          <Text>1</Text>
        </View>

        <View
          style={{
            backgroundColor: 'blue',
            flex : 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
          <Text>2</Text>
        </View>

        <View
          style={{
            backgroundColor : 'green',
            flex : 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
          <Text>3</Text>
        </View>

      </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
      },
    });
