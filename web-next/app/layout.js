import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'HUMF — Every Day and Every Where Fitness',
  description: 'HUMF member web app — find a branch, join a membership, and manage your account.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
