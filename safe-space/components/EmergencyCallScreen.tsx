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
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

const EmergencyCallScreen: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jersey10: require('../assets/fonts/Jersey10-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  const handleCall911 = (): void => {
    Alert.alert(
      'Emergency Call',
      'Are you sure you want to call 911?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call 911',
          style: 'destructive',
          onPress: () => Linking.openURL('tel:911'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.titleText}>CALL 911</Text>

        {/* Call Button */}
        <TouchableOpacity
          style={styles.phoneButton}
          onPress={handleCall911}
          activeOpacity={0.7}
        >
          <Text style={styles.phoneIcon}>📞</Text>
        </TouchableOpacity>

        {/* Instruction */}
        <Text style={styles.instructionText}>
          Press <Text style={{ fontSize: 24 }}>📞</Text> to call 911
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
  titleText: {
    fontSize: Math.min(70, width * 0.15),
    color: '#CC1212',
    fontFamily: 'Jersey10',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 50,
  },
  phoneButton: {
    width: 90,
    height: 90,
    backgroundColor: '#EAAFAF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 40,
  },
  phoneIcon: {
    fontSize: 40,
    color: '#CC1212',
  },
  instructionText: {
    fontSize: 20,
    color: '#CC1212',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default EmergencyCallScreen;
