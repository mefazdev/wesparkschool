import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!uri) {
    throw new Error('Please add your Mongo URI to .env.local or Vercel Environment Variables.');
}

try {
    if (process.env.NODE_ENV === 'development') {
        // Reuse the connection in development to avoid hot-reload issues
        if (!global._mongoClientPromise) {
            client = new MongoClient(uri);
            global._mongoClientPromise = client.connect();
        }
        clientPromise = global._mongoClientPromise;
    } else {
        // Fresh connection for production
        client = new MongoClient(uri);
        clientPromise = client.connect();
    }
} catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw new Error('Failed to connect to MongoDB');
}

export default clientPromise;
