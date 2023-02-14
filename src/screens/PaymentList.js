import { faBolt, faCaretDown, faCreditCard, faCreditCardAlt, faDroplet, faFileVideo, faGift, faMobile, faMobileAlt, faPlane, faQrcode, faShop, faShoppingCart, faTrain, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PaymentList = ({ navigation }) => {
  return (
    <View style={styles.container}>
       
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingTop: 30
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faBolt} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Electricity</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faWifi} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Internet</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faFileVideo} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Streaming</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faShop} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Merchant</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faDroplet} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Utilities</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faMobileAlt} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Telecom</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faCreditCardAlt} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Credit Card</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faTrain} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>RTA</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faPlane} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Airlines</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faGift} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Vouchers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faShoppingCart} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Shopping</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bills}>
            <FontAwesomeIcon icon={faQrcode} color="#FE5F55" size={35} />
          </View>
          <Text style={styles.billText}>Scan QR</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <Text style={{paddingVertical:10, textAlign:'center'}}>
        We’re constantly working towards bringing more bills & payment options
        to you.
      </Text>
    </View>
  );
};
 
export default PaymentList;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flexGrow: 1, padding: 15 },
  bills: {
    alignItems: 'center',
    backgroundColor: 'rgba(254, 95, 85, 0.1)',
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center',
    margin: 10
  },
  billText: {
    fontSize: 12
  },
  line: {
    height: 1,
    width: 100 + '%',
    borderWidth: 1,
      borderColor: 'rgba(35, 31, 32, 0.1)',
    marginVertical:20
  }
});