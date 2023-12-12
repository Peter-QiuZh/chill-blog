import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    title: "首页",
    href: "/",
  },
  {
    title: "博客",
    href: "/blog",
  },
  {
    title: "随笔",
    href: "/essay",
  },
];

export default function Menu() {
  return (
    <nav className="flex items-center justify-between pt-6 px-2">
      <Link
        href="/"
        className="flex rounded-full overflow-hidden border shadow-md"
      >
        <Image src="/avatar.png" alt="ChillWay" width={48} height={48} />
      </Link>
      <ul className="flex px-3 bg-white rounded-full ring-1 ring-gray-100 shadow-lg shadow-gray-100">
        {tabs.map((item) => (
          <li
            key={item.title}
            className="px-3 py-2 text-gray-700 transition-colors hover:text-black"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
