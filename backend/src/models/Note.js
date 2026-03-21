import mongoose from "mongoose";

// Course model - represents an academic program or course
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
      enum: ['Engineering', 'Medicine', 'Business', 'Arts', 'Sciences', 'Technology', 'Other']
    },
    description: {
      type: String,
      required: true,
    },
    modules: [{
      title: String,
      content: String,
      type: {
        type: String,
        enum: ['lesson', 'game', 'quiz', 'simulation']
      },
      duration: Number // in minutes
    }],
    requiredSkills: [String],
    careerPaths: [String],
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    duration: String, // e.g., "4 years", "6 months"
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
