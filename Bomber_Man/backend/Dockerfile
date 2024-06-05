FROM python:3.9-slim
# 更新並安裝所需的軟件包，包括 nodejs 和 npm
RUN apt-get update && \
    apt-get install -y \
    mariadb-client \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
# 複製項目文件到工作目錄
COPY . /app
# 安裝 Python 依賴
RUN pip install --no-cache-dir -r requirements.txt
# 安裝 http-server 套件
RUN npm install -g http-server
# 開放端口
EXPOSE 8080
# 啟動容器時執行的命令
CMD ["sh", "-c", "until mysql -h db -u root -pa12345 -e 'select 1' &> /dev/null; do echo 'Waiting for MySQL to be ready...'; sleep 10; done; echo 'MySQL is ready'; http-server -c-1 -o ./test.html & python app.py"]
