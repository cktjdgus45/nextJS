import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPost from '@/components/FeaturedPost';
import Profile from '@/components/Profile';

export default async function Home() {

  return (
    <div className='w-full h-full flex flex-col'>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </div>
  )
}
