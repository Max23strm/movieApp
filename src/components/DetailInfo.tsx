import React from 'react'
import {View, FlatList, Text} from 'react-native'
import { Spinner } from './Spinner'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import { styles } from '../theme/Theme'
import CastCard from './CastCard'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    isLoading: boolean,
    cast: Cast[],
    movieFull?: MovieFull 
}

const DetailInfo = ({isLoading, cast, movieFull} : Props) => {
  if (isLoading) {
    return(
        <View style={{marginTop:50}}>
            <Spinner/>
        </View>   
    )
  }
  
    return (
    <View style={styles.detailInfoContainer}>
        <View style={styles.detailsSubTitleContainer}>
              <Icon
                name='star-outline'
                color={'grey'}
                size={18}
              />
            <Text style={styles.detailsSubTitle}>
              {movieFull!.vote_average}
            </Text>
            <Text style={{...styles.detailsSubTitle, overflow:'hidden'}}> 
                - {movieFull?.genres.map(e=>e.name).join(', ')}
            </Text>
        </View>
        <View >
            <Text style={{fontSize:16}}>
              {movieFull?.overview}
            </Text>
        </View>

        <View>
            <Text style={styles.detailsTitle}>Cast</Text>
            <FlatList 
                data={cast}
                renderItem={({item})=><CastCard cast={item} width={140} height={200}/>}
                keyExtractor={(item)=>item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
        </View>
    </View>    
  )
}

export default DetailInfo