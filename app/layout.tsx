import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  antialiased : 글 꼴을 매끈하게 해줌 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
