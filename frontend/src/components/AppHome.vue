<template>
    <div class="home">
        <h1>This is our Home</h1>
    </div>

    <p>
        Choose from the buttons at the top of the page to view the reports.
    </p>

</template>

<script>
const baseURL = "http://127.0.0.1:5000";

export default {
    methods: {
        getHome(){

            console.log("enter getHome()")

            fetch(`${baseURL}/`, {
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
            }) 
            .catch(err => {
                console.log(err)
            })                                                                                                                                                                                                                             
        }
    },
    created(){
        this.getHome()
    }

}
</script>

<style>

</style>