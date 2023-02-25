import { Stack, Typography } from "@mui/material";

const items = ['Overview', 'Media', 'Fandom', 'Share']

export const AfterHeader = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
            sx={{ width: "100%", height: 46, }}>
            {items.map(i => <Typography> {i} </Typography>)}
        </Stack>

    )
}

