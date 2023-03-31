import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPost from '@/components/FeaturedPost';
import Profile from '@/components/Profile';

export default async function Home() {

  return (
    <div className='w-full h-full flex flex-col'>
      <Profile />
      <FeaturedPost />
      <CarouselPosts />
    </div>
  )
}
