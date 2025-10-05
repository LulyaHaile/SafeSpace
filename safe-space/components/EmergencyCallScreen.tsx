import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const EmergencyCallScreen: React.FC = () => {
  const handleCall911 = (): void => {
    Alert.alert(
      "Emergency Call",
      "Are you sure you want to call 911?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Call 911",
          style: "destructive",
          onPress: () => {
            Linking.openURL('tel:911');
          }
        }
      ]
    );
  };

  const PhoneIcon: React.FC = () => (
    <View style={styles.phoneIconContainer}>
      <View style={styles.phoneShape}>
        <View style={[styles.phoneCurve, styles.topCurve]} />
        <View style={[styles.phoneCurve, styles.bottomCurve]} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>CALL 911</Text>
        </View>

        <View style={styles.phoneIconsContainer}>
          <TouchableOpacity 
            style={styles.phoneButton}
            onPress={handleCall911}
            activeOpacity={0.7}
          >
            <PhoneIcon />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.phoneButton}
            onPress={handleCall911}
            activeOpacity={0.7}
          >
            <PhoneIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.instructionText}>
          Press 📞 to call 911
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131739',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  titleContainer: {
    borderWidth: 2,
    borderColor: '#323030',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 50,
    borderRadius: 8,
  },
  titleText: {
    fontSize: Math.min(70, width * 0.15),
    fontWeight: '900',
    color: '#CC1212',
    textAlign: 'center',
    letterSpacing: 2,
  },
  phoneIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 300,
    marginBottom: 40,
  },
  phoneButton: {
    width: 80,
    height: 80,
    backgroundColor: '#EAAFAF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  phoneIconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneShape: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  phoneCurve: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderWidth: 4,
    borderColor: '#E91E63',
  },
  topCurve: {
    top: 0,
    left: 5,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 15,
    transform: [{ rotate: '-15deg' }],
  },
  bottomCurve: {
    bottom: 0,
    right: 5,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 20,
    transform: [{ rotate: '-15deg' }],
  },
  instructionText: {
    fontSize: 25,
    color: '#CC1212',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default EmergencyCallScreen;