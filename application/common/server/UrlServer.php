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


namespace app\common\server;


class UrlServer
{
    /**
     * User: 意象信息科技 lr
     * Desc: 获取文件全路径
     * @param string $uri
     * @param string $type
     * @return string
     */
    public static function getFileUrl($uri = '', $type='')
    {

        if (strstr($uri, 'http://') || strstr($uri, 'https://')) {
            return $uri;
        }

        if ($uri && $uri !== '/' && substr($uri, 0, 1) !== '/') {
            $uri = '/'.$uri;
        }

        if ($type && $type == 'share') {
            return ROOT_PATH . $uri;
        }

        // 获取存储引擎信息
        $engine = ConfigServer::get('storage', 'default', 'local');
        if ($engine === 'local' || $type == 'local') {

            if (isset($uri[0])) {
                $uri[0] != '/' && $uri = '/' . $uri;
            }
            $_SERVER['HTTP_X_FORWARDED_PROTO'] = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '';
            $protocol = stripos($_SERVER['HTTP_X_FORWARDED_PROTO'] . $_SERVER['SERVER_PROTOCOL'], 'https') === false ? 'http://' : 'https://';
            $file_url = config('project.file_domain');
            return $protocol . $file_url . $uri;

        } else {

            $config = ConfigServer::get('storage_engine', $engine);
            $domain = isset($config['domain']) ? $config['domain'] : 'http://';
            return $domain . $uri;
        }
    }

}