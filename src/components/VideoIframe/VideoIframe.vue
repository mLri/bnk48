<template>
    <div>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe 
                src="https://www.youtube.com/embed/4TKCbe8jyRI?control=0&amp;show_info=0" 
                allowfullscreen="allowfullscreen" 
                class="embed-responsive-item">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoIframe',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .embed-responsive {
        display: block;
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        margin: 20px 0 20px 0;
    }

    .embed-responsive .embed-responsive-item {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        /* bottom: 0; */
        /* left: 0; */
        /* border: 0; */
    }
</style>