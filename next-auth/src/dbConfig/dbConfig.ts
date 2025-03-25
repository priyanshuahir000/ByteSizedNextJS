import mongoose from "mongoose";

export async function connect() {
  try {
    // Check if we already have a connection to the database
    if (mongoose.connection.readyState === 1) {
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
}
