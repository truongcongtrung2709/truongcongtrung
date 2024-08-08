
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import { SettingsProvider } from "@/components/settings/context";
import { MotionLazy } from "@/components/animate/motion-lazy";
import ProgressBar from "@/components/progress-bar";
import SettingsDrawer from "@/components/settings/drawer/settings-drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trương Công Trung",
  description: "Trung's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'dark', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeColorPresets: 'default', // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <ProgressBar />

              {children}
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
