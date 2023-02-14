import { faCopy, faG } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FlashMode } from 'expo-camera';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const MyAccounts = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.imgContainer}>
          <Image source={require('../assets/addmoney.png')} />
          <Text style={styles.title}>Muhammad khalid</Text>
          <Text style={styles.amount}>$ 14,654</Text>
        </View>
        <View style={{ backgroundColor: '#F3F3F3', padding: 15, flexGrow: 1 }}>
          <Text style={styles.title}>My Cards</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('../assets/card1.png')} />
            <Image source={require('../assets/card1.png')} />
            <Image source={require('../assets/card2.png')} />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#F3F3F3',
            paddingHorizontal: 15,
            flexGrow: 1
          }}
        >
          <Text style={[styles.title, { paddingBottom: 20 }]}>
            Account Details
          </Text>

          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={styles.circle}></View>
            <View style={{ flexGrow: 1, paddingLeft: 10 }}>
              <Text>Your Account Number</Text>
              <Text>123667890523</Text>
            </View>
            <FontAwesomeIcon icon={faCopy} color="#C4C4C4" />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={styles.circle}></View>
            <View style={{ flexGrow: 1, paddingLeft: 10 }}>
              <Text>Your IBAN Number</Text>
              <Text>MB2345654311234</Text>
            </View>
            <FontAwesomeIcon icon={faCopy} color="#C4C4C4" />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={styles.circle}></View>
            <View style={{ flexGrow: 1, paddingLeft: 10 }}>
              <Text>CIF Number</Text>
              <Text>45567837452</Text>
            </View>
            <FontAwesomeIcon icon={faCopy} color="#C4C4C4" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAccounts;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  imgContainer: {
    alignItems: 'center',
    paddingVertical: 30
  },
  title: {
    fontSize: 20,
    paddingTop: 10
  },
  amount: {
    color: '#006C35',
    fontSize: 20,
    fontWeight: 'bold'
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#BBD0C5'
  }
});
