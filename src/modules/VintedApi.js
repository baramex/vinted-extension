import axios from "axios";

export default class VintedApi {
    static request(endpoint, method, data, headers = {}) {
        axios({
            method,
            url: "/api" + endpoint,
            data,
            headers: {
                ...headers,
                "x-csrf-token": document.head.querySelector("meta[name='csrf-token']").getAttribute("content")
            },
            withCredentials: true
        });
    }

    /**
     * 
     * @param {{assigned_photos:Array,brand:string,brand_id:number,color_ids:Array,currency:string,description:string,is_for_sell:boolean,is_unisex:boolean,isbn:boolean,material_id:number,measurement_length:number,measurement_width:number,package_size_id:number,price:number,shipment_prices:Object,size_id:number,status_id:number,title:string,video_game_rating_id:number}} data 
     * @returns 
     */
    static createDraft(data) {
        return VintedApi.request("/v2/items/drafts", "POST", { draft: data });
    }
}