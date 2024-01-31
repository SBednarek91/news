'use client'

import Link from 'next/link'
import Header from '@/app/header'
import Image from 'next/image'

import { useEffect, useState } from 'react';

const Home = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/currentDateTime');
        const data = await response.json();
        setCurrentDateTime(data.currentDateTime);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const targetDateTime = new Date('2024-02-08T08:00:00').getTime();
  const currentTime = new Date().getTime();
  const timeDifference = targetDateTime - currentTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return (
    <div>
      <Header />
        <div className='flex flex-col items-center mt-10'><h1>Licznik 'ile do sesji'</h1></div>
        <div>
          <Link className='flex justify-center absolute inset-x-0 bottom-10' href="/">
            <Image
              src="/home.png"  
              alt="strona startowa"
              width={60}  
              height={20} 
            />
        </Link>
        <h1 className='flex flex-col items-center mt-2'>Aktualna data i czas: {currentDateTime}</h1>
        <h2 className='flex justify-center text-[#f79817] mt-8'>Do staru sesji: 8 Lutego 2024 zostało:</h2>
        <p className='flex flex-col items-center text-xl mt-2'>{`${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`}</p>
      </div>
      </div>
  );
};

export default Home;