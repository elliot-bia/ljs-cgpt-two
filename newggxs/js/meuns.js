Vue.component('meuns',{
    data:function(){
        return {
            topishow: false
        }
    },
    methods: {
         menuclick() {
            this.topishow = true
            $('html, body').addClass('lockback');
            
            if (this.topishow) {

            } else {
                $('.animated').removeClass('fadeInLeft').addClass('bounceOutLeft')
            }
        },
        zheyin(){
            this.topishow = false
            $('html, body').removeClass('lockback');
        },
        selectclick(val,index){
            console.log(val,index)
            //this.topishow = false
            $('html, body').removeClass('lockback');
        },
    },
    template: ` <div class="shouji">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 touheader" >
            <p>阳光采购平台 <i class="el-icon-menu" @click='menuclick'></i></p>
        </div>
    </div>
    <div class="menus" v-if='topishow' @click='zheyin'> </div>
    <div class="menuschildr  animated fadeInLeft" v-if='topishow'>
        <el-menu default-active="2" class="el-menu-vertical-demo" @select='selectclick' unique-opened='true'>
            <el-menu-item index="1">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <span>采购公告</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">工程类公告</el-menu-item>
                    <el-menu-item index="2-2">货物类公告</el-menu-item>
                    <el-menu-item index="2-3">服务类公告</el-menu-item>
                    <el-menu-item index="2-4">招投标服务网公告</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <span>结果公示</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">结果公示</el-menu-item>
                    <el-menu-item index="3-2">废标公告</el-menu-item>
                    <el-menu-item index="3-3">变更公告</el-menu-item>
                    <el-menu-item index="3-4">单一来源采购公告</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            
            <el-menu-item index="4">
                <span slot="title">法律法规</span>
            </el-menu-item>
            <el-menu-item index="5">
                <span slot="title">国资监管规定</span>
            </el-menu-item>
            <el-menu-item index="6">
                <span slot="title">新闻动态</span>
            </el-menu-item>

            <el-menu-item index="7">
                <span slot="title">业务指南</span>
            </el-menu-item>
        </el-menu>
    </div>
   </div>`
})