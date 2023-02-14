import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const SliderScreen = ({ navigation }) => {
  const onDone = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        showSkip={true}
        showNext={true}
        onDone={onDone}
        titleStyles={{
          fontSize: 24
        }}
        subTitleStyles={{
          fontSize: 20
        }}
        SkipButtonComponent={() => (
          <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
            <Text>Skip</Text>
          </TouchableOpacity>
        )}
        pages={[
          {
            image: <Image source={require('../assets/ellipse.png')} />,
            backgroundColor: 'white',
            title: 'Instant Account',
            subtitle:
              'Your All In One Place to Manage Your, Online Transaction and Banking Needs.'
          },
          {
            image: <Image source={require('../assets/ellipse.png')} />,
            backgroundColor: 'white',
            title: 'Save Smarter',
            subtitle:
              'Your All In One Place to Manage Your, Online Transaction and Banking Needs.'
          },
          {
            image: <Image source={require('../assets/ellipse.png')} />,
            backgroundColor: 'white',
            titleStyles: {
              textAlign: 'left'
            },
            subTitleStyles: {
              marginLeft: -40
            },
            title: 'All in one financial app',
            subtitle:
              ''
          }
        ]}
      />
    </View>
  );
};
 
export default SliderScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    
})