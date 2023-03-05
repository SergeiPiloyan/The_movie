import { Box, Typography } from "@mui/material"

const barInfo = [
  { id: 1, title: 'Status', value: 'Released' },
  { id: 2, title: 'Original Language', value: 'English' },
  { id: 3, title: 'Budget', value: '$200,000,000.00' },
  { id: 4, title: 'Revenue', value: '$363,614,584.00' },
]
const info = barInfo.map((i) => {
  return (
    <Box sx={{padding: 1}}>
      <Typography sx={{fontWeight: 700, fontSize: 14}}> {i.title} </Typography>
      <Typography sx={{fontSize: 12}}> {i.value} </Typography>
    </Box>
  )
})

export const BarInfo = () => {
  return <> {info} </>
}