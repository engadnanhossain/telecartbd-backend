import axios from 'axios';
import { load } from 'cheerio';

interface ResultParams {
    exam: string;
    year: string;
    roll: string;
    reg: string;
}

const toCamelCase = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};


const getAllResultService = async (params: ResultParams) => {
    const { exam, year, roll, reg } = params;

    const url = `http://180.211.162.102:8444/result_arch/result.php?exam=${exam}&year=${year}&roll=${roll}&reg=${reg}&Submit=+View+Result`;

    try {
        const { data } = await axios.get(url); // Fetch HTML data
        const $ = load(data); // Load HTML into Cheerio

        const result: Record<string, string> = {};
        $('table tr').each((_index, row) => {
            const cells = $(row).find('td');
            if (cells.length === 2) {
                const key = toCamelCase($(cells[0]).text().trim()); // Convert to camelCase
                const value = $(cells[1]).text().trim();
                result[key] = value;
            }
        });

        return result;
    } catch (error) {
        console.error('Error scraping the result:', error);
        throw new Error('Failed to fetch the result from the server');
    }
};



export const resultService = {
    getAllResultService,
}