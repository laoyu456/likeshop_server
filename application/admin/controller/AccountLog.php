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
namespace app\admin\controller;
use app\admin\logic\AccountLogLogic;
use think\helper\Time;

class AccountLog extends AdminBase{
    /**
     * note 资金记录
     * create_time 2020/11/20 17:36
     */
    public function capitalList(){
        if($this->request->isAjax()){
            $get = $this->request->get();
            $list = AccountLogLogic::lists($get);
            $this->_success('',$list);
        }
        $this->assign('order_source',AccountLogLogic::orderSourceList(1));
        $this->assign('time',AccountLogLogic::getTime());
        return $this->fetch();
    }
    /**
     * note 积分记录
     * create_time 2020/11/20 17:36
     */
    public function integralList(){
        if($this->request->isAjax()){
            $get = $this->request->get();
            $list = AccountLogLogic::lists($get);
            $this->_success('',$list);
        }
        $this->assign('order_source',AccountLogLogic::orderSourceList(2));
        $this->assign('time',AccountLogLogic::getTime());
        return $this->fetch();
    }

    /**
     * note 成长值记录
     * create_time 2020/11/20 17:36
     */
    public function growthList(){
        if($this->request->isAjax()){
            $get = $this->request->get();
            $list = AccountLogLogic::lists($get);
            $this->_success('',$list);
        }
        $this->assign('order_source',AccountLogLogic::orderSourceList(3));
        $this->assign('time',AccountLogLogic::getTime());
        return $this->fetch();
    }
}