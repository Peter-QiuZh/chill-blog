import { allBlogs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allBlogs.map((item) => ({
    slug: item.slug,
  }));

export const generateMetadata = async ({ params }: any) => {
  const blog = allBlogs.find((item) => item.slug === params.slug);
  return {
    title: `${blog?.title} - PeterQ's Blog`,
    description: blog?.description,
  };
};

export default async function Page({ params }: any) {
  const blog = allBlogs.find((item) => item.slug === params.slug);

  if (!blog) {
    return notFound();
  }
  return (
    <>
      <div className="flex flex-col items-center px-2 pt-12 pb-8">
        <h1 className="font-medium text-2xl">{blog.title}</h1>
        <p className="mt-2 to-gray-500 text-sm font-mono">{blog.date}</p>
      </div>
      <article
        className="prose max-w-none px-2 pb-8"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </>
  );
}
