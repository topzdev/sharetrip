export default {
  home: (() => {
    const parentPath = "/";
    return {
      title: "Homepage",
      to: parentPath,
      exact: true,
    };
  })(),
  post: (slug: string) => {
    const parentPath = `/posts/${slug}`;

    return {
      title: "Post",
      to: parentPath,
      exact: true,
      subpages: {
        timeline: (timeline_id: number) => {
          const subPath = `${parentPath}/timeline/${timeline_id}`;
          return {
            title: "Timeline",
            to: subPath,
          };
        },
      },
    };
  },
  wanderer: (user_id: number) => {
    const parentPath = `/posts/${user_id}`;

    return {
      title: "Wanderer",
      to: parentPath,
      exact: true,
    };
  },
};
