import axios from "axios";

export class ApiUrls{

    private query='http://localhost:8000/api/query';
    private event="http://localhost:8000/api/events";
    private usersinfo = "http://localhost:8000/api/infoRegister"

    fetchQuery(){
        return axios.get(this.query);
    }
    postQuery(FormData){
        return axios.post(this.query ,FormData);
    }
    getevents(){
        return axios.get(this.query);
    }
}
