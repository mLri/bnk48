<template>
    <div class="members">
        <div class="member__titile">
            <h1>Members</h1>
        </div>

        <div class="member__action">
            <div class="member__search">
                <input class="filter__name" type="text" name="member_search">
            </div>
        </div>
        
        <div  class="member__list">
            <div v-for="(member, index) in members" :key="index" class="member__img">
                <router-link :to="`/member/${member._id}`">
                <img class="img" :src="`http://localhost:3100/api/member/img/${member.avatar.name}`">
                <div class="member__detail">
                    <div class="member__detail__title">
                        {{ member.nickName }}
                    </div>
                </div>
                </router-link>
            </div>
        </div>
                    

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: '',
    data () {
        return {
            members: {}
        }
    },
    created(){
        this.fetchMemberAll()
    },
    methods: {
        fetchMemberAll() {
            console.log('fetchMemberall ...')
            
            const _this = this

            axios.get('http://localhost:3100/api/member/')
                .then(function (response) {
                    console.log(response);
                    _this.members = response.data.data
                    console.log('_this.members => ', _this.members)
                })
                .catch(function (error) {
                    console.log('[fetchMemberAll] error ::: => ', error);
                });
        }
    }
}
</script>

<style scoped>
    .members {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
    }

    .member__titile {
        font-weight: 200;
        font-size: 40px;
        color: #c58ec3;
    }

    .member__action {
        position: relative;
        border-radius: 3px;
        background-clip: padding-box;
        padding: 5px 10px;
        margin: 0 0 10px;
        border: 1px solid #ccc;
        background: #fff;
    }

    .member__action input {
        width: 100%;
        padding: 3px 0;
        border: none;
        color: #333;
    }

    /* .filter__name {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4N…9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
        background-repeat: no-repeat;
        background-position: 99% 2px;
    } */

    .member__img {
        min-height: 235px;
        position: relative;
        margin-bottom: 2em;
        cursor: pointer;
    }

    .img {
        width: 100%;
    }

    .member__detail {
        width: 100%;
        padding: 5px 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(1turn,#b874b6,rgba(184,116,182,.33));
        font-size: 13px;
        color: #fff;
        text-transform: uppercase;
    }

    .member__detail__title {
        font-size: 26px;
        line-height: 1.5em;
    }

    /* Media Query */
    @media screen and (min-width: 768px) {
        .member__list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2px;
            margin-bottom: 20px;
        }

        .member__img {
            margin: 0;
        }
    }

    @media screen and (min-width: 992px) {
        .member__list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 2px;
            margin-bottom: 20px;
        }

        .member__img {
            margin: 0;
        }
    }
</style>