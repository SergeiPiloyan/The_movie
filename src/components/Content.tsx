import { Button } from '@mui/material'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setDirector } from '../store/slices/directorSlice';
import { setMovie } from '../store/slices/movieSlice'

const Content = () => {

useEffect( () => {}, [])

  const dispatch = useAppDispatch();
  const m = useAppSelector((state) => state.movie)

  const changeMovieName = () => {
    m.movie.name === 'Terminator'
      ? dispatch(setMovie({ name: ' King-Kong', direction: 'Press button for direction' }))
      : dispatch(setMovie({ name: ' Terminator', direction: 'Press button for direction' }))
  }

  const directionAboutMovie = () => {
    m.movie.name === 'Terminator'
      ? dispatch(setMovie({ direction: 'This is direction about Terminator', name: 'Terminator' }))
      : dispatch(setMovie({ direction: 'This is direction about King-Kong', name: 'King-Kong' }))
  }


  const d = useAppSelector((state) => state.director)
  const showDirector = () => {
    if (m.movie.name == 'Terminator') {dispatch(setDirector({ name: ' James Cameron' }))}
    else { dispatch(setDirector({ name: ' Peter Jackson' }))}
  }


  return (
    <>
      <div> Movie name:   {m.movie.name}</div >
      <div> Direction:    {m.movie.direction}</div >

      <Button onClick={changeMovieName}> Change name </Button>
      <Button onClick={directionAboutMovie} > Direction </Button>

      <hr />
      <div> Director:{d.director.name}</div >
      <Button onClick={showDirector}> Show director </Button>
    </>
  )
}

export default Content