import List from "@/components/List";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const blogList = allBlogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);
  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`w-fit text-3xl text-black leading-normal tracking-wider`}
        >
          <a
            href="https://kee.so/peter"
            target="_blank"
            className="flex flex-col hover:underline"
          >
            <span>Hello,</span>
            <span>I&apos;m PeterQ</span>
          </a>
        </h1>
        <div className="mt-6 text-gray-900 space-y-1.5">
          <p>👋 INTJ </p>
          <p>🧑‍💻 前端开发者 / Front-end Developer</p>
          <p>💪 正在做一些有趣的事 / Working on something interesting</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-medium text-xl to-gray-800">博客</h2>
          <Link
            className="to-gray-400 transition-colors hover:text-gray-600"
            href="/blog"
            title="更多博客"
          >
            <ArrowRightIcon size={20} />
          </Link>
        </div>
        <List data={blogList} className="mt-4" />
      </div>
    </>
  );
}
