import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

const AccountOpening = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('IdVerified')}
        >
          <Image source={require('../assets/arrow.png')} />
          <Text style={{ paddingLeft: 10 }}>Back</Text>
        </TouchableOpacity>
        <Text>1 of 6</Text>
      </View>
      <View
        style={{ justifyContent: 'center', flexGrow: 1, alignItems: 'center' }}
      >
        <Text style={styles.title}>Account Opening</Text>
        <Text style={{ paddingBottom: 30, textAlign: 'center' }}>
          Scan Your Passport to Procceed
        </Text>
        <Image source={require('../assets/ellipse.png')} />
        <View
          style={{
            alignItems: 'center',
            padding: 20
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Image source={require('../assets/check.png')} />
            <Text style={{ padding: 15, width: 250 }}>
              Make sure you’re in bright place
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Image source={require('../assets/check.png')} />
            <Text style={{ padding: 15, width: 250 }}>
              Place your ID inside frame
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Image source={require('../assets/check.png')} />
            <Text style={{ padding: 15, width: 250 }}>
              Wait for it to scan automatically
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('PassportVerification')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AccountOpening;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15
  },
  backBtn: {
    borderColor: 'rgba(35, 31, 32, 0.15)',
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingVertical: 10
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 15,
    width: 50,
    textAlign: 'center'
  },
  btnSubmit: {
    backgroundColor: '#006C35',
    padding: 15,
    borderRadius: 50
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  }
});
