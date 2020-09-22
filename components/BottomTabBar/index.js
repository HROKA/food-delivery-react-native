/* eslint-disable no-dupe-keys */

import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-native';
import {
  SafeAreaView, TouchableOpacity, View,
} from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import Profile from './icons/Profile';
import Search from './icons/Search';
import Home from './icons/Home';
import Favorites from './icons/Favorites';
import Orders from './icons/Orders';
import styles from './style';

const TabBar = () => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const transition = <Transition.Change interpolation='easeOut' />;
  const ref = useRef();

  const tabs = [
    { icon: <Home active={active === 0} />, route: '/' },
    { icon: <Search active={active === 1} />, route: '/search' },
    { icon: <Favorites active={active === 2} />, route: '/favorites' },
    { icon: <Orders active={active === 3} />, route: '/orders' },
    { icon: <Profile active={active === 4} />, route: '/profile' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Transitioning.View
        // transition from reanimated follow this link to read docs
        // https://docs.expo.io/versions/latest/sdk/reanimated/
        ref={ref}
        style={styles.centerAll}
        transition={transition}>
        <View style={styles.tabs}>
          {tabs.map(({ icon, route }, index) => (
            <TouchableOpacity key={index} style={styles.tab}
              onPress={() => {
                setActive(index);
                history.push(route);
                // run the animation at here
                ref.current.animateNextTransition();
              }}
            >
              {icon}
            </TouchableOpacity>
          ))}
        </View>
      </Transitioning.View>
    </SafeAreaView>
  );
};

export default TabBar;
