import axios from 'axios'
import movieDb from '../api/movieDb'
import { MovieDBResponse, Movie } from '../interfaces/movieInterface'
import {useEffect, useState} from 'react'

interface MoviesState {
    nowPlaying : Movie[],
    popular : Movie[],
    upcoming : Movie[],
    topRated : Movie[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying : [],
        popular: [],
        upcoming: [],
        topRated: [],
    })
    const promises=[
        movieDb.get<MovieDBResponse>('/now_playing'),
        movieDb.get<MovieDBResponse>('/popular'),
        movieDb.get<MovieDBResponse>('/upcoming'),
        movieDb.get<MovieDBResponse>('/top_rated')
    ]
    
    
    useEffect(()=>{
        axios.all(promises).then(axios.spread((nowPlaying, popular, upcoming, topRated)=>{
            setMoviesState({
                nowPlaying : [...nowPlaying.data.results],
                popular: [...popular.data.results],
                upcoming: [...upcoming.data.results],
                topRated: [...topRated.data.results],
            })
        })).then(res => setIsLoading(false))
        .catch(error=>console.log(error))


    },[])

    return{
        ...moviesState,
        isLoading
    }
}
