// RestaurantScreen component
import * as React from 'react';
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DishRow from '../components/dishRows';
import { themeColors } from '../theme/Theme';
import CartIcon from '../components/cartIcon';
import {StatusBar} from'expo-status-bar';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../slice/restaurantSlice';

export default function RestaurantScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params;

  //console.log('restaurant: ', item);
useEffect(()=>{
if(item && item.id){
  dispatchEvent(setRestaurant({...item}))
}
},[])
  return (
    <View>
      <CartIcon/>
      <StatusBar style="light"/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={require('../assets/images/a.png')} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 Ibg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-l">
                <Image source={require('../assets/images/a.png')} style={{ height: 14, width: 14 }} />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review)<Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-l">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish) => (
            <DishRow key={dish.id} {...dish} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}