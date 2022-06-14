<template>
    <div class="modify-info-content" ref="window">
        <form action="" ref="form">
            <div class="close" @click="closeWindow()">×</div>
            <input type="text" name="userName" v-model="userName" placeholder="用户名">
            <input type="text" name="email" v-model="email" placeholder="邮箱">
            <input type="text" name="phone" v-model="phonenumber" placeholder="手机号">
            <input type="text" name="nickName" v-model="nickName" placeholder="昵称">
            <input type="text" name="sex" v-model="sex" placeholder="性别">
            <button @click.prevent="modifyInfo()">确认修改</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userName: "",
            email: "",
            phonenumber: "",
            nickName: "",
            sex: ""
        }
    },
    created() {
        let token = window.localStorage.getItem('token')
        this.requestInfo(token, this)
    },
    updated() {
    },
    methods: {
        async requestInfo(token, that) {
            let { data: { user } } = await axios.get("http://124.93.196.45:10001/prod-api/api/common/user/getInfo", {
                headers: {
                    Authorization: token
                }
            })
            that.avater = user.avatar
            that.userName = user.userName
            that.email = user.email
            that.phonenumber = user.phonenumber
            that.nickName = user.nickName
            that.sex = user.sex == 0 ? "男" : "女"
        },
        modifyInfo() {
            

            axios({
                method: 'put',
                url: 'http://124.93.196.45:10001/prod-api/api/common/user',
                data:{
                    "avatar": this.avatar,
                    "userName": this.userName,
                    "email": this.email,
                    "phonenumber": this.phonenumber,
                    "nickName": this.nickName,
                },
                headers: {
                    Authorization: window.localStorage.getItem('token'),
                    // 设置请求数据类型
                    "Content-Type": "application/json"
                }
            }).then(res => {
               let  {data} = res
               console.log(data)
               if(data.code==200){
                   alert('修改成功')
               }else{
                   alert(data.msg)
                   this.requestInfo(window.localStorage.getItem('token'),this)
               }
            })


        },
        closeWindow(){
            let value = 1
            // form逐渐变小动画
            let timer1 = setInterval(() => {
                this.$refs.form.style.transform = "scale("+value+")"
                this.$refs.window.style.backgroundColor = "rgba(0,0,0,"+0.4*value+")"
                value -= 0.03
                if(value<0){
                    value = 0
                    this.$emit('closeWindow')
                    clearInterval(timer1)
                }
            }, 10)

            
            // setTimeout(() => {
            //     this.$emit('closeWindow')
            // }, 3000);
        }
    }

}
</script>

<style lang="less" scoped>
@keyframes fillout {
    from {
        transform: scale(0.3);
    }
    to {
        transform: scale(1) ;
    }
}
@keyframes close {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.3) ;
    }
}

.modify-info-content {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    transition: .5s all;

    form {
        position: fixed;
        padding-top: 2rem;
        height: 25rem;
        width: 50%;
        margin-left: 25%;
        margin-top: 8rem;
        overflow: hidden;
        animation: fillout .5s;
        background-color: rgba(255, 255, 255,.4);
        border-radius: .5rem;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, .4);
        .close{
           transition: .3s all;
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: 0;
            display: block;
            width: 2.5rem;
            height: 2rem;
            text-align: center;
            border-radius: 0 0 0 .5rem;
            font-size: 1.5rem !important;
            background-color: rgba(0, 0, 0, 0.1);
            &:hover{
                background-color: red;
                color: white;
            }
        }
    }

    input {
        display: block;
    }
}


input[type="file"] {
    margin: 0 auto;
}

// 输入框
input[type="text"],
button {
    display: block;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding-left: 1.8rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    height: 2rem;
    width: 70%;
    margin: 1rem auto;
    margin-bottom: 1.5rem;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;

    &:hover,
    &:focus {
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(77, 204, 255, 1);
    }
}

button {
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
    z-index: 1;
    padding: 0;
    height: 2rem;
    border-radius: 0.9rem;
    background-color: rgba(0, 119, 255, 0.2);
    font-size: 0.9rem;
    color: white;
    font-family: "微软雅黑";
    font-weight: 700;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
        -2px -2px 6px rgba(0, 183, 255, 0.2),
        inset 2px 2px 3px rgba(255, 255, 255, 0.8),
        inset 0 0 0 rgba(0, 0, 0, 0.4);

    &:hover,
    &:focus {
        border: none;
        background-color: rgba(0, 119, 255, 0.2);
    }

    &:hover {
        background-color: rgba(0, 119, 255, 0.4);
    }

    &:active {
        font-weight: 700;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 183, 255, 0.2),
            inset -2px -2px 3px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(0, 0, 0, 0.4);
        font-size: 0.85rem;
    }
}
</style>