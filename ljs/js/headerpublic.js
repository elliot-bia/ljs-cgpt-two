Vue.component('headers', {
    data: function () {
      return {
        nav: [{
            name: '首页',
        }, {
            name: '公告信息',
        }, {
            name: '业务指南',
        }, {
            name: '业务导航',
        }, {
            name: '咨询答疑',
        }, {
            name: '党建风采',
        }, {
            name: '公开信息'
        },{
            name: '登入/注册',
        }],
        num: null
      }
    },
    methods:{
        enter(arr,index){
            this.num = index
        }
      },
    template: ` <div class="header">
    <div class="main">
        <div style="width: 20%">
            <img src="../images/toplogo.png" alt="">
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in nav" :key="index" :style="{'borderTop': num === index ? '2px solid #3E62A6' : ''}" @mouseenter="enter(item,index,$event)">
                    <span v-if='item.name !== "业务指南" && item.name !== "业务导航"'>{{item.name}}</span>
                    <el-dropdown show-timeout='0' v-if='item.name === "业务指南"'  >
                        <span class="el-dropdown-link">
                            {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" placement='top'>
                            <el-dropdown-item>办理指南</el-dropdown-item>
                            <el-dropdown-item>政策法规</el-dropdown-item>
                            <el-dropdown-item>相关下载</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown show-timeout='0' v-if='item.name === "业务导航"'>
                            <span class="el-dropdown-link">
                                {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>托管专题</el-dropdown-item>
                                <el-dropdown-item>租赁专题</el-dropdown-item>
                                <el-dropdown-item>增资专题</el-dropdown-item>
                                <el-dropdown-item>深柜市场</el-dropdown-item>
                                <el-dropdown-item>不良资产</el-dropdown-item>
                                <el-dropdown-item>三资专题</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                </li>
                <li>

                </li>
            </ul>
        </div>
    </div>
</div>`
  })