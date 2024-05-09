
export default function AddProductsApi(){


    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = "http://167.71.224.41/api/";

    function sendLoginData(payload){


        END_POINT = BASE_URL+'addProduct';

        REQUEST_OPTIONS = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(payload)
        };
 
        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());


    }

    function processApiError(err){

        alert("There was an error in the server");
    }

    return{
        sendLoginData,
        processApiError
    }


}











