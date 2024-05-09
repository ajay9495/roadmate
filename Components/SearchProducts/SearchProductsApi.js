
export default function SearchProductsApi(){


    let request;
    let REQUEST_OPTIONS;
    let END_POINT;
    let BASE_URL = "http://167.71.224.41/api/";

    function getPrdouctData(query){


        END_POINT = BASE_URL+'searchProduct?query='+query;

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());


    }

    function getAllPrdouctData(query){


        END_POINT = BASE_URL+'getAllProducts';

        REQUEST_OPTIONS = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        request = new Request(END_POINT,REQUEST_OPTIONS);

        return fetch(request)
        .then((response) => response.json());


    }

    function processApiError(err){

        alert("There was an error in the server");
    }

    return{
        getAllPrdouctData,
        getPrdouctData,
        processApiError
    }


}











