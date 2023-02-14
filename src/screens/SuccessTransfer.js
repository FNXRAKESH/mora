import { faBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const SuccessTransfer = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/checkbig.png')} />
      </View>
      <Text style={styles.title}>Successful!</Text>

      <View style={styles.accDetail}>
        <View style={styles.details}>
          <View style={styles.circle}></View>
          <View>
            <Text style={styles.subHeading}>Transaction ID</Text>
            <Text style={styles.accNumber}>123667890523</Text>
          </View>
        </View>
        {route.params.mode == 'transfer' ? (
          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Amount Sent</Text>
              <Text style={styles.accNumber}>$ 12.00</Text>
            </View>
          </View>
        ) : (
          <View style={styles.details}>
            <View style={styles.circle}></View>
            <View>
              <Text style={styles.subHeading}>Amount Added</Text>
              <Text style={styles.accNumber}>$ 12.00</Text>
            </View>
          </View>
        )}
        {route.params.mode == 'transfer' ? (
          <View style={[styles.details, , { borderBottomWidth: 0 }]}>
            <Image source={require('../assets/female.png')} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.subHeading}>Sent to</Text>
              <Text style={styles.accNumber}>Aliya</Text>
            </View>
          </View>
        ) : (
          <View style={[styles.details, , { borderBottomWidth: 0 }]}>
            <View style={styles.circle}>
              <FontAwesomeIcon icon={faBank} color="#006C35" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.subHeading}>Updated Balance</Text>
              <Text style={styles.accNumber}>$ 14,666</Text>
            </View>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessTransfer;

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

    margin: 15
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
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  accNumber: {
    fontSize: 25,
    fontWeight: '700'
  },
  subHeading: {
    color: 'rgba(35, 31, 32, 0.6)'
  }
});
