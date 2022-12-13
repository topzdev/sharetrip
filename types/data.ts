import { PostTravelTimeline } from "./travelTimeline";

export type DetailedPost = {
  id: number;
  slug: string;
  title: string;
  location: string[];
  statistics: {
    review: {
      rate: number;
      count: number;
    };
    itinerary: {
      days: number;
    };
    spent: {
      amount: number;
      currency: string;
    };
  };
  images: string[];
  intro: string;
  travel_timeline: PostTravelTimeline[];
  keep_in_minds: {
    title: string;
    content: string;
  }[];
  user: {
    id: number;
    firstname: string;
    lastname: string;
    profile: string;
    joined_date: string;
    followers: number;
    introduction: string;
  };
  comments: {
    user: {
      firstname: string;
      lastname: string;
      profile: string;
    };
    title: string;
    content: string;
    statistics: {
      likes: number;
    };
    created_at: string;
  }[];
  created_at: string;
};

export type Post = {
  title: string;
  slug: string;
  location: string | string[];
  rating_count: number;
  like_count: number;
  image: string;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    profile: string;
  };
  created_at: string;
};
