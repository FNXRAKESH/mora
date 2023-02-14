import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/female.png')} />

        <View style={styles.contentTitle}>
          <Text style={{ fontSize: 16, flexShrink: 1 }}>
            Payment of $ 12.00 Received from Abdul
          </Text>
        </View>
        <View>
          <Text>23 Min</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/male.png')} />

        <View style={styles.contentTitle}>
          <Text style={{ fontSize: 16, flexShrink: 1 }}>
            Abdul is requesting a payment of $ 25.00
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#006C35',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 50
              }}
            >
              <Text style={{ color: '#fff' }}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE5F55',
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 50
              }}
            >
              <Text style={{ color: '#fff' }}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>23 Min</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/female.png')} />

        <View style={styles.contentTitle}>
          <Text style={{ fontSize: 16, flexShrink: 1 }}>
            Your recent transaction of $ 12.00 was cancelled!
          </Text>
        </View>
        <View>
          <Text>23 Min</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/male.png')} />

        <View style={styles.contentTitle}>
          <Text style={{ fontSize: 16, flexShrink: 1 }}>
            Enjoy cashless transactions with MORA debit card! ⚡️
          </Text>
        </View>
        <View>
          <Text>23 Min</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center' }}>END OF LIST</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  content: {
    flexDirection: 'row',
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(35, 31, 32, 0.1)'
  },
  contentTitle: {
    flexGrow: 1,
    paddingLeft: 10,
    flexShrink: 1
  }
});
