import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: String) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.actionCardContainer}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://i0.wp.com/mediumpulse.com/wp-content/uploads/2024/07/skateboarding-olympics-games-paris-2024.jpg?resize=816%2C816&ssl=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.headertext}>Skateboarding Olympics Games Paris 2024.</Text>
        </View>
        <View style={styles.actionBodyContainer}>
          <Text numberOfLines={3} style={styles.actionBodyContainerText}>
          The Skateboarding events at the Paris 2024 Olympics are set to be a highlight, showcasing top global talent. Competitors will perform in both street and park disciplines, promising thrilling displays of skill and creativity. The events will be held in the heart of Paris, adding an iconic backdrop to the sport. Skateboarding's inclusion underscores the Olympics' commitment to modern, youth-focused sports. Fans can expect an electrifying atmosphere and unforgettable moments as athletes push the limits of their abilities.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://mediumpulse.com/2024/07/27/skateboarding-olympics-games-paris-2024/',
              );
            }}
            >
            <Text style={styles.readMore}>Read More ...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  actionCardContainer: {
    width: '100%',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  card: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#FFFFFF',
    elevation: 8, //android
    shadowColor: 'red', // ios
    shadowOffset: {
      width: 0,
      height: 2,
    }, // ios
    shadowOpacity: 0.25, // ios
    shadowRadius:3.84, // ios
  },
  headingContainer: {},
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  cardImage: {
    height: 400,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  actionBodyContainer: {
    paddingHorizontal:8,
    paddingVertical:8,
  },
  actionBodyContainerText: {
    color: 'black',
    textAlign:'justify'
  },
  footerContainer: {
    paddingHorizontal:8,
    paddingVertical:8,
  },
  readMore: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
    lineHeight: 24,
  },
});
