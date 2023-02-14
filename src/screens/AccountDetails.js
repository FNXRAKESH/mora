import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const AccountDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <View style={styles.imageBorder}>
          <Image source={require('../assets/profile.png')} />
        </View>
      </View>
      <Text style={styles.title}>Welcome to Mora Bank</Text>
      <Text style={styles.subTitle}>Below are your account details</Text>
      <View style={styles.accDetail}>
        <View style={styles.details}>
          <View style={styles.circle}></View>
          <View>
            <Text style={styles.subHeading}>Your Account Number</Text>
            <Text style={styles.accNumber}>123667890523</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.circle}></View>
          <View>
            <Text style={styles.subHeading}>Your IBAN Number</Text>
            <Text style={styles.accNumber}>MB2345654311234</Text>
          </View>
        </View>
        <View style={[styles.details, , { borderBottomWidth: 0 }]}>
          <View style={styles.circle}></View>
          <View>
            <Text style={styles.subHeading}>CIF Number</Text>
            <Text style={styles.accNumber}>45567837452</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountDetails;

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
  imageBorder: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 100,
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff'
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    padding: 15
  },
  btn: {
    backgroundColor: '#FE5F55',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 50,
    marginTop: 20
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  },
  accDetail: {
    backgroundColor: '#ECF3F0',
    borderRadius: 15,

    marginHorizontal: 15
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 20,
    borderColor: '#D6E1DC'
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#BBD0C5',
    borderRadius: 50,
    marginRight: 10
  },
  accNumber: {
    fontSize: 25,
    fontWeight: '700'
    },
    subHeading: {
        color: 'rgba(35, 31, 32, 0.6)'
  }
});
