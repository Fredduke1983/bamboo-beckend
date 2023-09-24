const User = require("../../models/userSchema");
const catchAsync = require("../../utils/catchAsync");
const { errorsCatcher } = require("../../utils/errorsCatcher");

const deleteTestimonial = catchAsync(async (req, res) => {
  const { testimonials, id: userId } = req.user;
  const { id: paramsId } = req.params;
  const filteredTestimonials = await testimonials.filter(
    (el) => el.id !== paramsId
  );
  if (testimonials.length !== filteredTestimonials.length) {
    await User.findByIdAndUpdate(userId, {
      testimonials: filteredTestimonials,
    });
    return res.status(200).json({ msg: "testimonial deleted" });
  }
  errorsCatcher(404, "testimonial not found");
});
module.exports = deleteTestimonial;
