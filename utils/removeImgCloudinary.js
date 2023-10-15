const cloudinary = require("cloudinary").v2;

const removeImgCloudinary = async (req, res) => {
  const { CLOUDE_NAME, API_KEY, API_SECRET } = process.env;
  const { public_id } = req;
  console.log(public_id);
  cloudinary.config({
    cloud_name: CLOUDE_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });
  await cloudinary.uploader.destroy(
    `bamboo/products/${public_id}`,
    (error, result) => {
      if (error) {
        console.error("Помилка при видаленні файлу:", error);
      } else {
        console.log("Файл було успішно видалено:", result);
        res.status(200).json(result);
      }
    }
  );
};

module.exports = removeImgCloudinary;
