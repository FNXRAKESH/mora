import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Chart from './Chart';


const Reports = () => {

  const [month, setMonth] = useState('This Month');
  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Chart />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[styles.circle, { backgroundColor: '#ED9792' }]}
            ></View>
            <Text style={{ paddingLeft: 10 }}>Income</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[styles.circle, { backgroundColor: '#A9D1BD' }]}
            ></View>
            <Text style={{ paddingLeft: 10 }}>Expense</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[styles.circle, { backgroundColor: '#7ABBEE' }]}
            ></View>
            <Text style={{ paddingLeft: 10 }}>Savings</Text>
          </View>
        </View>
        <View style={styles.line}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 20, flexGrow: 1 }}>Expenses Report</Text>
          <TouchableOpacity style={styles.month}>
            <Text style={{ color: '#fff', paddingRight: 10 }}>{month}</Text>
            <FontAwesomeIcon icon={faAngleDown} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1, paddingTop: 15 }}>
          <View style={styles.report}>
            <View
              style={[styles.circle, { backgroundColor: '#ED9792' }]}
            ></View>
            <Text style={styles.reportText}>Income</Text>
            <Text>$ 1,654</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={[
                  styles.circle,
                  { backgroundColor: '#000', marginHorizontal: 5 }
                ]}
              ></View>
              <Text>75%</Text>
            </View>
          </View>
          <View style={styles.report}>
            <View
              style={[styles.circle, { backgroundColor: '#A9D1BD' }]}
            ></View>
            <Text style={styles.reportText}>Expenses</Text>
            <Text>$ 213.45</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={[
                  styles.circle,
                  { backgroundColor: '#000', marginHorizontal: 5 }
                ]}
              ></View>
              <Text>12%</Text>
            </View>
          </View>
          <View style={styles.report}>
            <View
              style={[styles.circle, { backgroundColor: '#7ABBEE' }]}
            ></View>
            <Text style={styles.reportText}>Savings</Text>
            <Text>$ 415.23</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={[
                  styles.circle,
                  { backgroundColor: '#000', marginHorizontal: 5 }
                ]}
              ></View>
              <Text>13%</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    flexGrow: 1
  },
  line: {
    borderTopWidth: 1,
    marginVertical: 25,
    borderColor: 'rgba(35, 31, 32, 0.1)'
  },
  month: {
    borderRadius: 50,
    backgroundColor: '#006C35',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  report: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: 7,
    alignItems: 'center',
    padding: 15,
    marginVertical: 5
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10
  },
  reportText: {
    fontSize: 18,
    flexGrow: 1,
    paddingLeft: 10
  }
});
