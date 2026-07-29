package io.github.goodsaem.api.store;

import io.github.goodsaem.api.entity.HCode;
import io.github.goodsaem.api.service.IHCodeService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ignite.Ignite;
import org.apache.ignite.IgniteCache;
import org.apache.ignite.cache.CacheMode;
import org.apache.ignite.cache.CacheRebalanceMode;
import org.apache.ignite.configuration.CacheConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Slf4j
@Component
public class DataStore {
    @Autowired
    private IHCodeService ihCodeService;

    private final IgniteCache<String, List<HCode>> hCodeStore;

    DataStore(Ignite ignite) {
        hCodeStore = ignite.getOrCreateCache(getCacheConfiguration("hCodeStore"));
    }

    private CacheConfiguration getCacheConfiguration(String name) {
        CacheConfiguration cacheConfiguration = new CacheConfiguration();
        cacheConfiguration.setName(name);
        cacheConfiguration.setCacheMode(CacheMode.REPLICATED);
        cacheConfiguration.setRebalanceMode(CacheRebalanceMode.SYNC);
        cacheConfiguration.setStatisticsEnabled(true);
        return cacheConfiguration;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void setHCodeCache() {
        hCodeStore.remove("hCodeCache");
        Map<String,List<HCode>> hCodeMap = ihCodeService.getHCodeMap();
        if(hCodeMap != null) {
            hCodeStore.putAll(hCodeMap);
        }
        getHCodeCache();
    }

    public List<HCode> getHCodeCache() {
        List<HCode> hCodes = hCodeStore.get("hCodeCache");
        log.info("ignite hCodes.size() ===> " + hCodes.size());
        return hCodes;
    }
}