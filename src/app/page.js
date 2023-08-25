import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-0">
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0">  
          <h1 className={`mb-4 text-6xl font-bold`}>
            Jannsub Dine
          </h1>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0">  
          <h2 className={`mb-3 text-4xl font-semibold`}>
            Comming soon ...
          </h2>
      </div>
    </main>
  )
}
