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
