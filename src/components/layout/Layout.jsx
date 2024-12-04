import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "Portfolio",
      path: "/#portfolio",
      hashLink: true,
    },
    {
      name: "About me",
      path: "/#about",
      hashLink: true,
    },
    {
      name: "Contact",
      path: "/contact",
      hashLink: false,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
