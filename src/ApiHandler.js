import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080";

class ApiHandler {

    fetchPosts(){
        return axios.get(USER_API_BASE_URL+"/posts");
    }

    fetchPost(id){
        return axios.get(USER_API_BASE_URL + "/posts?id=" + id);
    }

    fetchMember(memberId) {
        return axios.get(USER_API_BASE_URL + "/members?id=" + memberId);
    }
}

export default new ApiHandler();
