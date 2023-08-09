import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link href="/" passHref>
      <Image
        height={45}
        width={45}
        onClick={handleLogoClick}
        className={className}
        src="/favicon.ico"
        alt="Promolab Logo."
      />
    </Link>
  );
}
