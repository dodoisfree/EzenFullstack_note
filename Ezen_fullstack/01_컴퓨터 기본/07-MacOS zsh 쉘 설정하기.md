# MacOS zsh 쉘 설정하기

단원: 개발자 환경 구축

# #01. 기본 설치

---

## 1. 기본 쉘 환경 변경하기

```bash
chsh -s /bin/zsh
```

## 2. oh-my-zsh 설치하기

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 3. 플러그인 설치

### 문법 강조 플러그인 설치

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### 명령어 자동 완성 플러그인 설치

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

## 4. 초기화 파일 수정하기

설치 완료 후 vi에디터로 zsh 설정파일을 연다.

```bash
vi ~/.zshrc
```

### theme 변경

```bash
ZSH_THEME="af-magic"
```

### 설정 파일의 플러그인 설정 추가

```bash
plugins=(  
	git  
	zsh-syntax-highlighting   # 추가  
	zsh-autosuggestions       # 추가
)
```

## 5. 설정내용 반영하기

설정 완료 후 다음의 명령어로 설정내용을 반영한다.

```
source ~/.zshrc
```