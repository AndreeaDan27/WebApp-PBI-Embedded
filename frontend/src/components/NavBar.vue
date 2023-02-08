<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <router-link class="navbar-brand text-style" to="/">Power BI Embedded Demo</router-link>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                
            <li class="nav-item">
                <router-link class="btn btn-primary" to="/">
                    Home 
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="btn btn-success" to="/report1">
                    Report 1
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="btn btn-success" to="/report2">
                    Report 2
                </router-link>
            </li>

            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    margin-bottom: 20px;   
    
}

.nav-item {
    margin-right: 10px;
}

.text-style {
    color: #b9a742 !important;
    fill: rgba(255, 255, 255, 0) !important;
    font-size: 30px !important;
    font-family: fantasy !important;
}
</style>


