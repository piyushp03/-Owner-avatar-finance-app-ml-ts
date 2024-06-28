import {useState} from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/component/FlexBetween';
import PixIcon from '@mui/icons-material/Pix';


type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/** Left Side */}
        <FlexBetween gap="0.75rem">
            <PixIcon sx={{fontSize: "28px"}}/>
            <Typography varient ="h4" fontSize="16px">
                Financier
            </Typography>
        </FlexBetween>

        {/** Right Side */}
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link 
                    to="/"
                    onClick={()=> setSelected("dashboard")} // highlights text
                    style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }} 
                >
                    dashboard
                </Link>
            </Box>
            
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link 
                    to="/predictions"
                    onClick={()=> setSelected("predictions")} // highlights text
                    style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }} 
                >
                    predictions page
                </Link>
            </Box>

        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
// 58