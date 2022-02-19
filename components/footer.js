import Container from './container';

export default function Footer() {
  return (
    <footer className='bg-accent-1 border-t border-accent-2'>
      <Container>
        <div className='flex flex-col p-10 md:p-16'>
          <h6 className='text-lg md:text-xl font-semibold tracking-tighter leading-tight'>
            <span
              role='img'
              aria-label='email'
              className='text-xl align-middle'
            >
              📧
            </span>
            <a href='mailto:caprecap@protonmail.com'>
              {' '}
              caprecap@protonmail.com
            </a>
          </h6>
          <p className='text-xs md:text-sm text-neutral-600 mt-4'>
            Сайт не использует куки, не собирает данные и не следит за
            пользователями, потому что его автору все равно.
          </p>
        </div>
      </Container>
    </footer>
  );
}
