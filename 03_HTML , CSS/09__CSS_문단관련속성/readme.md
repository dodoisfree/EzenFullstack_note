# 문단 관련 속성

## #01. 주요 문단 관련 속성

문단을 구성하는 HTML 요소에 적용해야 한다.

| 속성 | 설명 | 값 |
|--------|------|------|
| text-align | 텍스트의 가로축 정렬 | left, center, right |
| text-indent | 첫 번째 줄에 대한 들여쓰기 | px단위 값 |
| text-decoration | 밑줄, 윗줄, 취소선, 깜박임 효과 | none(기본값), underline, over-line, line-through, blink |
| vertical-align | 어떠한 요소를 기준으로 한 세로축 위치 | top, middle, bottom |
| letter-spacing | 글자간의 간격 (자간) | px, %, em |
| word-spacing | 단어간의 간격 (어간) | px, %, em |
| white-space | 줄 바꿈 속성 제어 | normal, nowrap |
| word-wrap | `white-space: normal`인 경우 줄바꿈의 기준을 단어나 글자로 설정한다. | normal(기본값)<br/>break-word(단어단위, 기본값과 동일)<br/>break-all(글자단위) |

- vertical-align: ~~을 기준으로 텍스트를 배치해야 하기 때문에 텍스트 주변의 이미지나 input 요소에게 부여해야 한다.
- text-decoration: blink 속성은 모든 브라우저에서 지원되지는 않는다.
- white-space : normal인 경우 공백을 기준으로 줄 바꿈이 되므로 공백이 없다면 줄바꿈 처리되지 않는다.
- word-wrap: break-word` 속성과 함께 사용하여 글자 단위로 무조건 줄바꿈 처리하도록 설정할 수 있다.

## #02. 텍스트 자동 말줄임 처리

```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

## #03. 텍스트 그림자 효과

```css
text-shadow:  x-offset   y-offset   blur-radius   color;
```
- x-offset : 본체와 그림자의 가로축 거리 (px단위), +값인 경우 오른쪽 방향
- y-offset : 본체와 그림자의 세로축 거리 (px단위)  +값인 경우 아래 방향
- blur-radius : 그림자의 번짐 정도 (px단위)
- color : 그림자의 색상

그림자 관련 값들을 콤마로 구분하여 여러개 지정할 경우 포토샵의 레이어 처럼 처리할 수 있다.
```css
text-shadow:  x-offset   y-offset   blur-radius   color,  <-- 맨 위의 레이어
              x-offset   y-offset   blur-radius   color,
              x-offset   y-offset   blur-radius   color,
              x-offset   y-offset   blur-radius   color;  <-- 맨 밑의 레이어
```
