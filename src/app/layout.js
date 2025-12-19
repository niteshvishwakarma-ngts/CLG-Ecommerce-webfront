import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// OPTIONAL (next step ke liye)
// import Navbar from "@/components/common/Navbar";
// import ReduxProvider from "@/redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cricket E-commerce",
  description: "Buy cricket products online",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Next step me enable karna */}
        {/* <ReduxProvider> */}
          <Navbar />

          {children}

          <Footer />
          <ToastContainer position="top-right" autoClose={2000} />
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
