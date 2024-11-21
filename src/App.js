import { Route, Routes } from "react-router";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from './scenes/global/Sidebar';
import Dashboard from "./scenes/dashboard";
import Apartments from "./scenes/Apartments";
import Tenants from "./scenes/Tenants";
import Reports from "./scenes/Reports";
import Messages from "./scenes/Messages";
import Profile from "./scenes/Profile";
import Settings from "./scenes/Settings";
import SingleApartment from "./scenes/SingleApartment";
import SignIn from "./scenes/SignIn";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme} >
        <CssBaseline />
        <Routes>
        <Route path="signin" element={<SignIn />} />
        </Routes>
      <div className="app">
        <Sidebar />
      <main className="content">
     <Topbar />
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/apartments" element={<Apartments/>}/>
      <Route path="/apartment/:id" element={<SingleApartment/>}/>
      <Route path="/tenants" element={<Tenants/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/settings" element={<Settings/>}/>
     </Routes>
    </main>

      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
