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
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';

interface Hotline {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
}

const { width } = Dimensions.get('window');

const CrisisHotlineScreen: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jersey10: require('../assets/fonts/Jersey10-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  const hotlines: Hotline[] = [
    {
      id: 1,
      name: 'National Crisis Hotline',
      description:
        'The 988 Lifeline is available 24/7/365. Your conversations are free and confidential.',
      phoneNumber: '988',
    },
    {
      id: 2,
      name: 'Crisis Text Line',
      description:
        'Text HOME to 741741 to connect with a Crisis Counselor. Free 24/7 support.',
      phoneNumber: '741741',
    },
    {
      id: 3,
      name: 'Veterans Crisis Line',
      description:
        'Connect with caring, qualified responders at the Veterans Crisis Line. Available 24/7.',
      phoneNumber: '988',
    },
    {
      id: 4,
      name: 'SAMHSA National Helpline',
      description:
        'Treatment referral and information service available 24/7 in English and Spanish.',
      phoneNumber: '1-800-662-4357',
    },
    {
      id: 5,
      name: 'The Trevor Project',
      description:
        '24/7 support for LGBTQ+ youth. Call, text, or chat with trained counselors.',
      phoneNumber: '1-866-488-7386',
    },
  ];

  const handleCall = (hotline: Hotline): void => {
    Alert.alert('Call Hotline', `Call ${hotline.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Call',
        style: 'destructive',
        onPress: () => Linking.openURL(`tel:${hotline.phoneNumber}`),
      },
    ]);
  };

  const HotlineCard: React.FC<{ hotline: Hotline }> = ({ hotline }) => (
    <View style={styles.hotlineCard}>
      <View style={styles.cardLeft}>
        <TouchableOpacity
          onPress={() => handleCall(hotline)}
          activeOpacity={0.7}
        >
          <View style={styles.phoneIconBg}>
            <Text style={styles.phoneIcon}>📞</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardRight}>
        <Text style={styles.hotlineName}>{hotline.name}</Text>
        <Text style={styles.hotlineDescription}>{hotline.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CRISIS HOT LINE</Text>
      </View>

      {/* Scrollable Content */}
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
    paddingVertical: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#323030',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Math.min(60, width * 0.13),
    color: '#5DF36F',
    letterSpacing: 2,
    fontFamily: 'Jersey10',
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 106, 146, 0.55)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7B7777',
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  cardLeft: {
    marginRight: 16,
  },
  phoneIconBg: {
    width: 60,
    height: 60,
    backgroundColor: '#EAAFAF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  phoneIcon: {
    fontSize: 32,
    color: '#CC1212',
  },
  cardRight: {
    flex: 1,
  },
  hotlineName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  hotlineDescription: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 22,
  },
  emergencyNote: {
    backgroundColor: 'rgba(234, 67, 53, 0.2)',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
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
