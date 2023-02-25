import { Box } from '@mui/material';
import { AfterHeader } from '../utils/AfterHeader';
import { Movie } from './Movie';
import { PersonDates } from './PersonDates';



const Film = () => {

  return (
    <Box sx={{ width: '100%', height: '570px', }}>

      <AfterHeader />
      <Movie />
      

    </Box>
  )
}

export default Film;