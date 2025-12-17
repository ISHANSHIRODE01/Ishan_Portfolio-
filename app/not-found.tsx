import Link from 'next/link';
import MagicButton from '@/components/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <div className="h-screen bg-black-100 flex items-center justify-center flex-col text-white">
      <h1 className="text-6xl font-bold text-purple mb-4">404</h1>
      <h2 className="text-2xl mb-8">Project Not Found</h2>
      <p className="text-white-200 mb-8 text-center max-w-md">
        The project you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/#projects">
        <MagicButton
          title="Back to Projects"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
}