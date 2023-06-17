import CreateLayout from "@/components/layout/create";
import MainLayout from "@/components/layout/main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CreateLayout>{children}</CreateLayout>
      </body>
    </html>
  );
}
