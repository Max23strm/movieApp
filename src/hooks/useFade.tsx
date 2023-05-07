import React, {useEffect, useRef} from 'react'
import { Animated  } from 'react-native'

const useFade = () => {

    const opacity = useRef( new Animated.Value(0) ).current

    const fadeIn = (callback?: Function) =>{
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start( () => callback ? callback() : null)
    }
    const FadeOut = () =>{
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 0,
                useNativeDriver: true
            }
        ).start()
    }
  return {
    opacity,
    fadeIn,
    FadeOut
  }
}

export default useFade