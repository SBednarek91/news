import Link from 'next/link'
import Image from "next/image";

export default function Header() {
    return (
      <div className="w-4/5 flex items-center justify-between gap-10 px-10 ">
        <Image src="/news-icon.png" alt="Logo News" width={120} height={100} />
  
        <div className="w-80 border">
          <p>TUTAJ BEDZIE INPUT BAR</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          {/* licznik czasu */}
          <Link href="../session/page.tsx">Sesja</Link>
          {/* API pogodowe */}
          <p>Pogoda</p>
          {/* Dodawanie do listy */}
          <p>Lista egzaminów</p>
          {/* Kalkulator sredniej */}
          <p>Kalkulator średniej</p>
        </div>
      </div>
    );
  }
  