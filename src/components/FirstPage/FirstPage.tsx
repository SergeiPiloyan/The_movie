import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";


const FirstPage = () => {
    return (
        <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={10}
            sx={{ height: 200, color: "black", textDecoration: 'none', }}>

            <NavLink to='/movie?254'>  King-Kong  </NavLink>
            <NavLink to='/movie?87101'> Terminator </NavLink>
            <NavLink to='/movie?640146'> Ann Man </NavLink>
            <NavLink to='/movie?312221'> Creed </NavLink>
        </Stack>
    )
}

export default FirstPage; 