import React from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

const DunkDashScreen: React.FC = () => {
    const [fontsLoaded] = useFonts({
    'Jersey10': require('../../assets/fonts/Jersey10-Regular.ttf'),
  });

    if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Dunk Dash</Text>
      </View>

      {/* Bottom Controls */}
      <ImageBackground source={require('../../assets/images/gameImages/dunkDash.png')} style={styles.background} alt='Game Mock Up'>
      <View style={styles.bottomControls}>
        <TouchableOpacity>
            <View style={styles.controlButton}>
            <Image style={styles.cartIcon} source={require('../../assets/images/gameImages/shoppingCartIcon.png')}></Image>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={styles.controlButton}>
            <Image style={styles.profileIcon} source={require('../../assets/images/gameImages/profileIcon.png')}></Image>
            </View>
        </TouchableOpacity>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: 10</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d3d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: 'rgba(26,29,61,0.7)',
    borderBottomWidth: 4,
    borderBottomColor: '#f39c12',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Jersey10',
    color: '#fff',
    letterSpacing: 2,
  },
  bottomControls: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    bottom: 16,
    left: 0,
    right: 0,
  },
  controlButton: {
    width: 60,
    height: 60,
    backgroundColor: '#1a1d3d',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cartIcon: {
    height: 35,
    width: 35,
  },
  profileIcon: {
    height: 32,
    width: 32,
  },
  scoreContainer: {
    backgroundColor: '#1a1d3d',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scoreText: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'Jersey10',
    letterSpacing: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default DunkDashScreen;