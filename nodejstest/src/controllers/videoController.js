import { response } from "express";
import Video from "../models/video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(vidoes);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-error", { error });
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: `Watching`,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  return res.render("Upload", {});
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: { views: 0, rating: 0 },
    });
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMassage: err._message,
    });
  }
};

export const search = (req, res) => {
  return res.send("Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
