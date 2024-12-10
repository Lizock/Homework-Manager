const express = require("express"); 
const PORT = 3000;
const mariadb = require('mariadb');
const app = express();

const pool = mariadb.createPool({
    host: 'localhost',
    user:'root',
    password:'123',
    database: 'homeworkData'
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.log('Error connecting to the database: ' + err);
    }
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	// Log message to the server's console
	console.log("Hello, world - server!");

    // Display the form page
    res.render('home');
});

app.get('/enterClasses',(req, res) => {
    res.render('enterClasses');
});

app.get('/addHomework',(req, res) => {
    res.render('addHomework', {classData});
});

app.get('/homeworkList', async (req, res) => {
    const conn = await connect();
    const results = await conn.query (`SELECT * FROM homeworkData ORDER BY dueDate`);
    const homeworkData = Array.from(results);
    res.render('homeworkList', { homeworkData : results});
});

app.post('/homeworkList', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const conn = await connect();

        const priority = data.priority === '1' ? 1 : 0;
        const sql = `
            INSERT INTO homeworkData (class, homework, link, dueDate, priority)
            VALUES (?, ?, ?, ?, ?)`;
        const values = [
            data.class_pick,
            data.homework,
            data.link,
            data.dueDate,
            priority
        ];

        await conn.query(sql, values);

        conn.release();
        res.redirect('/homeworkList');
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data.');
    }
});


const classData = [];
app.post('/enterClasses', (req, res) => {
    const {classOne, classTwo, classThree} = req.body;

    classData.length = 0;
    if(classOne) classData.push(classOne);
    if (classTwo) classData.push(classTwo);
    if (classThree) classData.push(classThree);

    res.redirect('/addHomework');
});

// Delete Checked Homework
app.post('/deleteHomework', async (req, res) => {
    const selectedIds = req.body.doneHomeworkIds;
    const idsToDelete = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
    
    const conn = await connect();
    await conn.query('DELETE FROM homeworkData WHERE id IN (?)', [idsToDelete]);
    conn.release();

    res.redirect('/homeworkList'); 
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
    });
