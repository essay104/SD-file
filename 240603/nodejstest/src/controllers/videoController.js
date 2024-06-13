const videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minutes ago",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];

export const trending = (req, res) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.send("watch", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};

export const getedit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.send("Edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => {
  return res.send("search");
};
