import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // make sure this line exists
export const metadata = {
  metadataBase: new URL("https://www.robibet.com"),
  title: "Robibet — Play, Win, Repeat!",
  description:
    "Your all-in-one destination for casino games, sports betting, and live dealers.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg w-full">
        <Header />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
