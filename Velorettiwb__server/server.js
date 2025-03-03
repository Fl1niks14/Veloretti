import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

// Подключение к MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Подключено к MongoDB'))
  .catch(err => console.error('❌ Ошибка подключения к MongoDB:', err));

// Схема для формы
const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    company: String,
    companySize: String,
    bikes: Number,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(cors());
app.use(express.json());

// 📌 **Сохранение формы и возврат `id`**
app.post('/submit', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json({ message: '✅ Форма успешно сохранена!', id: newContact._id }); // 🔥 Возвращаем `id`
    } catch (error) {
        console.error('❌ Ошибка сохранения:', error);
        res.status(500).json({ message: '❌ Ошибка сервера' });
    }
});

// 📌 **Получение данных по `id`**
app.get('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Данные не найдены' });
        }
        res.json(contact);
    } catch (error) {
        console.error('❌ Ошибка получения данных:', error);
        res.status(500).json({ message: '❌ Ошибка сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});