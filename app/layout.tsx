import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
export const metadata = {
  title: "Labor Sync Group | Workforce Solutions",
  description:
    "Staffing solutions for healthcare, skilled trades, manufacturing, construction, and logistics.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Labor Sync Group | Workforce Solutions",
    description:
      "Staffing solutions for healthcare, skilled trades, manufacturing, construction, and logistics.",
    url: "https://laborsyncgroup.com",
    siteName: "Labor Sync Group",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Labor Sync Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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