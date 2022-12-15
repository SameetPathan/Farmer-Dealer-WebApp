import { Text } from 'react-native'
import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Alert ,TextInput} from 'react-native';

const FarmerLogin = () => {
  return (
    <>

    <View style={styles.margin}>
        <TextInput
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
    </View>

    <View>
        <Button
          title="Login"
          onPress={() => Alert.alert('Left button pressed')}
        />
    </View>

    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    },
    margin:{
        marginTop:50,
        padding:60
       
    }
  });

export default FarmerLogin