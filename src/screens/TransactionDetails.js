import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TransactionDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('TransactionList')}
        >
          <Image source={require('../assets/arrowwhite.png')} />
        </TouchableOpacity>
        <Text
          style={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: 20,
            color: '#fff'
          }}
        >
          Details
        </Text>
      </View>
      <View style={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.accDetail}>
          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Transaction ID</Text>
              <Text style={styles.accNumber}>123667890523</Text>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Amount Recieved</Text>
              <Text style={styles.accNumber}>$ 12.00</Text>
            </View>
          </View>

          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Sent By</Text>
              <Text style={styles.accNumber}>Abdul</Text>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Transaction Date</Text>
              <Text style={styles.accNumber}>12 Dec 2022, 08:43 PM</Text>
            </View>
          </View>
          <View style={[styles.details, , { borderBottomWidth: 0 }]}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Transaction Status</Text>
              <Text style={styles.accNumber}>Successful</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionDetails;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#006C35',
    padding: 15
  },
  accDetail: {
    backgroundColor: '#ECF3F0',
    borderRadius: 15,

    marginHorizontal: 15,
    justifyContent: 'center'
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
    fontSize: 20,
    fontWeight: '700'
  },
  subHeading: {
    color: 'rgba(35, 31, 32, 0.6)'
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
  }
});
