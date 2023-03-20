import { Link, Stack, Typography } from "@mui/material"

const arr = [
    {
        title: 'THE BASICS',
        items: ['About TMDB', 'Contact Us', 'Support Forums', 'API', 'System Status']
    },

    {
        title: 'GET INVOLVED',
        items: ['Contribution Bible', 'Add New Movie', 'Add New TV Show']
    },

    {
        title: 'COMMUNITY',
        items: ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter']
    },

    {
        title: 'LEGAL',
        items: ['Terms of Use', 'API Terms of Use', 'Privacy Policy']
    },
]

const BarFooter = () => {
    return (
        <Stack>
            <Stack
                justifyContent="center"
                alignItems="top"
                direction='row'
                spacing={5}>
                {arr.map((column) => (
                    <Stack>
                        <Typography sx={{ fontSize: '20px', fontWeight: 700 }} >{column.title}</Typography>
                        <Stack sx={{ paddingTop: "5px" }} >
                            {column.items.map((item) => (
                                <Link
                                    sx={{ textDecoration: 'none', color: 'white', paddingTop: 0.5, fontSize: '18px', fontWeight: '500px' }}
                                    href="#">
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Stack >
    )
}

export default BarFooter;

