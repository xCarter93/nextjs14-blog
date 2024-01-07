import { BlogPostModel } from "@/models/BlogPostModel";
import { Post as PostModel } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: PostModel;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="mb-5 flex flex-col gap-5">
      <div className="flex">
        <div className="relative w-[90%]">
          <Image
            className="object-cover"
            src={post.image ? post.image : "/image-placeholder.png"}
            alt="blog image"
            width={300}
            height={300}
          />
        </div>
        <span className="m-auto w-fit rotate-[270deg] whitespace-nowrap text-xs">
          {post.updatedAt.toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      </div>
      <div>
        <h1 className="mb-4 line-clamp-1 text-2xl font-bold capitalize text-white">
          {post.title}
        </h1>
        <p className="mb-4 line-clamp-3 text-sm">{post.description}</p>
        <Link className="link" href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
