import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>React Concepts</h1>
      <p>
        Hello, I'm covering the advanced React concepts to understand them. Most
        of these will have examples which can be played around with.
      </p>
      <p>
        An app made by{' '}
        <Link href='https://github.com/danielbutterfield'>Dan</Link> with
        NextJS.
      </p>
    </main>
  )
}
