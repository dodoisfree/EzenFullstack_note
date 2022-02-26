# 멀티미디어

멀티미디어 요소들은 문장으로 인식된다.

## #01. 이미지

### 1) 이미지 넣기

```html
<img src="파일경로" [width="넓이"] [height="높이"] [alt="설명"] />
```
- width나 height중 하나만 부여할 경우 나머지 값은 비율에 따라 자동 변경

### 2) 이미지 캡션 삽입하기

```html
<figure>
    <img src="파일경로" [width="넓이"] [height="높이"] [alt="설명"] />
    <figcaption>캡션 내용</figcaption>
</figure>
```

- 이미지는 여러장을 동시에 포함시킬 수 있다.
- 캡션 내용은 문장 관련 요소들을 포함할 수 있다.


## #02. 멀티미디어

### 1) 오디오

```html
<audio src="파일경로"  [controls]  [loop]  [autoplay]></audio>
```

- controls : 화면상에 슬라이드바를 포함한 컨트롤러를 표시함. 속성을 명시하지 않은 경우 배경음악 효과.(아무것도 보이지 않음)
- loop : 반복재생
- autoplay : 자동재생 (Chrome에서는 동작하지 않음)

> autoplay가 동작하지 않는 문제는 javascript로 해결해야 함

### 2) 비디오

```html
<video src="파일경로"  [controls]  [loop]  [autoplay] [preload]
  [poster="미리보기이미지경로"] [width="넓이"] [height="높이"]></video>
```

> audio, video 태그는 html만으로 사용하기 보다는 javascript와 함께 사용하여 세세하게 컨트롤할 수 있는 기능을 제공하는 것이 일반적 (ex: youtube)