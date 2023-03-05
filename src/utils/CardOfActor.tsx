import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { useAppSelector } from "../store/hooks";


const actorsData = [
  { id: 1, fullName: 'Paul Rudd', role: 'Scott Lang / Ant- Man', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg" },
  { id: 2, fullName: 'Evangeline Lilly', role: 'Hope van Dyne / The Wasp', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cUcIjWJEw1rxKTF30JiHagLE425.jpg" },
  { id: 3, fullName: 'Jonathan Majors', role: 'Kang the Conqueror', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6hI9NKqF7J6FtrQu9Afr7ZqipIL.jpg" },
  { id: 4, fullName: 'Kathryn Newton', role: 'Cassie Lang', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hEz2R1RTgaNznJ3fa9n3KabIXYl.jpg" },
  { id: 5, fullName: 'Michelle Pfeiffer', role: 'Janet van Dyne', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oGUmQBU87QXAsnaGleYaAjAXSlj.jpg" },
  { id: 6, fullName: 'Michael Douglas', role: 'Dr. Hank Pym', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rNE2O4JvDfDS7yd869tNwnkgYq7.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
  { id: 7, fullName: 'Corey Stoll', role: 'M.O.D.O.K.', photo: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/etqmosIyf1xePKpi3i6rHJCm9GE.jpg" },
];

const a = actorsData.map((actor) => {
  return (
    <Card sx={{ width: 150, height: 255, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={actor.photo}
          alt="actor"
          sx={{ width: 150, height: 175, }}
        />
        <CardContent>
          <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'left' }}>
            {actor.fullName}
          </Typography>
          <Typography sx={{ fontSize: '12px' }}>
            {actor.role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  )
})


export const CardOfActor = () => {
  const { actors } = useAppSelector((state) => state.movie)
  console.log('actors', actors);


  return (
    <>
      <Typography variant="h6" sx={{ margin: 2, fontWeight: 700 }}> Top Billed Cast </Typography>
      <Stack direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{
          overflow: 'auto',
          maxWidth: '700px'
        }}>
        {a}
      </Stack>
      <Typography sx={{ margin: '3em 1em 2em', fontWeight: 700 }}> Full Cast & Crew </Typography>
    </>
  )
}


