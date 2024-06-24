import mongoose from 'mongoose';
import Content from '../lib/models/contentSchema';
import data from '../data/data.json';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://amirat9:y88QXybPczlzpmFT@entertainment-web-app-c.ww9lxx9.mongodb.net/?retryWrites=true&w=majority&appName=entertainment-web-app-cluster';

const resetIsBookmarked = (data: any[]) => {
  return data.map((item) => ({
    ...item,
    isBookmarked: false,
  }));
};

const populateDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    const modifiedData = resetIsBookmarked(data);

    await Content.deleteMany({});
    console.log('Cleared existing data');

    await Content.insertMany(modifiedData);
    console.log('Inserted modified data');

    mongoose.connection.close();
    console.log('Discounnected from MongoDB');
  } catch (error) {
    console.log('Error populating database: ', error);
    process.exit(1);
  }
};

populateDatabase();
