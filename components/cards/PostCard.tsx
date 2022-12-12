import React, { FunctionComponent } from "react";
import { Post } from "@/types/data";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

type PostCardProps = {
  data: Post;
};

const PostCard: FunctionComponent<PostCardProps> = ({ data }) => {
  const user = data.user;
  const fullName = user.firstname + " " + user.lastname;
  const postedDate = dayjs(data.created_at).format("MMMM DD, YYYY");
  const postImage = `/images/posts/${data.image}`;
  const userProfile = `/images/profiles/${user.profile}`;
  const postLink = `/post/${data.slug}`;
  const userLink = `/wanderer/${user.id}`;
  const postTitle = data.title;
  const likeCount = data.like_count;
  const ratingCount = data.rating_count;

  const location =
    typeof data.location === "string"
      ? data.location
      : data.location.join(", ");

  return (
    <div className="flex flex-col">
      <div className="h-[290px] w-[200px] relative overflow-hidden rounded-2xl">
        <Link
          className="flex h-full w-full before:block before:absolute before:left-0 before:top-0 before:w-full before:h-full before:inset-1 before:bg-gradient-to-b before:from-black before:to-transparent before:opacity-20"
          href={postLink}>
          <Image
            className="object-cover object-center"
            src={postImage}
            alt={postTitle}
            width={300}
            height={500}></Image>
        </Link>

        <Link
          className="flex items-start text-white absolute top-2 px-2"
          href={userLink}>
          <div className="block min-w-[30px] min-h-[30px] max-h-[30px] max-w-[30px] rounded-full overflow-hidden mr-2">
            <Image
              className="object-cover object-center min-h-[30px]"
              src={userProfile}
              alt={fullName}
              height={50}
              width={50}></Image>
          </div>

          <div>
            <p className="text-sm truncate max-w-[140px]" title={fullName}>
              {fullName}
            </p>
            <p className="opacity-80 text-xs -mt-[2px]">
              <small>{postedDate}</small>
            </p>
          </div>
        </Link>
      </div>

      <div className="max-w-[200px] mt-2 font-serif">
        <p
          className="max-w-full truncate text-sm text-primary mb-1"
          title={location}>
          {location}
        </p>
        <Link href={postLink}>
          <h3 className="font-bold leading-tight mb-1">{postTitle}</h3>
        </Link>
        <div className="flex">
          <div className="flex items-center mr-2">
            <span className="mr-[1px] text-sm">{ratingCount}</span>
            <StarIcon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center">
            <span className="mr-[1px] text-sm">{likeCount}</span>
            <HeartIcon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
