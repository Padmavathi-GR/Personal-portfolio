import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}