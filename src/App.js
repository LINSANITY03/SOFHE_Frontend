import Banner from "./pages/Landing_page/Banner.js";
import Nav from "./pages/Landing_page/Nav.js";
import Body from "./pages/Landing_page/Body.jsx";
import Footer from "./pages/Landing_page/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Sign_in/login.jsx";
import SignUp from "./pages/Sign_up/sign_up.jsx";
import Dashboard from "./pages/dashboard_page/index.jsx";
import Activity from "./pages/Activity_page/Activity.jsx";
import Calender from "./pages/Calender_page/Calender.jsx";
import Prediction from "./pages/Prediction_page/Prediction.jsx";
import Profile from "./pages/Profile_page/Profile.jsx";
import Setting from "./pages/Setting_page/Settings.jsx";
import Support from "./pages/Support_page/Support.jsx";
import "./utils/colors.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* default page */}
          <Route
            index
            exact
            path="/"
            element={
              <>
                <Nav />
                <Banner />
                <Body />
                <Footer />
              </>
            }
          ></Route>

          {/* Sign in page */}
          <Route
            exact
            path="/login"
            element={
              <>
                <SignIn />
              </>
            }
          />

          {/* Sign up page */}
          <Route
            exact
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />

          {/* Dashboard page */}
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />

          {/* Activity page*/}
          <Route
            exact
            path="/dashboard/activity"
            element={
              <>
                <Activity />
              </>
            }
          />

          {/* Calender page*/}
          <Route
            exact
            path="/dashboard/calender"
            element={
              <>
                <Calender />
              </>
            }
          />

          {/* Profile page*/}
          <Route
            exact
            path="/dashboard/profile"
            element={
              <>
                <Profile />
              </>
            }
          />

          {/* Prediction page*/}
          <Route
            exact
            path="/dashboard/prediction"
            element={
              <>
                <Prediction />
              </>
            }
          />

          {/* Setting page*/}
          <Route
            exact
            path="/dashboard/setting"
            element={
              <>
                <Setting />
              </>
            }
          />

          {/* Support page*/}
          <Route
            exact
            path="/dashboard/support"
            element={
              <>
                <Support />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
