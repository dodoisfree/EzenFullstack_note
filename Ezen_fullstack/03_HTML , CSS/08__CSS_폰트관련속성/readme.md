# 폰트 관련 속성

## #01. 글자 모양 관련 속성

글자의 모양은 문단, 문장 요소를 구분하지 않고 모든 HTML 요소에 적용 가능하다.

| 속성 | 설명 |
|--------|------|
| font-family | 글꼴의 이름을 쉼표로 구분하여 나열.<br/>글꼴 이름에 공백이나 "-"가 포함된 경우 글꼴 이름을 따옴표로 감싸야 한다.<br/>개발자 PC가 아닌 접속자 PC를 기준으로 하는 글꼴이 명시되어야 한다.<br/>접속자에게 글꼴이 설치되지 않은 경우 정상적으로 표시되지 않는다.<br/>ex) font-family: NanumGothic, Gulim, 궁서체 |
| font-size | 글자크기 (px단위를 주로 사용함) |
| font-style | 글자의 기울임 여부 --> italic, normal(기본값) |
| font-weight | 글자의 굵게 표현 여부<br/>border, bold, normal, light, lighter<br/>100~900사이의 100단위 숫자값을 사용하기도 한다.(400이 normal에 해당) |
| color | 글자 색상 |
| line-height | 한 줄의 높이 (px, %단위 표현) --> %단위인 경우 font-size를 기준으로 함 |
| font | 일괄표현 --> [style]  [weight] size[/line-height] family |

### `em` 단위

부모 요소에게 부여된 글자 크기를 `1em`으로 놓고 이에 대한 상대적인 크기를 지정하는 방식.

아래 코드에서 `.child`의 부모가 `100px`의 글자크기를 갖고 있기 때문에 `.child`에게 `1em`은 `100px`이 된다. 그러므로 `0.5em`은 `50px`이 된다.

```html
<style>
    .parent {
        font-size: 100px;
    }

    .child {
        font-size: 0.5em;
    }
</style>

<div class='parent'>
    <div class='child'>Hello World</div>
</div>
```




## #02. 웹 폰트

CSS에서 font-family 속성으로 지정한 글꼴이 접속자의 PC에 설치되어 있지 않을 경우 고르게 표시되지 않는 문제를 해결하기 위해 폰트파일을 온라인에 올려두고 접속자의 PC에 설치되어 있지 않은 경우 웹 상의 글꼴을 내려받아 사용할 수 있게 하는 기법

```CSS
@font-face {
    font-family: 사용자지정_폰트_이름;
    src: local('실제폰트이름'), url('웹상의_폰트파일_경로') format('truetype');
}
```

실제로 글꼴을 지정할 항목에 대하여 **사용자지정_폰트_이름**을 적용한다.

```CSS
selector {
    font-family: 사용자지정_폰트_이름
}
```

### 1) 구글 웹 폰트 (https://fonts.google.com)

- 구글에서 운영하는 무료 웹 폰트 사이트.
- 이곳에서 참조할 CSS 구문을 얻을 수 있다.

### 2) 아이콘 폰트 ([font awesome](https://fontawesome.com/))

- 특수문자에 반응하여 글꼴파일에 저장되어 있는 기호가 표시되게 하는 특수 폰트
- [font awesome](https://fontawesome.com/)이 가장 널리 알려져 있다.
    - version 4까지는 무료
    - version 5,6은 부분 유료화 됨, 도메인이 없는 경우 사용 불가.

### 3) Font awesome 4 (https://fontawesome.com/v4/)

무료로 도메인의 제약 없이 사용할 수 있는 가장 일반적인 버전.

#### 다운로드 받아 사용하기

- [https://fontawesome.com/v4/get-started/](https://fontawesome.com/v4/get-started/) 페이지의 중간 부분에서 "Download" 버튼을 클릭
- 다운로드 받은 파일의 압축을 해제하고 `css`폴더와 `fonts`폴더를 작업중인 위치로 복사.
- `css`폴더와 `fonts`폴더는 반드시 같은 폴더 안에 존재해야 함.
- html에서 `font-awesome.min.css` 파일을 참조.
    ```html
    <link rel='stylesheet' type='text/css' href='assets/css/font-awesome.min.css' />
    ```
- [https://fontawesome.com/v4/icons/](https://fontawesome.com/v4/icons/)에서 사용하고자 하는 폰트를 검색하여 사용.
    ```html
    <i class="fa fa-user" aria-hidden="true"></i>
    ```


#### CDN 방식 사용하기

파일을 직접 다운로드 받기 번거로운 경우 온라인에 공개되어 있는 CSS를 직접 참조하여 사용할 수 있다.

```html
<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
```