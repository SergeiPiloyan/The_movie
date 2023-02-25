import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { BACKGROUND_URL, POSTER_URL } from "../API/urlConsts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getFilmById } from "../store/slices/movieSlice";
import { IconsBox } from "../utils/IconsBox";
import { PersonDates } from "./PersonDates";


export const Movie = () => {

    const dispatch = useAppDispatch();
    const { movie } = useAppSelector((state) => state.movie);

    useEffect(() => {
        dispatch(getFilmById(640146))
    }, [])

    console.log('state:', movie);

    if (!movie) {
        return null
    }


    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ width: '100%', height: '100%', backgroundColor: '#20205f', }}>

            <Box sx={{ width: 300, height: 450, marginRight: 3, }}>
                <img style={{ width: 300, height: 450 }} src={POSTER_URL + movie.poster_path} />
            </Box>

            <Box sx={{
                width: 1020, height: 450,
                backgroundImage: `url(${BACKGROUND_URL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'rightTop'
            }}>
                <Typography sx={{ color: 'white', fontSize: 35.2, fontWeight: 'bold' }} >
                    {movie.title + ` (2023)`}
                </Typography>

                <Typography sx={{ color: 'white', fontSize: 16, marginBottom: 3 }} variant="subtitle1" >
                    {movie.release_date} • {movie.genres.map(g => `${g.name} `)} • 2h 5m
                </Typography>
                <IconsBox />

                <Typography sx={{ color: 'white', fontStyle: 'italic', fontSize: '16px', marginTop: '20px'}} >
                    {movie.tagline}
                </Typography>

                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '22px', marginTop: '15px', }} >
                    Overview
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '13.5px', marginTop: '10px', }} >
                    {movie.overview}
                </Typography>

                <PersonDates />
            </Box>
        </Stack>
    )
}