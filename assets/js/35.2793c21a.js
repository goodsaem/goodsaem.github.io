(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1124:function(s,a,t){s.exports=t.p+"assets/img/1.550c8ea2.jpg"},1125:function(s,a,t){s.exports=t.p+"assets/img/2.536089bb.jpg"},1126:function(s,a,t){s.exports=t.p+"assets/img/3.88bad9f0.jpg"},1257:function(s,a,t){"use strict";t.r(a);var n=t(119),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_7-swagger-3-x-with-springboot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-swagger-3-x-with-springboot"}},[s._v("#")]),s._v(" "),n("i",{staticClass:"fa fa-database"}),s._v(" 7. Swagger 3.x with springboot")]),s._v(" "),n("p",[s._v("프로젝트를 진행할때 frontend와 backend 개발자가 다른경우가 많습니다. 이때 백엔드 개발자가 만든 api 사용법에 대해서 알려주어야\n되는데 보통 엑셀 같은걸로 정리해서 보내주는데 그런 문서 작업하는것도 공수가 많이 들어가죠 이때 유용하게 사용할수 있는게 swagger 입니다.\nswagger 들어가서 보시구요~ 거기서 테스트도 가능합니다. 라고 하면 불필요하게 문서 만들필요도 없고 바로바로 테스트 해볼수 있는 장점이 있고\n백엔드 개발자도 자신이 만든 코드가 제되로 동작하는지 바로 확인이 가능합니다.")]),s._v(" "),n("h2",{attrs:{id:"_1-directory-structure-and-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-directory-structure-and-files"}},[s._v("#")]),s._v(" 1. Directory structure and files")]),s._v(" "),n("p",[s._v("디렉토리 구조 및 추가할 파일 들입니다.")]),s._v(" "),n("p",[s._v("build.gradle 파일에 swagger 관련 라이브러리를 추가하고 config에 swagger 3.0 기준의 설정파일을 추가합니다.")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("build.gradle\nsrc\n└── main\n    ├── java\n    │   └── io.github.goodsaem.api\n    │           ├── config\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    ├── IgniteConfig.java\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    └── SwaggerUiWebMvcConfigurer.java\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    └── WebConfig.java\n    │           ├── ApiApplication.java\n    │           ├── controller\n    │           │    │   └── v1\n    │           │    │        ├── HCodeController.java\n    │           │    │        └── MemoController.java\n    │           │    └── MyController.java\n    │           ├── entity\n    │           │    ├── HCode.java\n    │           │    └── Memo.java\n    │           ├── "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n    │           │    ├── HCodeService.java\n    │           │    └── IHCodeService.java\n    │           ├── repo\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     ├── HCodeRepo.java\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     └── MemoJpaRepo.java\n    │           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    │           └── store\n    │                 └── DataStore.java\n    └── resources\n        ├── application.yml\n        ├── banner.txt\n        └── templates\n            ├── hcode.ftlh\n            └── goodsaem.ftlh")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"_2-to-apply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-to-apply"}},[s._v("#")]),s._v(" 2. To apply")]),s._v(" "),n("p",[s._v("적용은 간단합니다. build.gradle 아래 2줄을 추가 합니다.")]),s._v(" "),n("div",{staticClass:"language-gradle line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("buildscript {\n\text {\n\t\tapacheIgniteVersion = '2.9.1'\n\t\tspringBootVersion = '2.4.3'\n\t}\n\trepositories {\n\t\tmavenCentral()\n\t}\n\tdependencies {\n\t\tclasspath(\n\t\t\t\t\"org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}\")\n\t}\n}\n\napply plugin: 'org.springframework.boot'\napply plugin: 'war'\napply plugin: 'io.spring.dependency-management'\nsourceCompatibility = '1.8'\ntargetCompatibility = '1.8'\n\n\ngroup = 'io.github.goodsaem'\nversion = '0.0.1-SNAPSHOT'\n\nconfigurations {\n\tcompileOnly {\n\t\textendsFrom annotationProcessor\n\t}\n}\n\nrepositories {\n\tmavenCentral()\n}\n\ndependencies {\n\timplementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n\timplementation 'org.springframework.boot:spring-boot-starter-freemarker'\n\timplementation 'org.springframework.boot:spring-boot-starter-web'\n\timplementation 'org.springframework.boot:spring-boot-autoconfigure'\n\timplementation(\"org.mariadb.jdbc:mariadb-java-client\")\n\timplementation group: 'com.h2database', name: 'h2', version: '1.4.196'\n\timplementation \"io.springfox:springfox-boot-starter:3.0.0\"\n\timplementation \"io.springfox:springfox-swagger-ui:3.0.0\"\n\n\tcompile \"org.apache.ignite:ignite-core:$apacheIgniteVersion\",\n\t\t\t\"org.apache.ignite:ignite-slf4j:$apacheIgniteVersion\",\n\t\t\t\"org.apache.ignite:ignite-spring:$apacheIgniteVersion\"\n\t\t\t\"org.apache.ignite:ignite-rest-http:$apacheIgniteVersion\"\n\n\tcompileOnly 'org.projectlombok:lombok'\n\tannotationProcessor 'org.projectlombok:lombok'\n\ttestImplementation 'org.springframework.boot:spring-boot-starter-test'\n}\n\ntest {\n\tuseJUnitPlatform()\n}")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br")])]),n("p",[s._v("그리고 나서 config 디렉토리에 아래 설정파일을 생성합니다. 여기까지 하면 설정은 끝납니다.")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goodsaem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceHandlerRegistry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ViewControllerRegistry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WebMvcConfigurer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SwaggerUiWebMvcConfigurer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WebMvcConfigurer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SwaggerUiWebMvcConfigurer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addResourceHandlers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceHandlerRegistry")]),s._v(" registry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringUtils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("trimTrailingCharacter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        registry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addResourceHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/swagger-ui/**"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addResourceLocations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classpath:/META-INF/resources/webjars/springfox-swagger-ui/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resourceChain")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addViewControllers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ViewControllerRegistry")]),s._v(" registry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        registry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addViewController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/swagger-ui/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setViewName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"forward:"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/swagger-ui/index.html"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h2",{attrs:{id:"_3-ui-directions-for-use"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-ui-directions-for-use"}},[s._v("#")]),s._v(" 3. ui directions for use")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://localhost:9090/spring/swagger-ui/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9090/spring/swagger-ui/"),n("OutboundLink")],1),s._v(" 로 접속합니다.\n아래와 같은 ui 화면을 확인할수 있습니다. 메모 컨트롤러 중 메모 등록 api를 클릭합니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1124),alt:"img"}})]),s._v(" "),n("p",[s._v("Try it out 버튼을 클릭하고 등록할 메모 정보를 json 형태로 작성합니다. 그리고 나서 Execute 버튼을 클릭하여 메모를 생성합니다.\n아래 그림결과를 보면 200 즉 정상 생성되었다는 메시지를 받았습니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1125),alt:"img"}})]),s._v(" "),n("p",[s._v("메모조회 api 를 클릭하여 제되로 등록되었는지 확인합니다. server respose body 부분 확인하면 위에서 생성한 메모를 확인할수 있습니다.")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1126),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"end"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[s._v("#")]),s._v(" end")]),s._v(" "),n("p",[s._v("api 문서도 만들어 주고 api 테스트도 해볼수 있는 유용한 tool이네요 사용해야 겠죠. 글 읽어 주셔서 감사합니다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);