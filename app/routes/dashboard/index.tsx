import { Outlet } from "@remix-run/react";

export default function DashboardIndexRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}