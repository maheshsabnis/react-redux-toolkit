import axios from "axios";

export class CategoryService {
    constructor(){
        this.url = 'https://catprdapi.azurewebsites.net/api/Category';
    }

    async getCategories(){
        let response = await axios.get(this.url);
        return response;
    }
    async getCategory(id){
        let response = await axios.get(`${this.url}/${id}`);
        return response;    
    }
    async postCategory(category){
        console.log(`in service ${JSON.stringify(category)}`)
        let response = await axios.post(this.url, category, {
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        return response; 
    }

    async putCategory(id,category){
        let response = await axios.put(`${this.url}/${id}`, category, {
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        return response; 
    }

    async deleteCategory(id){
        let response = await axios.delete(`${this.url}/${id}`);
        return response; 
    }
}