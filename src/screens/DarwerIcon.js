import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DrawerIcon({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
      <TouchableOpacity onPress={navigation.openDrawer()}>
        <FontAwesomeIcon icon={faBars} size={20} color={'#fff'} />
      </TouchableOpacity>
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 34,
          height: 20
        }}
      />
    </View>
  );
}
