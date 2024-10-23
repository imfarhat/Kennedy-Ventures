"use client";
import { useEffect } from "react";

const CalendlyCalendar = () => {
  useEffect(() => {
    // Ensure Calendly script is loaded when the component mounts
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once on mount
  return (
    <>
      <div
        className="calendly-inline-widget w-full h-[60rem] bg-contain bg-center bg-no-repeat bg-[url('/svgs/undraw_online_calendar_primary.svg')]"
        data-url="https://calendly.com/immoiffo/30min"
        style={{
          minWidth: "355px",
          height: "960px",
        }}
      ></div>
    </>
  );
};
export default CalendlyCalendar;
