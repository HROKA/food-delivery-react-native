import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import HomeScreen from './screens/Home';
import Login from './screens/signIn';
import SignUp from './screens/SignUp';
import SearchScreen from './screens/Search';
import FavoritesScreen from './screens/Favorites';
import OrdersScreen from './screens/Orders';
import ProfileScreen from './screens/Profile';
// import BottomTabBar from './components/BottomTabBar';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/home' component={HomeScreen} />
      <Route exact path='/search' component={SearchScreen} />
      <Route exact path='/favorites' component={FavoritesScreen} />
      <Route exact path='/orders' component={OrdersScreen} />
      <Route exact path='/profile' component={ProfileScreen} />
      {/* <BottomTabBar /> */}
    </NativeRouter>
  );
}
