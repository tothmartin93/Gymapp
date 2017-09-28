import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import Layout from '../constants/Layout';
import { WebBrowser } from 'expo';

import MenuItem from '../components/MenuItem';
import CardItem from '../components/CardItem';
import CardImage from '../components/CardImage';
import CardImageScroll from '../components/CardImageScroll';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <CardItem/>
        <CardImage/>

        <ScrollView horizontal>
          <CardImageScroll/>
          <CardImageScroll/>
        </ScrollView>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    
  }
});
