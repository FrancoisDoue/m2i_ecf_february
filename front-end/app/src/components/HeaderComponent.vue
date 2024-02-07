<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
<header id="header-nav">
    <div>
        <div></div>
        <nav>
            <ul>
                <li><RouterLink class="link" to="/connexion">Connexion</RouterLink></li>
                <li><RouterLink class="link" to="/inscription">Inscription</RouterLink></li>
            </ul>
        </nav>
    </div>

</header>
</template>

<style scoped>

#header-nav {
    @apply border-gray-200 bg-gray-50;

}
#header-nav > div{
    @apply flex flex-wrap items-center justify-between mx-auto p-4;
}
nav{
    @apply w-1/5 flex justify-end mx-10;
}
ul{
    @apply w-full flex justify-around;
}
li{
    @apply m-auto
}


</style>