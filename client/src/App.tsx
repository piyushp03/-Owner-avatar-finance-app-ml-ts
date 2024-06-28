import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react"
import { themeSettings } from "./theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "@/scenes/navbar";

function App() {
  const theme = useMemo(()=> createTheme(themeSettings), []);
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/** css reset */}
              <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
                <Navbar />
                <Routes>
                  <Route path="/" element={<div>dashboard page</div>}/>
                  <Route path="/predictions" element={<div>prediction page</div>}/>
                </Routes>
              </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
