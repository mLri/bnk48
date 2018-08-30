<template>
    <div class="member">

        <div class="a">a</div>
        <div class="main">
            <div class="member__img">
                <img v-if="member" :src="`http://localhost:3100/api/member/img/${member.avatar.name}`" alt="">
            </div>
            <div class="member__detail">
                <div class="member__detail__nickname">
                    {{ member.nickName }}
                </div>
                <div class="member__detail__name__th">
                    {{ member.firstName.th }} {{ member.lastName.th }}
                </div>
                <div class="member__detail__name__en">
                    {{ member.firstName.en }} {{ member.lastName.en }}
                </div>
                <div class="member__detail__grid">
                    <div class="member__detail__left">
                        <div class="birth__left">Date of birth :</div>
                        <div class="height__left">Height :</div>
                        <div class="province__left">Province :</div>
                        <div class="like__left">Like :</div>
                        <div class="blood__left">Blood Group :</div>
                        <div class="hobby__left">Hobby :</div>
                    </div>
                    <div class="member__detail__right">
                        <div class="birth__right">
                            {{ member.birth }}
                        </div>
                        <div class="height__right">
                            {{ member.height }}
                        </div>
                        <div class="province__right">
                            {{ member.province }}
                        </div>
                        <div class="like_right">
                            {{ member.like }}
                        </div>
                        <div class="blood__right">
                            {{ member.blood }}
                        </div>
                        <div class="hobby__right">
                            {{ member.hobby }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <!-- <div class="member__img">
            <img v-if="member" :src="`http://localhost:3100/api/member/img/${member.avatar.name}`" alt="">
        </div>
        <div class="member__detail">
            <div class="member__detail__nickname">
                {{ member.nickName }}
            </div>
            <div class="member__detail__name__th">
                {{ member.firstName.th }} {{ member.lastName.th }}
            </div>
            <div class="member__detail__name__en">
                {{ member.firstName.en }} {{ member.lastName.en }}
            </div>
            <div class="member__detail__grid">
                <div class="member__detail__left">
                    <div class="birth__left">Date of birth :</div>
                    <div class="height__left">Height :</div>
                    <div class="province__left">Province :</div>
                    <div class="like__left">Like :</div>
                    <div class="blood__left">Blood Group :</div>
                    <div class="hobby__left">Hobby :</div>
                </div>
                <div class="member__detail__right">
                    <div class="birth__right">
                        {{ member.birth }}
                    </div>
                    <div class="height__right">
                        {{ member.height }}
                    </div>
                    <div class="province__right">
                        {{ member.province }}
                    </div>
                    <div class="like_right">
                        {{ member.like }}
                    </div>
                    <div class="blood__right">
                        {{ member.blood }}
                    </div>
                    <div class="hobby__right">
                        {{ member.hobby }}
                    </div>
                </div>
            </div>

        </div> -->
                
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: '',
    data () {
        return {
            member: {
                firstName: {
                    th: "",
                    en: ""
                },
                lastName: {
                    th: "",
                    en: ""
                },
                birth: "",
                height: "",
                province: "",
                like: "",
                hobby:"",
                avatar: {
                    name: "",
                    path: "",
                    size: "",
                    type: ""
                },
                gen: "",
                blood: "",
                nickName: ""
            }
        }
    },
    created(){
        this.fetchMember()
    },
    methods: {
        fetchMember() {
            console.log('fetchMemberall ...')
            
            const _this = this
            const _id = this.$route.params.id
            console.log(_id)

            axios.get('http://localhost:3100/api/member/' + _id)
                .then(function (response) {
                    console.log(response);
                    _this.member = response.data.data
                    console.log('_this.members => ', _this.member)
                })
                .catch(function (error) {
                    console.log('[fetchMemberAll] error ::: => ', error);
                });
        }
    }
}
</script>

<style scoped>
    .member__img {
        width: 100%;
        margin: 0 auto;
    }

    .member__detail {
        text-align: center;
    }

    .member__detail__name__th,
    .member__detail__name__en {
        font-size: 24px;
        color: #884785;
        font-weight: 300;
    }

    .member__detail__nickname {
        text-transform: uppercase;
        font-size: 3.23529em;
        font-weight: 200;
        color: #c58ec3;
        line-height: 1em;
    }

    .member__img img {
        width: 100%;
    }

    .member__detail__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .member__detail__left {
        padding-left: 50%;
        color: #c58ec3;
    }

    .member__detail__right {
        color: #884785;
    }

    .member__detail__left,
    .member__detail__right {
        text-align: left;
    }

    .a {
        color: #FEE7FF;
    }

    /* Media Query */
    @media screen and (min-width: 768px) {
        .a {
            color: #FEE7FF;
        }
        .main {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    /* @media screen and (min-width: 992px) {
        
    } */
</style>