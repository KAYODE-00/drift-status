
import "./globals.css";
import Navbar from "@/components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <div className="min-h-screen flex flex-col">

          {/* Navbar */}
          <Navbar title="Drift Status" />

          {/* Page content */}
          <main className="p-6">
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}