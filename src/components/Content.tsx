import { Box,  Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getActorById, getFilmById } from "../store/slices/movieSlice";
import { AfterHeader } from '../utils/AfterHeader';
import { MovieInfo } from "./MovieInfo";
import { CardOfActor } from "../utils/CardOfActor";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import { BarInfo } from "../utils/BarInfo";



const Content = () => {

  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getFilmById(640146))
    dispatch(getActorById(640146))
  }, [])


  if (!movie) {
    return null
  }


  return (
    <>
      <Box sx={{ height: '570px', margin: -1, marginBottom: '45px', opacity: 0.8 }}>
        <AfterHeader />
        <MovieInfo />
      </Box>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ margin: '0px -8px' }}>

        <Stack sx={{ width: "70%", marginBottom: 2, marginLeft: 10 }} divider={<Divider />} >
          <CardOfActor />    
        </Stack>

        <Box sx={{ width: '260px' }}>
          <Box sx={{ marginTop: '-8em' }}>
            <FacebookIcon fontSize="large" sx={{ padding: 1 }} />
            <TwitterIcon fontSize="large" sx={{ padding: 1 }} />
            <InstagramIcon fontSize="large" sx={{ padding: 1 }} />
            <LinkIcon fontSize="large" sx={{ padding: 1 }} />
          </Box>
          <BarInfo />
        </Box>

      </Stack>
    </>
  )
}

export default Content;



