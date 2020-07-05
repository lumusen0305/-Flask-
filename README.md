 

# springboot 重構寵物商店(不含flask部份)

這項目是中南大學計算機學院軟件工程 18 級**軟件開發架構**寵物商店**後端**，前後端分離。

組員：

- 1804 黃柏曛 - 前端負責人
- 1805 吳建賢 - 後端負責人
- 1804 馮武 - 後端日誌

指導老師：宋鐵

前端：[vue 前端](https://github.com/HuangNO1/PetHome_Front_Back#pet-home)



## 組件與框架

​		我們使用以下框架：

- flask(因為sm.ms跨域問題所以我就自己寫了圖床)

- springboot

  我們使用以依賴：

- elasticsearch-rest-client

- fastjson

- spring-boot-starter-test

- junit

- spring-boot-starter-mail

- mysql-connector-java

- spring-boot-starter-jdbc

- spring-boot-starter-web

- lombok

- spring-boot-starter-test

- junit-vintage-engine

- spring-boot-starter-data-jpa

- jakarta.persistence-ap

- spring-boot-starter-data-jpa

## API:(我只列出幾個root)

+ 用戶動作：

  http://localhost:8081/account

+ 購物車：

  http://localhost:8081/shoppingcart

+ 購物清單：

  http://localhost:8081/accountorder

+ 商品：

  http://localhost:8081/product