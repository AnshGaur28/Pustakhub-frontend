import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import { ModalProvider } from './context/Context.jsx';
import Profile from './pages/profilePage.jsx';
import ErrorPage from './components/errorPage.jsx';
import EditProfilePage from './pages/editProfilePage.jsx';
import { isAuthenticated } from './middleware/authMiddleware.js';
function App() {
  return (
    <ModalProvider>
    <Router>
      <div className='app flex flex-col min-h-screen'>
        <Routes>
              <Route path='/' exact Component={LandingPage} />
              <Route path='/*' exact Component={ErrorPage} />
              <Route path='/profile' exact Component={isAuthenticated()? Profile : LandingPage} />
              <Route path='editProfile' exact Component={EditProfilePage}/>
        </Routes>
        
      </div>
    </Router>
    </ModalProvider>
  )
}
export default App;