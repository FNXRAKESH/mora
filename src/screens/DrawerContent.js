import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const DrawerContent = (props) => {
  const BASE_PATH =
    'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg';
  const proileImage = 'react_logo.png';
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    props.toggleTheme();
    setIsEnabled(!isEnabled);
  };
  const logout = () => {
    console.log('props ', props);
    props.navigation.navigate('Welcome');
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}
    >
      {/* <ImageBackground
        source={require('../assets/logo.png')}
        style={{
          width: 271,
          height: 268,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      ></ImageBackground> */}
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
          paddingLeft: 15,
          alignItems: 'center'
        }}
      >
        <Image source={{ uri: BASE_PATH }} style={styles.sideMenuProfileIcon} />
        <Text style={{ color: '#000' }}>Kabir</Text>
        <Text style={{ color: '#000' }}>Kabir@email.com</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {}}
        style={{ flexDirection: 'row', padding: 20 }}
      >
        <FontAwesomeIcon icon={faUser} size={20} color="grey" />
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            color: 'grey'
          }}
        >
          My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{ flexDirection: 'row', padding: 20 }}
      >
        <FontAwesomeIcon icon={faCog} size={20} color="grey" />
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            color: 'grey'
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => logout()}
        style={{ flexDirection: 'row', padding: 20 }}
      >
        <FontAwesomeIcon icon={faSignOutAlt} size={20} color="grey" />
        <Text
          style={{
            fontSize: 16,
            paddingHorizontal: 20,
            color: 'grey'
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textWhite: {
    color: '#fff'
  }
});

export default DrawerContent;
