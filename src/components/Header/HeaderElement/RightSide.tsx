import { Add, Language, Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { Stack } from "@mui/system";

const RightSide = () => {
    return <Stack
        direction="row"
        spacing={1}
        sx={{ paddingRight: 40 }}>

        <IconButton sx={{ color: "white" }}>  <Search /> </IconButton>
        <IconButton sx={{ color: "white" }} > <Add /> </IconButton>
        <IconButton sx={{ color: "white" }} > <Language /> </IconButton>
        <Avatar sx={{ bgcolor: "#0177D2" }}>A</Avatar>

    </Stack>
}

export default RightSide; 