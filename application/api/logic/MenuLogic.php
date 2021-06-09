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
namespace app\api\logic;

use app\common\model\Menu_;
use app\common\server\ConfigServer;
use app\common\server\UrlServer;
use think\Db;

class MenuLogic
{
    public static function getMenu($type)
    {
        $list = Db::name('menu_decorate')
            ->where(['decorate_type' => $type, 'del' => 0, 'is_show' => 1])
            ->field('name,image,link_type,link_address')
            ->order('sort desc')
            ->select();

        $menu_list = [];

        $is_open = ConfigServer::get('distribution', 'is_open', 1);

        foreach ($list as $key => $menu) {
            $menu_content = Menu_::getMenuContent($type, $menu['link_address']);

            if(empty($menu_content)){
                continue;
            }
            
            if (!$is_open && 2 === $menu_content['menu_type']) {
                continue;
            }
            //处理图标
            $menu_list[] = [
                'name' => $menu['name'],
                'image' => UrlServer::getFileUrl($menu['image']),
                'link' => $menu_content['link'] ?: $menu['link_address'],
                'is_tab' => $menu_content['is_tab'] ?? '',
                'link_type' => $menu_content['link_type'] ?? $menu['link_type'],
            ];
        }
        return $menu_list;
    }
}