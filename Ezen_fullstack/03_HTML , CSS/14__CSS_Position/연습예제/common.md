# HTML 요소배치

## 기본 CSS
```css
@charset 'utf-8';

* { padding: 0; margin: 0; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.pull-left { float: left; }
.pull-right { float: right; }
.clearfix:after { content: ''; display: block; clear: both; float: none; }
```

## 기본 HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <style>
        .container {
            width: 1000px;
            background-color: #eee;
            margin: auto;
        }

        .logo {
            width: 300px;
            height: 100px;
            background-color: #ff6600;
        }

        .side1 {
            width: 80px;
            height: 80px;
            background-color: #ff00ff;
        }

        .side2 {
            width: 80px;
            height: 80px;
            background-color: #00ff00;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">logo</div>
        <div class="side1">side1</div>
        <div class="side2">side2</div>
    </div>
</body>
</html>
```
## 결과물
<img src="res/base.png">
<br/><br/>

----

### case1 : 모두 왼쪽정렬 / 미리 만들어 둔 클래스만으로 float 처리
#### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <style>
        .container {
            width: 1000px;
            background-color: #eee;
            margin: auto;
        }

        .logo {
            width: 300px;
            height: 100px;
            background-color: #ff6600;
        }

        .side1 {
            width: 80px;
            height: 80px;
            background-color: #ff00ff;
        }

        .side2 {
            width: 80px;
            height: 80px;
            background-color: #00ff00;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <div class="logo pull-left">logo</div>
        <div class="side1 pull-left">side1</div>
        <div class="side2 pull-left">side2</div>
    </div>
</body>
</html>
```
### 결과물
<img src="res/c1.png">
<br/><br/>

---

### case2 : 로고는 왼쪽, 메뉴 요소들은 오른쪽
#### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <style>
        .container {
            width: 1000px;
            background-color: #eee;
            margin: auto;
        }

        .logo {
            width: 300px;
            height: 100px;
            background-color: #ff6600;
        }

        .side1 {
            width: 80px;
            height: 80px;
            background-color: #ff00ff;
        }

        .side2 {
            width: 80px;
            height: 80px;
            background-color: #00ff00;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <div class="logo pull-left">logo</div>
        <div class="side1 pull-right">side1</div>
        <div class="side2 pull-right">side2</div>
    </div>
</body>
</html>
```
### 결과물
<img src="res/c2.png">
<br/><br/>

---

### case3 : 로고는 중앙, 메뉴 요소들은 양 끝을 기준으로 간격 조절

#### 추가 CSS
```css
@charset 'utf-8';

* { padding: 0; margin: 0; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.pull-left { float: left; }
.pull-right { float: right; }
.clearfix:after { content: ''; display: block; clear: both; float: none; }

.logo {
    width: 300px;
    height: 100px;
    background-color: #ff6600;
    /* (추가) 절대좌표 방식 */
    position: absolute;
    /* (추가) box의 좌측 상단 꼭지점을 부모 중앙에 맞춤 */
    left: 50%;
    top: 50%;
    /* (추가) 스스로의 반만큼 반대로 이동 */
    margin-left: -150px;
    margin-top: -50px;
}
```
#### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <style>
        .container {
            width: 1000px;
            background-color: #eee;
            margin: auto;
        }

        .logo {
            width: 300px;
            height: 100px;
            background-color: #ff6600;
        }

        .side1 {
            width: 80px;
            height: 80px;
            background-color: #ff00ff;
        }

        .side2 {
            width: 80px;
            height: 80px;
            background-color: #00ff00;
        }
    </style>
</head>
<body>
    <div class="container clearfix">
        <div class="logo">logo</div>
        <div class="side1 pull-left">side1</div>
        <div class="side2 pull-right">side2</div>
    </div>
</body>
</html>
```
### 결과물
<img src="res/c3.png">
<br/><br/>

---

### 5) case4 : 모두 가운데에서 출발. 간격조절

#### 추가 CSS
```css
@charset 'utf-8';

* { padding: 0; margin: 0; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.pull-left { float: left; }
.pull-right { float: right; }
.clearfix:after { content: ''; display: block; clear: both; float: none; }

.container {
    width: 1000px;
    background-color: #eee;
    margin: auto;

    /* (추가) .logo의 좌표 기준점 설정 */
    position: relative;
    height: 150px;
}

.logo {
    width: 300px;
    height: 100px;
    background-color: #ff6600;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -50px;

}

.side1 {
    width: 80px;
    height: 80px;
    background-color: #ff00ff;

    /* (추가) */
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -240px;
    margin-top: -40px;
}

.side2 {
    width: 80px;
    height: 80px;
    background-color: #00ff00;

    /* (추가) */
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: 160px;
    margin-top: -40px;
}
```
#### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <style>
        .container {
            width: 1000px;
            background-color: #eee;
            margin: auto;
        }

        .logo {
            width: 300px;
            height: 100px;
            background-color: #ff6600;
        }

        .side1 {
            width: 80px;
            height: 80px;
            background-color: #ff00ff;
        }

        .side2 {
            width: 80px;
            height: 80px;
            background-color: #00ff00;
        }
    </style>
</head>
<body>
<!-- float 사용 안함 -->
<div class="container">
    <div class="logo">logo</div>
    <div class="side1">side1</div>
    <div class="side2">side2</div>
</div>
</body>
</html>
```
### 결과물
<img src="res/c4.png">
<br/>