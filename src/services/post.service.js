import apiService from "../api/apiService";

class PostService {
	getAllPosts = () => apiService().get("posts");
    getBatchPosts = (start, limit) => apiService().get(`posts?_start=${start}&_limit=${limit}`);
    getPostById = (id) => apiService().get(`posts/${id}`);
    getPostsByUserId = (id) => apiService().get(`posts?userId=${id}`)
    createPost = (payload) => apiService().post(`posts`, payload)
    editPost = (payload) => apiService().put(`posts/${payload.id}`, payload)
    deletePost = (id) => apiService().delete(`posts/${id}`)
}

export default new PostService();