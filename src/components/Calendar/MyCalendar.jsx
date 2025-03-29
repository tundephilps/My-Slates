import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    title: "Chemistry Class",
    start: new Date(2024, 2, 3, 10, 0),
    end: new Date(2024, 2, 3, 12, 0),
  },
  {
    title: "Chemistry Class",
    start: new Date(2024, 2, 12, 14, 0),
    end: new Date(2024, 2, 12, 16, 0),
  },
  {
    title: "Chemistry Class",
    start: new Date(2024, 2, 17, 10, 0),
    end: new Date(2024, 2, 17, 12, 0),
  },
  {
    title: "Chemistry Class",
    start: new Date(2024, 2, 28, 10, 0),
    end: new Date(2024, 2, 28, 12, 0),
  },
];

const MyCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState(initialEvents);
  const [view, setView] = useState("month");

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2024, 2, 1)}
        views={["month", "week", "day"]}
        style={{ height: 500 }}
        defaultView={view}
        onView={(newView) => setView(newView)}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: "#90cdf4",
            color: "#1a202c",
            borderRadius: "4px",
            padding: "2px 5px",
          },
        })}
      />
    </div>
  );
};

export default MyCalendar;
