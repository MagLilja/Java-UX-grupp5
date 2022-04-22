const smhiService = {

    async fetchData(URL = "https://opendata-download-metobs.smhi.se/api/version/1.0.json") {
        let response = await fetch(URL);
        if (response.status === 200) {
            console.log("response OK");
            console.log(response);
            return response.json();
        }
        return response.status
    },
}
Object.freeze(smhiService)
export default smhiService
