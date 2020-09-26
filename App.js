import React, { useState, createContext } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import HomeScreen from './screens/Home';
import Login from './screens/signIn';
import SignUp from './screens/SignUp';
import SearchScreen from './screens/Search';
import FavoritesScreen from './screens/Favorites';
import OrdersScreen from './screens/Orders';
import ProfileScreen from './screens/Profile';
import WelcomePage from './screens/Welcome';
import BottomTabBar from './components/BottomTabBar';
import ClientContext from './ClientContext';

const App = () => {
  const [clientData, setClientData] = useState();

  return (
    <NativeRouter>
      <Route
        exact
        path='/'
        render={() => <WelcomePage setClientData={setClientData} />}
      />
      <Route
        exact
        path='/login'
        render={() => <Login setClientData={setClientData} />}
      />
      <Route
        exact
        path='/signup'
        render={() => <SignUp setClientData={setClientData} />}
      />
      {clientData && (
        <ClientContext.Provider value={clientData}>
          <Route
            exact
            path='/home'
            render={() => (
              <>
                <HomeScreen />
                <BottomTabBar tab={0} />
              </>
            )}
          />
          <Route
            exact
            path='/search'
            render={() => (
              <>
                <SearchScreen />
                <BottomTabBar tab={1} />
              </>
            )}
          />
          <Route
            exact
            path='/favorites'
            render={() => (
              <>
                <FavoritesScreen />
                <BottomTabBar tab={2} />
              </>
            )}
          />
          <Route
            exact
            path='/orders'
            render={() => (
              <>
                <OrdersScreen />
                <BottomTabBar tab={3} />
              </>
            )}
          />
          <Route
            exact
            path='/profile'
            render={() => (
              <>
                <ProfileScreen />
                <BottomTabBar tab={4} />
              </>
            )}
          />
        </ClientContext.Provider>
      )}
    </NativeRouter>
  );
};

export default App;
