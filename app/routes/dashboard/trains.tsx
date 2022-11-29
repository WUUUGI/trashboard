import { Outlet } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { Clock } from "~/components/clock.client";

export default function TrainsRoute() {
  return (
    <div>
      <ClientOnly fallback={<div></div>}>
        {() => <Clock />}
      </ClientOnly>
      <main>
        <Outlet />
      </main>
    </div>
  );
}