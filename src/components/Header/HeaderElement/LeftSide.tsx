import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

const logoHeader = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
const routesHeader = ['Movies', 'TV Shows', 'People', 'More']

const LeftSide = () => {
    return <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
        sx={{ width: 400, height: 40, marginLeft: 34 }}
    >
        <img width={'100px'} height={'100px'} src={logoHeader} alt='#' />
        {routesHeader.map((text) => <Typography sx={{ textDecoration: 'none', color: 'white' }}  >  {text} </Typography >)}

    </Stack>
}

export default LeftSide