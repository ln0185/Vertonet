import StyledComponentsRegistry from "../lib/registry";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
            <ChatBot />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
