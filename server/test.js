const { MongoClient } = require('mongodb');

async function checkMongoDBConnection() {
    const uri = 'mongodb+srv://kumarvinay86618:Qwzx12,.@cluster0.t4qkgz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Attempt to connect to the MongoDB server
        await client.connect();
        
        // Perform a simple operation to ensure the connection is active
        await client.db('admin').command({ ping: 1 });
        
        console.log("MongoDB connected successfully!");

        // Insert data into a specific collection in your database
        const db = client.db('myDatabase'); // Replace with your database name
        const collection = db.collection('myCollection'); // Replace with your collection name

        // The data to insert
        const document = { 
            name: 'John Doe',
            age: 29,
            city: 'New York'
        };

        // Insert the document into the collection
        const result = await collection.insertOne(document);

        console.log('Document inserted with ID:', result.insertedId);

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

// Call the function to check connection and insert data
checkMongoDBConnection();
