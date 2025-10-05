import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import { Image } from 'expo-image';

interface Hotline {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
}

const CrisisHotlineScreen: React.FC = () => {
  const hotlines: Hotline[] = [
    {
      id: 1,
      name: 'National Crisis Hotline',
      description: 'The 988 Lifeline is available 24/7/365. Your conversations are free and confidential.',
      phoneNumber: '988',
    },
    {
      id: 2,
      name: 'Crisis Text Line',
      description: 'Text HOME to 741741 to connect with a Crisis Counselor. Free 24/7 support.',
      phoneNumber: '741741',
    },
    {
      id: 3,
      name: 'Veterans Crisis Line',
      description: 'Connect with caring, qualified responders at the Veterans Crisis Line. Available 24/7.',
      phoneNumber: '988',
    },
    {
      id: 4,
      name: 'SAMHSA National Helpline',
      description: 'Treatment referral and information service available 24/7 in English and Spanish.',
      phoneNumber: '1-800-662-4357',
    },
    {
      id: 5,
      name: 'Trevor Project',
      description: '24/7 support for LGBTQ+ youth. Call, text, or chat with trained counselors.',
      phoneNumber: '1-866-488-7386',
    },
  ];

  const handleCall = (hotline: Hotline): void => {
    Alert.alert(
      'Call Hotline',
      `Call ${hotline.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(`tel:${hotline.phoneNumber}`);
          },
        },
      ]
    );
  };

  const HotlineCard: React.FC<{ hotline: Hotline }> = ({ hotline }) => (
    <View style={styles.hotlineCard}>
      <View style={styles.cardContent}>
        <Text style={styles.hotlineName}>{hotline.name}</Text>
        <Text style={styles.hotlineDescription}>{hotline.description}</Text>
      </View>

      <TouchableOpacity
        style={styles.callButton}
        onPress={() => handleCall(hotline)}
        activeOpacity={0.7}
      >
        <View style={styles.phoneIconContainer}>
          <View style={styles.phoneIconBg}>
            <Text style={styles.phoneIcon}>📞</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRISIS HOT LINE</Text>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {hotlines.map((hotline) => (
          <HotlineCard key={hotline.id} hotline={hotline} />
        ))}

        <View style={styles.emergencyNote}>
          <Text style={styles.emergencyText}>
            ⚠️ If you're in immediate danger, please call 911
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131739',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#323030',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 50,
    fontWeight: '700',
    color: '#5DF36F',
    letterSpacing: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  hotlineCard: {
    backgroundColor: 'rgba(102, 106, 146, 0.55)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7B7777',
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  cardContent: {
    flex: 1,
    marginRight: 12,
  },
  hotlineName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  hotlineDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  callButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIconBg: {
    width: 50,
    height: 50,
    backgroundColor: '#EAAFAF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  phoneIcon: {
    fontSize: 28,
  },
  emergencyNote: {
    backgroundColor: 'rgba(234, 67, 53, 0.2)',
    borderRadius: 10,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#EA4335',
  },
  emergencyText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default CrisisHotlineScreen;