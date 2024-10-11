<template>
<div class="app">
    <div class="footer">
        <div class="container">
            <div class="service">
                <span>客户服务</span>
                <div class="icons">
                    <div class="ser-icon">
                        <i class="iconfont icon-zaixiankefu"></i>
                        <span>在线客服</span>
                    </div>
                    <div class="pro-icon">
                        <i class="iconfont icon-wentifankui"></i>
                        <span>问题反馈</span>
                    </div>
                </div>
            </div>
            <div class="about">
                <span>关注我们</span>
                <div class="icons">
                <div class="wx-icon">
                    <i class="iconfont icon-weixin"></i>
                    <span>公众号</span>
                </div>
                <div class="weibo-icon">
                    <i class="iconfont icon-xinlangweibo"></i>
                    <span>微博</span>
                </div>
                </div>
            </div>
            <div class="download">
                <span>下载APP</span>
                <div class="container2">
                    <div class="qrcode-icon">
                        <img src="@/assets/images/qrcode.jpg" width="70px" height="70px">
                    </div>
                    <div class="download-btn">
                        <span>扫描二维码</span>
                        <br>
                        <span>立马下载APP</span>
                        <div class="download-page">
                            <el-button type="success">下载页面</el-button>
                        </div> 
                    </div>
                </div>
                
            </div>
            <div class="hotline">
                <span>服务热线</span>
                <div class="number">
                    <span style="font-size: 22px;color: #666;">400-0000-000</span>
                    <br>
                    <span style="font-size: 15px;">周一至周日 8:00-18:00</span>
                </div>
            </div>
            </div>
    </div>
<div class="final">
    <div class="assess">
        <div class="price">
            <i class="iconfont icon-box"></i>
            <span>价格亲民</span>
        </div>
        <div class="fast">
            <i class="iconfont icon-dianzan"></i>
            <span>物流快捷</span>
        </div>
        <div class="fresh">
            <i class="iconfont icon-keyongyunshucheliang"></i>
            <span>品质新鲜</span>
        </div>
        
    </div>
    <hr>
    <div class="more">
        
        <a>关于我们</a>
        <a>帮助中心</a>
        <a>售后服务</a>
        <a>配送与验收</a>
        <a>商务合作</a>
        <a>搜索推荐</a>
        <a>友情链接</a>
        <div class="copyright">
            <span>CopyRight © 小兔鲜儿</span>
        </div>
    </div>
    
</div>
</div>
</template>

<script setup>

</script>

<style lang='scss' scoped>

.container {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between ;
    color: #999;
}
.service, .about, .download, .hotline{
    width: 25%;
    padding: 50px 20px;
    text-align: center;
    vertical-align: middle;
    border-right: 1px solid #f2f2f2 ;
    &:last-child{
        border-right: none;
    }
}

.icons{
    padding: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.iconfont{
    font-size: 36px;
    display: block;
    
}
.ser-icon,.pro-icon,.wx-icon,.weibo-icon{
    border: 1px solid #f2f2f2;
    padding: 10px 6px;
}
.wx-icon, .weibo-icon{
    padding: 10px 15px;
}
.weibo-icon{
    padding-left: 21px;
}
.qrcode-icon{
    width: 77px;
    height: 77px;
    border:  2px solid #f2f2f2;
}
.container2{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
}
.number{
    margin-top: 45px;
}

.final{
    background-color: black;
    position: absolute;
    width: 100%;
    height: 400px;
    color: white;
}
.assess {
    height: 178px;
    display: flex;
    padding: 60px 100px;
    justify-content: space-around;
}
.assess i{
    font-size:50px;
    
}
.fresh, .price, .fast{
    display: flex;
    line-height: 50px;
    text-align: center;
}
.more{
    text-align: center;
    margin: 50px 0;
}
a{
    border-right: 1px solid #999;
    padding: 0 10px;
    color: #999;
    &:last-child{
        border-right: none;
    }
}
a:last-child{
    border-right: none;
}
.copyright{
    font-size: 15px;
    color: #999;
    margin-top: 10px;
}
hr{
    background-color: #d62222;
}
</style>