import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const PassportVerification = ({ navigation }) => {
  const [imageFront, setImageFront] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [camera, setCamera] = useState(null);
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back
  );
    useEffect(() => {
      setImageFront(null)
  },[])
  const launchCamera = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      alert('Permission for media access needed.');
    } else {
      setShowCamera(true);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync({
        base64: true
      });
      console.log(data.uri);
      setImageFront(data.uri);
      setShowCamera(false);
    }
  };
  
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
        {!showCamera ? (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('AccountOpening')}
          >
            <Image source={require('../assets/arrow.png')} />
            <Text style={{ paddingLeft: 10 }}>Back</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => setShowCamera(false)}
          >
            <Image source={require('../assets/arrow.png')} />
            <Text style={{ paddingLeft: 10 }}>Close</Text>
          </TouchableOpacity>
        )}
        <Text>1 of 6</Text>
      </View>
      {!showCamera ? (
        <View
          style={{
            justifyContent: 'center',
            flexGrow: 1
          }}
        >
          <Text style={styles.title}>Passport Verification</Text>
          <Text style={{ paddingBottom: 30, textAlign: 'center' }}>
            Scan Your Passport to Procceed
          </Text>

          <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
          >
            {imageFront != null ? (
              <View style={styles.takePicture}>
                <Image
                  source={{ uri: imageFront }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            ) : (
              <View style={styles.takePicture}>
                <TouchableOpacity
                  onPress={() => launchCamera()}
                  style={{ alignItems: 'center' }}
                >
                  <Image source={require('../assets/add.png')} />
                  <Text>Click Here</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.btnSubmit}
            disabled={imageFront == null ? true : false}
            onPress={() => navigation.navigate('Confirm')}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.fixedRatio}
              type={cameraType}
              ratio={'1:1'}
            />
          </View>
          <TouchableOpacity
            onPress={() => takePicture()}
            style={styles.cameraBtn}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default PassportVerification;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    paddingVertical: 10,
    textAlign: 'center'
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
  },
  takePicture: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#CECCCC',
    height: 150,
    width: Dimensions.get('window').width - 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  fixedRatio: {
    flexGrow: 1,
    aspectRatio: 1
  },
  cameraBtn: {
    padding: 15,
    backgroundColor: '#006C35',
    marginTop: 20,
    borderRadius: 50,
    alignItems: 'center'
  }
});
