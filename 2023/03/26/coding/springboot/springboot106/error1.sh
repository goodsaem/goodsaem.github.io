
██████╗  ██████╗  ██████╗ ██████╗ ███████╗ █████╗ ███████╗███╗   ███╗
██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝████╗ ████║
██║  ███╗██║   ██║██║   ██║██║  ██║███████╗███████║█████╗  ██╔████╔██║
██║   ██║██║   ██║██║   ██║██║  ██║╚════██║██╔══██║██╔══╝  ██║╚██╔╝██║
╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝███████║██║  ██║███████╗██║ ╚═╝ ██║
╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝
:: Spring Boot ::                         ver : 2.4.3
2021-03-18 00:01:07.833  INFO 48562 --- [           main] io.github.goodsaem.api.ApiApplication    : Starting ApiApplication using Java 1.8.0_275 on goodsaemui-iMac.local with PID 48562 (/Users/goodsaem/goodsaem/api/build/classes/java/main started by goodsaem in /Users/goodsaem/goodsaem/api)
2021-03-18 00:01:07.835  INFO 48562 --- [           main] io.github.goodsaem.api.ApiApplication    : No active profile set, falling back to default profiles: default
2021-03-18 00:01:08.228  INFO 48562 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2021-03-18 00:01:08.260  INFO 48562 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 27 ms. Found 2 JPA repository interfaces.
2021-03-18 00:01:08.539  INFO 48562 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 9090 (http)
2021-03-18 00:01:08.544  INFO 48562 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-03-18 00:01:08.544  INFO 48562 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.43]
2021-03-18 00:01:08.606  INFO 48562 --- [           main] o.a.c.c.C.[.[localhost].[/spring]        : Initializing Spring embedded WebApplicationContext
2021-03-18 00:01:08.606  INFO 48562 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 744 ms
2021-03-18 00:01:08.726  INFO 48562 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2021-03-18 00:01:08.752  INFO 48562 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.4.28.Final
2021-03-18 00:01:08.821  INFO 48562 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2021-03-18 00:01:08.875  INFO 48562 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2021-03-18 00:01:08.935  INFO 48562 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2021-03-18 00:01:08.943  INFO 48562 --- [           main] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.MariaDBDialect
2021-03-18 00:01:09.232  INFO 48562 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2021-03-18 00:01:09.238  INFO 48562 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2021-03-18 00:01:09.399  WARN 48562 --- [           main] o.apache.ignite.internal.util.typedef.G  : Ignite work directory is not provided, automatically resolved to: /Users/goodsaem/goodsaem/api/ignite/work
2021-03-18 00:01:09.446  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       :

>>>    __________  ________________
>>>   /  _/ ___/ |/ /  _/_  __/ __/
>>>  _/ // (7 7    // /  / / / _/
>>> /___/\___/_/|_/___/ /_/ /___/
>>>
>>> ver. 2.9.1#20201203-sha1:adcce517
>>> 2020 Copyright(C) Apache Software Foundation
>>>
>>> Ignite documentation: http://ignite.apache.org

[00:01:09]    __________  ________________
[00:01:09]   /  _/ ___/ |/ /  _/_  __/ __/
[00:01:09]  _/ // (7 7    // /  / / / _/
[00:01:09] /___/\___/_/|_/___/ /_/ /___/
[00:01:09]
[00:01:09] ver. 2.9.1#20201203-sha1:adcce517
[00:01:09] 2020 Copyright(C) Apache Software Foundation
[00:01:09]
[00:01:09] Ignite documentation: http://ignite.apache.org
[00:01:09]
[00:01:09] Quiet mode.
[00:01:09]   ^-- Logging by 'Slf4jLogger [impl=Logger[o.a.i.i.IgniteKernal%GoodSaem-Grid], quiet=true]'
[00:01:09]   ^-- To see **FULL** console log here add -DIGNITE_QUIET=false or "-v" to ignite.{sh|bat}
[00:01:09]
2021-03-18 00:01:09.449  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Config URL: n/a
2021-03-18 00:01:09.459  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : IgniteConfiguration [igniteInstanceName=GoodSaem-Grid, pubPoolSize=8, svcPoolSize=8, callbackPoolSize=2, stripedPoolSize=8, sysPoolSize=8, mgmtPoolSize=2, dataStreamerPoolSize=1, utilityCachePoolSize=8, utilityCacheKeepAliveTime=60000, p2pPoolSize=2, qryPoolSize=2, buildIdxPoolSize=1, igniteHome=null, igniteWorkDir=/Users/goodsaem/goodsaem/api/ignite/work, mbeanSrv=com.sun.jmx.mbeanserver.JmxMBeanServer@1d56ce6a, nodeId=87bb368a-9f10-4b7d-92be-aa6a243b5a26, marsh=BinaryMarshaller [], marshLocJobs=false, daemon=false, p2pEnabled=false, netTimeout=5000, netCompressionLevel=1, sndRetryDelay=1000, sndRetryCnt=3, metricsHistSize=10000, metricsUpdateFreq=2000, metricsExpTime=9223372036854775807, discoSpi=TcpDiscoverySpi [addrRslvr=null, sockTimeout=0, ackTimeout=0, marsh=null, reconCnt=10, reconDelay=2000, maxAckTimeout=600000, soLinger=0, forceSrvMode=false, clientReconnectDisabled=false, internalLsnr=null, skipAddrsRandomization=false], segPlc=STOP, segResolveAttempts=2, waitForSegOnStart=true, allResolversPassReq=true, segChkFreq=10000, commSpi=TcpCommunicationSpi [connectGate=null, connPlc=org.apache.ignite.spi.communication.tcp.TcpCommunicationSpi$FirstConnectionPolicy@640d604, chConnPlc=null, enableForcibleNodeKill=false, enableTroubleshootingLog=false, locAddr=null, locHost=null, locPort=47100, locPortRange=100, shmemPort=-1, directBuf=true, directSndBuf=false, idleConnTimeout=600000, connTimeout=5000, maxConnTimeout=600000, reconCnt=10, sockSndBuf=32768, sockRcvBuf=32768, msgQueueLimit=0, slowClientQueueLimit=0, nioSrvr=null, shmemSrv=null, usePairedConnections=false, connectionsPerNode=1, tcpNoDelay=true, filterReachableAddresses=false, ackSndThreshold=32, unackedMsgsBufSize=0, sockWriteTimeout=2000, boundTcpPort=-1, boundTcpShmemPort=-1, selectorsCnt=4, selectorSpins=0, forceClientToSrvConnections=false, addrRslvr=null, ctxInitLatch=java.util.concurrent.CountDownLatch@62cbc478[Count = 1], stopping=false, metricsLsnr=null, connectionRequestor=null], evtSpi=org.apache.ignite.spi.eventstorage.NoopEventStorageSpi@5438fa43, colSpi=NoopCollisionSpi [], deploySpi=LocalDeploymentSpi [], indexingSpi=org.apache.ignite.spi.indexing.noop.NoopIndexingSpi@615db358, addrRslvr=null, encryptionSpi=org.apache.ignite.spi.encryption.noop.NoopEncryptionSpi@256bb5be, tracingSpi=org.apache.ignite.spi.tracing.NoopTracingSpi@5fef0c19, clientMode=false, rebalanceThreadPoolSize=1, rebalanceTimeout=10000, rebalanceBatchesPrefetchCnt=3, rebalanceThrottle=0, rebalanceBatchSize=524288, txCfg=TransactionConfiguration [txSerEnabled=false, dfltIsolation=REPEATABLE_READ, dfltConcurrency=PESSIMISTIC, dfltTxTimeout=0, txTimeoutOnPartitionMapExchange=0, deadlockTimeout=10000, pessimisticTxLogSize=0, pessimisticTxLogLinger=10000, tmLookupClsName=null, txManagerFactory=null, useJtaSync=false], cacheSanityCheckEnabled=true, discoStartupDelay=60000, deployMode=SHARED, p2pMissedCacheSize=100, locHost=null, timeSrvPortBase=31100, timeSrvPortRange=100, failureDetectionTimeout=10000, sysWorkerBlockedTimeout=null, clientFailureDetectionTimeout=30000, metricsLogFreq=60000, connectorCfg=ConnectorConfiguration [jettyPath=null, host=null, port=11211, noDelay=true, directBuf=false, sndBufSize=32768, rcvBufSize=32768, idleQryCurTimeout=600000, idleQryCurCheckFreq=60000, sndQueueLimit=0, selectorCnt=4, idleTimeout=7000, sslEnabled=false, sslClientAuth=false, sslCtxFactory=null, sslFactory=null, portRange=100, threadPoolSize=8, msgInterceptor=null], odbcCfg=null, warmupClos=null, atomicCfg=AtomicConfiguration [seqReserveSize=1000, cacheMode=PARTITIONED, backups=1, aff=null, grpName=null], classLdr=null, sslCtxFactory=null, platformCfg=null, binaryCfg=BinaryConfiguration [idMapper=null, nameMapper=null, serializer=null, compactFooter=false], memCfg=null, pstCfg=null, dsCfg=DataStorageConfiguration [sysRegionInitSize=41943040, sysRegionMaxSize=104857600, pageSize=0, concLvl=0, dfltDataRegConf=DataRegionConfiguration [name=default, maxSize=8589934592, initSize=268435456, swapPath=null, pageEvictionMode=DISABLED, evictionThreshold=0.9, emptyPagesPoolSize=100, metricsEnabled=false, metricsSubIntervalCount=5, metricsRateTimeInterval=60000, persistenceEnabled=false, checkpointPageBufSize=0, lazyMemoryAllocation=true], dataRegions=null, storagePath=null, checkpointFreq=180000, lockWaitTime=10000, checkpointThreads=4, checkpointWriteOrder=SEQUENTIAL, walHistSize=20, maxWalArchiveSize=1073741824, walSegments=10, walSegmentSize=67108864, walPath=db/wal, walArchivePath=db/wal/archive, metricsEnabled=false, walMode=LOG_ONLY, walTlbSize=131072, walBuffSize=0, walFlushFreq=2000, walFsyncDelay=1000, walRecordIterBuffSize=67108864, alwaysWriteFullPages=false, fileIOFactory=org.apache.ignite.internal.processors.cache.persistence.file.AsyncFileIOFactory@285a4fe3, metricsSubIntervalCnt=5, metricsRateTimeInterval=60000, walAutoArchiveAfterInactivity=-1, writeThrottlingEnabled=false, walCompactionEnabled=false, walCompactionLevel=1, checkpointReadLockTimeout=null, walPageCompression=DISABLED, walPageCompressionLevel=null], snapshotPath=snapshots, activeOnStart=true, activeOnStartPropSetFlag=false, autoActivation=true, autoActivationPropSetFlag=false, clusterStateOnStart=null, sqlConnCfg=null, cliConnCfg=ClientConnectorConfiguration [host=null, port=10800, portRange=100, sockSndBufSize=0, sockRcvBufSize=0, tcpNoDelay=true, maxOpenCursorsPerConn=128, threadPoolSize=8, idleTimeout=0, handshakeTimeout=10000, jdbcEnabled=true, odbcEnabled=true, thinCliEnabled=true, sslEnabled=false, useIgniteSslCtxFactory=true, sslClientAuth=false, sslCtxFactory=null, thinCliCfg=ThinClientConfiguration [maxActiveTxPerConn=100, maxActiveComputeTasksPerConn=0]], mvccVacuumThreadCnt=2, mvccVacuumFreq=5000, authEnabled=false, failureHnd=null, commFailureRslvr=null, sqlCfg=SqlConfiguration [longQryWarnTimeout=3000, dfltQryTimeout=0, sqlQryHistSize=1000, validationEnabled=false]]
2021-03-18 00:01:09.459  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Daemon mode: off
[00:01:09] OS: Mac OS X 10.16 x86_64
2021-03-18 00:01:09.460  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : OS: Mac OS X 10.16 x86_64
2021-03-18 00:01:09.460  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : OS user: goodsaem
2021-03-18 00:01:09.460  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : PID: 48562
[00:01:09] VM information: OpenJDK Runtime Environment 1.8.0_275-b01 Amazon.com Inc. OpenJDK 64-Bit Server VM 25.275-b01
2021-03-18 00:01:09.460  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Language runtime: Java Platform API Specification ver. 1.8
2021-03-18 00:01:09.460  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : VM information: OpenJDK Runtime Environment 1.8.0_275-b01 Amazon.com Inc. OpenJDK 64-Bit Server VM 25.275-b01
2021-03-18 00:01:09.461  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : VM total memory: 8.9GB
2021-03-18 00:01:09.461  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Remote Management [restart: off, REST: on, JMX (remote: on, port: <n/a>, auth: off, ssl: on)]
2021-03-18 00:01:09.461  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Logger: Slf4jLogger [impl=Logger[org.apache.ignite.internal.IgniteKernal%GoodSaem-Grid], quiet=true]
2021-03-18 00:01:09.461  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : IGNITE_HOME=null
2021-03-18 00:01:09.462  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : VM arguments: [-XX:TieredStopAtLevel=1, -Xverify:none, -Dspring.output.ansi.enabled=always, -javaagent:/Applications/IntelliJ IDEA.app/Contents/lib/idea_rt.jar=53083:/Applications/IntelliJ IDEA.app/Contents/bin, -Dcom.sun.management.jmxremote, -Dspring.jmx.enabled=true, -Dspring.liveBeansView.mbeanDomain, -Dspring.application.admin.enabled=true, -Dfile.encoding=UTF-8]
2021-03-18 00:01:09.462  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : System cache's DataRegion size is configured to 40 MB. Use DataStorageConfiguration.systemRegionInitialSize property to change the setting.
2021-03-18 00:01:09.462  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Configured caches [in 'sysMemPlc' dataRegion: ['ignite-sys-cache']]
2021-03-18 00:01:09.462  WARN 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Please set system property '-Djava.net.preferIPv4Stack=true' to avoid possible problems in mixed environments.
[00:01:09] Please set system property '-Djava.net.preferIPv4Stack=true' to avoid possible problems in mixed environments.
2021-03-18 00:01:09.464  WARN 48562 --- [%GoodSaem-Grid%] o.apache.ignite.internal.GridDiagnostic  : JMX remote management is enabled but JMX port is either not set or invalid. Check system property 'com.sun.management.jmxremote.port' to make sure it specifies valid TCP/IP port.
[00:01:09] Configured plugins:
2021-03-18 00:01:09.499  INFO 48562 --- [           main] o.a.i.i.p.plugin.IgnitePluginProcessor   : Configured plugins:
[00:01:09]   ^-- None
2021-03-18 00:01:09.499  INFO 48562 --- [           main] o.a.i.i.p.plugin.IgnitePluginProcessor   :   ^-- None
[00:01:09]
2021-03-18 00:01:09.499  INFO 48562 --- [           main] o.a.i.i.p.plugin.IgnitePluginProcessor   :
[00:01:09] Configured failure handler: [hnd=StopNodeOrHaltFailureHandler [tryStop=false, timeout=0, super=AbstractFailureHandler [ignoredFailureTypes=UnmodifiableSet [SYSTEM_WORKER_BLOCKED, SYSTEM_CRITICAL_OPERATION_TIMEOUT]]]]
2021-03-18 00:01:09.502  INFO 48562 --- [           main] o.a.i.i.p.failure.FailureProcessor       : Configured failure handler: [hnd=StopNodeOrHaltFailureHandler [tryStop=false, timeout=0, super=AbstractFailureHandler [ignoredFailureTypes=UnmodifiableSet [SYSTEM_WORKER_BLOCKED, SYSTEM_CRITICAL_OPERATION_TIMEOUT]]]]
2021-03-18 00:01:09.614  INFO 48562 --- [           main] o.a.i.s.c.tcp.TcpCommunicationSpi        : Successfully bound communication NIO server to TCP port [port=47100, locHost=0.0.0.0/0.0.0.0, selectorsCnt=4, selectorSpins=0, pairedConn=false]
2021-03-18 00:01:09.617  WARN 48562 --- [           main] o.a.i.s.c.tcp.TcpCommunicationSpi        : Message queue limit is set to 0 which may lead to potential OOMEs when running cache operations in FULL_ASYNC or PRIMARY_SYNC modes due to message queues growth on sender and receiver sides.
[00:01:09] Message queue limit is set to 0 which may lead to potential OOMEs when running cache operations in FULL_ASYNC or PRIMARY_SYNC modes due to message queues growth on sender and receiver sides.
2021-03-18 00:01:09.622  WARN 48562 --- [           main] o.a.i.s.c.noop.NoopCheckpointSpi         : Checkpoints are disabled (to enable configure any GridCheckpointSpi implementation)
2021-03-18 00:01:09.634  WARN 48562 --- [           main] o.a.i.i.m.c.GridCollisionManager         : Collision resolution is disabled (all jobs will be activated upon arrival).
[00:01:09] Security status [authentication=off, sandbox=off, tls/ssl=off]
2021-03-18 00:01:09.635  INFO 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Security status [authentication=off, sandbox=off, tls/ssl=off]
2021-03-18 00:01:09.728  INFO 48562 --- [           main] o.a.i.spi.discovery.tcp.TcpDiscoverySpi  : Successfully bound to TCP port [port=47500, localHost=0.0.0.0/0.0.0.0, locNodeId=87bb368a-9f10-4b7d-92be-aa6a243b5a26]
2021-03-18 00:01:09.755  WARN 48562 --- [           main] i.p.c.p.IgniteCacheDatabaseSharedManager : DataRegionConfiguration.maxWalArchiveSize instead DataRegionConfiguration.walHistorySize would be used for removing old archive wal files
2021-03-18 00:01:09.761  INFO 48562 --- [           main] i.p.c.p.IgniteCacheDatabaseSharedManager : Configured data regions initialized successfully [total=3]
2021-03-18 00:01:09.768  INFO 48562 --- [           main] o.a.i.i.p.c.d.d.t.PartitionsEvictManager : Evict partition permits=2
2021-03-18 00:01:09.803  WARN 48562 --- [           main] o.a.i.i.p.query.h2.IgniteH2Indexing      : Serialization of Java objects in H2 was enabled.
2021-03-18 00:01:09.826 ERROR 48562 --- [           main] o.a.i.i.IgniteKernal%GoodSaem-Grid       : Exception during start processors, node will be stopped and close connections