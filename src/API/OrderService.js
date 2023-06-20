import axios from "axios";
import data from '../data/data.json';

export default class OrderService {
    static async getAll() {
        const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
            .catch(error => {
                if (error.response.data.error.includes("Free accounts are limited")) {
                    return Promise.resolve({data: data})
                }
                return Promise.reject(error)
            })
        return response.data
    }
}
