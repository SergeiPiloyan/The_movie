import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const footerLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'


const LogoButtonFooter = () => {
    return (<Stack
        justifyContent="center"
        alignItems="top"
        spacing={1}
        sx={{ width: 187, height: 147, padding: 5 }}>
        <img src={footerLogo} style={{
            width: 130, height: 94, marginBottom: 40, marginLeft: 40,
        }} alt="logo" />
        <Button sx={{ backgroundColor: 'white', color: "#01b4e4", pading: "8px 16px", fontWeight: 'bold' }} > Hi, Sergei_Piloyan! </Button>
    </Stack>
    )
}

export default LogoButtonFooter;