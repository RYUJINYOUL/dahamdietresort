import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import ClientLayout from "@/components/ClientLayout";
import FabButton from '@/components/ui/FabButton';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "다함단식하우스",

  icons: {
		icon: "/Image/logo.jpg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"
     suppressHydrationWarning>
        <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="VHyqXjt7UmgqBvFxj2-Em5Y6yGjDzchXa-YgfgML0BU" />
        {/* Naver Site Verification */}
        <meta name="naver-site-verification" content="718950b5a1fe655d1f8ca7cf145e39a3573de2c0" />
      </head>
      <body className={inter.className}>
      <ClientLayout>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
            <FabButton />
        </ClientLayout>
          </body>
    </html>
  );
}
