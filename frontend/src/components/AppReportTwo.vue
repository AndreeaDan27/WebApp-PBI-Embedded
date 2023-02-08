<template>
    <div class="create">
        <h1>This is our Report 2</h1>
        <!--<pre> {{ response }}</pre>-->
        <div class="response-box" v-html="response"></div>
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
        getReport2(){

            console.log("enter getReport2()")

            fetch(`${baseURL}/report2`, {
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
        this.getReport2()
    }

}
</script>

<style>


</style>