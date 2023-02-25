import { Button, Stack, Link, Typography } from '@mui/material'
import React from 'react'

const footerLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'

const theBasicsLinks = ['About TMDB', 'Contact Us', 'Support Forums', 'API', 'System Status']
const getInvoledLinks = ['Contribution Bible', 'Add New Movie', 'Add New TV Show']
const communityLinks = ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter']
const legalLinks = ['Terms of Use', 'API Terms of Use', 'Privacy Policy']

const BarFooter = () => {
  return (
    <>
      <Stack sx={{
        width: 140, height: 150, paddingTop: 10,
      }}>
        <Typography sx={{ fontWeight: 'bold' }}>THE BASICS </Typography>
        {theBasicsLinks.map((text) => <Link sx={{ textDecoration: 'none', color: 'white', fontSize: 17 }}> {text} </Link>)}
      </Stack>
      <Stack sx={{
        width: 140, height: 150, marginLeft: 40, paddingTop: 10
      }} >
        <Typography sx={{ fontWeight: 'bold' }}>GET INVOLVED</Typography>
        {getInvoledLinks.map((text) => <Link sx={{ textDecoration: 'none', color: 'white', fontSize: 17 }}> {text} </Link>)}
      </Stack>
      <Stack sx={{
        width: 140, height: 150, marginLeft: 40, paddingTop: 10
      }} >
        <Typography sx={{ fontWeight: 'bold' }}>COMMUNITY</Typography>
        {communityLinks.map((text) => <Link sx={{ textDecoration: 'none', color: 'white', fontSize: 17 }}> {text} </Link>)}
      </Stack>
      <Stack sx={{
        width: 140, height: 150, marginLeft: 40, paddingTop: 10
      }} >
        <Typography sx={{ fontWeight: 'bold' }}>LEGAL</Typography>
        {legalLinks.map((text) => <Link sx={{ textDecoration: 'none', color: 'white', fontSize: 17 }}> {text} </Link>)}
      </Stack>
    </>
  )
}
const LogoButtonFooter = () => {
  return (<Stack sx={{ width: 187, height: 147, padding: 5 }}>
    <img src={footerLogo} style={{
      width: 130, height: 94, marginBottom: 40, marginLeft: 40,
    }} alt="logo" />
    <Button sx={{ backgroundColor: 'white', color: "#01b4e4", pading: "8px 16px", fontWeight: 'bold' }} > Hi, Sergei_Piloyan! </Button>
  </Stack>
  )
}



const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ height: 322, backgroundColor: '#032541', color: 'white', }} >
      
      <LogoButtonFooter />
      <BarFooter />

    </Stack >
  )
}

export default Footer