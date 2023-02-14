import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PaymentList from './PaymentList';

const AllBills = ({ navigation }) => {
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
          Bills & Payments
        </Text>
      </View>
       <PaymentList />
    </View>
  );
};

export default AllBills;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flexGrow: 1, padding: 15 },
  bills: {
    alignItems: 'center',
    backgroundColor: 'rgba(254, 95, 85, 0.1)',
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center',
    margin: 10
  },
  billText: {
    fontSize: 12
  },
  line: {
    height: 1,
    width: 100 + '%',
    borderWidth: 1,
    borderColor: 'rgba(35, 31, 32, 0.1)',
    marginVertical: 20
  }
});
