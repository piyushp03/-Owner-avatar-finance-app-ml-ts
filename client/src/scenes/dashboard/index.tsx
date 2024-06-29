import { Box, useMediaQuery } from '@mui/material'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

// grid vs flexbox
// grid layout dimensions grid temp area, study a little deeper
const gridTemplateLargeScreens= `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`

const gridTemplateSmallScreens= `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
`

const Dashboard = () => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    return (
    <>
        <Box width="100%" height="100%" display="grid" gap="1.5rem"
            sx={
                
                isAboveMediumScreens ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))", // 3 equal columns, min size 370px
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))", // fr fractional unit
                gridTemplateAreas: gridTemplateLargeScreens,
            } : {
                gridAutoColumns: "1fr", 
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,}
            
        }

        >
            <Row1 />
             <Row2 />
             <Row3 />
        </Box>;
    </>
  )
}

export default Dashboard