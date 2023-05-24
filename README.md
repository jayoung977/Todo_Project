# Todo_Project : todo 

![ezgif com-crop](https://github.com/jayoung977/Todo_Project/assets/61008837/2b1ba41f-e7b2-41bf-aa55-fd6cc26c2d93)

<!-- https://user-images.githubusercontent.com/61008837/235688430-1e4b795d-062b-4f3c-9a5d-db2bd8ef7a13.mp4 -->

## :star: 서비스 소개  
- **할일 목록(todo-list) 웹 어플리케이션 구현**


## :open_file_folder: 주요 기능
- **사용자는 할일을 추가/수정 할 수 있다.**
- **목록은 최근 추가 순으로 정렬된다.**
- **사용자는 작업을 완료처리 할 수 있다.**
- **사용자는 작업을 삭제처리 할 수 있다**


## :white_check_mark:프로젝트 구동 방법 
```
git clone https://github.com/jayoung977/Todo_Project.git
cd server
node app.js
```
```
cd client
sudo vi /etc/nginx/sites-available/my-todo-app.conf
```
```
#편집기 입력
server { 
        listen 80; 
        location / { 
                root /home/ubuntu/my-todo-app/client/build; 
                index index.html index.htm; 
                try_files $uri /index.html; 
        } 
}
```
sudo ln -s /etc/nginx/sites-available/my-todo-app.conf /etc/nginx/sites-enabled/my-todo-app.conf
sudo systemctl stop nginx
sudo systemctl start nginx 
sudo systemctl status nginx 
```
- aws 배포링크: http://3.106.52.247/

