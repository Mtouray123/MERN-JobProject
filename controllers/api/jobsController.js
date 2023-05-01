const Job = require('../../models/Jobs');

async function index(req, res) {
    try {
        let query = {};

        // Check if there is a search query in the request parameters
        if (req.query.search) {
            // Use a regular expression to perform a case-insensitive search on the title and description fields
            const regex = new RegExp(req.query.search, 'i');
            query = {
                $or: [
                    { title: regex },
                    { description: regex }
                ]
            };
        }

        const jobs = await Job.find(query);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function create(req, res) {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
}

async function show(req, res) {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) throw new Error('Job not found');
        res.status(200).json(job);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

async function update(req, res) {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!job) throw new Error('Job not found');
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function destroy(req, res) {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) throw new Error('Job not found');
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Export a middleware function that can be used by app.use()
module.exports = (req, res, next) => {
    switch (req.method) {
        case 'GET':
            if (req.params.id) {
                show(req, res, next);
            } else {
                index(req, res, next);
            }
            break;
        case 'POST':
            create(req, res, next);
            break;
        case 'PUT':
            update(req, res, next);
            break;
        case 'DELETE':
            destroy(req, res, next);
            break;
        default:
            res.status(400).json({ error: 'Invalid request method' });
            break;
    }
};