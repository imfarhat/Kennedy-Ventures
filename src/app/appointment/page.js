"use client";
import { useEffect } from "react";

const Appointment = () => {
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
    <main className="min-h-screen h-full flex flex-col items-center justify-start">
      <section className="container px-4 mt-12 md:mt-20 mb-24 flex flex-col items-center justify-center">
        <h1 className="text-secondary font-semibold text-3xl md:text-4xl mb-8 md:mb-2">
          Book Appointment
        </h1>
        <div
          className="calendly-inline-widget w-full h-[60rem] bg-cover"
          data-url="https://calendly.com/immoiffo/30min"
          style={{
            minWidth: "355px",
            height: "960px",
            backgroundImage: "url('/svgs/undraw_online_calendar_re_wk3t.svg')",
          }}
        ></div>
      </section>
    </main>
  );
};

export default Appointment;
