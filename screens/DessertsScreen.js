import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from '../assets/styles/ScreenStyles';
import { desserts } from './../data/menuData';

export default function DessertsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>🍰</Text>
        <Text style={styles.title}>ของหวาน</Text>
        <Text style={styles.subtitle}>เมนูทั้งหมด ({desserts.length})</Text>

        {desserts.map((food) => (
          <View key={food.id} style={styles.menuCard}>
            <Text style={styles.menuEmoji}>🍮</Text>

            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>{food.name}</Text>
              <Text style={styles.menuPrice}>{food.price} ดอลลาร์</Text>
            </View>

            <View style={styles.menuButton}>
              <Text style={styles.menuButtonText}>สั่ง</Text>
            </View>
          </View>
        ))}

      </View>
    </ScrollView>
  );
}
