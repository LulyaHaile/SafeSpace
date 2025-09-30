import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width, height } = Dimensions.get('window');

const DunkDashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('./gameAssets/spaceShootersMock.png')} style={styles.background} alt='Game Mock Up'>
      <View style={styles.header}>
        <Text style={styles.title}>Dunk Dash</Text>
        <View style={styles.infoButton}>
          <Text style={styles.infoText}>ⓘ</Text>
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <View style={styles.controlButton}>
          <Text style={styles.cartIcon}>🛒</Text>
        </View>
        
        <View style={styles.controlButton}>
          <Text style={styles.usersIcon}>👥</Text>
        </View>
        
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#1a1d3d',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
  infoButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomControls: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    bottom: 10,
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
  },
  cartIcon: {
    fontSize: 25,
  },
  usersIcon: {
    fontSize: 25,
  },
  scoreContainer: {
    backgroundColor: '#1a1d3d',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 60,
  },
  scoreText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default DunkDashScreen;