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
            <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-scroll'>
                <Menu />
            </div>
        
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
                <Navbar />
                {/* {children} */}
            </div>
        
              
        </div>
    );
  }