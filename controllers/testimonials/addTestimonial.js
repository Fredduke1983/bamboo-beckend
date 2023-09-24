const { v4: uuidv4 } = require("uuid");
const User = require("../../models/userSchema");

const addTestimonial = async (req, res) => {
  const uniqueId = uuidv4();

  const { testimonial } = req.body;
  const { id, testimonials: testimonialsTemp } = req.user;
  console.log(testimonial);
  testimonialsTemp.push({ testimonial, id: uniqueId });
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      testimonials: testimonialsTemp,
    },
    {
      new: true,
      select: "-password",
    }
  );
  res.status(200).json(updatedUser.testimonials);
};

module.exports = addTestimonial;
