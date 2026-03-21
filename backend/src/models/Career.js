import mongoose from "mongoose";

// Career model - represents a career path
const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requiredSkills: [String],
    educationPath: [String],
    averageSalary: {
      min: Number,
      max: Number,
      currency: {
        type: String,
        default: 'USD'
      }
    },
    jobOutlook: {
      type: String,
      enum: ['Excellent', 'Good', 'Fair', 'Limited']
    },
    interviewQuestions: [{
      question: String,
      difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
      }
    }],
    relatedCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }]
  },
  { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);

export default Career;
