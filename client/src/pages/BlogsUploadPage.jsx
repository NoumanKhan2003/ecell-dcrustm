import { useState, useEffect } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import { Container, Typography } from "@mui/material";
import { handleError, handleSuccess } from "../components/Utils.js";
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../components/Loader.jsx";

const BlogsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subSections, setSubSections] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addSubSection = () => {
    setSubSections([...subSections, { subTitle: "", subContent: "" }]);
  };

  const updateSubSections = (index, field, value) => {
    const updatedSubSections = [...subSections];
    updatedSubSections[index][field] = value;
    setSubSections(updatedSubSections);
  };

  const deleteSubSections = (index) => {
    const updatedSubSections = [...subSections];
    updatedSubSections.splice(index, 1);
    setSubSections(updatedSubSections);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const removeThumbnail = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setThumbnail(null);
    setPreviewUrl(null);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setThumbnail(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titleMain", title);
    formData.append("contentMain", content);
    formData.append("sections", JSON.stringify(subSections));
    if (thumbnail) {
      formData.append("image", thumbnail);
    }
    if (!title || !content || !thumbnail) {
      return handleError("All fields are required");
    }
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/create`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        handleSuccess("Blog Uploaded successfully");
        setTimeout(() => {
          navigate("/blogs");
        }, 500);
      } else {
        handleError("Failed to upload blog. Please try again.");
      }
    } catch (error) {
      handleError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
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
            Add a New Blog
          </Typography>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-md font-medium text-gray-700"
              >
                Main Title
              </label>
              <textarea
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                rows={1}
                className="border-gray-500 block w-full rounded-md shadow-sm p-2"
                style={{ resize: "none", overflow: "hidden" }}
              ></textarea>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="content"
                className="block text-md font-medium text-gray-700"
              >
                Main Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                style={{ resize: "none", overflow: "hidden" }}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              ></textarea>
            </div>

            <div className="space-y-3">
              <label
                htmlFor="thumbnail"
                className="block text-md font-medium text-gray-700"
              >
                Thumbnail Image
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
                        htmlFor="thumbnail"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <p>Upload a file </p>
                        <p>Drag & Drop an image here</p>
                        <input
                          id="thumbnail"
                          name="thumbnail"
                          type="file"
                          className="sr-only"
                          onChange={handleThumbnailChange}
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
                      onClick={removeThumbnail}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
                      title="Remove image"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-3 py-1 text-sm truncate">
                    {thumbnail?.name}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">
                Sub-Sections
              </h3>
              {subSections.map((subSection, index) => (
                <div
                  key={`subsection-${index}`}
                  className="relative border border-gray-200 rounded-md p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-grow">
                      <textarea
                        type="text"
                        value={subSection.subTitle}
                        onChange={(e) => {
                          updateSubSections(index, "subTitle", e.target.value);
                          e.target.style.height = "auto";
                          e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        rows={1}
                        placeholder={`Sub-Title ${index + 1}`}
                        className="block w-full rounded-md border-gray-300 shadow-sm p-2"
                        style={{ resize: "none", overflow: "hidden" }}
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteSubSections(index)}
                      className="ml-2 p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                  <textarea
                    value={subSection.subContent}
                    onChange={(e) => {
                      updateSubSections(index, "subContent", e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    rows={3}
                    placeholder={`Sub-Content ${index + 1}`}
                    className="block w-full rounded-md border-gray-300 shadow-sm p-2"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
              ))}
              <button
                type="button"
                onClick={addSubSection}
                className="px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition transform hover:scale-105"
              >
                Add Sub-Section
              </button>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:scale-105"
              >
                Submit Blog
              </button>
            </div>
          </form>
        </Container>
      )}
    </>
  );
};

export default BlogsForm;
