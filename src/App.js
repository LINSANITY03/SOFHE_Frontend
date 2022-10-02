import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import { AuthProvider } from "./services/AuthContext.jsx";

import Banner from "./pages/Landing_page/Banner.js";
import Nav from "./pages/Landing_page/Nav.js";
import Body from "./pages/Landing_page/Body.jsx";
import Footer from "./pages/Landing_page/Footer.jsx";
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
import PrivateRouteLoggedIn from "./utils/PrivateRouteLoggedIn.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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

            {/* Sign up page */}
            <Route
              path="/signup"
              element={
                <>
                  <SignUp />
                </>
              }
            />

            {/* Sign in page */}
            <Route exact element={<PrivateRouteLoggedIn />}>
              <Route element={<SignIn />} path="/login" exact />
            </Route>

            {/* Dashboard page */}
            <Route exact element={<PrivateRoute />}>
              <Route element={<Dashboard />} path="/dashboard" exact />
            </Route>

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
        </Router>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
