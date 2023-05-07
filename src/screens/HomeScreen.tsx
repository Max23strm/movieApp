import React, {useContext, useEffect} from 'react'
import {View, Dimensions, ScrollView} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { Spinner } from '../components/Spinner'
import HomeCard from '../components/HomeCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../../android/app/helpers/getColors';
import { GradiantContext } from '../context/GradientContext';



const windowWidth = Dimensions.get('window').width
const HomeScreen = () => {
    const {top}=useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming} =useMovies()
    const {setMainColors} = useContext(GradiantContext)
    const getPosterColors= async (index : number) =>{
        const movie= nowPlaying[index]
        const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const [primary ='transparent' , secondary= 'transparent'] = await getImageColors(imageUri)

        setMainColors({primary, secondary})

    }

    useEffect(()=>{
        if(nowPlaying.length > 0) {
            getPosterColors(0)
        }
    },[nowPlaying])

    if(isLoading){
        return (
            <Spinner/>
        )
    }
    

    return (
        <GradientBackground>
            <ScrollView style={{marginTop:top + 20}}>


                <View style={{height : 440}}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({item} :any)=><HomeCard movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index=> getPosterColors(index)}
                        />
                </View>

                
                <HorizontalSlider title={"Coming soon"} movies={upcoming}/>
                <HorizontalSlider title={"Popular"} movies={popular}/>
                <HorizontalSlider title={"Top Rated"} movies={topRated}/>
                
                
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen