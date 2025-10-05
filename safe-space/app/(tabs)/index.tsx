import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import EmergencyCallScreen from '@/components/EmergencyCallScreen';
import VolunteerScreen from '@/components/VolunteerScreen';
import CrisisHotlineScreen from '@/components/CrisisHotlineScreen';

type Screen = 'volunteer' | 'emergency' | 'hotline';

export default function HomeScreen() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<Screen>('volunteer');

  if (currentScreen === 'emergency') {
    return (
      <View style={{ flex: 1 }}>
        <EmergencyCallScreen />
        <View style={styles.buttonContainer}>
          <Button 
            title="← Back" 
            onPress={() => setCurrentScreen('volunteer')}
            color="#666"
          />
        </View>
      </View>
    );
  }

  if (currentScreen === 'hotline') {
    return (
      <View style={{ flex: 1 }}>
        <CrisisHotlineScreen />
        <View style={styles.buttonContainer}>
          <Button 
            title="← Back" 
            onPress={() => setCurrentScreen('volunteer')}
            color="#666"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <VolunteerScreen />
      
      <View style={styles.floatingButtons}>
        <View style={styles.buttonSpacing}>
          <Button 
            title="🚨 Emergency" 
            onPress={() => setCurrentScreen('emergency')}
            color="#CC1212"
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button 
            title="📞 Crisis Hotline" 
            onPress={() => setCurrentScreen('hotline')}
            color="#5DF36F"
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button 
            title="Go to Landing" 
            onPress={() => router.push('/landingpage')}
            color="#4A90E2"
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button 
            title="Go to Login" 
            onPress={() => router.push('/Login')}
            color="#9B59B6"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButtons: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  buttonSpacing: {
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});