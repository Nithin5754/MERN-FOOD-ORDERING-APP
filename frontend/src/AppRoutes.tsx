
import { Navigate, Route,Routes } from "react-router-dom";



const AppRoutes = () => {
  return (
  <Routes>
      <Route path="/" element={<h1>welcome home</h1>}/>
      <Route path="/user-profile" element={<h3> hello nithin joji.....</h3>}/>
      <Route path="*" element={<Navigate to={'/'}/>}/>
  </Routes>
  )
}
export default AppRoutes