import Image from 'next/image'

export default function Home() {
  return (
    <main>
      Hello World
      <Image 
        src='/hash_brown.png'
        width={50}
        height={50}
        alt='Test image'
      />
    </main>
  )
}
