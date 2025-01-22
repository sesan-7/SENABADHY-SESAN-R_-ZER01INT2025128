import UserModel from "../../Models/UserModel.js"; // Ensure the correct path
import bcrypt from "bcrypt";
import multer from "multer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

// Configure AWS SDK v3 S3 Client
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

// File upload middleware using multer
const storage = multer.memoryStorage();
const upload = multer({ storage }).single("ProfileImage");

export const Signup = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("File upload error:", err);
      return res.status(400).json({ message: "Error uploading file" });
    }

    try {
      const {
        FirstName,
        LastName,
        EmailId,
        PhoneNumber,
        DateOfBirth,
        Password,
        Profession,
      } = req.body;

      // Validate required fields
      if (
        !FirstName ||
        !LastName ||
        !EmailId ||
        !PhoneNumber ||
        !DateOfBirth ||
        !Password
      ) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(Password, 10);

      let profileImageUrl = "ImageUrl";

      // Check if a file is provided
    //   if (req.file) {
    //     try {
    //       const fileExtension = req.file.originalname.split(".").pop();
    //       const s3Key = `profile-images/${uuidv4()}.${fileExtension}`; // Unique filename

    //       const uploadParams = {
    //         Bucket: process.env.AWS_S3_PROFILE_BUCKET_NAME,
    //         Key: s3Key,
    //         Body: req.file.buffer,
    //         ContentType: req.file.mimetype,
    //         ACL: "public-read",
    //       };

    //       // Upload to S3 using the AWS SDK v3
    //       const command = new PutObjectCommand(uploadParams);
    //       await s3Client.send(command);

    //       // Construct S3 URL manually
    //       profileImageUrl = `https://${process.env.AWS_S3_PROFILE_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
    //     } catch (uploadError) {
    //       console.error("Error uploading to S3:", uploadError);
    //       return res
    //         .status(500)
    //         .json({ message: "Error uploading profile image" });
    //     }
    //   }

      // Generate a six-digit OTP and set expiration time (10 minutes)
      const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit random OTP
      const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); // Current time + 10 minutes

      // Construct user object
      const user = new UserModel({
        FirstName,
        LastName,
        EmailId,
        PhoneNumber,
        DateOfBirth,
        Password: hashedPassword,
        Profession,
        ProfileImage: profileImageUrl || null, // Null if no file was uploaded
        OTP: otp,
        OTP_Expiration: otpExpiration,
      });

      // Save to database
      await user.save();
      res.status(201).json({
        message: "User registered successfully",
        userId: user._id,
        otp,
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Error registering user" });
    }
  });
};