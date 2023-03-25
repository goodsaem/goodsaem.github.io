server {
    server_name  goodsaem.ml;
    charset utf-8;
    access_log  /var/log/nginx/localhost.access.log  main;
    error_log /var/log/nginx/localhost.error.log;
    root /usr/share/nginx/html;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    error_page 405 =200 $uri;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        proxy_pass   http://127.0.0.1;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;

        fastcgi_pass 127.0.0.1:9000;
        proxy_redirect off;
        fastcgi_intercept_errors on;
        fastcgi_read_timeout 300;
        fastcgi_send_timeout 300;
    }

    location ~ /\.ht {
        deny  all;
    }

    location = /xmlrpc.php {
        deny all;
        error_page 403 = /403.html;
    }


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/goodsaem.ml/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/goodsaem.ml/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
    if ($host = goodsaem.ml) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen       80;
    server_name  goodsaem.ml;
    return 404; # managed by Certbot


}