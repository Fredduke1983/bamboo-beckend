const catchAsync = require("./catchAsync");
const { errorsCatcher } = require("./errorsCatcher");
const { productValidate } = require("./productValidate");
const fs = require("fs").promises;
const cloudinary = require("cloudinary").v2;

const cloudinaryHandler = catchAsync(async (req, res, next) => {
  const { error, value } = productValidate(req.body);
  if (error) {
    return errorsCatcher(400, "Bad request");
  }
  const { CLOUDE_NAME, API_KEY, API_SECRET } = process.env;
  cloudinary.config({
    cloud_name: CLOUDE_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });
  const { file } = req;
  if (!file) {
    return next();
  }
  const { path, filename } = file;

  const uploadOptions = {
    width: 600,
    height: 600,
    gravity: "auto",
    crop: "fill",
    folder: "bamboo/products",
    public_id: filename,
  };

  await cloudinary.uploader.upload(path, uploadOptions, (error, result) => {
    if (error) {
      errorsCatcher(400, "Uploads error");
    } else {
      newLinkToAvatar = result.url;
      console.log("The file has been successfully uploaded to Cloudinary:");
    }
  });

  await fs.unlink(path);
  req.url = newLinkToAvatar;
  req.public_id = filename;
  next();
});

module.exports = cloudinaryHandler;
