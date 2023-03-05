import CircularStatic from './CircularProgress';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton } from '@mui/material';
import { BarInfo } from './BarInfo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';


export const IconsBoxHeader = () => {
    return (
        <Box>
            <CircularStatic />

            <IconButton>  <FormatListBulletedIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#032541', borderRadius: 5, border: '2px solid white', marginLeft: 10, marginTop: -5 }} /> </IconButton>
            <IconButton> <FavoriteIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#032541', borderRadius: 5, border: '2px solid white', marginLeft: '15px', marginTop: -5 }} /> </IconButton>
            <IconButton> <BookmarkIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#032541', borderRadius: 5, border: '2px solid white', marginLeft: '15px', marginTop: -5 }} /> </IconButton>
            <IconButton>  <StarIcon fontSize='large' sx={{ color: 'white', backgroundColor: '#032541', borderRadius: 5, border: '2px solid white', marginLeft: '15px', marginTop: -5 }} /> </IconButton>

        </Box>
    )
}

export const IconsBoxBar = () => {
    return (
        <>
            <Box sx={{ marginTop: '-8em' }}>
                <FacebookIcon fontSize="large" sx={{ padding: 1 }} />
                <TwitterIcon fontSize="large" sx={{ padding: 1 }} />
                <InstagramIcon fontSize="large" sx={{ padding: 1 }} />
                <LinkIcon fontSize="large" sx={{ padding: 1 }} />
            </Box>
            <BarInfo />
        </>
    )
}

