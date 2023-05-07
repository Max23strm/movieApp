import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { styles } from '../theme/Theme'


export const Spinner = () => {
  return (
    <View style={styles.loadingSpinnerContainer}>
        <ActivityIndicator size={50}/>
    </View>
  )
}
