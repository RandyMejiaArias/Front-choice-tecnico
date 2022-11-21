import { Route, Routes } from "react-router-dom"
import { ChoiceRouter } from "../choice/routes/ChoiceRouter"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<ChoiceRouter />} />
    </Routes>
  )
}