import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{backgroundColor: '#7AD96A'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: '메인화면',
        tabBarColor: 'lime',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: '배송정보',
        tabBarColor: 'lime',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'WeEat 배송관리 메인페이지',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={require('../assets/logo.png')}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

// const NotificationStackScreen = ({navigation}) => (
//   <NotificationStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#1f65ff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <NotificationStack.Screen
//       name="Notifications"
//       component={NotificationScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#1f65ff"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </NotificationStack.Navigator>
// );

// const ProfileStackScreen = ({navigation}) => {
//   const {colors} = useTheme();

//   return (
//     <ProfileStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//       }}>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: '',
//           headerLeft: () => (
//             <View style={{marginLeft: 10}}>
//               <Icon.Button
//                 name="ios-menu"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.openDrawer()}
//               />
//             </View>
//           ),
//           headerRight: () => (
//             <View style={{marginRight: 10}}>
//               <MaterialCommunityIcons.Button
//                 name="account-edit"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.navigate('EditProfile')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="EditProfile"
//         options={{
//           title: 'Edit Profile',
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
//   );
// };