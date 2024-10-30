export type MarkdownPost = {
  frontmatter: {
    title: string;
    topic: string;
    slug: string;
  };
  default: string;
};

export type Lesson = {
  path: string;
  data: {
    title: string;
    topic: string;
    slug: string;
  };
};