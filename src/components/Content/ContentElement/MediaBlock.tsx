import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { BACKGROUND_MEDIA_URL, POSTER_MEDIA_URL } from "../../../API/urlConsts"
import { useAppSelector } from "../../../store/hooks"

export const MediaBlock = () => {
    const { movie } = useAppSelector((state) => state.movie)

    return (
        <Box sx={{ padding: '0 0 2em' }}>
            <Stack direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={14}
                sx={{ margin: '1em 0' }}>
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}> Media </Typography>

                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Most Popular  </Button>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Videos  </Button>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Backdrops  </Button>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Posters  </Button>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                spacing={0}
                sx={{

                    height: 300, width: '100%', background: 'pink', borderRadius: 5,
                    overflowX: 'scroll',
                    overflowY: 'clip',
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "white",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#d1d1cf",
                        minHeight: 24,
                        border: "4px solid white",
                    },
                }}>
                <div>
                    <iframe
                        style={{ minWidth: "533px", minHeight: "300px" }}
                        src={`https://www.themoviedb.org/video/play?key=ZlNFpri-Y40`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <img style={{ minWidth: 533, maxWidth: 533, height: '300px' }} src={`${BACKGROUND_MEDIA_URL}${movie.backdrop_path}`} />
                <img style={{ minWidth: 200, maxWidth: 200, height: '300px' }} src={`${POSTER_MEDIA_URL}${movie.poster_path}`} />
            </Stack>

        </Box >
    )
}

