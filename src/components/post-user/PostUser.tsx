import { getUser } from "@/lib/db/post";
import { BlogPostUserModel } from "@/models/BlogPostUserModel";
import Image from "next/image";

interface PostUserProps {
  userId: string;
  publishDate: Date;
}

// const getData = async (userId: string) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" },
//   );
//   if (!response.ok) {
//     throw new Error("Error fetching data");
//   }

//   return response.json();
// };

const PostUser = async ({ userId, publishDate }: PostUserProps) => {
  // const user: BlogPostUserModel = await getData(userId);
  const user = await getUser(userId);
  return (
    <div className="flex gap-4">
      <Image
        src="/noavatar.png"
        alt="user image"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h3 className="font-bold">Author</h3>
        <span className="text-white">{user?.username}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">Published</h3>
        <span className="text-white">
          {publishDate.toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default PostUser;
