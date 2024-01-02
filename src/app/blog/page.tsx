import BlogPost from "@/components/blogpost/BlogPost";
import { getPosts } from "@/lib/db/post";
import { BlogPostModel } from "@/models/BlogPostModel";

// const getData = async (): Promise<BlogPostModel[]> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   if (!response.ok) {
//     throw new Error("Error fetching data");
//   }

//   return response.json();
// };

export default async function BlogPage() {
  // const posts: BlogPostModel[] = await getData();

  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => {
        return <BlogPost key={post.id} post={post} />;
      })}
    </div>
  );
}
