import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.fancyCardContainer}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The City Palace.The Hawa Mahal is a palace in the city of Jaipur,
            India. Built from Red and pink sandstone, it is on the edge of the
            Ciy Palace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCardContainer: {
    width: '100%',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#BB7E6C"
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingBottom:12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight:"bold",
    marginBottom: 6,
    textAlign: "center"
    
  },
  cardLabel: {
    textAlign: "right",
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1
  },
  cardFooter: {
    color: '#000000'
  },
});
