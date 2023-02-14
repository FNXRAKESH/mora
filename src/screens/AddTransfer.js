import { faClose, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import {
  Button,
  Dialog,
  Portal,
  Provider,
  TextInput
} from 'react-native-paper';

const AddTransfer = ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const [amount, setsetAmount] = useState(0);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {route.params.mode == 'Add Money' ? (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransferMoney')}
          >
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
        )}
        <Text style={{ flexGrow: 1, textAlign: 'center', fontSize: 20 }}>
          {route.params.mode}
        </Text>
      </View>
      <View style={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.imgContainer}>
          {route.params.mode == 'Add Money' ? (
            <Image source={require('../assets/addmoney.png')} />
          ) : (
            <Image source={require('../assets/transfer.png')} />
          )}
        </View>
        <Text style={styles.Name}>{route.params.name}</Text>
        {route.params.mode != 'Add Money' ? (
          <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
            {route.params.number} - Bank Name
          </Text>
        ) : null}
        {route.params.mode == 'Add Money' ? (
          <Text style={{ textAlign: 'center' }}>
            Available Balance:{' '}
            <Text style={{ fontWeight: 'bold' }}>$ 14,654</Text>
          </Text>
        ) : null}
        <View style={{ marginVertical: 20 }}>
          <TextInput
            contentStyle={{ backgroundColor: '#F3F3F3', textAlign: 'center' }}
            placeholder="Enter The Amount..."
            onChangeText={(e) => setsetAmount(e)}
            keyboardType="number-pad"
          />
        </View>
        {route.params.mode != 'Add Money' ? (
          <Text style={{ textAlign: 'center' }}>
            Available Balance:{' '}
            <Text style={{ fontWeight: 'bold' }}>$ 14,654</Text>
          </Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.btnSubmit} onPress={() => showDialog()}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      {route.params.mode != 'Add Money' ? (
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ backgroundColor: '#fff' }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginBottom: 20,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 20 }}>Transferring Money</Text>
            <TouchableOpacity onPress={() => hideDialog()}>
              <FontAwesomeIcon icon={faXmarkCircle} color="grey" size={20} />
            </TouchableOpacity>
          </View>
          <Dialog.Content>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
              <View style={styles.imgContainer}>
                <Image source={require('../assets/transfer.png')} />
              </View>
              <Text style={styles.Name}>{route.params.name}</Text>
              <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
                {route.params.number} - Bank Name
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  fontWeight: 'bold'
                }}
              >
                $ {amount}
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Your Balance will be:
                <Text style={{ fontWeight: 'bold' }}>$ {14654 - amount}</Text>
              </Text>
            </View>
          </Dialog.Content>

          <TouchableOpacity
            style={styles.btnTransfer}
            onPress={() =>
              navigation.navigate('VerifyTransfer', {
                mode: 'Transfer Money',
                name: 'Aliya',
                number: '1234567890123'
              })
            }
          >
            <Text style={styles.btnText}>Transfer Money</Text>
          </TouchableOpacity>
        </Dialog>
      ) : (
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ backgroundColor: '#fff' }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginBottom: 20,
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 20 }}>Add Money</Text>
            <TouchableOpacity onPress={() => hideDialog()}>
              <FontAwesomeIcon icon={faXmarkCircle} color="grey" size={20} />
            </TouchableOpacity>
          </View>
          <Dialog.Content>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
              <View style={styles.imgContainer}>
                <Image source={require('../assets/addmoney.png')} />
              </View>
              <Text style={styles.Name}>{route.params.name}</Text>
              <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
                Available Balance : $14654
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  fontWeight: 'bold'
                }}
              >
                $ {amount}
              </Text>
              <Text style={{ textAlign: 'center' }}>
                Your Balance will be:
                <Text style={{ fontWeight: 'bold' }}>
                  $ {parseInt(14654) + parseInt(amount)}
                </Text>
              </Text>
            </View>
          </Dialog.Content>

          <TouchableOpacity
            style={styles.btnTransfer}
            onPress={() =>
              navigation.navigate('PaymentMethod', {
                mode: 'Transfer Money',
                name: 'Aliya',
                number: '1234567890123'
              })
            }
          >
            <Text style={styles.btnText}>Add Money</Text>
          </TouchableOpacity>
        </Dialog>
      )}
    </View>
  );
};

export default AddTransfer;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  Name: {
    fontSize: 20,

    textAlign: 'center'
  },
  btnSubmit: {
    backgroundColor: '#006C35',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10
  },
  btnTransfer: {
    backgroundColor: '#FE5F55',
    padding: 15,
    borderRadius: 10,
    margin: 10
  }
});
