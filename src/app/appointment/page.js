"use client"
import { useEffect } from "react";

const Appointment = () => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen h-full flex flex-col items-center justify-start">
        <section className="container px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-secondary font-semibold text-3xl md:text-4xl mb-12 md:mb-4">
            Book Appointment
          </h1>
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/immoiffo/30min"
            style={{ minWidth: "320px", height: "750px" }}
          ></div>
        </section>
      </main>
    </>
  );
};

export default Appointment;
