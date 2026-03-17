import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(
      "mongodb+srv://ekroopsinghvasir_db_user:Ekroop_05@cluster0.bzzf6cb.mongodb.net/bankingDB?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("ERROR ❌:", error.message);
    process.exit(1);
  }
};

export default connectDB;