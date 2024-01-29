import Link from 'next/link'
import Image from "next/image";
export default function Page() {
    return (
      <main className="flex flex-col items-center justify-between pt-10">
        <div className="w-4/5 flex items-center justify-between gap-10 px-10 ">
            <Image src="/news-icon.png" alt="Logo News" width={120} height={100} />
            <div className="w-80 border">
            <p>TUTAJ BEDZIE INPUT BAR</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
            <Link href="./session">Sesja</Link>
            <Link href="./weather">Pogoda</Link>
            <Link href="./test">Lista egzaminów</Link>
            <Link href="./calc">Kalkulator średniej</Link>
            </div>
        </div>
      </main>
    
    )
  }