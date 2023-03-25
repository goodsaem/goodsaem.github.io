build.gradle
src
└── main
    ├── java
    │   └── io.github.goodsaem.api
    │           ├── config
    │           |    ├── IgniteConfig.java
    │           |    └── SwaggerUiWebMvcConfigurer.java
    │           |    └── WebConfig.java
    │           ├── ApiApplication.java
    │           ├── controller
    │           │    │   └── v1
    │           │    │        ├── HCodeController.java
    │           │    │        └── MemoController.java
    │           │    └── MyController.java
    │           ├── entity
    │           │    ├── HCode.java
    │           │    └── Memo.java
    │           ├── service
    │           │    ├── HCodeService.java
    │           │    ├── IHCodeService.java
    │           │    └── ResponseService.java
    │           ├── repo
    │           |     ├── HCodeRepo.java
    │           |     └── MemoJpaRepo.java
    │           ├── response
    │           |     └── Response.java
    │           |
    │           └── store
    │                 └── DataStore.java
    └── resources
        ├── application.yml
        ├── banner.txt
        └── templates
            ├── hcode.ftlh
            └── goodsaem.ftlh