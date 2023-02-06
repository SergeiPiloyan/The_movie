import React from 'react'
import { Avatar, IconButton, Link, Stack, } from '@mui/material'
import { Add, Language, Search } from '@mui/icons-material'

const logoHeader = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
const routesHeader = ['Movies', 'TV Shows', 'People', 'More']

const LeftSide = () => {
  return <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={1}
    sx={{ width: 400, height: 40, }}
  >
    <img width={80} height={80} src={logoHeader} alt='#' />
    {routesHeader.map((text) => <Link sx={{ textDecoration: 'none', color: 'white' }}  >  {text} </Link >)}

  </Stack>
}
const RightSide = () => {
  return <Stack
    direction="row"
    spacing={1}>

    <IconButton sx={{ color: "white" }}>  <Search /> </IconButton>
    <IconButton sx={{ color: "white" }} > <Add /> </IconButton>
    <IconButton sx={{ color: "white" }} > <Language /> </IconButton>
    <Avatar sx={{ bgcolor: "#0177D2" }}>A</Avatar>

  </Stack>
}



const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{ height: 64, backgroundColor: '#032541', color: 'white', }} >

      <LeftSide />
      <RightSide />

    </Stack >
  )
}

export default Header