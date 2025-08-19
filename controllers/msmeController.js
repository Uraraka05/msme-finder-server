// server/controllers/msmeController.js

import { createClient } from '@supabase/supabase-js';

// Connect to your Supabase database
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to get all MSMEs or filter them by category
export const getMsmes = async (req, res) => {
    try {
        let query = supabase.from('msmes').select('*');

        // Check if there is a 'category' query parameter in the URL
        if (req.query.category) {
            query = query.eq('category', req.query.category);
        }
        
        // Check if there is a 'name' query parameter for searching
        if (req.query.name) {
            // Use 'ilike' for case-insensitive search
            query = query.ilike('name', `%${req.query.name}%`);
        }

        const { data, error } = await query;

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};