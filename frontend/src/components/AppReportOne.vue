<template>
    <div class="create">
        <h1>This is our Report 1</h1>
        <!--<pre> {{ response }}</pre>-->
        <div class="response-box" v-html="response"></div>

        <div class="report-box">
            <iframe title="PBI_Assessment_RESULTS" width="1140" height="541.25" src="https://msit.powerbi.com/reportEmbed?reportId=c72f2cbe-8e2d-4768-a806-3bce7e373157&autoAuth=true&ctid=72f988bf-86f1-41af-91ab-2d7cd011db47" frameborder="0" allowFullScreen="true"></iframe>
        </div>

    </div>
</template>

<script>

const baseURL = "http://localhost:5000";

export default {

    // store the response from the API in this.response (this is temporary until the getApi() function is working)
    data() {
        return {
            response: 'Loading...'
        };
    },

    methods: {
        getReport1(){

            console.log("enter getReport1()")

            fetch(`${baseURL}/report1`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message)
                }
            })
            .then(data => {
                console.log(data)
                // send data to formatResponse() to format as HTML and store in this.response
                // this.response is then displayed in the browser via the v-html directive
                this.response = this.formatResponse(data);
            }) 
            .catch(err => {
                console.log(err)
            })                                                                                                                                                                                                                             
        }, 
        // format data as HTML for display in the browser 
        formatResponse(data) {
            // format data as HTML
            let html = `<ul>`;
            for (const key in data) {
                // add each key/value pair to the HTML string
                html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
            }
            html += `</ul>`;
            return html;
        }
    },
    // call getApi() when the component is created
    created(){
        this.getReport1()
    }

}



</script>

<style>

.response-box {
  padding: 20px;
  background-color: rgba(255, 255, 0, 0.205);
  border-radius: 5px;
}

.resport-box {
  padding: 20px;
  background-color: rgba(179, 255, 0, 0.205);
  border-radius: 5px;
}

</style>