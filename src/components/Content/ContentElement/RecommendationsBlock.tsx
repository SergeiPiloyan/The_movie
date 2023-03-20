import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { REC_BACKDROP_URL, REC_PHOTO } from "../../../API/urlConsts";
import { useAppSelector } from "../../../store/hooks"



export const RecommendationsBlock = () => {
    const { recommendations } = useAppSelector((state) => state.movie)

    const recommendation = recommendations.map((result) => {
        if (result.backdrop_path === null) {
            return (
                <Card sx={{ minWidth: 250, maxWidth: 250, height: 182, boxShadow: 'none', borderRadius: 3 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            title={result.title}
                            image={REC_PHOTO}
                            sx={{ width: '100%', height: '142px', borderRadius: 3 }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '16px' }}>
                                {result.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        }
        return (
            <Card sx={{ minWidth: 250, maxWidth: 250, height: 182, boxShadow: 'none', borderRadius: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        title={result.title}
                        image={`${REC_BACKDROP_URL}${result.backdrop_path}`}
                        sx={{ width: '100%', height: '142px', borderRadius: 3 }} />
                    <CardContent>
                        <Typography sx={{ fontSize: '16px' }}>
                            {result.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })

    return (
        <Box sx={{ padding: '1em 0 2em' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, margin: '0.5em 0' }}> Recommendation </Typography>
            <Stack direction="row"
                spacing={2}
                sx={{
                    overflowX: 'scroll',
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
                {recommendation}
            </Stack>
        </Box>
    )
}