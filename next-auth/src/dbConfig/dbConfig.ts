import mongoose from "mongoose";
export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("open", () => {
      console.log("Database connected");
    });
    connection.on("error", (error) => {
      console.log("Error connecting to database", error);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
