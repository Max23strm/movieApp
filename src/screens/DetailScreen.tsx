import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/StackNavigator'
import DetailPoster from '../components/DetailPoster'
import { styles } from '../theme/Theme'

import Icon from 'react-native-vector-icons/Ionicons'
import useMovieDetails from '../hooks/useMovieDetails'
import DetailInfo from '../components/DetailInfo'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams,'Details'>{
  
}

const DetailScreen = ({route, navigation} : Props) => {

  const movie = route.params as Movie
  const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

  return (
    <ScrollView>
        <DetailPoster movieUri={movie.poster_path}/>

        <View style={styles.detailsTextCont}> 
          <Text style={styles.detailsTitle}>{movie.title}</Text>
          
          <DetailInfo isLoading={isLoading} cast={cast} movieFull={movieFull}/>
        </View>
          {/* <DetailInfo isLoading={isLoading} cast={cast} movieFull={movieFull}/> */}
          <View style={{position:'absolute', top:30, left: 5, elevation:9, zIndex:9999}}>
            <TouchableOpacity style={{backgroundColor:'#fff3', borderRadius:50}} 
              onPress={()=>navigation.pop()}>
              <Icon
                color={'#fff9'}
                name='chevron-back-outline'
                size={50}
                
                />
            </TouchableOpacity>
          </View>
    </ScrollView>
  )
}

export default DetailScreen