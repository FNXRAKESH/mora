import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const VerifyPhone = ({ navigation }) => {
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
          onPress={() => navigation.navigate('VerifyEmail')}
        >
          <Image source={require('../assets/arrow.png')} />
          <Text style={{ paddingLeft: 10 }}>Back</Text>
        </TouchableOpacity>
        <Text>3 of 6</Text>
      </View>
      <View
        style={{ justifyContent: 'center', flexGrow: 1, alignItems: 'center' }}
      >
        <Image source={require('../assets/verifyphone.png')} />
        <Text style={styles.title}>Verify Phone</Text>
        <Text style={{ paddingBottom: 30, textAlign: 'center' }}>
          We have sent you a 4-digit code to your number +1123456789
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            placeholder="X"
            keyboardType="phone-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            placeholder="X"
            keyboardType="phone-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            placeholder="X"
            keyboardType="phone-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            placeholder="X"
            keyboardType="phone-pad"
            maxLength={1}
          />
        </View>
        <Text style={{ paddingVertical: 15 }}>
          Haven’t received the code?{' '}
          <Text style={{ color: '#2196F3' }}>Send Again</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('Verification')}
      >
        <Text style={styles.btnText}>Verify &amp; Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default VerifyPhone;

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
    alignItems:'center'
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
