"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import { LiaSpinnerSolid } from "react-icons/lia";
import {
  convertToRaw,
  Editor,
  EditorState,
  RawDraftContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import clsx from "clsx";

interface CustomComponentProps {
  closeAdd: () => void;
}
type photoDoc = {
  url: string;
  publicId: string;
};
type FormErrors = {
  title?: boolean;
  content?: boolean;
  image?: boolean;
};
const AddNews: React.FC<CustomComponentProps> = ({ closeAdd }) => {
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState<RawDraftContentState | undefined>(
    undefined
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [preview, setPreview] = useState<string>("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [plainText, setPlainText] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loader/spinner
  }
  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);

    const currentContent = state.getCurrentContent();
    const text = currentContent.getPlainText();
    setPlainText(text);

    const rowContent = convertToRaw(currentContent);
    setContent(rowContent);
  };
 

  const triggerFileInput = () => {
    document.getElementById("packageImages")?.click();
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!title) newErrors.title = true;
    if (!content) newErrors.content = true;
    if (!selectedFile) newErrors.image = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      const fileSizeInKB = file.size / 1024;
      if (fileSizeInKB > 500) {
        alert("File size exceeds 500KB. Please upload a smaller file.");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        if (readerEvent.target?.result) {
          setPreview(readerEvent.target.result as string);
        }
      };
      setSelectedFile(file);
    }
  };

  const handleUploadImage = async () => {
    if (validate()) {
      setSaving(true);
      const formData = new FormData();
      if (selectedFile) formData.append("image", selectedFile);

      try {
        const response = await fetch("/api/photo", {
          method: "POST",

          body: formData,
        });

        const photoDoc = await response.json();
        console.log(photoDoc);

        if (response.status == 200) {
          uploadNews(photoDoc);
        } else {
          alert("Upload failed");
        }
      } catch (error) {
        console.log("Error uploading image:", error);
        // alert("Something went wrong!");
      }
    }
  };

 

  const handleUpload = async (e: { preventDefault: () => void; } ) => {
    e.preventDefault();

    handleUploadImage();
  };

  const uploadNews = async (photoDoc: photoDoc) => {
    const response = await fetch(`/api/news/upload`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
        image: photoDoc,
        date: new Date(),
      }),
    });

    const data = await response.json();
    console.log(data);

    setSaving(false);
    closeAdd();
    setTitle("");
    setContent(undefined);
    setSelectedFile(null);
    router.refresh();
  };

  return (
    <div className="w-11/12  lg:w-8/12 m-auto    outline-none ">
      <div className="bg-white p-6 shadow relative  rounded-lg">
        <IoIosCloseCircleOutline
          onClick={closeAdd}
          className="text-red-500 text-2xl cursor-pointer absolute right-4 top-4"
        />
        <h5 className="text-lg font-semibold">Add News</h5>
        <div className="p-6.5 mt-8">
          <form onSubmit={handleUpload}>
            <div className="grid gap-3">
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={clsx(
                    "w-full placeholder:text-gray-500 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-blue-400 disabled:cursor-default disabled:bg-whiter ",
                    {
                      "border-red-500": errors.title && !title,
                    }
                  )}
                />
              </div>

              <div className="grid gap-3">
                <div
                  className={clsx(
                    "w-full min-h-40 placeholder:text-gray-500 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-blue-400 disabled:cursor-default disabled:bg-whiter ",
                    {
                      "border-red-500": errors.content && !plainText,
                    }
                  )}
                >
                  <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    placeholder="Write something here..."
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-3">
                  {preview && (
                    <div>
                      <Image
                        src={preview}
                        alt="Uploaded"
                        width={180}
                        height={60}
                        className="rounded"
                      />
                      <MdDeleteOutline
                        onClick={() => {
                          setPreview("");
                          setSelectedFile(null);
                        }}
                        className="text-red-600 m-auto mt-2 text-lg cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                {!selectedFile && (
                  <button
                    className={clsx(
                      "flex  mt-4 justify-center items-center gap-4 border text-gray-500 border-blue-500 w-full   rounded p-2 ",
                      {
                        "border-red-500": errors.image && !selectedFile,
                      }
                    )}
                    type="button"
                    onClick={triggerFileInput}
                  >
                    Add Image <FaPlus />
                  </button>
                )}

                {/* Hidden file input */}
                <input
                  type="file"
                  id="packageImages"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) =>
                    handleFileChange(e.target.files ? e.target.files[0] : null)
                  }
                />

                {/* Display the uploaded image */}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded flex justify-center gap-3"
              >
                {saving ? (
                  <>
                    Saving
                    <LiaSpinnerSolid className="text-2xl text-white animate-spin " />
                  </>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
