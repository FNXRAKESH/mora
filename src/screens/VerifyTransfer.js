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

const VerifyTransfer = ({ route, navigation }) => {
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
          onPress={() =>
            navigation.navigate('AddTransfer', {
              mode: 'Transfer Money',
              name: 'Aliya',
              number: '1234567890123'
            })
          }
        >
          <Image source={require('../assets/arrow.png')} />
        </TouchableOpacity>
        <Text>Expires in: 14:23</Text>
      </View>
      <View
        style={{ justifyContent: 'center', flexGrow: 1, alignItems: 'center' }}
      >
        <Text style={styles.title}>Enter 4 Digit OTP</Text>
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
        onPress={() =>
          navigation.navigate('SuccessTransfer', {
            mode: 'transfer'
          })
        }
      >
        <Text style={styles.btnText}>Verify &amp; Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default VerifyTransfer;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#FE5F55'
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
