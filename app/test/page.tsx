'use client'
import Link from 'next/link'
import ExamList from '../components/examlist'
import Header from '@/app/header'
import Image from 'next/image'


const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-10'>
        <div><p>Lista egzaminów w sesji:</p></div>
        <div><p>Dodaj nowy egzamin:</p></div>
      </div>
      <div className='flex justify-center text-[#f79817]'><ExamList /></div>
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
  );
};

export default Home;