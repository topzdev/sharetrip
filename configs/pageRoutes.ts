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

  create: (id?: number | null) => {
    const parentPath = `/create/${id}`;

    return {
      title: "Create Itinerary",
      to: parentPath,
      subpages: {
        travelDetails: (() => {
          const subPath = "travel-details";
          const subTitle = "Travel Details";
          return {
            title: subTitle,
            subPages: {
              categories: {
                title: `Categories`,
                to: `${parentPath}/${subPath}/categories`,
                raw: `/${subPath}/categories`,
              },
              information: {
                title: `Information`,
                to: `${parentPath}/${subPath}/information`,
                raw: `/${subPath}/information`,
              },
              photos: {
                title: `Photos`,
                to: `${parentPath}/${subPath}/photos`,
                raw: `/${subPath}/photos`,
              },
              itinerary: {
                title: `Itinerary`,
                to: `${parentPath}/${subPath}/itinerary`,
                raw: `/${subPath}/itinerary`,
              },
            },
          };
        })(),

        additional: (() => {
          const subPath = "additional";
          const subTitle = "Additonal";
          return {
            title: subTitle,
            subPages: {
              tipsReminder: {
                title: `Tips and Reminder`,
                to: `${parentPath}/${subPath}/tips-and-reminder`,
                raw: `/${subPath}/tips-and-reminder`,
              },
              expenses: {
                title: `Expenses`,
                to: `${parentPath}/${subPath}/expenses`,
                raw: `/${subPath}/expenses`,
              },

              toolsApps: {
                title: `Tools and Apps`,
                to: `${parentPath}/${subPath}/tools-and-apps`,
                raw: `/${subPath}/tools-and-apps`,
              },

              difficulty: {
                title: `Dificulty`,
                to: `${parentPath}/${subPath}/difficulty`,
                raw: `/${subPath}/difficulty`,
              },
            },
          };
        })(),

        submission: (() => {
          const subPath = "submission";
          const subTitle = "Submission";
          return {
            title: subTitle,
            subPages: {
              review: {
                title: `Review`,
                to: `${parentPath}/${subPath}/review`,
                raw: `/${subPath}/review`,
              },
              final: {
                title: `Final`,
                to: `${parentPath}/${subPath}/final`,
                raw: `/${subPath}/final`,
              },
            },
          };
        })(),
      },
    };
  },
};
