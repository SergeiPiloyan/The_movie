import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPersonById } from "../store/slices/personSLice";

export const PersonDates = () => {

    const dispatch = useAppDispatch();
    const { person } = useAppSelector((state) => state.person);

    useEffect(() => {
        dispatch(getPersonById(3720135))
    }, [])

    console.log('person:', person);

    if (!person) {
        return null
    }


    return (
        <>
            <Typography sx={{ color: 'white', marginTop: 2 }}>
                {person.name}
            </Typography>
            <Typography sx={{ color: 'white', marginTop: -0.5, fontSize: 14, }}>
                Characters
            </Typography>
        </>
    )
}