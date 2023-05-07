import React from 'react'
import {View, Image, Dimensions} from 'react-native'
import { styles } from '../theme/Theme'

interface Props {
    movieUri: string
}

const screenHeight= Dimensions.get('screen').height

const DetailPoster = ({movieUri} : Props) => {
    
    const imageUri = `https://image.tmdb.org/t/p/w500${movieUri}`


    return (
        <View 
            style={{...styles.detailMoviePosterContainer, height:screenHeight*0.7}}
            >
            
            <Image
                source={{uri:imageUri}}
                style={styles.detailMoviePoster}
                />

        </View>
    )
}

export default DetailPoster