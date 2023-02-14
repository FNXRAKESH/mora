import {
  faAngleRight,
  faArrowDown,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const Transactions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
          marginTop: 20
        }}
      >
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>December Salary</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionTypeOrange}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>January Salary</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>December Salary</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionTypeOrange}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>January Salary</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>December Salary</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionTypeOrange}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 December, 2022</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowDown} />
          </View>
          <View style={styles.transaction}>
            <Text>January Salary</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>+ $ 1,245</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transactionContainer}
          onPress={() => navigation.navigate('TransactionDetails')}
        >
          <View style={styles.TransactionType}>
            <FontAwesomeIcon icon={faArrowUp} />
          </View>
          <View style={styles.transaction}>
            <Text>Muhammad khalid</Text>
            <Text>25 January, 2023</Text>
          </View>
          <Text>- $ 45.44</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15
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
