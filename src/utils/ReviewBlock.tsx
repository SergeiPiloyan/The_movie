import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { AUTHOR_REVIEW_URL, USER_PHOTO } from "../API/urlConsts"
import { useAppSelector } from "../store/hooks"

const ReviewBlock = () => {

    const { reviews } = useAppSelector((state) => state.movie)

    const randomReview = Math.floor(Math.random() * reviews.length);


    if (reviews.length < 1) {
        return null
    }
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
                    <Box sx={{ width: '15%', height: '330px', }}>

                        {reviews[randomReview].author_details.avatar_path
                            ? <img style={{ margin: '20px 0 0 20px', borderRadius: 40 }} src={AUTHOR_REVIEW_URL + reviews[randomReview].author_details.avatar_path} />
                            : <img style={{ margin: '20px 0 0 20px', width: 64, height: 64, borderRadius: 40 }} src={USER_PHOTO} />
                        }
                    </Box>


                    <Box sx={{ width: '100%', height: '330px' }} >
                        <Box sx={{ margin: '2em 0 0' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: 20 }}> A review by {reviews[randomReview].author} </Typography>
                            <Typography sx={{ marginTop: -0.5, fontWeight: 200, fontSize: 12 }}> Written by <strong> {reviews[randomReview].author} </strong> on February 16, 2023 </Typography>
                        </Box>
                        <Typography sx={{
                            height: '195px',
                            zIndex: 100000,
                            marginTop: 4,
                            marginRight: '30px',
                            whiteSpace: 'pre-line',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                            {reviews[randomReview].content}
                        </Typography>
                    </Box>
                </Stack>
            </Box >
            <Typography sx={{ fontWeight: 700, margin: '1.5em 0px' }}> Read All Reviews </Typography>
        </Box >
    )
}

export default ReviewBlock;