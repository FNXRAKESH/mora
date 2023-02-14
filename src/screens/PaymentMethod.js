import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PaymentMethod = ({ navigation }) => {
  const [showWaiting, setShowWaiting] = useState(false);

  const handleSelect = () => {
    setShowWaiting(true);
    setTimeout(() => {
      navigation.navigate('SuccessTransfer', {
        mode: 'addPayment'
      });
    }, 2000);
  };
  if (showWaiting) {
    return (
      <View style={styles.checkOut}>
        <Text style={{ fontSize: 25 }}>Checkout Process</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
          <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
            Payment Method
          </Text>
        </View>
        <Text style={styles.title}>Saved Methods</Text>
        <View style={styles.method}>
          <View style={styles.square}></View>
          <View style={{ flexGrow: 1 }}>
            <Text>**** **** **** 2134</Text>
            <Text>Pay using VISA Card</Text>
          </View>
          <TouchableOpacity
            style={styles.selectBtn}
            onPress={() => handleSelect()}
          >
            <Text style={styles.selectBtnText}>Select</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.method}>
          <View style={styles.square}></View>
          <View style={{ flexGrow: 1 }}>
            <Text>Muhammad khalid</Text>
            <Text>Pay using Paypal</Text>
          </View>
          <TouchableOpacity
            style={styles.selectBtn}
            onPress={() => handleSelect()}
          >
            <Text style={styles.selectBtnText}>Select</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Other Methods</Text>
        <View style={styles.method}>
          <View style={styles.square}></View>
          <View style={{ flexGrow: 1 }}>
            <Text>Bank Account</Text>
            <Text>Pay using your different bank</Text>
          </View>
          <TouchableOpacity onPress={() => handleSelect()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </TouchableOpacity>
        </View>
        <View style={styles.method}>
          <View style={styles.square}></View>
          <View style={{ flexGrow: 1 }}>
            <Text>Wise Transfer</Text>
            <Text>Pay using wise transfer</Text>
          </View>
          <TouchableOpacity onPress={() => handleSelect()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
export default PaymentMethod;

const styles = StyleSheet.create({
  checkOut: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    paddingVertical: 20
  },
  selectBtn: {
    backgroundColor: '#006C35',
    borderRadius: 5,
    padding: 10
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10
  },
  selectBtnText: {
    color: '#fff'
  }
});
