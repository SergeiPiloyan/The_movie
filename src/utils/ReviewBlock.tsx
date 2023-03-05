import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { useAppSelector } from "../store/hooks"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ReviewBlock = () => {

    const { reviews } = useAppSelector((state) => state.movie)
    console.log('reviews', reviews);


    return (
        <Box>
            <Stack direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={14}
                sx={{ margin: '1em 0' }}
            >
                <Typography sx={{ fontWeight: 700, fontSize: 20 }}> Social </Typography>

                <Stack direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Reviews  </Button>
                    <Button sx={{ fontWeight: 700, fontSize: 14, color: "black" }}> Discussions  </Button>
                </Stack>
            </Stack>

            <Box sx={{ width: '100%', margin: '10px 0px', height: '330px', border: '1px solid white', borderRadius: 3, boxShadow: '0px 0px 5px gray' }}>
                <Stack direction="row"
                    justifyContent="start"
                    alignItems="center"
                    spacing={2}>
                    <Box sx={{ width: '15%', height: '330px', background: 'pink' }}>

                    </Box>

                    <Box sx={{ width: '100%', height: '330px', background: 'gray' }} >
                        <Box sx={{ margin: '2em 0 0' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: 20 }}> A review by {reviews[1].author} </Typography>
                            <Typography sx={{ marginTop: -0.5, fontWeight: 200, fontSize: 12 }}> Written by {reviews[1].author} on February 16, 2023 </Typography>
                        </Box>
                    </Box>


                </Stack>
            </Box>


        </Box>
    )
}

export default ReviewBlock;