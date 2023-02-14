import { faAngleRight, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Transactions from './Transactions';

const TransactionList = ({navigation}) => {
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
          Transactions
        </Text>
      </View>
      <Transactions navigation={navigation} />
    </View>
  );
}
 
export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  transaction: {
    flexGrow: 1,
    paddingHorizontal: 10
  },
  TransactionType: {
    backgroundColor: 'rgba(0, 108, 53, 0.25)',
    borderRadius: 7,
    padding: 10
  },
  TransactionTypeOrange: {
    backgroundColor: 'rgba(254, 95, 85, 0.25)',
    borderRadius: 7,
    padding: 10
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(35, 31, 32, 0.1)',
    borderBottomWidth: 1,
    paddingVertical: 20
  }
});