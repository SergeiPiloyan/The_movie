import RightSide from './HeaderElement/RightSide'
import LeftSide from './HeaderElement/LeftSide'
import { Stack } from '@mui/material'


const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ height: 64, backgroundColor: '#032541', color: 'white', margin: -1 }} >

      <LeftSide />
      <RightSide />

    </Stack >
  )
}

export default Header