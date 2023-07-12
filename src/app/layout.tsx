import '@styles/globals.scss';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Oklahoma Climate Solutions',
  keywords: '',
  description: '$59 AC or Furnace Tune up! Heating and Air Conditioning Service, Maintenance, Repairs, and Installations. $49 Dryer Vent Cleaning!',
  favicon: 'favicon.ico'
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;