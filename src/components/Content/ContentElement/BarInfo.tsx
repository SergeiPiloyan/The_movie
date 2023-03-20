import { Box, Typography } from "@mui/material"
import { useAppSelector } from "../../../store/hooks";




export const BarInfo = () => {

  const { movie } = useAppSelector((state) => state.movie);

  const barInfo = [
    { id: 1, title: 'Status', value: `${movie.status}` },
    { id: 2, title: 'Original Language', value: 'English' },
    { id: 3, title: 'Budget', value: `$ ${movie.budget.toLocaleString('ru-RU', { style: 'currency', currency: 'USD' })}` },
    { id: 4, title: 'Revenue', value: `$ ${movie.revenue.toLocaleString('ru-RU', { style: 'currency', currency: 'USD' })}` },
  ]
  const info = barInfo.map((i) => {
    return (
      <Box sx={{ padding: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}> {i.title} </Typography>
        <Typography sx={{ fontSize: 12 }}> {i.value} </Typography>
      </Box>
    )
  })

  return (
    <> {info} </>
  )
}