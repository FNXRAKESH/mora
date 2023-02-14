import {
  faAngleRight,
  faArrowDown,
  faArrowLeft,
  faArrowRightArrowLeft,
  faArrowUp,
  faBolt,
  faEye,
  faEyeSlash,
  faFileVideo,
  faPlus,
  faShop,
  faVideo,
  faWifi
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Dashboard = ({ navigation }) => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 10
          }}
        >
          <View>
            <Text style={styles.Name}>Hello User,</Text>
            <Text>Your Available Balance</Text>
          </View>
          <View style={styles.showBalance}>
            {showBalance ? (
              <TouchableOpacity
                style={{ paddingRight: 10 }}
                onPress={() => setShowBalance(!showBalance)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ paddingRight: 10 }}
                onPress={() => setShowBalance(!showBalance)}
              >
                <FontAwesomeIcon icon={faEye} />
              </TouchableOpacity>
            )}
            {showBalance ? (
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$ 14,654</Text>
            ) : (
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$ XX,XXX</Text>
            )}
          </View>
        </View>
        <View style={styles.shortCuts}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('TransferMoney');
            }}
          >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} color="#fff" />
            <Text style={styles.shortCutText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('AddTransfer', {
                mode: 'Add Money',
                name: 'Muhammad khalid',
                number: '1234567890123'
              });
            }}
          >
            <FontAwesomeIcon icon={faPlus} color="#fff" />
            <Text style={styles.shortCutText}>Add Money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('TransactionList');
            }}
          >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} color="#fff" />
            <Text style={styles.shortCutText}>History</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={styles.Name}>Bills & Payments</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('AllBills')}
          >
            <Text>View All</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 20
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
          <Text style={styles.Name}>Transactions History</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('TransactionList');
            }}
          >
            <Text>View All</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.transactionContainer}>
            <View style={styles.TransactionType}>
              <FontAwesomeIcon icon={faArrowDown} />
            </View>
            <View style={styles.transaction}>
              <Text>December Salary</Text>
              <Text>25 December, 2022</Text>
            </View>
            <Text>+ $ 1,245</Text>
          </View>
          <View style={styles.transactionContainer}>
            <View style={styles.TransactionTypeOrange}>
              <FontAwesomeIcon icon={faArrowUp} />
            </View>
            <View style={styles.transaction}>
              <Text>Muhammad khalid</Text>
              <Text>25 December, 2022</Text>
            </View>
            <Text>- $ 45.44</Text>
          </View>
          <View style={styles.transactionContainer}>
            <View style={styles.TransactionType}>
              <FontAwesomeIcon icon={faArrowDown} />
            </View>
            <View style={styles.transaction}>
              <Text>January Salary</Text>
              <Text>25 January, 2023</Text>
            </View>
            <Text>+ $ 1,245</Text>
          </View>
          <View style={styles.transactionContainer}>
            <View style={styles.TransactionType}>
              <FontAwesomeIcon icon={faArrowUp} />
            </View>
            <View style={styles.transaction}>
              <Text>Muhammad khalid</Text>
              <Text>25 January, 2023</Text>
            </View>
            <Text>- $ 45.44</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flexGrow: 1 },
  Name: {
    fontSize: 25
  },
  showBalance: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shortCuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: '#006C35',
    borderRadius: 10,
    marginVertical: 25
  },
  shortCutText: {
    color: '#fff',
    paddingTop: 10
  },
  bills: {
    alignItems: 'center',
    backgroundColor: 'rgba(254, 95, 85, 0.1)',
    borderRadius: 50,
    height: 80,
    width: 80,
    justifyContent: 'center',
    marginRight: 10
  },
  billText: {
    fontSize: 12
  },
  transaction: {
    flexGrow: 1,
    paddingHorizontal: 10
  },
  TransactionType: {
    backgroundColor: 'rgba(0, 108, 53, 0.25)',
    borderRadius: 7,
    padding: 10
  },
  TransactionTypeOrange: {
    backgroundColor: 'rgba(254, 95, 85, 0.25)',
    borderRadius: 7,
    padding: 10
  },
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(35, 31, 32, 0.1)',
    borderBottomWidth: 1,
    paddingVertical: 20
  }
});
