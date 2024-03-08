import * as React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, map } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import {themeColors } from '../theme/Theme'
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import {featured} from '../constants/index'

export default function HomeScreen() {
    return (
      <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content" />
          {/* search bar */}
          <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-l items-center p-3 rounded-full border border-gray-300">
              <Icon.Search height="25" width="25" stroke="gray" />
              <TextInput placeholder='Restaurants' className="ml-2 flex-l" />
              <View className="flex-row items-center space-x-l border-0 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" width="20" stroke="gray" />
                <Text className="text-gray-600">Mi primera chamba</Text>
              </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor (1)}} className="p-3 rounded-full">
              <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
            </View>
          </View>
        {/* main*/}
        
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20
          }}>
            {/*categories*/}
            <Categories/>

            <View className="mt-5">
              {featured.map((item, index) => (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              ))}
            </View>
        </ScrollView>
      </SafeAreaView>
    );
}