import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image alt="" src={require("../../assets/mapi.png")} width={100} height={100} />
    </Link>
  );
}
