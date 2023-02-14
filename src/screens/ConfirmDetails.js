import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';

const ConfirmDetails = ({ navigation }) => {
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
          onPress={() => navigation.navigate('FaceVerification')}
        >
          <Image source={require('../assets/arrow.png')} />
          <Text style={{ paddingLeft: 10 }}>Back</Text>
        </TouchableOpacity>
        <Text>6 of 6</Text>
      </View>
      <Text style={styles.title}>Confirm Details</Text>
      <Text style={{ paddingBottom: 25 }}>
        Please verify your scanned details
      </Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.input}
          label=" Email Address"
          keyboardType="email-address"
          value="YourName@email.com"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" Id Number"
          keyboardType="default"
          value="12345678"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" ID Expires on"
          keyboardType="default"
          value="02 / 04 / 2028"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" Date of Birth"
          keyboardType="default"
          value="06 / 07 / 1998"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" Nationality"
          keyboardType="default"
          value="Saudi"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" ID Issue Country"
          keyboardType="default"
          value="Saudi Arabia"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
        <TextInput
          style={styles.input}
          label=" Gender"
          keyboardType="default"
          value="Male"
          mode="outlined"
          activeOutlineColor="#006C35"
          outlineStyle={{ borderRadius: 50 }}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('IdVerified')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnRetake}
        onPress={() => navigation.navigate('Verification')}
      >
        <Text style={styles.retakeBtnText}>Retake ID</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ConfirmDetails;

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
    alignItems:'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingTop: 20
  },
  input: {
    marginBottom: 15
  },
  btnSubmit: {
    backgroundColor: '#006C35',
    padding: 15,
      borderRadius: 50,
    marginBottom:10
  },
  btnRetake: {
    borderColor: '#006C35',
    borderWidth: 1,
    padding: 15,
    borderRadius: 50
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  retakeBtnText: {
    textAlign: 'center',
    color: '#006C35',
    fontSize: 20
  }
});
