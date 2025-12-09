import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../assets/styles/ScreenStyles'
import { drinks } from '../data/menuData'

export default function DrinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}></Text>
        <Text style={styles.title}>เครื่องดื่ม</Text>
        <Text style={styles.subtitle}>เมณูแนะนำ {drinks.length}</Text>

        {drinks.map((drinks) => (
          <View key={drinks.id} style={styles.menuCard}>
            <Text style={styles.menuEmoji}></Text>
            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>{drinks.name}</Text>
              <Text style={styles.menuPrice}>{drinks.price} ดอลล่า</Text>
            </View>
            <View style={styles.menuButton}>
              <Text style={styles.menuButtonText}>สั่ง</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}