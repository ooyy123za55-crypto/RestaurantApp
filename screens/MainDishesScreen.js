import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from '../assets/styles/ScreenStyles';
import { mainDishes } from './../data/menuData';

export default function MainDishesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.icon}>🍛</Text>
        <Text style={styles.title}>อาหารจานหลัก</Text>
        <Text style={styles.subtitle}>เมนูแนะนำ</Text>

        {mainDishes.map((food) => (
          <View key={food.id} style={styles.menuCard}>
            <Text style={styles.menuEmoji}>{food.emoji}</Text>

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
