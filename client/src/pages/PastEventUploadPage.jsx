import { Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { handleError, handleSuccess } from "../components/Utils.js";
import { useNavigate } from "react-router-dom";

const PastEventUploadPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setImage(null);
    setPreviewUrl(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }
    if (!title || !description || !image) {
      return handleError("All fields are required");
    }
    try {
      const result = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/createPastEvent`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await result.json();
      if (result.ok) {
        handleSuccess("Past Event Uploaded successfully");
        setTimeout(() => {
          navigate("/events");
        }, 500);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError(`An error occurred: ${error.message}`);
    }
  };

  return (
    <Container sx={{ my: 8 }}>
      <Typography
        variant="h4"
        sx={{
          mx: { xs: "0.5rem", md: "2rem" },
          my: { xs: "1rem", md: "1rem" },
        }}
        textAlign={"center"}
        fontWeight={"bold"}
        color="rgb(20 76 139)"
      >
        Add a Past Event
      </Typography>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg"
      >
        <div>
          <label className="block text-md font-medium text-gray-700">
            Event Title
          </label>
          <textarea
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            style={{ resize: "none", overflow: "hidden" }}
            rows={1}
            className="border-gray-500 block w-full rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700">
            Event Description
          </label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            style={{ resize: "none", overflow: "hidden" }}
            rows={4}
            className="block w-full rounded-md border-gray-300 shadow-sm p-2"
          ></textarea>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="image"
            className="block text-md font-medium text-gray-700"
          >
            Event Image
          </label>

          {!previewUrl ? (
            <div
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-colors duration-200"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <div className="space-y-1 text-center">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <p>Upload a file </p>
                    <p>Drag & Drop an image here</p>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          ) : (
            <div className="relative mt-2 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={previewUrl}
                alt="Thumbnail preview"
                className="w-full max-h-96 object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button
                  type="button"
                  onClick={removeImage}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
                  title="Remove image"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-3 py-1 text-sm truncate">
                {image?.name}
              </div>
            </div>
          )}
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Event
        </Button>
      </form>
    </Container>
  );
};

export default PastEventUploadPage;
