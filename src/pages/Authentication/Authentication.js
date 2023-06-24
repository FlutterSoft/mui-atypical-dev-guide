import CommonButton from "../../components/common/CommonButton/CommonButton"
import { Grid } from "@mui/material"

export default function Authentication() {
    const buttonStyles = { 
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3'
            }
        },
        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent'
            }
        }

    }
    return (
        <Grid item xs={8} sx={{backgroundColor: '#009be5'}}>
            Authentication Page
            <CommonButton 
                variant='contained' 
                sx={buttonStyles}
            >
                Add User
            </CommonButton>
            <CommonButton 
                variant='outlined' 
                sx={buttonStyles}
            >
                Add User
            </CommonButton>
        </Grid>
    )
}