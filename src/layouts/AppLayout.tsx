import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      <Header />
      <main className="p-4 h-full">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
