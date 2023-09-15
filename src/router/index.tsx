import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Equipments } from '../pages/Equipments';
import { AppLayout } from '../layouts/AppLayout';
import { Games } from '../pages/Games';

export function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Games />} />
          <Route path="/equipments" element={<Equipments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
