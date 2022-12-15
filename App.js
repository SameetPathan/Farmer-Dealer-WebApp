import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DealerLogin from './Components/DealerLogin';
import FarmerLogin from './Components/FarmerLogin';


let togglebtn=true;

export default function App() {
  return (
    <View>
      {togglebtn ? <FarmerLogin/>:<DealerLogin></DealerLogin>}
  
      <StatusBar style="auto" />
    </View>
  );
}


