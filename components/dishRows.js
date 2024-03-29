import * as React from 'react';
import * as Icon from "react-native-feather";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme/Theme';
import {useDispatch}from'react-redux';
import { addToCart,removedFromCart, selectCartItemsById } from '../slices/cartslice';



export default function DishRow({ item}) {
  const dispatch= useDispatch();
  const totalItems=useSlector(state=>selectCartItemsById(state,item.id));
  //const [quantity, setQuantity] = React.useState(1);

  //const handleIncrement = () => {
    //setQuantity(quantity + 1);};
    const handleIncrease = () => {
      dispatch(addToCart({...item}))
    };

  //const handleDecrement = () => {
    //if (quantity > 1) {
      //setQuantity(quantity - 1);}};
      const handleDecrease= () => {
       dispatch(removeFromCart({id: item.id}))
      };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{ height: 100, width: 100 }} source={require('../assets/images/a.png')} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{name}</Text>
          <Text className="text-gray-700">{description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            $ {item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              //onPress={handleDecrement}
              onPress={handleDecrease}
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}>
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
            <Text className="px-3">
              {totalItems.length}
            </Text>
            <TouchableOpacity
              //onPress={handleIncrement}
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}>
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
