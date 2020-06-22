Vue.component('headers', {
    props:['ztnums'],
    data: function () {
        return {
            headerarr: [
                {
                    name: '首页'
                },
                 {
                    name: '采购公告'
                }, {
                    name: '结果公示'
                }, 
                {
                    name: '防疫物资专栏'
                }, {
                    name: '法律法规'
                }, {
                    name: '国资监管规定'
                }, {
                    name: '新闻动态'
                }, {
                    name: '业务指南'
                }, {
                    name: '信息发布登录'
                },
            ],
            headernums: 0,
            isCollapse: false,
            navishows: false,
            headerarrs: [
                {
                    name: '采购公告',
                    index: 1,
                    childers: [
                        { name: '信息统计', index: '2-1' },
                        { name: '用户统计', index: '2-2' },
                        { name: '响应统计', index: '2-3' },
                    ]
                }, {
                    name: '结果公示',
                    index: 2,
                    childers: [
                        { name: '用户列表', index: '3-1' },
                    ]
                }, 
            ]
        }
    },
    mounted:function() { 
       
    },
    watch:{
        'navishows':function (val){
            var mo=function(e){e.preventDefault();};
            if(val){
                $('body').css({'position':'inherit',"overflow":"hidden"});
            } else {
                $('body').css({'position':'relative',"overflow":"auto"});
            }
        }
    },
    methods: {
        headerclick: function headerclick(_val, index) {
            this.headernums = index
        },
        selectclick: function selectclick(key, index) {
            this.navishows = false
            console.log(key, index)
        },
        navclick: function navclick() {

            this.navishows = !this.navishows
            
        },
        guanbi: function guanbi() {
            this.navishows = false
        },
        selects:function(index,paths){
            console.log(index,paths)
        }
    },
    template: `<header class=''>
            <div class="boxshow" v-if='navishows'  @click='guanbi'></div>
            <div class="navishow" v-if='navishows'  >
                <el-menu default-active="1-1" class="el-menu-vertical-demo" unique-opened='true' 
                    :collapse="isCollapse"  :collapse-transition='false' @select='selects'>

                    <el-submenu v-for='(item,index) in headerarrs' :index="item.index" >
                    <template slot="title">
                    <img src="../images/cg.png" alt="" v-if='index == 0'>
                    <img src="../images/jg.png" alt="" v-if='index == 1'>
                      <span >
                        {{item.name}} 
                      </span>
                    </template>
                    <el-menu-item-group v-for='(items,index) in item.childers' :key="index"  >
                      <el-menu-item :index="items.name">
                      <span  class="childercolor">{{items.name}}</span>
                      </el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
                  
                  <el-menu-item   v-for='(item,index) in headerarr' :index="item.name" :key="index"  v-if='index !== 1 && index !== 2'>
                        <span slot="title">
                        <img src="../images/shouye.png" alt="" v-if='index == 0'>
                        <img src="../images/cg.png" alt="" v-if='index == 1'>
                        <img src="../images/jg.png" alt="" v-if='index == 2'>
                        <img src="../images/fy.png" alt="" v-if='index == 3'>
                        <img src="../images/fl.png" alt="" v-if='index == 4'>
                        <img src="../images/gz.png" alt="" v-if='index == 5'>
                        <img src="../images/xw.png" alt="" v-if='index == 6'>
                        <img src="../images/yw.png" alt="" v-if='index == 7'>
                        <img src="../images/dl.png" alt="" v-if='index == 8'>
                        {{item.name}}
                        </span>
                    </el-menu-item>
                </el-menu>

            </div>
                    <ul class='mains headeripnoe'>
                        <li v-for='(item,index) in headerarr' :key="index"
                        :style="{
                            borderBottom: headernums === index? '2px solid #D96070' : '',
                            color: headernums === index? '#D96070' : ''
                        }"
                        @click='headerclick(item,index)'
                        >
                            {{item.name}}
                        </li>
                    </ul>
                    <div class="headerpc">
                    <img src="../images/ygcgptimg.png" alt="" style='margin-left:10px'>
                    <img src="../images/denglutop.png" alt="" class='rights'>
                    <img src="../images/daohangtop.png" alt="" class='rights1' @click='navclick'>
                    </div>
                </header>
               
                `
})
