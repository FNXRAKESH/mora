import {
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faBank,
  faBolt,
  faFileVideo,
  faGlobe,
  faMobile,
  faMobileAlt,
  faWifi
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { TextInput } from 'react-native-paper';

const TransferMoney = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
          <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
            Transfer Money
          </Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          <TextInput
            mode="outlined"
            outlineStyle={styles.input}
            placeholder="Enter Account or Mobile Number ..."
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'
          }}
        >
          <View style={{ alignItems: 'center', width: 100 }}>
            <View style={styles.bills}>
              <FontAwesomeIcon icon={faMobileAlt} color="#FE5F55" size={35} />
            </View>
            <Text style={styles.billText}>To Mobile Number</Text>
          </View>
          <View style={{ alignItems: 'center', width: 100 }}>
            <View style={styles.bills}>
              <FontAwesomeIcon icon={faBank} color="#FE5F55" size={35} />
            </View>
            <Text style={styles.billText}>To Bank Acount</Text>
          </View>
          <View style={{ alignItems: 'center', width: 100 }}>
            <View style={styles.bills}>
              <FontAwesomeIcon icon={faGlobe} color="#FE5F55" size={35} />
            </View>
            <Text style={styles.billText}>Overseas Transfer</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#f3f3f3',
          paddingHorizontal: 15,
          paddingVertical: 25,
          flexGrow: 1
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
          }}
        >
          <Text style={styles.Name}>My Contacts</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Text>View All</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.transactionContainer}
            onPress={() =>
              navigation.navigate('AddTransfer', {
                mode: 'Transfer Money',
                name: 'Muhammad khalid',
                number: '1234567890123'
              })
            }
          >
            <Image source={require('../assets/female.png')} />

            <View style={styles.transaction}>
              <Text>Aliya</Text>
              <Text>1234567890123</Text>
            </View>
            <Image source={require('../assets/logosmall.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionContainer}>
            <Image source={require('../assets/male.png')} />

            <View style={styles.transaction}>
              <Text>Henry Cavill</Text>
              <Text>1234567890123</Text>
            </View>
            <Image source={require('../assets/globe.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionContainer}>
            <Image source={require('../assets/female.png')} />

            <View style={styles.transaction}>
              <Text>Aliya</Text>
              <Text>1234567890123</Text>
            </View>
            <Image source={require('../assets/logosmall.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionContainer}>
            <Image source={require('../assets/male.png')} />

            <View style={styles.transaction}>
              <Text>Henry Cavill</Text>
              <Text>1234567890123</Text>
            </View>
            <Image source={require('../assets/globe.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default TransferMoney;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff'
  },
  input: {
    borderRadius: 50,
    backgroundColor: '#f3f3f3'
  },
  bills: {
    alignItems: 'center',
    backgroundColor: 'rgba(254, 95, 85, 0.1)',
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center'
  },
  billText: {
    fontSize: 15,
    textAlign: 'center'
  },
  transaction: {
    flexGrow: 1,
    paddingHorizontal: 10
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(35, 31, 32, 0.1)',
    borderBottomWidth: 1,
    paddingVertical: 20
  }
});
