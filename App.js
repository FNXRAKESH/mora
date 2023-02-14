import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import SliderScreen from './src/screens/SliderScreen';
import CreateAccount from './src/screens/CreateAccount';
import VerifyEmail from './src/screens/VerifyEmail';
import VerifyPhone from './src/screens/VerifyPhone';
import Verification from './src/screens/Verification';
import IdVerification from './src/screens/IdVerification';
import FaceVerification from './src/screens/FaceVerification';
import ConfirmDetails from './src/screens/ConfirmDetails';
import IdVerified from './src/screens/IdVerified';
import AccountOpening from './src/screens/AccountOpening';
import PassportVerification from './src/screens/PassportVerification';
import Confirm from './src/screens/Confirm';
import Declaration from './src/screens/Declaration';
import Congratulations from './src/screens/Congratulations';
import AccountDetails from './src/screens/AccountDetails';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import DrawerMenu from './src/screens/DrawerMenu';
import Home from './src/screens/DrawerMenu';
import TransferMoney from './src/screens/TransferMoney';
import AddTransfer from './src/screens/AddTransfer';
import VerifyTransfer from './src/screens/VerifyTransfer';
import SuccessTransfer from './src/screens/SuccessTransfer';
import PaymentMethod from './src/screens/PaymentMethod';
import TransactionList from './src/screens/TransactionList';
import TransactionDetails from './src/screens/TransactionDetails';
import PaymentList from './src/screens/PaymentList';
import AllBills from './src/screens/AllBills';
import Transactions from './src/screens/Transactions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName="SliderScreen"
        screenOptions={{
          headerMode: 'screen',
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SliderScreen" component={SliderScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="IdVerification" component={IdVerification} />
        <Stack.Screen name="FaceVerification" component={FaceVerification} />
        <Stack.Screen name="ConfirmDetails" component={ConfirmDetails} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="IdVerified" component={IdVerified} />
        <Stack.Screen name="AccountOpening" component={AccountOpening} />
        <Stack.Screen name="Declaration" component={Declaration} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
        <Stack.Screen
          name="PassportVerification"
          component={PassportVerification}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="TransferMoney" component={TransferMoney} />
        <Stack.Screen name="AddTransfer" component={AddTransfer} />
        <Stack.Screen name="VerifyTransfer" component={VerifyTransfer} />
        <Stack.Screen name="SuccessTransfer" component={SuccessTransfer} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="TransactionList" component={TransactionList} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="PaymentList" component={PaymentList} />
        <Stack.Screen
          name="TransactionDetails"
          component={TransactionDetails}
        />
        <Stack.Screen name="AllBills" component={AllBills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
