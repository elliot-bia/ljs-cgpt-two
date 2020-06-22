Vue.component('headers',{
    data:function(){
        return {
                navlist:[
                    {name: '首页'},{name: '采购公告'},{name: '结果公示'},{name: '法律法规'},{name: '国资监管规定'},{name: '新闻动态'},{name: '业务指南'},
                ],
        }
    },
    methods: {
        
    },
    template: `<div class="row navtop">
    <div class="col-xs-12 col-sm-12 col-md-12">
       <ul class="main">
           <li v-for='(item,index) in navlist' :key='index'>
               {{item.name}}
           </li>
           <button>信息发布登录</button>
       </ul>
    </div>
</div>`
})