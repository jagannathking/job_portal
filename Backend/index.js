import app from './app.js'
import dotenv from 'dotenv'
import connectDB from "./utils/db.js";

dotenv.config();

export default app
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
