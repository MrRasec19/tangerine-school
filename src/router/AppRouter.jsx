import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/home' element={ <HomePage /> }></Route>
    </Routes>
  )
}
