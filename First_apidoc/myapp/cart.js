
/**
 * @api {POST} http://0.0.0.0:5000/account/register 用戶註冊
 * @apiName 用戶註冊
 * @apiGroup Account
 * @apiVersion 1.0.0
 *
 * @apiParam {String} username 用戶名
 * @apiParam {String} password 用戶密碼
 * @apiParam {String} email 用戶email
 *
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiError {Integer} code 狀態碼
 * @apiError {bool} data 是否成功
 * @apiError {String} msg 回傳訊息
 * @apiErrorExample  {json} error-example
{
  "code": 423,
  "data": false,
  "msg": "註冊失敗"
}
 * @apiSuccessExample Response_success
{
  "code": 200,
  "data": true,
  "msg": "註冊成功"
}
 *
 */

/**
 * @api {PUT} http://0.0.0.0:5000/account/update 修改用戶
 * @apiName 修改用戶
 * @apiGroup Account
 *
 * @apiParam {int} id 用戶id(id必須是欲修改用戶id,其他輸入欲更改值)
 * @apiParam {String} username 用戶名
 * @apiParam {String} password 用戶密碼
 * @apiParam {String} email 用戶email
 *
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiSuccessExample Response_success
{
    "data": True,
    "code": 200,
    "msg": "修改成功"
}
 */


/**
 * @api {POST} http://0.0.0.0:5000/account/login 用戶登入
 * @apiName 用戶登入
 * @apiGroup Account
 *
 * @apiParam {String} username 用戶名
 * @apiParam {String} password 用戶密碼
 * @apiParam {String} email 用戶email
 *
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiError {Integer} code 狀態碼
 * @apiError {bool} data 是否成功
 * @apiError {String} msg 回傳訊息
 * @apiErrorExample  {json} error-example
{
    "data": False,
    "code": 423,
    "msg": "登入失敗"
}
 * @apiSuccessExample 成功回傳
{
    "data": True,
    "code": 200,
    "msg": "登入成功"
}
 */


/**
 * @api {GET} http://0.0.0.0:5000/account/search 查詢用戶
 * @apiName 查詢用戶
 * @apiGroup Account
 *
 * @apiParam {String} username 用戶名
 *
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiSuccessExample Response_success
{
  "code": 0,
  "data": true,
  "msg": {
    "email": "4",
    "id": 1,
    "password": "4",
    "username": "4"
  }
}
 */


/**
 * @api {POST} http://0.0.0.0:5000/websocket/write_url 寫入url
 * @apiName 分類2-1項目名稱(不可重複)
 * @apiGroup Alert
 * @apiVersion 1.0.0
 * @apiParam {String} username 用戶名
 * @apiParam {String} password 用戶密碼
 * @apiParam {String} email 用戶email
 *
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiError {Integer} code 狀態碼
 * @apiError {bool} data 是否成功
 * @apiError {String} msg 回傳訊息
 * @apiErrorExample  {json} error-example
{
  "code": 423,
  "data": true,
  "msg": "寫入成功"
}
 * @apiSuccessExample 成功回傳
{
  "code": 200,
  "data": true,
  "msg": "寫入成功"
}
 */ 

/**
 * @api {GET} http://0.0.0.0:5000/websocket/search 查尋圖片url
 * @apiName 查尋圖片
 * @apiGroup Alert
 * @apiSuccess {Integer} code 狀態碼
 * @apiSuccess {bool} data 是否成功
 * @apiSuccess {String} msg 回傳訊息
 * @apiSuccessExample Response_success
{
  "code": 200,
  "data": true,
  "msg": [
    {
      "time": "2020-05-16 00:43:33.544105",
      "url": "1"
    },
    {
      "time": "2020-05-16 16:52:17.960460",
      "url": "2"
    },
    {
      "time": "2020-05-16 16:52:23.356404",
      "url": "3"
    },
    {
      "time": "2020-05-16 16:53:16.245414",
      "url": "3"
    }
  ]
}
 */