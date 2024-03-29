
import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    Button 
} from 'react-native';
import Animated,{useSharedValue ,useAnimatedStyle,withTiming}from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import  {Horizontalcards}from "../components"
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

const OrderDetails = ({ navigation, route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        SweetRomane: require('../assets/fonts/SweetRomance.ttf'),
        Popregular: require('../assets/fonts/PoppinsRegular.ttf'),
        Popsemibold: require('../assets/fonts/PoppinsSemiBold.ttf'),
        Rockstyle: require('../assets/fonts/Starlight.ttf'),
        Formalf: require('../assets/fonts/SFCartoonistHand.ttf'),
        FormalfB: require('../assets/fonts/SFCartoonistHandB.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);
  
  const { orderId, itemsList: initialItemsList } = route.params;
  const [itemsList, setItemsList] = useState(initialItemsList);
  React.useEffect(() => {
    setItemsList(itemsList);
  }, [itemsList]);
 
  const screenWidth = Dimensions.get('window').width;

   navigation = useNavigation();
  console.log('Items:', itemsList);
  
  const numColumns = 1;
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
        backgroundColor: '#FFFFFF', // Set the background color to match the first snippet
  
      },
    
    itemContainer: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      marginVertical: 10,
      marginHorizontal: 8,
      backgroundColor: '#ebebeb',
      borderRadius: 8,
      height:178,width:255,
      marginBottom:10,
      flexDirection: 'column', // Added this line
    },
    itemImage: {
      width: 100,
      height: 90,
      marginBottom: 15,
      borderRadius: 5,
      marginTop:5,
    },
      textContainer: {
        marginTop:15,
        flexDirection: 'row',
        alignItems: 'left',
        flex: 1,
      },
      itemPrice:{
        fontSize: 22,
        fontWeight: 'bold',
        marginRight:24,
        fontFamily: fontLoaded ? 'FormalfB' : 'Arial',

        
      },
      itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex:1,
        fontFamily: fontLoaded ? 'FormalfB' : 'Arial',
      },
      itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Added this line
        paddingHorizontal: 10,

      },
      favoriteButton: {
        marginLeft: 16,
       
      },
      logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontFamily: fontLoaded ? 'Formalf' : 'Arial',
        fontWeight: 'bold',
        fontSize: 34,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 20,
      },
      logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImage: {
        width: 150,
        height: 60,
        alignItems: 'center',
      },
      logoButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
     
      cartButton: {
        position: 'absolute',
        top: 5,
        right: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 15,
        zIndex: 1,
      },
      cartIcon: {
        fontSize: 32,
        color: '#000000',
      }
  });




const [cartItems, setCartItems] = React.useState([]);


  
const MyFlatList = () => {
  
  const handlePress = (item) => {
    // Handle press action for a specific item
    console.log('Pressed item:', item);
  };

  

const renderItem = ({ item }) => (
  
      <View style={[styles.textContainer ]}>
        <Text style={styles.itemText } >{item.items.name}</Text>
        
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    
);
return (
    <FlatList
      data={itemsList}
      renderItem={renderItem}
      numColumns={numColumns}
    />
)

}

const FlatListRef =React.useRef()

function renderSearch() {
    return (
      <View style={styles.logoButtonContainer}>
         <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position:'absolute' , right:232 }}>
            <Image
              source={require('../assets/menu.png')}
              style={{ width: 24, height: 24, tintColor: '#000000' }}
            />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Swiftlogo.jpg')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
         
        </View>
    );
  }



  return (
    <View  style={styles.container}>
     
      {renderSearch()}
      <View>
       
        {fontLoaded && (
  <Text style={styles.text}>
    {'\n'}
    {'\n'}
    Order Number : {orderId}
  </Text>
)}
          
         
        
        </View>
      
      <View style={{ flex: 1 }}>
      <MyFlatList data={itemsList}
  renderItem={({ item }) => renderItem(item)}
  numColumns={numColumns}/>
    </View>
    </View>

   
    )
    };



  export default OrderDetails;

