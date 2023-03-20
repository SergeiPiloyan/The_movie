import { Box, Divider, Stack } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getActorById, getFilmById, getRecommendationsById, getReviewById } from "../../store/slices/movieSlice";
import { AfterHeader } from './ContentElement/AfterHeader';
import { MovieInfo } from "./ContentElement/MovieInfo";
import { CardOfActor } from "./ContentElement/CardOfActor";
import { MediaBlock } from "./ContentElement/MediaBlock";
import { RecommendationsBlock } from "./ContentElement/RecommendationsBlock";
import { IconsBoxContent } from "./ContentElement/Icons/IconsBoxContent";
import ReviewBlock from "./ContentElement/ReviewBlock";
import { useLocation } from "react-router-dom";




const Content = () => {
  const location = useLocation();
  const id = +(location.search.slice(1))
  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.movie);
  console.log('state', movie);


  useEffect(() => {
    dispatch(getFilmById(id))
    dispatch(getActorById(id))
    dispatch(getReviewById(id))
    dispatch(getRecommendationsById(id))
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
        spacing={4}
        sx={{ margin: '0px -8px' }}>


        <Stack sx={{ width: "57%", marginBottom: 2, }} divider={<Divider />} >
          <CardOfActor />
          <ReviewBlock />
          <MediaBlock />
          <RecommendationsBlock />
        </Stack>

        <Box sx={{ width: '260px' }}>
          <IconsBoxContent />
        </Box>

      </Stack>
    </>
  )
}

export default Content;



