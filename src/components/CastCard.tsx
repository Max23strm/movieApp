import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import { styles } from '../theme/Theme'
// import { useNavigation } from '@react-navigation/native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    cast: Cast,
    height?:number,
    width?:number,
}

const CastCard = ({cast, height = 420, width = 300} : Props) => {
    
    const imageUri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`

    // const navigation = useNavigation()



    return (
        <TouchableOpacity 
            // onPress={()=>navigation.navigate('Details', movie)}
            style={styles.castCard}
            activeOpacity={0.9}
            >
                <Image
                    source={{uri:imageUri}}
                    style={{width: 90, height: 90}}
                    />
                <View>
                    <Text style={{...styles.castCardText, fontWeight:'bold'}}>{cast.character}</Text>
                    <Text style={styles.castCardText}>{cast.name}</Text>

                </View>
        </TouchableOpacity>
    )
}

export default CastCard