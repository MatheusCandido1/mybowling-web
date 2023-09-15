import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <main className="h-screen w-screen flex flex-col justify-between">
      <Header />
        <Outlet />
      <BottomNavigation />
    </main>
  )
}
