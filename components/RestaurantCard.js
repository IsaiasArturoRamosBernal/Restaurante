import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image, ScrollView,TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather'; // Import the Icon component from the appropriate library
import { themeColors } from '../theme/Theme';
import {useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={()=>navigation.navigate('Restaurant',{...item})}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image
          style={{ height: 120, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          source={require('../assets/images/a.png')} // Assuming item.image is a URL, adjust accordingly
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-l">
            <Image source={require('../assets/images/a.png')} style={{ height: 14, width: 14 }} /> 
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review)<Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}