import { MongoClient } from 'mongodb';

// Checking whether we have a cached client and db. 
// If we have, we are returning them. Once we connect 
// to the remote server for the first time, we will cache 
// the client and db; hence we won’t have to repeat the 
// process severally, saving on the response time.

// Setting MongoDB connection options.
// Connecting to the cluster using the connection 
// string and the set options.

// Selecting the database based on the name.
// Caching the client and db.
// Returning the client and db.



const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}