export const trending = (req, res) => {
  return res.send(
    "<!DOCTYPE html><head><title>nodejs</title></head><title>nodejs</title>"
  );
};

export const watch = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
};

export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};

export const search = (req, res) => {
  return res.send("search");
};

export const upload = (req, res) => {
  return res.send("Upload");
};

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
