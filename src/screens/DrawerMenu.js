import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBarcode,
  faBarsProgress,
  faBell,
  faBuildingColumns,
  faClockRotateLeft,
  faFileInvoice,
  faHome,
  faPen,
  faSignal
} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import Login from './Login';
import MainScreen from './MainScreen';
import MyAccounts from './MyAccounts';
import Reports from './Reports';
import Bills from './Bills';
import Transactions from './Transactions';
import Notifications from './Notifications';
import PaymentList from './PaymentList';
import TransactionList from './TransactionList';
import AllBills from './AllBills';

const Drawer = createDrawerNavigator();

const Home = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#006C35',
        inactiveTintColor: '#fff',
        itemStyle: { marginVertical: 5 }
      }}
      drawerContent={(props) => (
        <DrawerContent
          {...props}
          setLogout={props.setLogout}
          toggleTheme={props.toggleTheme}
          darkTheme={props.darkTheme}
        />
      )}
      initialRouteName="MainScreen"
    >
      <Drawer.Screen
        name="MORA"
        component={MainScreen}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} size={20} color={color} />
          )
        }}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />

      <Drawer.Screen
        name="MyAccounts"
        options={{
          drawerLabel: 'My Account',
          headerTitle: 'My Account',
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBuildingColumns} size={20} color={color} />
          )
        }}
        component={MyAccounts}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />
      <Drawer.Screen
        name="Reports"
        options={{
          drawerLabel: 'Reports',
          headerTitle: 'Reports',
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faSignal} size={20} color={color} />
          )
        }}
        component={Reports}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />
      <Drawer.Screen
        name="Bills"
        options={{
          drawerLabel: 'Bills And Payments',
          headerTitle: 'Bills And Payments',
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faFileInvoice} size={20} color={color} />
          )
        }}
        component={PaymentList}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />
      <Drawer.Screen
        name="Transactions"
        options={{
          drawerLabel: 'Transactions',
          headerTitle: 'Transactions',
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faClockRotateLeft} size={20} color={color} />
          )
        }}
        component={Transactions}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: 'Notifications',
         headerTitle:"Notifications",
          drawerIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBell} size={20} color={color} />
          )
        }}
        component={Notifications}
        initialParams={{
          darkTheme: props.darkTheme,
          accessToken: props.accessToken
        }}
      />
    </Drawer.Navigator>
  );
};

export default Home;
