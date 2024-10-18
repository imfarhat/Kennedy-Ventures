const Footer = () => {
  return (
    <footer className="border-t px-4 flex items-center justify-center">
      <div className="container px-4 py-4">
        <em className="text-xs md:text-sm font-medium">
          &copy; {new Date().getFullYear()} Copyright Kennedy Ventures, B.V.
        </em>
      </div>
    </footer>
  );
};
export default Footer;
