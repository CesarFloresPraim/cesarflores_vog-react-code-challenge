import apiServicePosts from "../api/apiServicePosts";

class PostService {
	getAllPosts = () => apiServicePosts().get("posts");
    getBatchPosts = (start, limit) => apiServicePosts().get(`posts?_start=${start}&_limit=${limit}`);
    getPostById = (id) => apiServicePosts().get(`posts/${id}`);
    getPostsByUserId = (id) => apiServicePosts().get(`posts?userId=${id}`)
    createPost = (payload) => apiServicePosts().post(`posts`, payload)
    editPost = (payload) => apiServicePosts().put(`posts/${payload.id}`, payload)
    deletePost = (id) => apiServicePosts().delete(`posts/${id}`)
}

export default new PostService();