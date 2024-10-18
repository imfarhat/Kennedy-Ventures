import Script from "next/script";

const Appointment = () => {
  return (
    <>
      <main className="min-h-screen h-full flex flex-col items-center justify-start">
        <section className="container px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-secondary font-semibold text-3xl md:text-4xl mb-12 md:mb-4">
            Book Appointment
          </h1>
          <div
            className="calendly-inline-widget w-full h-[60rem]"
            data-url="https://calendly.com/immoiffo/30min"
            style={{ minWidth: "320px", height: "960px" }}
          ></div>
        </section>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </main>
    </>
  );
};

export default Appointment;
