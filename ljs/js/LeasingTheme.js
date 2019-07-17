var app = new Vue({
    el: '#app',
    data: {
        clicklist: [
            { name: '租赁专题' }, { name: '增资专题' }, { name: '三资专题' }, { name: '托管专题' }, { name: '不良资产' }, { name: '深柜市场' },
        ],
        num: 0,
        tableData: [
            {
                name: '惠州大亚湾澳头镇大塭垻新区共八层整栋建筑物拍卖',
                date: '2018-11-11'
            }, {
                name: '粤LHD917尼桑皮卡成交公告',
                date: '2018-11-11'
            }, {
                name: '2台普瑞维亚车辆转让公告',
                date: '2018-11-11'
            }, {
                name: '深圳南山太子山庄2栋405房等7套房产及商铺成交公告',
                date: '2018-11-11'
            }, {
                name: '皇岗公路大厦601-606.611房等2处物业自行招租信息公告',
                date: '2018-11-11'
            },
        ],
        total: 0,
        pageSize: 5,
        currentPage1: 1,
        tableDatas: [
            {
                name: '惠州大亚湾澳头镇大塭垻新区共八层整栋建筑物拍卖',
                date: '2018-11-11'
            }, {
                name: '粤LHD917尼桑皮卡成交公告',
                date: '2018-11-11'
            }, {
                name: '2台普瑞维亚车辆转让公告',
                date: '2018-11-11'
            }, {
                name: '深圳南山太子山庄2栋405房等7套房产及商铺成交公告',
                date: '2018-11-11'
            }, {
                name: '皇岗公路大厦601-606.611房等2处物业自行招租信息公告',
                date: '2018-11-11'
            },
        ],
        totals: 0,
        pageSizes: 5,
        currentPage1s: 1,
        businarr: [
            { name: '房产租赁服务：按照《深圳市物价局关于规范房地产中介服务收费的通知》（深价〔1999〕15号）执行，向出租方、承租方双方按半月至一月成交金额标准收取交易服务费' },
            { name: '公有资源性资产进场公开招租业务：收费标准为按最终成交价计算的半个月祖金，向承租方收取交易服务费。' }
        ],
        Myconsultation: [
            { name: '如何查询已托管企业信息' },
            { name: '办理公司股权转让的流程及相关资料' },
            { name: '我想把公司的股权进行挂牌交易，登记时需要的费用是多少？' },
            { name: '我想查询托管公司托管情况，以及托管公司在联交所交易和转让如何办理相关手续' },
        ],
        policarr: [
            { name: '企业增资业务规则（试行）' }, { name: '中华人民共和国企业国有资产法' }, { name: '深圳市属企业国有产权变动监管规定' }, { name: '深圳市属企业国有产权变动工作指引' }, { name: '关于国有控股混合所有制企业开展员工持股试点的意见' },
        ],
        servicearr: [
            { name: '协助委托方编制增资方案，制订进场征集、遴选投资人方案（包括不限于竞价、竞争性谈判或综合评审等）；' },
            { name: '深入挖掘标的企业投资亮点，进行项目前期推介，有效筛选潜在投资方；' },
            { name: '向委托方提供初步意向投资方名单，组织意向投资方尽职调查，接受意向投资方反馈信息，及时协调投融资双方；' },
            { name: '准备增资相关推介材料（包括不限于路演材料、保密协议等文书）；' },
            { name: '制作增资项目挂牌公告，发布增资信息，广泛征集意向投资方；' },
            { name: '根据项目实际需要组织专场的增资路演推介会；' },
            { name: '接受意向投资人报名和咨询，并按照委托方的要求审核其资格；' },
            { name: '对本次增资履行相应的保证金监管职责；' },
            { name: '公告期满后，全程组织并参与意向投资方的竞价、竞争性谈判、综合评审过程并制作相关过程记录文件；' },
            { name: '组织各方签订本次增资扩股协议,发布增资成交结果；' },
            { name: '出具最终的增资交易凭证；' },
            { name: '协助企业完成股份制改造，并提供股份公司登记托管服务；' },
            { name: '提供IPO、新三板挂牌、并购重组等咨询顾问服务；' },
            { name: '其他相关财务顾问服务。' },
        ],
        classictableDatas: [
            {
                name: '惠州大亚湾澳头镇大塭垻新区共八层整栋建筑物拍卖',
                date: '2019-03-09'
            }, {
                name: '粤LHD917尼桑皮卡成交公告',
                date: '2019-03-09'
            }, {
                name: '2台普瑞维亚车辆转让公告',
                date: '2019-03-09'
            }, {
                name: '深圳南山太子山庄2栋405房等7套房产及商铺成交公告',
                date: '2019-03-09'
            }, {
                name: '皇岗公路大厦601-606.611房等2处物业自行招租信息公告',
                date: '2019-03-09'
            },
        ],
        newtableDatas: [
            {
                name: '惠州大亚湾澳头镇大塭垻新区共八层整栋建筑物拍卖',
                date: '2019-03-09'
            }, {
                name: '粤LHD917尼桑皮卡成交公告',
                date: '2019-03-09'
            }, {
                name: '2台普瑞维亚车辆转让公告',
                date: '2019-03-09'
            }, {
                name: '深圳南山太子山庄2栋405房等7套房产及商铺成交公告',
                date: '2019-03-09'
            }, {
                name: '皇岗公路大厦601-606.611房等2处物业自行招租信息公告',
                date: '2019-03-09'
            },
        ],
        attthree: [
            {
                title: '总部（7*24小时）',
                contactaddress: '深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼',
                contactnum: '刘先生 13510060086、王小姐 18676788630'
            }, {
                title: '龙岗区办公点 ',
                contactaddress: '深圳市龙岗区中心城天昊华庭小区首层龙岗区国有集体产权交易中心',
                contactnum: '谢小姐 15112290019'
            }, {
                title: '龙华区办公点 ',
                contactaddress: '深圳市龙华区梅龙大道2283号国鸿大厦7栋11层',
                contactnum: '湛先生 18565847790'
            }, {
                title: '宝安区办公点 ',
                contactaddress: '深圳市宝安区湖滨东路40号',
                contactnum: '李小姐 13510612189'
            }, {
                title: '南山区办公点 ',
                contactaddress: '深圳南山区南新路3036号五楼507',
                contactnum: '王先生 18576720610'
            }, {
                title: '光明区办公点',
                contactaddress: '深圳市光明新区观光路2522号招商局光明科技园A-3栋B单元八楼',
                contactnum: '行先生 13510009483'
            }, {
                title: '福田区办公点',
                contactaddress: '深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼',
                contactnum: '刘小姐 15820778729'
            }, {
                title: '罗湖区办公点',
                contactaddress: '深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼',
                contactnum: '王先生 13824395127'
            }, {
                title: '盐田区办公点',
                contactaddress: '深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼',
                contactnum: '杨军 13528768006'
            }, {
                title: '坪山、大鹏、深汕办公点',
                contactaddress: '深圳南山区沙河西路1809号深圳湾科技生态园一区2栋A座11楼',
                contactnum: '刘先生 13510060086'
            },

        ],
        casearr: [
            {
                title: '集体用地合作开发、城市更新项目:',
                Notices: '深圳市上梅林实业股份有限公司（祠堂村片区）城市更新改造项目招商公告',
                links: '盐田港后方陆域23号小区地块项目招商公告'
            },
            {
                title: '物业租赁:',
                Notices: '龙岗区坂田街道华创云轩商业物业招租信息公告',
                links: '深圳市上梅林实业股份有限公司梅村楼物业招租信息公告'
            },
            {
                title: '股权及资产转让:',
                Notices: '深圳市前海股份有限公司17.4418%股权转让公告',
                links: ''
            },
            {
                title: '大宗物资及服务采购:',
                Notices: '大深圳市龙华下油松股份合作公司物业管理分公司聘请保安服务招标公告',
                links: '深圳市南岭股份合作公司南岭村布沙路沿线及开放街片区城市更新单元规划设计服务采购公告'
            }
        ],
        downlarr: [
            { name: '股份合作公司(集体)资产公开招租信息发布申请表；' },
            { name: '资产权属证明或归属情况说明及相关材料；' },
            { name: '相关批准文件（内部决议文件）；' },
            { name: '股份合作公司（集体）资产公开招租委托协议（一式两份）；' },
            { name: '股份公司营业执照复印件；' },
            { name: '股份公司法定代表人资格证明书和授权委托书、法定代表人和受托人的身份证复印件。' },
        ],
        sysarr: [
            {
                address: '龙华区：',
                name: '-关于印发《龙华新区股份合作公司货物和服务采购管理规范（试行）》和《龙华新区股份合作公司物业租赁管理规范（试行）》的通知',
                name1: '-龙华区股份合作公司集体用地土地使用权交易竞争性谈判操作规程（试行）',
                name2: ''
            },
            {
                address: '龙华区：',
                name: '-龙岗区社区股份合作公司大宗商品采购规则和操作指引',
                name1: '-深龙集资复〔2018〕16号 附件：龙岗区社区股份合作公司集体资产公开招租操作和工作指引',
                name2: ''
            },
            {
                address: '南山区：',
                name: '-《深圳市南山区人民政府办公室关于印发《南山区股份合作公司综合监管实施办法（试行）》的通知》（深南府办规〔2018〕1号）',
                name1: '-南山区股份合作公司集体用地开发和交易操作指引（试行）',
                name2: ''
            },
            {
                address: '宝安区：',
                name: '-深宝府办[2017]21号 深圳市宝安区人民政府办公室关于印发宝安区股份合作公司物业出租管理办法（2017年修订）的通知 ',
                name1: '-宝安区集体资产监督管理办公室关于印发宝安区股份合作公司物业出租交易指引的通知',
                name2: '-区集体资产办关于进一步加强社区股份合作公司工业用房类物业出租管理的若干措施'
            },
            {
                address: '光明区：',
                name: '-深圳市光明新区管理委员会关于印发《光明新区社区集体经济资金资产资源交易管理暂行办法》的通知 ',
                name1: '',
                name2: ''
            },
        ],
        tudiarr: [
            {
                charges: '项目合作方',
                Billing: '1亿以下',
                base: '10万元',
                Remarkss: '按经评估的投资金额 分段递减累计收取'
            }, {
                charges: '股份合作公2司',
                Billing: '1亿＜投资金额≤5亿',
                base: '0.30%',
                Remarkss: '0（不收取服务费)'
            },
            {
                charges: '股份合作公司',
                Billing: '1亿以下',
                base: '0.15%',
                Remarkss: '0（不收取服务费)'
            },
            {
                charges: '股份合作公司',
                Billing: '5亿＜投资金额≤10亿',
                base: '0.05%',
                Remarkss: '0（不收取服务费)'
            },
            {
                charges: '股份合作公司',
                Billing: '10亿＜投资金额≤50亿	',
                base: '0.025%   ',
                Remarkss: '0（不收取服务费)'
            },
            {
                charges: '股份合作公司',
                Billing: '超过50亿',
                base: '10万元',
                Remarkss: '0（不收取服务费)'
            },
            {
                charges: '股份合作公司',
                Billing: '1亿以下',
                base: '10万元',
                Remarkss: '0（不收取服务费)'
            },
        ],
        zichan: [
            {
                charges: '股份合作公司',
                rmbs: '0（不收取服务费）'
            }, {


                charges: '股份合作公司',
                rmbs: '(依最终成交价)'
            },
        ],
        dazhong: [
            {
                charges: '向其中一方收取',
                rmbs: '100以下',
                huowu: '1.50%',
                fuwu: '1.50%',
                gongcheng: '1.00%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '100-500',
                huowu: '1.10%',
                fuwu: '0.80%',
                gongcheng: '0.70%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '500-1000',
                huowu: '0.80%',
                fuwu: '0.45%',
                gongcheng: '0.55%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '1000-5000',
                huowu: '0.50%',
                fuwu: '0.25%',
                gongcheng: '0.35%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '5000-10000',
                huowu: '0.25%',
                fuwu: '0.10%',
                gongcheng: '0.20%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '10000-100000',
                huowu: '0.05%',
                fuwu: '0.05%',
                gongcheng: '0.05%'
            },
            {
                charges: '向其中一方收取',
                rmbs: '100000以上',
                huowu: '0.01%',
                fuwu: '0.01%',
                gongcheng: '0.01%'
            },
        ],
        zichanzr: [
            {
                charges: '房地产、债权、在建工 程及土地使用权',
                rmbs: '按成交价2%向交易双方收取（转让方收取1%，受让方收取1%）',
                huowu: '按挂牌金额的1%加增值金额的10%向转让方收取；按成交金额的2%向受让方收取：',
                fuwu: '增值金额=成交金额-挂牌金额'
            },
            {
                charges: '房地产、债权、在建工 程及土地使用权',
                rmbs: '单笔单向服务费不低于5000元',
                huowu: '单笔单向服务费不低于5000元',
                fuwu: '增值金额=成交金额-挂牌金额'
            }, {
                charges: '房地产、债权、在建工 程及土地使用权',
                rmbs: '按成交价的5%向交易双方收取（转让方收取2%，受让方收取3%）',
                huowu: '按挂牌金额的2%加增值金额的10%向转让方收取；按成交金额的5%向受让方收取',
                fuwu: '增值金额=成交金额-挂牌金额'
            }, {
                charges: '房地产、债权、在建工 程及土地使用权',
                rmbs: '单笔单向服务费不低于2000元 ',
                huowu: '单笔单向服务费不低于2000元',
                fuwu: '增值金额=成交金额-挂牌金额'
            },
        ],
        guxuan: [
            {
                charges: '100万以下（含）',
                rmbs: '5000元',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100万以上-500万部分',
                rmbs: '3.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '500万以上-1000万部分',
                rmbs: '2.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1000万以上-5000万部分',
                rmbs: '2.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '5000万以上-1亿部分',
                rmbs: '1.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1亿以上-10亿部分',
                rmbs: '1.0‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '10亿以上-50亿部分',
                rmbs: '0.2‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '50亿以上-100亿部分（含）',
                rmbs: '0.1‰',
                huowu: '0.1‰',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100亿以上部分 ',
                rmbs: '不计费',
                huowu: '不计费',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            },
        ],
        shouranfang: [
            {
                jishu: '100万以下(含)',
                biaozhun: '5000元',
                jifeij: ' 200万以下(含)',
                jifeib: '5.00%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '100万以上-500万部分',
                biaozhun: '3.0‰',
                jifeij: '200万以上-1000万部分',
                jifeib: '4.00%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '500万以上-1000万部分',
                biaozhun: '2.5‰',
                jifeij: '100万以上-5000万部分',
                jifeib: '3.00%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '1000万以上-5000万部分',
                biaozhun: '2.0‰',
                jifeij: '5000万以上- 1亿部分',
                jifeib: '2.00%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '5000万以上-1亿部分',
                biaozhun: '1.5‰',
                jifeij: '1亿以上-5亿部分（含）',
                jifeib: '1.00%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '1亿以上-10亿部分',
                biaozhun: '1.0‰',
                jifeij: '5亿以上部分',
                jifeib: '0.5%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '10亿以上-50亿部分',
                biaozhun: '0.2‰',
                jifeij: '5亿以上部分',
                jifeib: '0.5%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '50亿以上-100亿部分（含）',
                biaozhun: '0.1‰',
                jifeij: '5亿以上部分',
                jifeib: '0.5%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            }, {
                jishu: '100亿以上部分',
                biaozhun: '不计费',
                jifeij: '5亿以上部分',
                jifeib: '0.5%',
                beizhu: '1.协议成交，仅向受让方收取基础服务费。2.竞价成交，仅向受让方收取竞价服务费，不低于5000元。3.基础服务费、竞价服务费均按成交金额分段递减累积收取。'
            },
        ],
        tuoguan: [
            {
                charges: '100万以下（含）',
                rmbs: '5000元',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100万以上-500万部分',
                rmbs: '3.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '500万以上-1000万部分',
                rmbs: '2.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1000万以上-5000万部分',
                rmbs: '2.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '5000万以上-1亿部分',
                rmbs: '1.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1亿以上-10亿部分',
                rmbs: '1.0‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '10亿以上-50亿部分',
                rmbs: '0.2‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '50亿以上-100亿部分（含）',
                rmbs: '0.1‰',
                huowu: '0.1‰',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100亿以上部分 ',
                rmbs: '不计费',
                huowu: '不计费',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            },
        ],
        guohu: [
            {
                charges: '100万以下（含2）',
                rmbs: '5000元',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100万以上-500万部分',
                rmbs: '3.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '500万以上-1000万部分',
                rmbs: '2.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1000万以上-5000万部分',
                rmbs: '2.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '5000万以上-1亿部分',
                rmbs: '1.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1亿以上-10亿部分',
                rmbs: '1.0‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '10亿以上-50亿部分',
                rmbs: '0.2‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '50亿以上-100亿部分（含）',
                rmbs: '0.1‰',
                huowu: '0.1‰',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100亿以上部分 ',
                rmbs: '不计费',
                huowu: '不计费',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            },
        ],
        zengzi: [
            {
                charges: '100万以下（含2）',
                rmbs: '5000元',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100万以上-500万部分',
                rmbs: '3.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '500万以上-1000万部分',
                rmbs: '2.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1000万以上-5000万部分',
                rmbs: '2.0‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '5000万以上-1亿部分',
                rmbs: '1.5‰',
                huowu: '10% ',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '1亿以上-10亿部分',
                rmbs: '1.0‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '10亿以上-50亿部分',
                rmbs: '0.2‰',
                huowu: '5%',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '50亿以上-100亿部分（含）',
                rmbs: '0.1‰',
                huowu: '0.1‰',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            }, {
                charges: '100亿以上部分 ',
                rmbs: '不计费',
                huowu: '不计费',
                fuwu: '1.基础服务费按挂牌金额分段递减累计收取。2.增值服务费按增值金额分段递减累计收取；增值金额=成交金额-挂牌金额。'
            },
        ],
        yewuarr: [
            { name: '房产租赁服务：按照《深圳市物价局关于规范房地产中介服务收费的通知》（深价〔1999〕15号）执行，向出租方、承租方双方按半月至一月成交金额标准收取交易服务费。' },
            { name: '公有资源性资产进场公开招租业务：收费标准为按最终成交价计算的半个月祖金，向承租方收取交易服务费。' }
        ],
        dengjibiao: [
            { name: '托管企业董事、监事及高管人员信息登记表' },
            { name: '同意登记托管的股东大会决议参考文本' },
            { name: '股份初始登记托管业务申请书' },
            { name: '非上市股份登记托管服务合同' },
        ],
        labelPosition: 'left',
        formLabelAlign: {
            arr: [
                { name: '0755-86671132 郑先生' }, { name: '0755-86358759 段小姐' }, { name: '0755-26569063 梁小姐' },
                { name: '0755-86358791 江先生' }, { name: '0755-26569062 叶先生' }, { name: '0755-26569065 赵小姐' },
                { name: '0755-83690889 刘先生' }, { name: '0755-26569126 叶先生' }, { name: ' 0755-86358702 杨先生' },
            ],
            Telephone: '0755-83690834',
            Faxs: '0755-26577562',
            address: '深圳市南山区沙河西路1809号深圳湾科技生态园一区2栋A座11层',
            Websites: 'www.sotcbb.com'
        },
        Investment: [
            { name: '安徽' }, { name: '广东' }, { name: '上海' }, { name: '天津' }, { name: '云南' }, { name: '重庆' }, { name: '新疆' },
        ],
        Investment1: [
            {name: '安徽'},{name: '大连'},{name: '福建'},{name: '广东'},{name: '贵州'},{name: '吉林'},
            {name: '江苏'},{name: '江西'},{name: '内蒙古'},{name: '青岛'},{name: '厦门'},{name: '山东'},
            {name: '陕西'},{name: '上海'},{name: '深圳'},{name: '云南'},{name: '浙江'},
        ],
        Investment2: [
            {name: '安徽'},{name: '黑龙江'},{name: '湖北'},{name: '江西'},{name: '辽宁'},{name: '内蒙古'},
            {name: '青岛'},{name: '青海'},{name: '山东'},{name: '陕西'},{name: '上海'},{name: '深圳'},
            {name: '苏州'},{name: '云南'},{name: '浙江'},{name: '重庆'},
        ],
        Investmentnum: null,
        Investment1num: null,
        Investment2num: null,
        lisline: {
            name: '严琪',
            ziben: '10000万元',
            dates: '2008年4月16日',
            zhuce: '91440300618840482Y',
            yin: '无',
            xiang: '加工、生产经营各种马口铁包装容器、印花马口铁、马口铁及各种包装材料包装产品；从事上述产品的批发、进出口及相关配套业务（涉及许可证管理、专项规定管理的商品'
        },
        lisline1: {
            name: '刘德逊',
            ziben: '11048.05万元',
            dates: '2003年8月27日',
            zhuce: '91440300754250460R',
            yin: '通信产品、数码产品及配件的购销和维护、维修；国内商业、物资供销业（不含专营、专控、专卖商品）；兴办实业（具体项目另行申报）；通信设备、电子产品、通信产品、计算机、办公自动化设备、软硬件的技术开发（不含限制项目）及销售；自有物业租赁；柜台出租；企业形象策划；经济信息咨询；从事货物及技术的进出口业务；家用电器的销售；网上从事电子产品的销售；房地产中介服务；电信研发和技术服务；电信信息技术服务；文化创意策划服务；物流辅助服务；移动电话机、无线数据终端产品的研发及销售。（以上经营范围：法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。',
            xiang: '移动电话机、无线数据终端产品的生产（生产限分支机构进行）；普通货运。'
        },
        lisline2: {
            name: '刘德逊',
            ziben: '11048.05万元',
            dates: '2003年8月27日',
            zhuce: '91440300754250460R',
            yin: '通信产品、数码产品及配件的购销和维护、维修；国内商业、物资供销业（不含专营、专控、专卖商品）；兴办实业（具体项目另行申报）；通信设备、电子产品、通信产品、计算机、办公自动化设备、软硬件的技术开发（不含限制项目）及销售；自有物业租赁；柜台出租；企业形象策划；经济信息咨询；从事货物及技术的进出口业务；家用电器的销售；网上从事电子产品的销售；房地产中介服务；电信研发和技术服务；电信信息技术服务；文化创意策划服务；物流辅助服务；移动电话机、无线数据终端产品的研发及销售。（以上经营范围：法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）。',
            xiang: '移动电话机、无线数据终端产品的生产（生产限分支机构进行）；普通货运。'
        }

    },
    created() {
        this.total = this.tableData.length
        this.totals = this.tableDatas.length
    },
    methods: {
        clicklists(val, index) {
            this.num = index
            $('.oncli > a').css({
                'border':'none',
            })
            $('.oncli > a > li').css({
                'background': '#959595'
            })
        },
        change(val) {

        },
        changes(val) {

        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 6) {
                if (columnIndex === 3) {
                    return {
                        rowspan: 1,
                        colspan: 4
                    };
                } else if (columnIndex !== 0) {
                    return [0, 0];
                }
            }
            if (columnIndex === 0) {
                if (rowIndex % 6 === 0) {
                    return {
                        rowspan: 6,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
            if (columnIndex === 3) {
                if (rowIndex % 6 === 0) {
                    return {
                        rowspan: 6,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        arraySpanMethod3({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 7 === 0) {
                    return {
                        rowspan: 7,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        arraySpanMethod4({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 2 === 0) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
            if (columnIndex === 3) {
                if (rowIndex % 4 === 0) {
                    return {
                        rowspan: 4,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        arraySpanMethod5({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 5) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
            }

            if (columnIndex === 3) {
                if (rowIndex % 9 === 0) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        arraySpanMethod5two({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 4) {
                if (rowIndex % 9 === 0) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
            if (columnIndex === 2) {
                if (rowIndex === 5) {
                    return {
                        rowspan: 4,
                        colspan: 1
                    };
                } else if (rowIndex === 6 || rowIndex === 7 || rowIndex === 8) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
            if (columnIndex === 3) {
                if (rowIndex === 5) {
                    return {
                        rowspan: 4,
                        colspan: 1
                    };
                } else if (rowIndex === 6 || rowIndex === 7 || rowIndex === 8) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }

        },
        yewuMethod5({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 5) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
            }

            if (columnIndex === 3) {
                if (rowIndex % 9 === 0) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        guohuMethod5({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 5) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
            }

            if (columnIndex === 3) {
                if (rowIndex % 9 === 0) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        zengziMethod5({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 2) {
                if (rowIndex === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1
                    };
                } else if (rowIndex === 5) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                }
            }

            if (columnIndex === 3) {
                if (rowIndex % 9 === 0) {
                    return {
                        rowspan: 9,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        Investmentclick(index){
            this.Investmentnum = index
        },
        Investment1click(index){
            this.Investment1num = index
        },
        Investment2click(index){
            this.Investment2num = index
        }

    },
})
//  导出js
var idTmr;
function getExplorer() {
    var explorer = window.navigator.userAgent;
    //ie
    if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
    }
    //firefox
    else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
    }
    //Chrome
    else if (explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
    }
    //Opera
    else if (explorer.indexOf("Opera") >= 0) {
        return 'Opera';
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
        return 'Safari';
    }
}
function method5(tableid) {
    if (getExplorer() == 'ie') {
        var curTbl = document.getElementById(tableid);
        var oXL = new ActiveXObject("Excel.Application");
        var oWB = oXL.Workbooks.Add();
        var xlsheet = oWB.Worksheets(1);
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand("Copy");
        xlsheet.Paste();
        oXL.Visible = true;
        try {
            var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
                "Excel Spreadsheets (*.xls), *.xls");
        } catch (e) {
            print("Nested catch caught " + e);
        } finally {
            oWB.SaveAs(fname);
            oWB.Close(savechanges = false);
            oXL.Quit();
            oXL = null;
            idTmr = window.setInterval("Cleanup();", 1);
        }

    } else {
        tableToExcel(tableid)
    }
}
function Cleanup() {
    window.clearInterval(idTmr);
    CollectGarbage();
}
var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"' +
            'xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
            + '<x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets>'
            + '</x:ExcelWorkbook></xml><![endif]-->' +
            ' <style type="text/css">' +
            '.excelTable  {' +
            'border-collapse:collapse;' +
            ' border:thin solid #999; ' +
            '}' +
            '   .excelTable  th {' +
            '   border: thin solid #999;' +
            '  padding:20px;' +
            '  text-align: center;' +
            '  border-top: thin solid #999;' +
            ' background-color: #E6E6E6;' +
            ' }' +
            ' .excelTable  td{' +
            ' border:thin solid #999;' +
            '  padding:2px 5px;' +
            '  text-align: center;' +
            ' }</style>' +
            '</head><body ><table class="excelTable">{table}</table></body></html>',
        base64 = function (
            s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            })
        }
    return function (table, name) {
        var str = ''
        if (table === 'dataTable') {
            str = '初始登记托管材料.xls'
        } else if (table === 'guohu') {
            str = '交易过户材料.xls'
        } else if (table === 'zengzi') {
            str = '增资材料.xls'
        }
        if (!table.nodeType)
            table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        var link = document.createElement("a");
        link.href = uri + base64(format(template, ctx));
        link.download = str;//当前下载的excel名称
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
})()
$('.oncli > a').on('click',function(e){
    $(this).css({
        'border': '1px solid #000'
    });
    $(this).siblings().css({
        'border':'none'
    })
    $(this).children('li').css({
        'background': '#000000'
    })
    $(this).siblings().children('li').css({
        'background': '#959595'
    })
})