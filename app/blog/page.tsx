import { allBlogs } from "@/.contentlayer/generated";
import List from "@/components/List";
import { compareDesc } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `PeterQ's Blog`,
};

export default function Page() {
  const blogList = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1
          className={`flex flex-col text-3xl text-black leading-normal tracking-wider `}
        >
          博客 / Blog
        </h1>
      </div>
      <List data={blogList} />
    </>
  );
}
