import { Navigate, Route, Routes } from "react-router-dom"
import { ListFilesPage } from "../pages/ListFilesPage"

export const ChoiceRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ListFilesPage />} />
      <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}