<template>
    <div class="main_content">
        <div class="main_banner">
            <div class="baner">
                <img src="https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-70571c71a8e25e07df8b03517b015814.jpg" alt="">
            </div>

            <div class="sub_banner">
                <div class="sub_banner_a">
                    <img src="https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-0b351357d59118fb0ac4dd50eb342199.jpg" alt="">
                </div>
                <div class="sub_banner_b">
                    <img src="https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-0af27265d2319e84a06b086d5d2d427a.jpg" alt="">
                </div>
                <div class="sub_banner_c">
                    <img src="https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-796fecd979ee6ea0186248aaa8d9f2be.png" alt="">
                </div>
            </div>
        </div>
        
        <div class="main_update">
            <div class="update">
                <div class="update_border">
                    <h2>BNK48 UPDATE</h2>
                    <div class="list_update">
                        <div class="date">
                            <p>20</p>
                            <p>Mar</p>
                        </div>
                        <div class="detail">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquam!
                        </div>
                        <div class="btn_update">
                            <a href="#" class="btn">OFFICIAL NEWS</a>
                        </div>
                    </div>
                    <div class="list_update">
                        <div class="date">
                            <p>19</p>
                            <p>Mar</p>
                        </div>
                        <div class="detail">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquam!
                        </div>
                        <div class="btn_update">
                            <a href="#" class="btn">OFFICIAL NEWS</a>
                        </div>
                    </div>
                    <div class="list_update">
                        <div class="date">
                            <p>15</p>
                            <p>Mar</p>
                        </div>
                        <div class="detail">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, aliquam!
                        </div>
                        <div class="btn_update">
                            <a href="#" class="btn">OFFICIAL NEWS</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main_slides">
                <Slides :images="images"></Slides>
            </div>
        </div>
        

        <div class="main_video_iframe">
            <VideoIframe :embed="embed"></VideoIframe>
        </div>
    </div>
</template>

<script>
import Slides from '@/components/Slide/Slides'
import VideoIframe from '@/components/VideoIframe/VideoIframe'

export default {
    name: 'Home',
    components: {
        Slides,
        VideoIframe
    },
    data () {
        return {
            images: [
                { 'src': 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-f9d6d8cfbbabde65003a280b1e1b927a.jpg'},
                { 'src': 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-28b229acd33d11f890af7fa4bd99110b.jpg'},
                { 'src': 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-1b6910b9d02e5fb862d95e120284f4a9.jpg'},
                { 'src': 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-cac4266de32092197fffac0dbd63448b.png'},
                { 'src': 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/images/file-28b229acd33d11f890af7fa4bd99110b.jpg'}
            ],
            embed: "https://www.youtube.com/embed/4TKCbe8jyRI?control=0&amp;show_info=0"
        }
    }
}
</script>

<style scoped>
/* BANNER */
    .baner img {
        width: 100%;
        height: auto;
    }

    .sub_banner {
        float: left;
        width: 100%;
        height: auto;
        background-color: #FEE7FF;
        padding-top: 10px;
    }

    .sub_banner_a {
        float: left;
        width: 50%;
        height: auto;
        /* background-color: green; */
    }

    .sub_banner_b {
        float: left;
        width: 50%;
        height: auto;
        /* background-color:orange; */
    }

    .sub_banner_c {
        float: left;
        width: 100%;
        height: auto;
        margin-top: 10px;
        /* background-color: yellow; */
    }

    .sub_banner_a img,
    .sub_banner_b img,
    .sub_banner_c img {
        width: 100%;
        height: auto;
    }
/* --- END BANNER --- */
/* UPDATE */
    .update {
        float: left;
        background-color: #FEE7FF;
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .update_border {
        margin: 5px;
        outline: 5px dashed #e6c1e1;
        box-shadow: 0 0 0 5px #c794c0;
        font-family: Kanit;
        background-color: #fff;
    }

    .update h2 {
        padding-left: 10px;
        background-color: #c993c1;
        display: inline-block;
        margin: 0;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 1em;
    }

    .update h2::after {
        content: "";
        position: absolute;
        width: 20px;
        margin-left: 0;
        border-top: 15px solid #c993c1;
        border-bottom: 15px solid #c993c1;
        border-right: 15px solid transparent;
    }

    .list_update {
        width: 100%;
        height: auto;
        padding: 10px;
        display: grid;
        grid-template-columns: 10% 55% 35%;
        text-align: center;
    }

    .date p:first-child {
        font-size: 2em;
    }

    .date p:last-child {
        font-size: .8em;
    }

    .date {
        padding-right: 5px;
    }

    .detail {
        text-align: center;
        padding-top: 3px;
        color: #884785;
        /* word-break: break-word; */
    }

    .btn_update {
        padding-top: 8px;
    }

    .btn_update .btn{
        padding: 5px;
        background-color: #fff;
        color: #884785;
        text-decoration: none;
        font-size: .75em;
        border: 1px solid #884785;
        text-align: left;
    }

    .btn_update .btn:hover {
        background-color: #884785;
        color: #fff;
    }
/* --- END UPDATE --- */
/* Slides */
    .main_slides {
        max-width: 100%;
        width: 100%;
        height: auto;
        float: left;
    }
/* --- END SLIDES --- */
/* VideoIframe */
    .main_video_iframe {
        float: left;
        width: 100%;
        height: auto;
    }
/* --- END VIDEO IFRAME --- */

/* Media Query */
    @media screen and (min-width: 600px) and (max-width: 767px) {
        .sub_banner {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .sub_banner_a,
        .sub_banner_b,
        .sub_banner_c {
            width: 100%;
            height: auto;
            margin: 0;
        }

        .sub_banner_c {
            grid-area: 1 / 2 / 2 / 3;
        }

        .sub_banner_b {
            grid-column-start: 3;
            grid-column-end:4;
        }
    }

    @media screen and (min-width: 768px) {
        .main_content {
            /* max-width: 95%; */
            width: 750px;
            height: auto;
            margin: 0 auto;
        }
        .main_banner {
            display: grid;
            grid-template-columns: 76% 24%;
            /* padding: 20px 20px 0 20px; */
            margin: 10px 0 0 0;
            background-color: #FEE7FF;
        }

        .baner {
            padding-right: 10px;
        }

        .sub_banner {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            padding: 0;
        }

        .sub_banner_a,
        .sub_banner_b,
        .sub_banner_c {
            width: 100%;
            height: auto;
            /* margin: 0 10px; */
        }

        .sub_banner_a img {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
        }

        .sub_banner_c {
            grid-area: 2 / 1 / 3 / 2;
            margin-top: 0;
        }
    }

    @media screen and (min-width: 992px) {
        .main_content {
            /* max-width: 95%; */
            width: 970px;
            height: auto;
            margin: 0 auto;
        }

        .main_update {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-column-gap: .5em;
        }

        .main_slides {
            padding-top: 20px;
            width: 98%;
            height: auto;
        }

        .update_border {
            min-height: 310px;
        }
    }
</style>


