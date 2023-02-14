import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const IdVerified = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/profile.png')} />
      </View>
      <Text style={styles.title}>ID Verified</Text>
      <Text style={styles.subTitle}>
        We’ve verified your account. You can now proceed with opening an account
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('AccountOpening')}
      >
        <Text style={styles.btnText}>Open Bank Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IdVerified;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#006C35'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    color: '#fff'
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    padding: 15
  },
  btn: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 50,
    marginTop: 20
  },
  btnText: {
      color: '#006C35',
      fontSize: 20,
      fontWeight: '700'
  }
});
