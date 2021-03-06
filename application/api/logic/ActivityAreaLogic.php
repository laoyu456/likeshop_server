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
use app\api\model\Goods;
use think\Db;


class ActivityAreaLogic{
    public static function activityGoodsList($id,$page,$size){
        $where[] = ['AG.del','=',0];
        $where[] = ['G.del','=',0];
        $where[] = ['G.status','=',1];
        $where[] = ['activity_id','=',$id];

        $goods = new Goods();
        $count = $goods->alias('G')
                ->join('activity_goods AG','G.id = AG.goods_id')
                ->where($where)
                ->group('AG.goods_id')
                ->count();
        

        $list = $goods->alias('G')
                ->join('activity_goods AG','G.id = AG.goods_id')
                ->where($where)
                ->group('AG.goods_id')
                ->field('G.id,G.name,G.image,G.min_price as price,sales_sum+virtual_sales_sum as sales_sum,G.market_price,AG.activity_id')
                ->select();

        $more = is_more($count,$page,$size);  //是否有下一页

        $data = [
            'list'          => $list,
            'page_no'       => $page,
            'page_size'     => $size,
            'count'         => $count,
            'more'          => $more
        ];

        return $data;
    }

}