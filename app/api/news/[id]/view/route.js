 
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../lib/mongodb';
// import clientPromise from '@/lib/mongodb';  

// The API route handler
export async function GET(req,{ params }) {
  try {
 
    // Extract the ID from the request parameters
    const { id } = params;
  
    const objectId = ObjectId.createFromHexString(id)
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('wespark'); // Replace with your database name

    // Fetch the document by _id
    const pkg = await db.collection('news').findOne({ _id: objectId });

    // If the document is not found, return a 404
    if (!pkg) {
      return new Response(JSON.stringify({ error: 'Package not found' }), {
        status: 404,
      });
    }

    // Return the document if found
    return new Response(JSON.stringify(pkg), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    // Handle any errors
    // console.log(error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}


 