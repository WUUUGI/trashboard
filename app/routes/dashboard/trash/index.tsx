import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getEvents, TrashEvent } from "~/models/schedule.server.ts";
import styles from "~/styles/trash.css";


type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  events: Awaited<ReturnType<typeof getEvents>>;
};

export const loader = async () => {
  return json<LoaderData>({
    events: await getEvents(),
  });
};

function getBorderColor(summary: string, alarm: boolean): string {
  let borderColor = ""
  let trashType = ""
  if (summary.includes("Restmüll")) {
    trashType = "Restmüll"
    if (summary.includes("Wertstoff")) {
      trashType += "-Wertstoff"
    }
  } else if (summary.includes("Wertstoff")) {
    trashType = "Wertstoff"
  } else if (summary.includes("Bio")) {
    trashType = "Bio"
  } else if (summary.includes("Papier")) {
    trashType = "Papier"
  }

  switch (trashType) {
    case "Restmüll-Wertstoff":
      borderColor = "bg-gradient-to-r to-neutral-900 from-yellow-500 hover:from-neutral-700 hover:to-yellow-500"
      break;
    case "Restmüll":
      borderColor = "bg-gradient-to-r from-neutral-900 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600"
      break;
    case "Bio":
      borderColor = "bg-gradient-to-r from-yellow-800 to-yellow-600 hover:from-yellow-900 hover:to-yellow-700"
      break;
    case "Papier":
      borderColor = "bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-800 hover:to-sky-900"
      break;
    default:
      borderColor = "bg-rose-100"
      break;
  }
  return alarm ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" : borderColor
}

function EventComponent({ summary, daysRemaining, date }) {
  const alarm = daysRemaining === 0
  console.log(summary)
  return (<li className={`backdrop-blur-sm flex items-start space-x-6 p-6 rounded-xl border-2 border-slate-600 hover:border-sky-500 my-6  ${getBorderColor(summary, alarm)}`}>
    <span>♻</span>
    <div className="min-w-0 relative flex-auto">
      <h2 className="font-semibold text-slate-200 truncate pr-20">{summary}</h2>
      <dl className="mt-2 flex flex-wrap text-sm text-slate-200 leading-6 font-medium">
        <div className="absolute top-0 right-0 flex items-center space-x-1">
          <dt>⏰</dt>
          <dd className="font-semibold text-xl text-slate-200">{daysRemaining}</dd>
        </div>
        <div className="ml-2 text-slate-200">
          <dt className="sr-only">📆</dt>
          <dd>{new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })}</dd>
        </div>
      </dl>
    </div>
  </li>)
}

export default function TrashIndexRoute() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const data = useLoaderData();
  const events = data.events;

  return (
    <div>
      <h3 className="text-lg font-medium pt-4 text-slate-200">📆 {date}</h3>
      <ul className="list-none">
        {events.map((event, idx) => (
          <EventComponent summary={event.summary} date={event.date} daysRemaining={event.daysRemaining} key={idx} />
        ))}
      </ul>
    </div>
  );
}