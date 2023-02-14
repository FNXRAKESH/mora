import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
        </View>
        <Text style={styles.title}>Welcome to Mora Bank</Text>
        <Text
          style={{ textAlign: 'center', paddingVertical: 15, marginBottom: 30 }}
        >
          Your All In One Place to Manage Your, Online Transaction and Banking
          Needs.
        </Text>
        <TouchableOpacity
          style={styles.newUser}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.btnText}>New User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.existingUser}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.btnText}>Existing User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  parent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 15
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#231F20',
    textAlign: 'center'
  },
  image: {
    margin: 'auto'
  },
  newUser: {
    backgroundColor: '#006C35',
    borderRadius: 25,
    marginBottom: 15,
    padding: 15
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  },
  existingUser: {
    backgroundColor: '#FE5F55',
    borderRadius: 25,
    padding: 15
  }
});
