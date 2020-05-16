define({ "api": [
  {
    "type": "PUT",
    "url": "http://0.0.0.0:5000/account/update",
    "title": "修改用戶",
    "name": "修改用戶",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用戶id(id必須是欲修改用戶id,其他輸入欲更改值)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response_success",
          "content": "{\n    \"data\": True,\n    \"code\": 200,\n    \"msg\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/cart.js",
    "groupTitle": "Account"
  },
  {
    "type": "GET",
    "url": "http://0.0.0.0:5000/account/search",
    "title": "查詢用戶",
    "name": "查詢用戶",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response_success",
          "content": "{\n  \"code\": 0,\n  \"data\": true,\n  \"msg\": {\n    \"email\": \"4\",\n    \"id\": 1,\n    \"password\": \"4\",\n    \"username\": \"4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/cart.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "http://0.0.0.0:5000/account/login",
    "title": "用戶登入",
    "name": "用戶登入",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回傳",
          "content": "{\n    \"data\": True,\n    \"code\": 200,\n    \"msg\": \"登入成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n    \"data\": False,\n    \"code\": 423,\n    \"msg\": \"登入失敗\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/cart.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "http://0.0.0.0:5000/account/register",
    "title": "用戶註冊",
    "name": "用戶註冊",
    "group": "Account",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response_success",
          "content": "{\n  \"code\": 200,\n  \"data\": true,\n  \"msg\": \"註冊成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": 423,\n  \"data\": false,\n  \"msg\": \"註冊失敗\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/cart.js",
    "groupTitle": "Account"
  },
  {
    "type": "POST",
    "url": "http://0.0.0.0:5000/websocket/write_url",
    "title": "寫入url",
    "name": "分類2-1項目名稱(不可重複)",
    "group": "Alert",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回傳",
          "content": "{\n  \"code\": 200,\n  \"data\": true,\n  \"msg\": \"寫入成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"code\": 423,\n  \"data\": true,\n  \"msg\": \"寫入成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/cart.js",
    "groupTitle": "Alert"
  },
  {
    "type": "GET",
    "url": "http://0.0.0.0:5000/websocket/search",
    "title": "查尋圖片url",
    "name": "查尋圖片",
    "group": "Alert",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "data",
            "description": "<p>是否成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response_success",
          "content": "{\n  \"code\": 0,\n  \"data\": true,\n  \"msg\": [\n    {\n      \"time\": \"2020-05-16 00:43:33.544105\",\n      \"url\": \"1\"\n    },\n    {\n      \"time\": \"2020-05-16 16:52:17.960460\",\n      \"url\": \"2\"\n    },\n    {\n      \"time\": \"2020-05-16 16:52:23.356404\",\n      \"url\": \"3\"\n    },\n    {\n      \"time\": \"2020-05-16 16:53:16.245414\",\n      \"url\": \"3\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapp/cart.js",
    "groupTitle": "Alert"
  }
] });
