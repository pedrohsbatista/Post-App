import Axios from "axios";

class PostApi {
    static baseUrl = "http://localhost:8888";

    static getAll(){
        return Axios.get(`${this.baseUrl}/posts`);
    }

    static getById(id) {
        return Axios.get(`${this.baseUrl}/post/${id}`);
    }

    static post(post){
        return Axios.post(`${this.baseUrl}/post`, post);
    }

    static setReaction(id, tipo){
        return Axios.put(`${this.baseUrl}/post/setReaction`, {id: id, tipo: tipo});
    }

    static addComment(id, comentario){
        return Axios.post(`${this.baseUrl}/post/addComment`, {id: id, comentario: comentario});
    }
}

export default PostApi;