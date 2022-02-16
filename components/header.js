import Link from 'next/link'

export default function Header() {
  return (
    <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
      <span
        role='img'
        aria-label='clown face'
        className='text-xl md:text-3xl align-middle'
      >
        🤡
      </span>{' '}
      <Link href='/'>
        <a className='hover:underline hover:text-neutral-600'>Капитан Рекапов</a>
      </Link>
    </h2>
  );
}
