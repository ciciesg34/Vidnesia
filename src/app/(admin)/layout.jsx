// Route group layout — dipakai HANYA untuk halaman admin.
// Karena berada dalam route group (admin), bisa dijamin tidak menyertakan
// script iklan/analitik dari root layout? → Next.js root layout tetap dipakai.
// Untuk memastikan admin bebas iklan, kita render ulang <html>/<body> di sini
// menggunakan pendekatan route group dengan root layout sendiri.

import '../globals.css';

export const metadata = {
  title: 'Admin - Vidnesia',
  robots: { index: false, follow: false }
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-bg text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}