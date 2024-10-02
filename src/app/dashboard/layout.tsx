import Image from 'next/image'
import Link from 'next/link'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen">
            {/* LEFT */}
            <div className='bg-red-300 w-[14%] md:w-[8%] lg:w-[16%] '>
                <Menu />
            </div>
        
            {/* RIGHT */}
            <div className="bg-blue-300 w-[86%]">
                <Navbar />
                {/* {children} */}
            </div>
        
              
        </div>
    );
  }