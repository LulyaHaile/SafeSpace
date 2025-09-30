import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useFonts } from 'expo-font';

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageSource: ImageSourcePropType;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageSource }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.productImage} resizeMode="cover" />
    </View>
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

const BasketballShop: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'Jersey10': require('../../assets/fonts/Jersey10-Regular.ttf'),
    });

    if (!fontsLoaded) return null;

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductCardProps | null>(null);

    const handleCardPress = (product: ProductCardProps) => {
        setSelectedProduct(product);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedProduct(null);
    };

  return (
    <View style={styles.container}>
        {overlayVisible && selectedProduct && (
        <View style={styles.overlayContainer}>
            <View style={styles.overlayBox}>
            <Text style={styles.overlayTitle}>{selectedProduct.title}</Text>
            <Text style={styles.overlaySubtitle}>{selectedProduct.subtitle}</Text>

            <Image
                source={selectedProduct.imageSource}
                style={styles.overlayImage}
                resizeMode="contain"
            />

            <TouchableOpacity style={styles.closeButton} onPress={closeOverlay}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            </View>
        </View>
        )}

    <ImageBackground source={require('../../assets/images/shopImages/courtFloor.jpg')} style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shop</Text>
      </View>

      <View style={styles.content}>
        {/* Basketballs Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitleLarge}>Basketballs</Text>
          </View>
          
          <View style={styles.productGrid}>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "Wilson NBA",
                    subtitle: "Call 911",
                    imageSource: require('../../assets/images/shopImages/wilsonNBABall.png'),
                    })
                }
                >
                <ProductCard
                    title="Wilson NBA"
                    subtitle="Call 911"
                    imageSource={require('../../assets/images/shopImages/wilsonNBABall.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "Spalding NBA",
                    subtitle: "Call Contact1",
                    imageSource: require('../../assets/images/shopImages/spaldingNBABall.png'),
                    })
                }
                >
                <ProductCard
                    title="Spalding NBA"
                    subtitle="Call Contact1"
                    imageSource={require('../../assets/images/shopImages/spaldingNBABall.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "Wilson EVO",
                    subtitle: "Call Hotline",
                    imageSource: require('../../assets/images/shopImages/wilsonEVOBall.png'),
                    })
                }
                >
                <ProductCard
                    title="Wilson EVO"
                    subtitle="Call Hotline"
                    imageSource={require('../../assets/images/shopImages/wilsonEVOBall.png')}
                />
            </TouchableOpacity>
          </View>
        </View>

        {/* Courts Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitleLarge}>Courts</Text>
          </View>
          
          <View style={styles.productGrid}>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "Madison Square Garden",
                    subtitle: "Other Options",
                    imageSource: require('../../assets/images/shopImages/madisonSquareGarden.png'),
                    })
                }
                >
                <ProductCard
                    title="Madison Square Garden"
                    subtitle="Other Options"
                    imageSource={require('../../assets/images/shopImages/madisonSquareGarden.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "STAPLES Center",
                    subtitle: "Other Options",
                    imageSource: require('../../assets/images/shopImages/staplesCenter.jpg'),
                    })
                }
                >
                <ProductCard
                    title="STAPLES Center"
                    subtitle="Other Options"
                    imageSource={require('../../assets/images/shopImages/staplesCenter.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ width: '30%' }}
                onPress={() =>
                    handleCardPress({
                    title: "Capital One Arena",
                    subtitle: "Other Options",
                    imageSource: require('../../assets/images/shopImages/capitalOneArena.jpg'),
                    })
                }
                >
                <ProductCard
                    title="Capital One Arena"
                    subtitle="Other Options"
                    imageSource={require('../../assets/images/shopImages/capitalOneArena.jpg')}
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Image style={styles.homeIcon} source={require('../../assets/images/gameImages/homeIcon.png')}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Image style={styles.profileIcon} source={require('../../assets/images/gameImages/profileIcon.png')}></Image>
          </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1f3a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1a1f3a',
    borderBottomWidth: 4,
    borderBottomColor: '#f39c12',
  },
  headerText: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'Jersey10',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionHeader: {
    backgroundColor: 'rgba(26,29,61,1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionTitleLarge: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Jersey10',
    textAlign: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    backgroundColor: '#0f1428',
    borderRadius: 12,
    padding: 8,
    marginBottom: 8,
    aspectRatio: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  cardInfo: {
    backgroundColor: 'rgba(26,29,61,0.8)',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontFamily: 'Jersey10',
    fontSize: 20,
    marginBottom: 2,
    textAlign: 'center',
    alignSelf: 'center',
  },
  cardSubtitle: {
    color: '#bbb',
    fontSize: 11,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Jersey10',
  },
  bottomNav: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
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
  homeIcon: {
    height: 45,
    width: 45,
  },
  profileIcon: {
    height: 32,
    width: 32,
  },
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
    overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 10,
  },
    overlayBox: {
    width: '80%',
    backgroundColor: '#1a1f3a',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
    overlayTitle: {
    fontSize: 24,
    fontFamily: 'Jersey10',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
    overlaySubtitle: {
    fontSize: 14,
    fontFamily: 'Jersey10',
    color: '#bbb',
    marginBottom: 20,
    textAlign: 'center',
  },
    overlayImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
    closeButton: {
    backgroundColor: '#f39c12',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
    closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Jersey10',
  },
});

export default BasketballShop;