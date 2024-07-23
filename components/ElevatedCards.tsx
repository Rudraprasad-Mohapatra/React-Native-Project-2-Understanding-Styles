import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevator]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },container: {
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius: 4,
        margin: 8,
        color: 'black'
    },
    cardElevator:{
        backgroundColor: "#CAD5E2",
        elevation: 4,
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowColor: "green",
        shadowOpacity:0.6,
        shadowRadius:3
    }
})