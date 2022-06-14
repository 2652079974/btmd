<template>
  <form :action="action" :method="method">
    <div class="search-box iconfont">
      <input type="text" :placeholder="placeholder" v-model="keywords" :name='name' class="search-input iconfont" />
        <button type="submit" class="iconfont" value="" >&#xe86f;</button>
    </div>
  </form>
</template>

<script>
export default {
    props:{
        action:{
            type:String,
            default:'/'
        },
        method:{
            type:String,
            default:'GET'
        },
        placeholder:{
            type:String,
            default:'请输入关键字'
        },
        name:{
            type:String,
            default:'name'
        },
        value:{
            type:String,
            default:``
        }
    },
    data(){
        return{
            keywords:'',
        }
    },
    updated(){
        console.log(this.keywords)
    }
}
</script>
<style lang="less" scoped>

    form{
        position: relative;
        display: inline-block;
        width:20rem;

        .search-box{
            position: relative;
            height: 1.6rem;
            margin-left: 2rem;
            
            input:first-child{
                border: none;
                transition: .5s all;
                float: left;
                outline: none;
                box-sizing: border-box;
                border-right: none;
                height: 100%;
                width: 12rem;
                padding-left: .5rem;
                border-radius: 0.3rem 0 0 .3rem;
                font-size: 1rem*0.7;
                background-color: rgba(255,255,255,.3);
                box-shadow: inset 1px 1px 3px rgba(0,0,0,.3),
                inset -1px -1px 3px rgba(255,255,255,.6 ),
                -2px -2px 5px rgba(255,255,255,.5),
                1px 1px 3px rgba(0,0,0,.2);
                ;

                &:hover,&:focus{
                    margin-left: -2rem;
                    width: 16rem;
                }
            }
            button{
                position: relative;
                z-index: 1;
                cursor: pointer;
                border-left: none;
                background-color: rgba(255,255,255,.3);
                border: none;
                height: 100%;
                width: 2.5rem;
                color: rgb(65, 65, 65);
                font-size: 1.1rem;
                font-weight: 700;
                color: rgba(0, 132, 255,.7);
                box-shadow: inset 1px 1px 3px rgba(255,255,255,.3),
                inset 0 0 0 rgba(0,0,0,.6 ),
                -2px -2px 5px rgba(255,255,255,.5),
                2px 2px 5px rgba(0,0,0,.2);
                transition: .3s all;
                border-radius: 0  .3rem .3rem 0;
                &:hover{
                    background-color: rgba(255,255,255,.6);
                }
                &:active{
                    box-shadow: inset -1px -1px 3px rgba(255,255,255,.3),
                    inset 1px 1px 3px rgba(0,0,0,.2 ),
                    0 0 0  rgba(255,255,255,.5),
                    0 0 0 rgba(0,0,0,.2);
                    font-size: 1rem;
                }
            }

        }
    }
</style>