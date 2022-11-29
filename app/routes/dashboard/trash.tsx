import { Outlet } from "@remix-run/react";

export default function TrashRoute() {
  return (
    <div>
      <h1 className="text-xl font-medium py-1 mx-6 mt-6 text-slate-200">🗑 Müll draußen? </h1>
      <main className="mx-6">
        <Outlet />
      </main>
    </div>
  );
}