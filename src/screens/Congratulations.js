import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native';

const Congratulations = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingVertical: 20, textAlign: 'center' }}>4 of 6</Text>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/ellipse.png')} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.title}>Congratulations</Text>
        <Text style={{ textAlign: 'center', paddingVertical: 20 }}>
          You have successfully opened your bank account with Mora Bank.
        </Text>
        <View style={styles.card}>
          <Text style={{ padding: 20, fontSize: 16 }}>Your Account Number</Text>
          <Text style={styles.accNumber}>123667890523</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('AccountDetails')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnChange}
        onPress={() => navigation.navigate('Declaration')}
      >
        <Text style={styles.btnChangeText}>Change Account Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    justifyContent: 'center'
  },
  imgContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#ECF3F0',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center'
  },
  accNumber: {
    borderTopColor: '#D6E1DC',
    borderTopWidth: 1,
    padding: 20,
    fontSize: 25,
    letterSpacing: 5,
    fontWeight: '700'
  },
  btnSubmit: {
    backgroundColor: '#006C35',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    margin: 15
  },
  btnChange: {
    borderColor: '#006C35',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
      marginHorizontal: 15,
    borderWidth:1
  },
  btnText: {
    color: '#fff',
    fontSize: 20
    },
  btnChangeText: {
    color: '#006C35',
    fontSize: 20
  }
});
