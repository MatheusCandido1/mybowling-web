import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AppLayout } from '../layouts/AppLayout';

import { Equipments } from '../pages/Equipments';
import { Games } from '../pages/Games';
import { GameWrapper } from '../wrappers/GameWrapper';

export function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Games />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/game" element={<GameWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
