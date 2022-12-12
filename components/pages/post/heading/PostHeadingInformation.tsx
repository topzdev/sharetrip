import { DetailedPost } from "@/types/data";
import {
  BanknotesIcon,
  ClockIcon,
  StarIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { use, useMemo } from "react";
import monenyFormatter from "utils/monenyFormatter";

interface PostHeadingInformationProps {
  info: DetailedPost;
}

const PostStatistics: React.FC<{ statistics: DetailedPost["statistics"] }> = ({
  statistics,
}) => {
  const { itinerary, review, spent } = statistics;

  const renderStats = useMemo(() => {
    return [
      {
        icon: StarIcon,
        text: review.rate,
        content: `${review.count} comments`,
      },
      {
        icon: ClockIcon,
        text: itinerary.days,
        content: "Days Itinerary",
      },
      {
        icon: BanknotesIcon,
        text: monenyFormatter(spent.currency).format(spent.amount),
        content: "Total Amount Spent",
      },
    ];
  }, [statistics]);

  return (
    <>
      {renderStats.map((item) => (
        <div className="flex items-start">
          {<item.icon className={`w-8 mt-1 shrink-0 text-primary`} />}

          <div className="ml-2">
            <h3 className="text-3xl">{item.text}</h3>
            <p className="text-sm font-serif opacity-70">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const PostHeadingInformation: React.FC<PostHeadingInformationProps> = ({
  info,
}) => {
  const { user, statistics, title, location } = info;

  const fullName = user.firstname + " " + user.lastname;
  const postedDate = dayjs(info.created_at).format("MMMM DD, YYYY");
  const userProfile = `/images/profiles/${user.profile}`;
  const userLink = `/wanderer/${user.id}`;

  const joinedLocation =
    typeof location === "string" ? location : location.join(", ");

  return (
    <>
      <div className="container mx-auto">
        <div className="pt-6">
          <p className="text-lg mb-3 font-serif text-primary-300">
            {joinedLocation}
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl font-sans font-bold">{title}</h1>

            <div className="flex items-center mt-3">
              <div className="h-[50px] w-[50px] rounded-full overflow-hidden mr-3">
                <Link href={userLink}>
                  <Image
                    className="object-fit object-center h-full w-full select-none"
                    src={userProfile}
                    width={50}
                    height={50}
                    alt={fullName}
                  />
                </Link>
              </div>

              <div className="font-serif">
                <Link href={userLink}>
                  <p className="">{fullName}</p>
                </Link>
                <p className="text-xs opacity-75">{postedDate}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 w-3/4 ml-auto">
              <PostStatistics statistics={statistics} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeadingInformation;
