import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
export const metadata = {
  title: "Labor Sync Group | Workforce Solutions",
  description:
    "Staffing solutions for healthcare, skilled trades, manufacturing, construction, and logistics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}