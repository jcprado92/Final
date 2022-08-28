const db = require("../db/dbConfig.js");

//INDEX ROUTE
const getAllPics = async () => {
  try {
    const allPics = await db.any("SELECT * FROM pics");
    return allPics;
  } catch (err) {
    return err;
  }
};

//SHOW ROUTE
const getPic = async (id) => {
  try {
    const onePic = await db.one("SELECT * FROM pics WHERE id=$1", id);
    return onePic;
  } catch (err) {
    return err;
  }
};

//CREATE ROUTE
const createPic = async (pic) => {
  const { name, location, is_favorite } = pic;
  try {
    const newPic = await db.one(
      "INSERT INTO pics (name, location, is_favorite) VALUES ($1, $2, $3) RETURNING *",
      [name, location, is_favorite]
    );
    return newPic;
  } catch (err) {
    return err;
  }
};

//UPDATE ROUTE
const updatePic = async (pic, id) => {
  const { name, location, is_favorite } = pic;
  try {
    const updatedPic = await db.one(
      "UPDATE pics SET name=$1, location=$2, is_favorite=$3 WHERE id=$4 RETURNING *",
      [name, location, is_favorite, id]
    );
    return updatedPic;
  } catch (err) {
    return err;
  }
};

//DELETE ROUTE
const deletePic = async (id) => {
  try {
    const deletedPic = await db.one(
      "DELETE FROM pics WHERE id=$1 RETURNING *",
      id
    );
    return deletedPic;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllPics, getPic, createPic, updatePic, deletePic };
