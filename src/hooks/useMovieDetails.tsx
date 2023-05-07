import axios from 'axios'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditsInterface'
import {useEffect, useState} from 'react'
import movieDb from '../api/movieDb'

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull
    cast: Cast[]
}


const useMovieDetails = (id: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    })
  
    
    const getMovieDetails = async () =>{
      const movieDetailsPormise=movieDb.get<MovieFull>(`/${id}`)
      const CreditsPormise=movieDb.get<CreditsResponse>(`/${id}/credits`)
        
      const [detailsResponse, creditsRes] = await Promise.all ([
        movieDetailsPormise, CreditsPormise
      ])
      console.log(detailsResponse.data)
      setState({
        isLoading:false,
        movieFull:detailsResponse.data,
        cast:creditsRes.data.cast
      })
  }

  useEffect(()=>{
    getMovieDetails()
  },[])

    return {
        ...state
    }
}

export default useMovieDetails