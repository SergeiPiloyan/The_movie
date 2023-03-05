import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { ACTORS_PHOTO_URL } from "../API/urlConsts";
import { useAppSelector } from "../store/hooks";


export const CardOfActor = () => {
  const { actors } = useAppSelector((state) => state.movie)

  const a = actors.map((actor) => {
    if (actor.order <= 8)
      return (
        <Card sx={{ minWidth: 150, maxWidth: 150, height: 255, borderRadius: 4, marginBottom: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={`${ACTORS_PHOTO_URL}${actor.profile_path}`}
              alt="actor"
              sx={{ width: '100%', height: '175px' }}
            />
            <CardContent>
              <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'top' }}>
                {actor.name}
              </Typography>
              <Typography sx={{ fontSize: '12px' }}>
                {actor.character}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
  })

  return (
    <>
      <Typography variant="h6" sx={{ margin: '1em 0', fontWeight: 700, }}> Top Billed Cast </Typography>
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
            border: "3px solid white",
          },
        }}>
        {a}
      </Stack>
      <Typography sx={{ margin: '1em 0em ', fontWeight: 700 }}> Full Cast & Crew </Typography>
    </>
  )
}


