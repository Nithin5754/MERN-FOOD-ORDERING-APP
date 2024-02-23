
import { Navigate, Route,Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";



const AppRoutes = () => {
  return (
  <Routes>
      <Route path="/" element={<Layout><HomePage/> </Layout>}/>
      <Route path="/user-profile" element={<h3> hello nithin joji.....</h3>}/>
      <Route path="*" element={<Navigate to={'/'}/>}/>
  </Routes>
  )
}
export default AppRoutes