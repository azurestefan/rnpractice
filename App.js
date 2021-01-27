/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';

import SettingsScreen from './screens/SettingsScreen';

import {AuthContext} from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true); //if user is authenticated or not
  // const [userToken, setUserToken] = React.useState(null); //if there is valid token
  //These are not needed because I now use useReducer Global state management.
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  //inital login state for global state managment
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // several action types
  // RETRIEVE_TOKEN is when user is logged in for the first time.
  // for every case we will get our previous state
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token, //we will pass token to our action.token and set as userToken.
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  // This is where we create the reducer.
  // loginState will hold the initialLoginStates,
  // Can change the state value based on the switch cases above and we can dispatch the action using dispatch
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  //signin signout functions which will set usertoken, and based on usertoken will display the respective screens.
  //These functions will be made in useMemo which is a memoization technique that will optimize to speed up the execution.
  //context is used to pass these functions into our components.
  //components/context.js. Import AuthContext in App.js and wrap components trees in AuthContext.
  // so now we have signin signout functions in authcontext
  // go to signinscreen and import authcontext
  // go to drawercontentscreen for signout.
  // useReducer > Global state management
  // AsyncStorage for token.
  // Empty array so that this doesn't run every time we render.

  //This is where we check from API call to database
  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        //signIn: async () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        //store
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e); //error
        }
        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

  //will run when screen is rendering. will check if user is logged in or not.
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken'); //will try to get userToken
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken); **Have to get token from asyncStorage
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000); //1초안에 유저가 로그인상태인지 아닌지 확인.
  }, []);

  //로딩할때 화면
  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />

              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
