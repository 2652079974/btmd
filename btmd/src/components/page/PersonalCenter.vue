<template>
<div class="personal-center-content">
    
<div class="back iconfont" @click="$router.go(-1)">
    &#xe6ff;
</div>
<div class="content">
        <!-- 头像 -->
    <div class="avater info">
        <span>头像：</span>
        <a><img :src="avatar" alt=""/></a> 
        
    </div>

    <!-- 用户名 -->
    <div class="username info">
        <span>用户名：{{username}}</span>
    </div>
    <!-- 邮箱 -->
    <div class="email info">
        <span>邮箱：{{email}}</span>
    </div>
    <!-- 手机号 -->
    <div class="phone info">
        <span>手机号：{{phone}}</span>
    </div>
    <!-- 昵称 -->
    <div class="nickname info">
        <span>昵称：{{nickname}}</span>
    </div>

    <!-- 性别 -->
    <div class="sex info">
        <span>性别：{{sex}}</span>
    </div>
    <div class="info">
        <button @click.prevent="window=true" class="modifyInfo">修改信息</button>
    </div>
</div>
<Modify class="modify" v-if="window" @closeWindow="window=false" ></Modify>
</div>
</template>

<script>
import axios from "axios"
import Modify from './Login/modifyInfo.vue'

export default {
    data(){
        return{
            avatar:'',
            username:'',
            email:'',
            phone:'',
            nickname:'',
            sex:'',
            window:false
        }
    },components:{
        Modify
    },
    created(){
        let token = window.localStorage.getItem('token')
        async function temp(token,that){
            let {data:{user}} = await axios.get("http://124.93.196.45:10001/prod-api/api/common/user/getInfo",{
                headers:{
                    Authorization:token
                }
            })
            that.avatar = 'http://124.93.196.45:10001'+user.avatar
            that.username = user.userName
            that.email = user.email
            that.phone = user.phonenumber
            that.nickname = user.nickName   
            that.sex = user.sex==0?'男':"女"
        }
        temp(token,this)
    }

}
</script>
<style lang="less" scoped>
@keyframes floatIn{
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
    .personal-center-content{
        top: 0;
        width: 100%;
        height: 40rem;
        .content{
            position: relative;
            z-index: 1;
            padding: 2rem;
            width: 80%;
            margin: 2rem auto;
            border-radius: .5rem;
            background-color: rgba(255, 255, 255, .3);
            box-shadow: 2px 2px 9px rgba(0, 0, 0, .2);
            animation: floatIn 1s ease-in-out;
        }        
        .info{
            padding: 1rem;
            color: white;
            font-weight: 700;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, .2);
        }
        .avater{
            >a{
                cursor: pointer;
                display: inline-block;
                border-radius: 50%;
                overflow: hidden;
                width: 3rem;
                height: 3rem;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .modify{
        position: fixed;
        z-index: 2;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .back{
        position: absolute;
        cursor: pointer;
        top: 0rem;
        left: 0rem;
        width: 3rem;
        height: 2.2rem;
        line-height: 2rem;
        font-size: 1.5rem;
        font-weight: 700;
        color:white;
        border-radius: 1rem 0 1rem 0;
        text-align: center;
        background-color: rgba(0, 0, 0, .1);
        transition: .2s all;
        &:hover{
            background-color: rgba(255, 0, 0, .3);
            color: white;
        }
    }
    .modifyInfo{
        position: absolute;
        cursor: pointer;
        width: 5rem;
        height: 2.2rem;
        line-height: 2rem;
        font-size: 1rem;
        font-weight: 700;
        color:white;
        border-radius: 1rem 0 1rem 0;
        border: none;
        text-align: center;
        background-color: rgba(0, 0, 0, .1);
        transition: .2s all;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
        &:hover{
            background-color: rgba(0, 0, 0, .3);
            color: white;
        }
    }

</style>