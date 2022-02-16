import Link from 'next/link';
import DateComponent from '../components/date';
import CoverImage from './cover-image';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className='my-6'>
      <div className='mb-5'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className='text-3xl mb-2 leading-snug h-20'>
        <Link href={`/posts/${slug}`}>
          <a className='hover:underline decoration-4 underline-offset-8 hover:text-neutral-600'>
            {title}
          </a>
        </Link>
      </h3>
      <div className='mb-3 font-light'>
        <DateComponent dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
    </div>
  );
}
