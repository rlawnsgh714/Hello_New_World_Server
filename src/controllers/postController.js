import Writing from "../models/Writing";

export const home = (req, res) => {
  return res.send("Home!!!!");
};
export const watch = (req, res) => {
  return res.send("Watch a Posting");
};
export const getEdit = (req, res) => {
  return res.send("Edit Page");
};
export const postEdit = (req, res) => {
  return res.send("Edit Posting");
};

export const getUpload = (req, res) => {
  return res.send("Upload Page");
};

export const postUpload = (req, res) => {
  return res.send("Upload Posting");
};
