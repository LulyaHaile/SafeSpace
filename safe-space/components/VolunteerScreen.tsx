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

interface Volunteer {
  id: number;
  name: string;
  distance: string;
  address: string;
}

const VolunteerListScreen: React.FC = () => {
  const volunteers: Volunteer[] = [
    {
      id: 1,
      name: 'Volunteer1',
      distance: '7 minutes away',
      address: '510 Patton St. Danville, VA 24543',
    },
    {
      id: 2,
      name: 'Volunteer2',
      distance: '7 minutes away',
      address: '510 Patton St. Danville, VA 24543',
    },
    {
      id: 3,
      name: 'Volunteer3',
      distance: '7 minutes away',
      address: '510 Patton St. Danville, VA 24543',
    },
    {
      id: 4,
      name: 'Volunteer4',
      distance: '7 minutes away',
      address: '510 Patton St. Danville, VA 24543',
    },
    {
      id: 5,
      name: 'Volunteer5',
      distance: '7 minutes away',
      address: '510 Patton St. Danville, VA 24543',
    },
  ];

  const handleCall = (volunteer: Volunteer): void => {
    Alert.alert(
      'Call Volunteer',
      `Call ${volunteer.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => Linking.openURL('tel:'),
        },
      ]
    );
  };

  const handleMessage = (volunteer: Volunteer): void => {
    Alert.alert('Message', `Message ${volunteer.name}`);
  };

  const handleNavigate = (volunteer: Volunteer): void => {
    Alert.alert('Navigate', `Navigate to ${volunteer.name}`);
  };

  const VolunteerCard: React.FC<{ volunteer: Volunteer }> = ({ volunteer }) => (
    <View style={styles.volunteerCard}>
      <View style={styles.cardContent}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.volunteerName}>{volunteer.name}</Text>
          
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Available</Text>
          </View>
          
          <Text style={styles.volunteerDetails}>
            {volunteer.name} is {volunteer.distance}{'\n'}
            Location: {volunteer.address}
          </Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.callButton]}
          onPress={() => handleCall(volunteer)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>📞</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleMessage(volunteer)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>💬</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleNavigate(volunteer)}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>📍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Volunteer List</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📍</Text>
          <Text style={styles.navText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  volunteerCard: {
    backgroundColor: 'rgba(102, 106, 146, 0.55)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7B7777',
    marginBottom: 16,
    padding: 16,
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
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#AFCAEA',
  },
  infoContainer: {
    flex: 1,
  },
  volunteerName: {
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
  statusBadge: {
    backgroundColor: '#AFCAEA',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  statusText: {
    color: '#131739',
    fontSize: 12,
    fontWeight: '600',
  },
  volunteerDetails: {
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
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 12,
  },
  actionButton: {
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderRadius: 20,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  callButton: {
    backgroundColor: '#EA4335',
  },
  buttonIcon: {
    fontSize: 28,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1E2298',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#323030',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 10,
    color: '#F4E9E9',
    textTransform: 'capitalize',
  },
});

export default VolunteerListScreen;