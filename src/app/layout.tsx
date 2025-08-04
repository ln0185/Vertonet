import StyledComponentsRegistry from "../lib/registry";
import Providers from "@/components/Providers";
import { Navbar, MobileNavbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            <MobileNavbar key="mobile-navbar" />
            {children}
            <Footer />
            <ChatBot />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
