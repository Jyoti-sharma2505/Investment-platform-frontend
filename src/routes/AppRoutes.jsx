import { Routes,Route } from "react-router-dom";

import Login from "../pages/Login";

import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import ROIHistory from "../pages/ROIHistory";
import Transactions from "../pages/Transactions";
import Referrals from "../pages/Referrals";
import ReferralTree from "../pages/ReferralTree";
import Investments from "../pages/Investments";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes=()=>{

return(

<Routes>

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route
  path="/"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/investments"
  element={
    <ProtectedRoute>
      <Investments />
    </ProtectedRoute>
  }
/>

<Route
  path="/roi-history"
  element={
    <ProtectedRoute>
      <ROIHistory />
    </ProtectedRoute>
  }
/>

<Route
  path="/transactions"
  element={
    <ProtectedRoute>
      <Transactions />
    </ProtectedRoute>
  }
/>

<Route
  path="/referrals"
  element={
    <ProtectedRoute>
      <Referrals />
    </ProtectedRoute>
  }
/>

<Route
  path="/referrals/tree"
  element={
    <ProtectedRoute>
      <ReferralTree />
    </ProtectedRoute>
  }
/>
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="*"
  element={<NotFound />}
/>
</Routes>

);

};

export default AppRoutes;