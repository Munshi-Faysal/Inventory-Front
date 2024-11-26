import { baseUrl } from "./config";

function createUrl(subUrl:any){
    return baseUrl + subUrl;
}
export {createUrl}