import { Stack } from '@mui/material'
import BarFooter from './FooterElement/BarFooter'
import LogoButtonFooter from './FooterElement/LogoButtonFooter'





const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ height: 322, backgroundColor: '#032541', color: 'white', margin: '-8px', }} >

      <LogoButtonFooter />
      <BarFooter />

    </Stack >
  )
}

export default Footer