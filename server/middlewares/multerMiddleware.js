import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config(); 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const blogStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blogs", 
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const pastEventStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "pastEvents",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const presentEventStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "presentEvents",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const eventRegisterStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "eventRegisterForm",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});

const eventRegisterUserStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "eventRegisterUser",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});
export const uploadBlogImage = multer({ storage: blogStorage }).single("image");
export const uploadPastEventImage = multer({ storage:pastEventStorage }).single("image");
export const uploadPresentEventImage = multer({ storage:presentEventStorage }).single("image");
export const uploadEventRegisterImage = multer({ storage:eventRegisterStorage }).single("image");
export const uploadEventRegisterUserImage = multer({ storage:eventRegisterUserStorage }).single("image");