import "@/styles/globals.css";
import ThemeProvider from "@/components/theme-provider";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Analytics from "@/components/analytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Prime Ready Mix Dashboard",
  description: "Prime Ready Mix Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
          <ToastContainer position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
