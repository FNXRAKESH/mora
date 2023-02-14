import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Camera } from 'expo-camera';
import React, { useState } from 'react';
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

const FaceVerification = ({ navigation }) => {
  const [imageFront, setImageFront] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showCameraBack, setShowCameraBack] = useState(false);
  const [camera, setCamera] = useState(null);
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.front
  );
  const [imageBack, setImageBack] = useState(null);
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
            onPress={() => navigation.navigate('IdVerification')}
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
        <Text>5 of 6</Text>
      </View>
      <Text style={styles.title}>Face Verification</Text>
      <Text style={{ paddingBottom: 30, textAlign: 'center' }}>
        Scan your face for authentication. Place your face inside the frame and
        blink once.
      </Text>
      {!showCamera ? (
        <View
          style={{
            justifyContent: 'center',
            flexGrow: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
          >
            {imageFront != null ? (
              <View style={styles.pictureContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setImageFront(null);
                  }}
                  style={styles.Retake}
                >
                  <FontAwesomeIcon icon={faClockRotateLeft} color="#fff" />
                  <Text style={{ color: '#fff', paddingLeft: 10 }}>Retake</Text>
                </TouchableOpacity>
                <Image
                  source={{ uri: imageFront }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            ) : (
              <View style={styles.maskedContainer}>
                <TouchableOpacity
                  onPress={() => launchCamera()}
                  style={{ alignItems: 'center' }}
                >
                  <Image source={require('../assets/add.png')} />
                  <Text>Click here</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.btnSubmit}
            disabled={imageFront == null ? true : false}
            onPress={() => navigation.navigate('ConfirmDetails')}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <View style={styles.maskedContainer}>
              <View style={styles.cameraContainer}>
                <Camera
                  ref={(ref) => setCamera(ref)}
                  style={styles.fixedRatio}
                  type={cameraType}
                  ratio={'1:1'}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.cameraBtn}
            >
              <Text style={{ color: '#fff', fontSize: 20 }}>
                Take a Picture
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default FaceVerification;

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
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingVertical: 10,
    textAlign: 'center'
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 15,
    width: 50,
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
  pictureContainer: {
    width: Dimensions.get('window').width - 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cameraContainer: {
    width: '100%'
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
  },
  maskedContainer: {
    borderRadius: Dimensions.get('window').width - 100 / 2,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#D9D9D9',
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height / 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Retake: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 50,
    padding: 10,
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
