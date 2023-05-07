import React, {useContext, useEffect} from 'react'
import {StatusBar, StyleSheet, View, Animated} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradiantContext } from '../context/GradientContext'
import useFade from '../hooks/useFade'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({children} : Props) => {
    
    const {colors, prevColors, setPrevMainColors} = useContext(GradiantContext)
    const {opacity, fadeIn, FadeOut}=useFade()
    useEffect(()=>{
        fadeIn( () => {
            setPrevMainColors(colors)
            FadeOut()
        })
    },[colors])

    return (
    <View style={{flex:1}}>
        <LinearGradient
            colors={[prevColors.primary, prevColors.secondary, '#fff']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{x:0.5, y: 0.7}}
        />

        <Animated.View
            style={{...StyleSheet.absoluteFillObject, opacity:opacity}}
        >
            <LinearGradient
            colors={[colors.primary, colors.secondary, '#fff']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{x:0.5, y: 0.7}}
            />
        </Animated.View>

        <StatusBar
            backgroundColor={colors.primary}
            
        />
        {children}
    </View>
  )
}

export default GradientBackground