import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    // Career exploration specific fields
    interests: [String],
    skills: [String],
    exploredCourses: [{
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      },
      progress: {
        type: Number,
        default: 0
      },
      completedModules: [String],
      lastAccessed: Date
    }],
    favoriteCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }],
    assessmentResults: [{
      type: {
        type: String,
        enum: ['skills', 'interests', 'personality']
      },
      results: mongoose.Schema.Types.Mixed,
      completedAt: Date
    }],
    recommendedCareers: [{
      career: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Career"
      },
      matchScore: Number,
      generatedAt: Date
    }]
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
