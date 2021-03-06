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

// | Author: LikeShopTeam
// +----------------------------------------------------------------------
namespace app\admin\validate;
use think\Validate;

class Supplier extends Validate{
    protected $rule = [
        'name' => 'require|unique:supplier,name^del',
        'contact' => 'require',
        'tel' => 'require|mobile',
        'address' => 'require',
        'province' => 'require',
        'city' => 'require',
    ];

    protected $message = [
        'name.require'    => '供货商名称不能为空',
        'name.unique'     =>'该名称已存在',
        'contact.require'    => '联系人姓名不能为空',
        'tel.require'    => '联系电话不能为空',
        'address.require'    => '联系地址不能为空',
        'tel.mobile' => '请输入正确的手机格式',
        'tel.city' => '请输入选择城市'
    ];
}