<?php
// +----------------------------------------------------------------------
// | LikeShop100%开源免费商用电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | 商业版本务必购买商业授权，以免引起法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | Gitee下载：https://gitee.com/likemarket/likeshopv2
// | 访问官网：https://www.likemarket.net
// | 访问社区：https://home.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 微信公众号：好象科技
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------

// | Author: LikeShop-令狐冲
// +----------------------------------------------------------------------

use think\facade\Env;

return [
    //免登录页面
    'free_login' => ['account_login'],

    //样式显示
    'env_name' => Env::get('project.env_name', '本地环境-'),
    'admin_name' => Env::get('project.admin_name', '石次方管理后台'),
    'theme_color' => 'layui-bg-blue',
    'theme_button' => 'layui-btn-normal',
];