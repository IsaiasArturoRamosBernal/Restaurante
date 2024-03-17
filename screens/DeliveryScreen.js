import { View, Text } from 'react-native';
import React from 'react';
import {featured} from '../constants';
import { useNavigation} from 'react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import * as Icon from "react-native-feather";


export default function DeliveryScreen() {
const restaurant= featured. restaurants[0];
const navigation = useNavigation();
return (
<View className="flex-1">
{/* map view */}
<MapView
initialRegion={{


Latitude: restaurant. lat, 
longitude: restaurant.Ing, 
latitudeDelta: 0.01, 
LongitudeDelta: 0.01
}}
className="Flex-1"
mapType='standard'
>


<Marker
coordinate={{
Latitude: restaurant. lat, 
longitude: restaurant.Ing,
}}
title={restaurant.name}
description={restaurant.description}
pinColor={themeColors.bgColor(1)}
/>
</MapView>
<View className="rounded-t-3xl -mt-12 bg-white relative"> <View className="flex-row justify-between px-5 pt-10">
<View>
<Text className="text-lg text-gray-700 font-semibold"> Estimated Arrival
</Text>
<Text className="text-3xl font-extrabold text-gray-700"> 
20-30 Minutes
</Text>
<Text className="mt-2 text-gray-700 font-semibold">
Your order is own its way!
</Text>
</View>
<Image className="-24 h-24" source= {require('../assets/images/bikeGuy2.gif')}/>


</View>
<View
style={{backgroundColor:themeColors.bgColor(0.8)}}
className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
<View className="p-1 rounded-full"
style={{backgroundColor:'rgba(255,255,0,4)'}}>
<Image className="h-16 w-16 rounded-full"
source={require('../assets/images/a.png')}/>
</View>
<View className="flex-1 ml-3">
<Text className="text-lg font-bold text-white"> 
Syed Noman
</Text>
<Text className="font-semibold text-white">
Your Rider
</Text>
</View>
<View className="Flex-row items-center space-x-3 mr-3">
<TouchableOpacity className="bg-white p-2 rounded-full">
<Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColor.bgColor(1) }strokeWidth={1}/>
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate('Home')} className="bg-white p-2 rounded-full">
<Icon.X stroke={'red'} strokeWidth={4}/>
</TouchableOpacity>
</View>
</View>
</View>
</View>
)
}