import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { styles } from '../theme/Theme'
import { useNavigation } from '@react-navigation/native'

interface Props {
    movie: Movie,
    height?:number,
    width?:number,
}

const HomeCard = ({movie, height = 420, width = 300} : Props) => {
    
    const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation()



    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate('Details', movie)}
            style={{...styles.homePosterContainer, width: width, height: height}}
            activeOpacity={0.9}
            >
            <View style={styles.homePosterShadow}>
                <Image
                    source={{uri:imageUri}}
                    style={styles.homePosterImage}
                    />

                </View>
        </TouchableOpacity>
    )
}

export default HomeCard