FROM python:3.9-slim
RUN apt-get update && \
    apt-get install -y \
    mariadb-client \
    && rm -rf /var/lib/apt/lists/*WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8080
CMD ["sh", "-c", "until mysql -h db -u root -pa12345 -e 'select 1' &> /dev/null; do echo 'Waiting for MySQL to be ready...'; sleep 10; done; echo 'MySQL is ready'; python app.py"]
