import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import { BarInfo } from '../BarInfo';

const Icons = () => {
    return (
        <Box sx={{ paddingTop: '20px' }}>
            <FacebookIcon fontSize="large" sx={{ padding: 1 }} />
            <TwitterIcon fontSize="large" sx={{ padding: 1 }} />
            <InstagramIcon fontSize="large" sx={{ padding: 1 }} />
            <LinkIcon fontSize="large" sx={{ padding: 1 }} />
        </Box>
    )
}

export const IconsBoxContent = () => {
    return (
        <>
            <Icons />
            <BarInfo />
        </>
    )
}

