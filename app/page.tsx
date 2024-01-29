import Header from './header';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between pt-10">
      <Header />
      <div className="h-80 w-4/5 my-4 flex items-center px-10">
          <div className="w-7/12 p-4 text-justify">
            <p className="text-2xl text-center mb-8">
              Studencki serwis informacyjny
            </p>
            <p>
            Praca zaliczeniowa z przedmiotu "Technologie Internetowe" o temacie "Studencki Serwis Informacyjny" to fascynujące wyzwanie, które umożliwia studentom zdobycie praktycznej wiedzy na temat projektowania, implementacji i wdrażania serwisu internetowego. Projekt ten nie tylko pozwala na zastosowanie nabytych umiejętności w dziedzinie technologii internetowych, ale również skupia się na rozwoju kreatywności, umiejętności pracy zespołowej oraz analizy potrzeb użytkowników.
            </p>
          </div>
          <div className="h-full w-5/12 flex justify-center items-center">
            <img className="h-4/5 w-4/5" src="./info.jpg" alt="Informacje studenckie"></img>
          </div>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center">
          <div className="mb-12"><img className="w-40 h-40" src="./1.png" alt="studia" /></div>
          <div className="mb-12"><img className="w-40 h-40" src="./2.png" alt="studia" /></div>
          <div className="mb-4"><img className="w-40 h-40" src="./3.png" alt="studia" /></div>
        </div>
        <div className="h-80 w-4/5 my-4 flex items-center px-10">
          <div className="h-full w-5/12">
            <img className="h-full w-full" src="./nextjs.png" alt="React Logo"></img>
          </div>
          <div className="w-7/12 p-4 text-justify">
            <p>
            Next.js to framework do budowy aplikacji internetowych oparty na języku JavaScript oraz bibliotece React. Jednym z kluczowych elementów tej technologii jest renderowanie strony po stronie serwera (SSR), co przekłada się na szybsze ładowanie treści i lepszą wydajność. Next.js oferuje także tzw. pre-rendering, czyli generowanie statycznych stron w trakcie budowy projektu lub dynamiczne generowanie stron na żądanie, co pozwala zoptymalizować czas ładowania. Współpracuje również z frameworkiem React, co umożliwia łatwe korzystanie z komponentów React w aplikacjach Next.js.            </p>
          </div>
       
        </div>
    </main>
  
  )
}