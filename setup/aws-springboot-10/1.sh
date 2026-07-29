ubuntu@goodsaem:~$ java -jar hello-0.0.1-SNAPSHOT.war

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.4.4)

2021-03-26 23:47:09.084  INFO 819 --- [           main] g.github.io.hello.HelloApplication       : Starting HelloApplication using Java 1.8.0_282 on goodsaem with PID 819 (/home/ubuntu/hello-0.0.1-SNAPSHOT.war started by ubuntu in /home/ubuntu)
2021-03-26 23:47:09.095  INFO 819 --- [           main] g.github.io.hello.HelloApplication       : No active profile set, falling back to default profiles: default
2021-03-26 23:47:11.586  INFO 819 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 9090 (http)
2021-03-26 23:47:11.617  INFO 819 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-03-26 23:47:11.617  INFO 819 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.44]
2021-03-26 23:47:12.505  INFO 819 --- [           main] o.a.c.c.C.[.[localhost].[/spring]        : Initializing Spring embedded WebApplicationContext
2021-03-26 23:47:12.505  INFO 819 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 3273 ms
2021-03-26 23:47:13.495  INFO 819 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2021-03-26 23:47:13.927  INFO 819 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 9090 (http) with context path '/spring'
2021-03-26 23:47:13.955  INFO 819 --- [           main] g.github.io.hello.HelloApplication       : Started HelloApplication in 6.085 seconds (JVM running for 7.154)