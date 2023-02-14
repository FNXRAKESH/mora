import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Checkbox } from 'react-native-paper';

const Declaration = ({ navigation }) => {
  const [citizen, setCitizen] = useState('No');
  const [taxResident, setTaxResident] = useState('No');
  const [bornInUs, setBornInUs] = useState('No');
  const [other, setOther] = useState('Yes');
  const [checked, setChecked] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15
        }}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('Confirm')}
        >
          <Image source={require('../assets/arrow.png')} />
          <Text style={{ paddingLeft: 10 }}>Back</Text>
        </TouchableOpacity>
        <Text>3 of 6</Text>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={styles.title}>FATCA &amp; CRS</Text>
        <Text style={{ paddingBottom: 25 }}>
          Please complete the declaration
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.questions}>Are you a US Citizen?</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                citizen == 'Yes'
                  ? { backgroundColor: '#006C35' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setCitizen('Yes')}
            >
              <Text>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                citizen == 'No'
                  ? { backgroundColor: '#FE5F55' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setCitizen('No')}
            >
              <Text>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.questions}>Are you a US Tax Resident?</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                taxResident == 'Yes'
                  ? { backgroundColor: '#006C35' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setTaxResident('Yes')}
            >
              <Text>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                taxResident == 'No'
                  ? { backgroundColor: '#FE5F55' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setTaxResident('No')}
            >
              <Text>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.questions}>Were you born in the US?</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                bornInUs == 'Yes'
                  ? { backgroundColor: '#006C35' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setBornInUs('Yes')}
            >
              <Text>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                bornInUs == 'No'
                  ? { backgroundColor: '#FE5F55' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setBornInUs('No')}
            >
              <Text>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.questions}>
            Are you a Tax resident in any other country than US or UAE?
          </Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                other == 'Yes'
                  ? { backgroundColor: '#006C35' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setOther('Yes')}
            >
              <Text>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionDefault,
                other == 'No'
                  ? { backgroundColor: '#FE5F55' }
                  : { backgroundColor: 'transparent' }
              ]}
              onPress={() => setOther('No')}
            >
              <Text>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 15,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#006C35"
            uncheckedColor="#006C35"
          />
          <Text style={{ paddingRight: 20 }}>
            I confirm my FATCA & CRS declaration above is true and correct.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate('Congratulations')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Declaration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15
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
    paddingTop: 20
  },
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(35, 31, 32, 0.15);'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  optionDefault: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'rgba(35, 31, 32, 0.15);',
    borderWidth: 1,
    width: '45%'
  },
  btnSubmit: {
    backgroundColor: '#006C35',
    padding: 15,
    borderRadius: 50,
      alignItems: 'center',
    marginHorizontal:15
  },
  btnText: {
    color: '#fff',
    fontSize: 20
    },
    questions: {
        fontSize: 18,
        fontWeight:'500'
  }
});
