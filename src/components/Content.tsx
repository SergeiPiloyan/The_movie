import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getActorById, getFilmById, getReviewById } from "../store/slices/movieSlice";
import { AfterHeader } from '../utils/AfterHeader';
import { MovieInfo } from "./MovieInfo";
import { CardOfActor } from "../utils/CardOfActor";
import { IconsBoxBar } from "../utils/IconsBox";
import ReviewBlock from "../utils/ReviewBlock";
import { MediaBlock } from "../utils/MediaBlock";




const Content = () => {

  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getFilmById(640146))
    dispatch(getActorById(640146))
    dispatch(getReviewById(640146))

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


        <Stack sx={{ width: "57%", marginBottom: 2, }} divider={<Divider />} >

          <CardOfActor />
          <ReviewBlock />
          <MediaBlock />

        </Stack>




        <Box sx={{ width: '260px' }}>
          <IconsBoxBar />
        </Box>

      </Stack>
    </>
  )
}

export default Content;



