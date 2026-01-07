export const metadata = {
  title: "Studio - Julien Diététicien",
  robots: "noindex",
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: 0, minHeight: "100vh" }}>{children}</div>
}
