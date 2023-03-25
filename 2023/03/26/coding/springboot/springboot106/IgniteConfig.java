package io.github.goodsaem.api.config;

import lombok.extern.slf4j.Slf4j;
import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteException;
import org.apache.ignite.IgniteLogger;
import org.apache.ignite.Ignition;
import org.apache.ignite.configuration.BinaryConfiguration;
import org.apache.ignite.configuration.ConnectorConfiguration;
import org.apache.ignite.configuration.IgniteConfiguration;
import org.apache.ignite.logger.slf4j.Slf4jLogger;
import org.apache.ignite.spi.discovery.tcp.TcpDiscoverySpi;
import org.apache.ignite.spi.discovery.tcp.ipfinder.vm.TcpDiscoveryVmIpFinder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.Collections;

@Configuration
@Slf4j
public class IgniteConfig {
    @Bean
    public IgniteConfiguration igniteConfiguration() {
        System.setProperty("IGNITE_JETTY_PORT","8888");
        IgniteConfiguration igniteConfiguration = new IgniteConfiguration();
        igniteConfiguration.setClientMode(false);
        ConnectorConfiguration connectorConfiguration = new ConnectorConfiguration();
        connectorConfiguration.setPort(47500);
        igniteConfiguration.setMetricsLogFrequency(60000);
        igniteConfiguration.setQueryThreadPoolSize(2);
        igniteConfiguration.setDataStreamerThreadPoolSize(1);
        igniteConfiguration.setManagementThreadPoolSize(2);
        igniteConfiguration.setRebalanceThreadPoolSize(1);
        igniteConfiguration.setAsyncCallbackPoolSize(2);
        igniteConfiguration.setPeerClassLoadingEnabled(false);
        IgniteLogger log = new Slf4jLogger();
        igniteConfiguration.setGridLogger(log);
        igniteConfiguration.setIgniteInstanceName("GoodSaem-Grid");
        BinaryConfiguration binaryConfiguration = new BinaryConfiguration();
        binaryConfiguration.setCompactFooter(false);
        igniteConfiguration.setBinaryConfiguration(binaryConfiguration);
        TcpDiscoverySpi tcpDiscoverySpi = new TcpDiscoverySpi();
        TcpDiscoveryVmIpFinder tcpDiscoveryVmIpFinder = new TcpDiscoveryVmIpFinder();
        tcpDiscoveryVmIpFinder.setAddresses(Collections.singletonList("127.0.0.1:47500..47509"));
        tcpDiscoverySpi.setIpFinder(tcpDiscoveryVmIpFinder);
        igniteConfiguration.setDiscoverySpi(tcpDiscoverySpi);
        return igniteConfiguration;
    }

    @Bean(destroyMethod = "close", name="ignite")
    public Ignite ignite(IgniteConfiguration igniteConfiguration) throws IgniteException{
        Ignite ignite = Ignition.start(igniteConfiguration);
        ignite.cluster().active(true);
        return ignite;
    }
}