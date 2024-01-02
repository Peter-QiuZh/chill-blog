import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "./blog/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/${blog._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.flattenedPath.replace("blog/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog],
});
