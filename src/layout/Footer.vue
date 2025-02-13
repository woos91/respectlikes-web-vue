<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="copyright">
            Copyright 취향존중. All Rights Reserved.
        </div>
    </footer>
</template>

<style>
footer {
    position :fixed;
    bottom:0;
    right:0;
    font-size: 0;
}
div#app div.app-wrap .main-wrap::after {
	content: "Copyright 취향존중. All Rights Reserved.";
    display: block;
    position: relative;
    right: 1.6rem;
    bottom: 1rem;
    opacity: 0.7;
    text-align: center;
    font-size: 0.8rem;
    padding-top: 1.6rem;
}
div#app div.app-wrap[data-page="main"] .main-wrap::after {
	content : "";
}
</style>

