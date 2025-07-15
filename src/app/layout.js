import Navbar from '@/components/Navbar/navbar';
import './globals.css';
import Footer from '@/components/Footer/footer';


export const metadata = {
  title: 'Codebloom - Crecemos ideas con código',
  description: 'Empresa de desarrollo web, diseño y asesorías tecnológicas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Navbar/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
