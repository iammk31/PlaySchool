// controller/newsController.js
import News from '../models/NewsAdminModel.js';

// Get all news
export const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ message: 'Error fetching news', error: error.message });
    }
};

// Create a new news item
export const createNews = async (req, res) => {
    const { information, timing, imageUrl } = req.body;
    try {
        const newNews = new News({ information, timing, imageUrl });
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: 'Error adding news', error: error.message });
    }
};


// Delete a news item
export const deleteNews = async (req, res) => {
    try {
        const result = await News.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            res.json({ message: 'News deleted' });
        } else {
            res.status(404).json({ message: 'News not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news' });
    }
};

