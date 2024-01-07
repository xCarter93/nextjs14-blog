import PostUser from "@/components/post-user/PostUser";
import { getPost } from "@/lib/db/post";
import Image from "next/image";
import { Suspense } from "react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// const getData = async (slug: string) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//   );
//   if (!response.ok) {
//     throw new Error("Error fetching data");
//   }

//   return response.json();
// };

export default async function SinglePostPage({
  params: { slug },
}: BlogPostProps) {
  // const post: BlogPostModel = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <Image
          src={post?.image || "/image-placeholder.png"}
          alt="blog post image"
          width={700}
          height={700}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl font-bold capitalize text-white">
            {post?.title}
          </h1>
          <Suspense
            fallback={<span className="loading loading-dots loading-lg"></span>}
          >
            <PostUser
              userId={post?.userId || ""}
              publishDate={post?.createdAt || new Date()}
            />
          </Suspense>

          <p className="text-white">{post?.description}</p>
        </div>
      </div>
    </div>
  );
}
