import { NextResponse } from "next/server";
import cloudinary from "../../lib/cloudinary";
 

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const file = formData.get("image"); // Get the uploaded file

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload buffer to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const upload_stream = cloudinary.uploader.upload_stream(
        {
          folder: "news",
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }

          resolve(result);
        }
      );
      upload_stream.end(buffer);
    });

    const photoDoc = {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    };

    return NextResponse.json(photoDoc);
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Upload failed", error },
      { status: 500 }
    );
  }
};
