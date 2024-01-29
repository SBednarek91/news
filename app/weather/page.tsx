import Link from 'next/link'
import Header from '@/app/header'
import Image from 'next/image'

export default function Page() {
  return <div>
      <Header />
      <div><h1>API pogodowe</h1></div>
      <div><Link href="../">Home</Link></div>
      <div>
        <Link className='flex justify-center absolute inset-x-0 bottom-10' href="/">
          <Image
            src="/home.png"  
            alt="strona startowa"
            width={60}  
            height={20} 
          />
      </Link>
      </div>
    </div>    
}