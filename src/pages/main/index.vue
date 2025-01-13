<script setup lang="ts">
import AppearLogo from './AppearLogo.vue'
import SignatureInfo from './SignatureInfo.vue'

</script>

<template>
	<div class="page-main">
		<AppearLogo />
		<SignatureInfo />
	</div>
</template>

<style scoped>
.page-main {
	display: flex;
    justify-content: center;
	min-height:100vh !important;
	margin:0 !important;
}

</style>
