import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';


const Login = ({ navigation }) => {
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
          onPress={() => navigation.navigate('Welcome')}
        >
          <Image source={require('../assets/arrow.png')} />
          <Text style={{ paddingLeft: 10 }}>Back</Text>
        </TouchableOpacity>
         
      </View>
      <Text style={styles.title}>Login to Your Account</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.input}
          label="Email Address"
          keyboardType="email-address"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Password"
          keyboardType="default"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <Text>Having trouble logging in? Get Help</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 40
  },
  input: {
    borderRadius: 50,

    marginBottom: 15
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
