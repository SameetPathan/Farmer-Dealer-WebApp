import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Phonenumber from './Components/Phonenumber';
import Password from './Components/Password';

const FarmerLogin=()=>{
    return (
        <Text>
            Farmer Login here
        </Text>
    )
}

const DealerLogin=()=>{
    return (
        <Text>
            Dealer Login here
        </Text>
    )
}

let togglebtn=true;

export default function App() {
  return (
    <View style={styles.container}>
      {togglebtn ? <FarmerLogin></FarmerLogin>:<DealerLogin></DealerLogin>}
      <Phonenumber></Phonenumber>
        <Password></Password>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
