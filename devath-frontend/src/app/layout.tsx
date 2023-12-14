import { AppProvider } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevA",
  description: "Change the world with innovation",
  icons: "/deva_circle.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
