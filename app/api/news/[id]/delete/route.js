import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";
import cloudinary from "../../../../lib/cloudinary";

export async function DELETE(req, { params }) {
  try {

    if (!params || !params.id) {
      return new Response(
        JSON.stringify({ error: "ID parameter is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const { id } = params;

    const objectId = ObjectId.createFromHexString(id);

    const client = await clientPromise;
    const db = client.db("wespark");

    const news = await db.collection('news').findOne({_id:objectId})
    if (!news) {
      return new Response(
        JSON.stringify({ error: "News not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

  
    const imageId = news.image.publicId
    if (imageId) {
      await cloudinary.uploader.destroy(imageId);
      console.log("Image deleted from Cloudinary:", imageId);
    }
    // delete image from cloudinary
    if (imageId){
        await cloudinary.uploader.destroy(imageId, (error,result)=>{
            if (error) {
                console.error("Failed to delete image:", imageId, error);
              } else {
                console.log("Image deleted:", imageId, result);
              }
        })
    }

    const delResult = await db
      .collection("news")
      .deleteOne({ _id: objectId });

    if (delResult.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Package not found or could not be deleted" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Message deleted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}