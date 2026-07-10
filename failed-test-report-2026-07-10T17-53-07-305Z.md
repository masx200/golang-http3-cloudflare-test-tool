# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/7/10 17:53:07
- **数据来源**: connectivity_results-20260710-175306.json
- **总测试数**: 1069
- **失败测试数**: 9
- **成功测试数**: 1060
- **失败率**: 0.84%
- **平均延迟**: 49.24ms
- **最小延迟**: 33ms
- **最大延迟**: 2106ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/7/10 17:53:07
- **IP地址**: 2a09:bac5:638c:1246::1d2:90
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 37.1835, -121.7714
- **时区**: America/Los_Angeles
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 5 次 (55.6%)
- **DNS解析错误: 其他DNS错误**: 4 次 (44.4%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (5 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 128 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 401 | 34.143.159.175 | 34.143.159.175 | IPv4 | none | N/A | 0 | N/A | dial tcp 34.143.159.175:443: i/o timeout |
| 530 | local-aria2-webui.masx200.ddns-ip.net | 188.165.11.93 | IPv4 | none | N/A | 0 | N/A | dial tcp 188.165.11.93:443: i/o timeout |
| 724 | 168.138.165.174 | 168.138.165.174 | IPv4 | none | N/A | 0 | N/A | dial tcp 168.138.165.174:443: i/o timeout |
| 1038 | 198.41.194.162 | 198.41.194.162 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.194.162:443: i/o timeout |

#### DNS解析错误: 其他DNS错误 (4 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 382 | cf.zhetengsha.eu.org | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析失败: 未查询到任何IP记录 |
| 616 | stock.hostmonit.com | 154.9.224.237 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": tls: failed to verify certificate: x509: certificate is valid for api.hostmonit.com, not local-aria2-webui.masx200.ddns-ip.net |
| 1018 | www.csgo.com | 147.135.254.170 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": tls: failed to verify certificate: x509: certificate has expired or is not yet valid: current time 2026-07-10T17:52:40Z is after 2016-10-03T13:42:20Z |
| 1068 | 3.0.50.69 | 3.0.50.69 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": EOF |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 5 次 (55.6%)
- **DNS解析错误**: 4 次 (44.4%)

#### 错误模式分析

**超时集中度分析**: 共有 5 次超时，主要集中在IP段 198.41（2 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 6 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 1060 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 352 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 324 | 4444.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 34 | cloudflare |
| 325 | 4444.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 34 | cloudflare |
| 364 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 367 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 368 | steamdb.info | 104.20.34.212 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 371 | 104.18.39.196 | 104.18.39.196 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 396 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 488 | ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 534 | 104.26.15.85 | 104.26.15.85 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 540 | 456.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 639 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 641 | 104.18.39.15 | 104.18.39.15 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 718 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 923 | 104.25.240.227 | 104.25.240.227 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 972 | 172.64.229.134 | 172.64.229.134 | IPv4 | h2 | ✅ 成功 | 34 | cloudflare |
| 73 | cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 121 | 162.159.39.189 | 162.159.39.189 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 123 | 104.18.32.161 | 104.18.32.161 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 141 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 245 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 312 | cf.0sm.com | 2606:4700:3031::6815:785 | IPv6 | h2 | ✅ 成功 | 35 | cloudflare |
| 366 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 387 | www.whatismyip.com | 172.67.69.129 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 393 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 406 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 417 | iplocation.io | 172.67.70.100 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 445 | www.glassdoor.com | 104.17.64.70 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 500 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 537 | 456.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 538 | 456.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 539 | 456.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 610 | www.digitalocean.com | 104.19.173.68 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 620 | 104.17.156.81 | 104.17.156.81 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 749 | 104.18.39.228 | 104.18.39.228 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 788 | 172.64.52.189 | 172.64.52.189 | IPv4 | h2 | ✅ 成功 | 35 | cloudflare |
| 87 | 104.25.245.173 | 104.25.245.173 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 88 | 104.25.243.36 | 104.25.243.36 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 90 | 104.25.242.137 | 104.25.242.137 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 94 | 104.25.248.93 | 104.25.248.93 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 200 | 104.20.27.11 | 104.20.27.11 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 207 | 104.26.6.117 | 104.26.6.117 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 327 | 4444.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 343 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 378 | www.gov.ua | 104.21.23.72 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 380 | www.gov.ua | 2606:4700:3035::6815:1748 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 394 | zread.ai | 2606:4700:3037::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 416 | iplocation.io | 104.26.11.222 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 418 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 433 | braden.ns.cloudflare.com | 108.162.195.169 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 489 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 508 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 515 | 108.162.192.66 | 108.162.192.66 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 519 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 535 | 172.67.74.57 | 172.67.74.57 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 559 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 577 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 583 | 104.26.2.166 | 104.26.2.166 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 584 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 608 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 631 | damien.ns.cloudflare.com | 172.64.35.168 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 643 | ifconfig.co | 104.21.54.91 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 691 | 104.26.4.190 | 104.26.4.190 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 713 | 104.17.100.254 | 104.17.100.254 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 734 | 104.17.189.30 | 104.17.189.30 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 810 | 104.26.13.110 | 104.26.13.110 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 823 | 104.17.97.228 | 104.17.97.228 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 836 | 6666.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 842 | 104.18.44.25 | 104.18.44.25 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 844 | 172.64.153.140 | 172.64.153.140 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 849 | 104.25.250.174 | 104.25.250.174 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 858 | 108.162.198.198 | 108.162.198.198 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 874 | 104.20.24.244 | 104.20.24.244 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 890 | 2a06:98c1:3106:f0:fa21:b1c1:bf1b:efd7 | 2a06:98c1:3106:f0:fa21:b1c1:bf1b:efd7 | IPv6 | h2 | ✅ 成功 | 36 | cloudflare |
| 903 | 104.25.254.14 | 104.25.254.14 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 914 | 172.64.144.132 | 172.64.144.132 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 952 | 104.26.4.44 | 104.26.4.44 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 1012 | 104.26.3.120 | 104.26.3.120 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 1014 | 172.67.75.11 | 172.67.75.11 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 1033 | 104.26.3.117 | 104.26.3.117 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 1050 | 104.17.162.3 | 104.17.162.3 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 89 | 104.25.250.121 | 104.25.250.121 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 109 | 2a06:98c1:3100:e1e7:ae26:af07:44a6:82da | 2a06:98c1:3100:e1e7:ae26:af07:44a6:82da | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 129 | cfip.xxxxxxxx.tk | 104.18.228.35 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 151 | 104.20.19.37 | 104.20.19.37 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 186 | 108.162.198.97 | 108.162.198.97 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 201 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 246 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 247 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 293 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 321 | 4444.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 326 | 4444.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 332 | www.4444.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 340 | toy-people.com | 104.26.3.36 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 344 | decker.ns.cloudflare.com | 108.162.195.155 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 348 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 351 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 359 | kyree.ns.cloudflare.com | 162.159.44.207 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 365 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 373 | dylan.ns.cloudflare.com | 162.159.44.187 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 381 | www.gov.ua | 2606:4700:3037::ac43:d17f | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 395 | zread.ai | 2606:4700:3030::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 397 | 104.17.79.11 | 104.17.79.11 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 415 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 422 | fbi.gov | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 431 | www.ipchicken.com | 104.26.7.112 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 446 | www.glassdoor.com | 104.16.25.46 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 449 | 104.17.167.134 | 104.17.167.134 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 469 | 104.16.105.166 | 104.16.105.166 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 487 | ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 509 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 511 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 548 | 104.20.22.185 | 104.20.22.185 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 566 | 104.17.101.37 | 104.17.101.37 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 569 | julio.ns.cloudflare.com | 162.159.44.209 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 591 | cfip.1323123.xyz | 104.16.133.220 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 597 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 609 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 614 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 621 | 104.16.255.1 | 104.16.255.1 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 625 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 635 | www.4chan.org | 104.16.228.229 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 646 | 104.17.105.198 | 104.17.105.198 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 647 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 649 | www.wto.org | 2a06:98c1:3100::6812:29be | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 705 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 714 | 104.17.101.208 | 104.17.101.208 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 715 | 104.16.157.50 | 104.16.157.50 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 719 | 162.159.34.55 | 162.159.34.55 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 771 | 2a06:98c1:3105:0:2359:4222:d558:10fb | 2a06:98c1:3105:0:2359:4222:d558:10fb | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 802 | 172.67.78.67 | 172.67.78.67 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 806 | 104.20.17.51 | 104.20.17.51 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 807 | 172.67.72.250 | 172.67.72.250 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 813 | 104.20.28.239 | 104.20.28.239 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 838 | 6666.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 37 | cloudflare |
| 861 | 162.159.0.41 | 162.159.0.41 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 913 | 172.64.153.183 | 172.64.153.183 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 922 | 104.25.246.24 | 104.25.246.24 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 926 | 104.18.160.38 | 104.18.160.38 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 929 | 162.159.44.246 | 162.159.44.246 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 936 | 172.64.229.149 | 172.64.229.149 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 967 | 162.159.19.219 | 162.159.19.219 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 1022 | 198.41.208.15 | 198.41.208.15 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 1030 | 104.26.4.90 | 104.26.4.90 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 1040 | 162.159.137.204 | 162.159.137.204 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 1042 | 104.26.3.162 | 104.26.3.162 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 1047 | 104.18.166.129 | 104.18.166.129 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 51 | 2a06:98c1:310b:d5f5:74cf:317a:6c39:4c5f | 2a06:98c1:310b:d5f5:74cf:317a:6c39:4c5f | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 52 | 2a06:98c1:51:8:7944:48b0:1301:5ced | 2a06:98c1:51:8:7944:48b0:1301:5ced | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 80 | cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 91 | 104.25.252.192 | 104.25.252.192 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 102 | 104.18.47.193 | 104.18.47.193 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 108 | 2a06:98c1:310c::dd:f399:427e | 2a06:98c1:310c::dd:f399:427e | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 160 | 104.17.118.227 | 104.17.118.227 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 161 | 172.64.145.253 | 172.64.145.253 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 182 | 2a06:98c1:310e:5f9e:101d:94ce:cb6b:49ca | 2a06:98c1:310e:5f9e:101d:94ce:cb6b:49ca | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 191 | 172.64.42.235 | 172.64.42.235 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 230 | cmcc.877774.xyz | 104.16.149.11 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 244 | cmcc.877774.xyz | 104.16.148.12 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 292 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 306 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 314 | ipinfo.in | 104.21.21.129 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 354 | ct.877774.xyz | 172.64.229.44 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 362 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 390 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 399 | asia.877774.xyz | 104.17.142.146 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 413 | xn--b6gac.eu.org | 2606:4700:3032::6815:5a4e | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 428 | cf.090227.xyz | 2a06:98c1:3105::6812:230f | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 432 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 454 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 455 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 474 | 104.17.142.212 | 104.17.142.212 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 485 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 496 | 2a06:98c1:3121:0:ef18:6ab0:b648:d756 | 2a06:98c1:3121:0:ef18:6ab0:b648:d756 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 503 | 2a06:98c1:3120:c39b:7522:c680:d288:d13c | 2a06:98c1:3120:c39b:7522:c680:d288:d13c | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 507 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 512 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 513 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 541 | 456.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 542 | 456.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 549 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 552 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 558 | dnschecker.org | 172.67.73.216 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 560 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 578 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 601 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 605 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 607 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 623 | otto.ns.cloudflare.com | 162.159.44.135 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 624 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 642 | ifconfig.co | 172.67.168.106 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 663 | japan.com | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 687 | 104.26.8.148 | 104.26.8.148 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 689 | 104.20.21.161 | 104.20.21.161 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 690 | 104.20.20.42 | 104.20.20.42 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 741 | 162.159.44.133 | 162.159.44.133 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 743 | 108.162.198.148 | 108.162.198.148 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 754 | 104.16.251.254 | 104.16.251.254 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 755 | 104.17.214.136 | 104.17.214.136 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 767 | 104.20.20.192 | 104.20.20.192 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 777 | 2a06:98c1:310b:0:e474:ff3f:ec26:c616 | 2a06:98c1:310b:0:e474:ff3f:ec26:c616 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 784 | 108.162.198.85 | 108.162.198.85 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 790 | 162.159.44.101 | 162.159.44.101 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 791 | 172.64.152.215 | 172.64.152.215 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 808 | 104.26.4.4 | 104.26.4.4 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 820 | 104.26.8.171 | 104.26.8.171 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 830 | 6666.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 839 | 104.17.110.226 | 104.17.110.226 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 840 | 104.16.155.230 | 104.16.155.230 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 862 | 162.159.20.46 | 162.159.20.46 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 879 | 104.26.5.194 | 104.26.5.194 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 881 | 104.25.245.215 | 104.25.245.215 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 904 | 104.25.250.205 | 104.25.250.205 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 916 | 172.64.52.181 | 172.64.52.181 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 917 | 172.64.151.253 | 172.64.151.253 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 927 | 104.16.245.121 | 104.16.245.121 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 962 | 104.17.21.106 | 104.17.21.106 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 964 | 172.64.147.235 | 172.64.147.235 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 977 | 2a06:98c1:3105:0:db:557f:8a53:2469 | 2a06:98c1:3105:0:db:557f:8a53:2469 | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 988 | 172.64.34.153 | 172.64.34.153 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 999 | 162.159.22.29 | 162.159.22.29 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 1006 | 104.26.5.101 | 104.26.5.101 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 1015 | 172.64.229.7 | 172.64.229.7 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 1031 | 162.159.136.89 | 162.159.136.89 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 1051 | 104.18.151.172 | 104.18.151.172 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 1063 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | h2 | ✅ 成功 | 38 | cloudflare |
| 50 | 2606:4700:59:764d:d406:c823:e52f:4f3a | 2606:4700:59:764d:d406:c823:e52f:4f3a | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 79 | cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 101 | 172.64.53.103 | 172.64.53.103 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 117 | 108.162.198.168 | 108.162.198.168 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 131 | cfip.xxxxxxxx.tk | 104.20.255.53 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 143 | www.hugedomains.com | 172.67.70.191 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 146 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 159 | 104.18.42.129 | 104.18.42.129 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 174 | 162.159.18.22 | 162.159.18.22 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 177 | 2a06:98c1:51:0:4371:ce16:475:2557 | 2a06:98c1:51:0:4371:ce16:475:2557 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 179 | 2a06:98c1:3100:7f11:4805:1c25:83ab:6033 | 2a06:98c1:3100:7f11:4805:1c25:83ab:6033 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 184 | 2a06:98c1:3100:7f01:2f67:5ef8:2a97:8d82 | 2a06:98c1:3100:7f01:2f67:5ef8:2a97:8d82 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 195 | 104.26.0.45 | 104.26.0.45 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 202 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 220 | 162.159.45.103 | 162.159.45.103 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 228 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 232 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 270 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 286 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 315 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 318 | 4444.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 347 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 349 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 389 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 402 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 414 | xn--b6gac.eu.org | 2606:4700:3034::ac43:99fd | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 420 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 423 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 450 | 104.18.223.253 | 104.18.223.253 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 453 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 456 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 460 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 465 | rustam.ns.cloudflare.com | 172.64.35.148 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 482 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 493 | 2a06:98c1:3121:5d:1caa:56dd:a908:af7b | 2a06:98c1:3121:5d:1caa:56dd:a908:af7b | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 499 | ip.gs | 104.21.14.176 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 527 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 562 | 104.20.30.198 | 104.20.30.198 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 564 | 104.26.3.176 | 104.26.3.176 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 599 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 600 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 606 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 628 | 104.17.16.248 | 104.17.16.248 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 640 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 645 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 665 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 666 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 672 | 162.159.45.93 | 162.159.45.93 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 711 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 712 | 104.16.155.76 | 104.16.155.76 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 721 | 104.18.35.166 | 104.18.35.166 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 736 | 162.159.36.26 | 162.159.36.26 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 762 | 104.18.47.46 | 104.18.47.46 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 774 | 2a06:98c1:310f:5820:a733:3f39:ff68:f260 | 2a06:98c1:310f:5820:a733:3f39:ff68:f260 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 775 | 2a06:98c1:3102:0:90e8:b850:3d09:cfc8 | 2a06:98c1:3102:0:90e8:b850:3d09:cfc8 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 778 | 2a06:98c1:310b:fd:febc:dbaf:d5f9:76d4 | 2a06:98c1:310b:fd:febc:dbaf:d5f9:76d4 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 797 | 172.64.32.77 | 172.64.32.77 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 800 | 104.26.1.194 | 104.26.1.194 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 814 | 104.26.6.247 | 104.26.6.247 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 819 | 104.26.0.210 | 104.26.0.210 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 828 | 104.17.53.129 | 104.17.53.129 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 829 | 6666.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 831 | 6666.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 859 | 162.159.44.202 | 162.159.44.202 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 868 | 2a06:98c1:3108:0:edda:98f0:da65:4271 | 2a06:98c1:3108:0:edda:98f0:da65:4271 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 873 | 104.26.11.33 | 104.26.11.33 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 878 | 104.20.19.180 | 104.20.19.180 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 915 | 162.159.45.150 | 162.159.45.150 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 925 | 104.17.143.82 | 104.17.143.82 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 935 | 162.159.39.26 | 162.159.39.26 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 975 | 2a06:98c1:310b:43:e83a:f5ed:8126:81dc | 2a06:98c1:310b:43:e83a:f5ed:8126:81dc | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 976 | 2a06:98c1:3101:6cce:1edc:88:628d:fd50 | 2a06:98c1:3101:6cce:1edc:88:628d:fd50 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 982 | 2a06:98c1:310b:eecc:184:7caf:f7e0:b92 | 2a06:98c1:310b:eecc:184:7caf:f7e0:b92 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 1005 | 104.20.21.147 | 104.20.21.147 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1013 | 104.26.1.181 | 104.26.1.181 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1016 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1023 | 162.159.140.85 | 162.159.140.85 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1026 | 172.64.91.69 | 172.64.91.69 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1048 | 104.19.220.22 | 104.19.220.22 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1055 | 162.159.38.35 | 162.159.38.35 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 7 | 172.64.146.137 | 172.64.146.137 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 49 | 2a06:98c1:3102:94:1604:ebd:f1ec:37be | 2a06:98c1:3102:94:1604:ebd:f1ec:37be | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 53 | 2a06:98c1:310b:0:cfd2:7ebe:a043:8535 | 2a06:98c1:310b:0:cfd2:7ebe:a043:8535 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 55 | 2a06:98c1:3102:0:e263:6cdc:a8ce:a339 | 2a06:98c1:3102:0:e263:6cdc:a8ce:a339 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 63 | 172.64.40.68 | 172.64.40.68 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 70 | 172.67.65.44 | 172.67.65.44 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 78 | cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 81 | 172.67.76.20 | 172.67.76.20 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 116 | 162.159.44.36 | 162.159.44.36 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 119 | 172.64.53.101 | 172.64.53.101 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 135 | cfip.xxxxxxxx.tk | 104.27.21.118 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 139 | 104.26.2.242 | 104.26.2.242 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 140 | 104.26.5.121 | 104.26.5.121 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 145 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 148 | 104.20.21.202 | 104.20.21.202 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 171 | 162.159.9.224 | 162.159.9.224 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 188 | 162.159.45.69 | 162.159.45.69 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 197 | 172.67.69.100 | 172.67.69.100 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 215 | 104.17.188.11 | 104.17.188.11 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 222 | 162.159.32.119 | 162.159.32.119 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 241 | cmcc.877774.xyz | 104.16.148.9 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 260 | 2a06:98c1:50:d138:459d:9395:648d:4960 | 2a06:98c1:50:d138:459d:9395:648d:4960 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 281 | na.877774.xyz | 104.18.187.25 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 303 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 310 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 316 | ipinfo.in | 2606:4700:3034::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 317 | ipinfo.in | 2606:4700:3035::6815:1581 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 353 | ct.877774.xyz | 172.64.229.236 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 356 | ct.877774.xyz | 172.64.229.173 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 370 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 383 | cloudflare-ip.mofashi.ltd | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 384 | cloudflare-ip.mofashi.ltd | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 386 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 388 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 419 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 437 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 451 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 452 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 463 | rustam.ns.cloudflare.com | 108.162.195.148 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 466 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 471 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 473 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 476 | 104.16.65.1 | 104.16.65.1 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 484 | 2a06:98c1:3121:c6d4:af96:6677:59bf:faec | 2a06:98c1:3121:c6d4:af96:6677:59bf:faec | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 486 | 162.159.36.104 | 162.159.36.104 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 495 | 2a06:98c1:3121:0:efde:82d1:8124:3fed | 2a06:98c1:3121:0:efde:82d1:8124:3fed | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 501 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 502 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 510 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 553 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 563 | 172.67.72.254 | 172.67.72.254 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 565 | 104.17.169.180 | 104.17.169.180 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 567 | 104.18.14.76 | 104.18.14.76 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 572 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 574 | uriah.ns.cloudflare.com | 108.162.195.194 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 590 | 172.67.79.211 | 172.67.79.211 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 593 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 595 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 603 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 617 | eur.877774.xyz | 104.21.47.209 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 619 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 622 | otto.ns.cloudflare.com | 108.162.195.135 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 626 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 638 | 104.17.170.110 | 104.17.170.110 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 652 | 104.17.115.224 | 104.17.115.224 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 653 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 657 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 673 | 172.64.52.110 | 172.64.52.110 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 695 | 104.17.60.233 | 104.17.60.233 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 699 | 104.26.6.112 | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 710 | 104.19.50.35 | 104.19.50.35 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 716 | 104.19.34.231 | 104.19.34.231 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 727 | 104.17.209.79 | 104.17.209.79 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 745 | 162.159.61.106 | 162.159.61.106 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 756 | 104.17.187.186 | 104.17.187.186 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 776 | 2a06:98c1:310c:6a:19f2:494:88cc:d5f | 2a06:98c1:310c:6a:19f2:494:88cc:d5f | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 780 | 172.64.154.113 | 172.64.154.113 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 783 | 2a06:98c1:50:f771:e9b:84bd:5505:3935 | 2a06:98c1:50:f771:e9b:84bd:5505:3935 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 789 | 172.64.41.216 | 172.64.41.216 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 792 | 162.159.39.146 | 162.159.39.146 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 801 | 104.26.6.171 | 104.26.6.171 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 834 | 6666.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 843 | 104.17.111.150 | 104.17.111.150 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 851 | 162.159.39.20 | 162.159.39.20 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 880 | 104.18.148.235 | 104.18.148.235 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 894 | 104.25.240.123 | 104.25.240.123 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 934 | 162.159.38.52 | 162.159.38.52 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 947 | 172.67.68.252 | 172.67.68.252 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 959 | 104.17.154.254 | 104.17.154.254 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 963 | 104.16.144.235 | 104.16.144.235 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 979 | 2a06:98c1:3104:0:4:5eb4:7182:42a0 | 2a06:98c1:3104:0:4:5eb4:7182:42a0 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 980 | 2a06:98c1:3100:27a8:686d:aa56:c917:4726 | 2a06:98c1:3100:27a8:686d:aa56:c917:4726 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 1011 | 104.20.25.82 | 104.20.25.82 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1027 | 172.64.48.226 | 172.64.48.226 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1034 | 172.67.77.185 | 172.67.77.185 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1067 | 172.67.73.196 | 172.67.73.196 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1069 | 104.25.254.89 | 104.25.254.89 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 10 | 104.25.247.129 | 104.25.247.129 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 24 | 172.64.229.185 | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 36 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 54 | 2a06:98c1:310b::fda8:fa9e:4a3e | 2a06:98c1:310b::fda8:fa9e:4a3e | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 75 | cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 113 | 2400:cb00:2049:5d:a92a:97f:6fa3:f803 | 2400:cb00:2049:5d:a92a:97f:6fa3:f803 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 122 | 172.64.229.158 | 172.64.229.158 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 130 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 133 | cfip.xxxxxxxx.tk | 104.25.105.1 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 138 | cfip.xxxxxxxx.tk | 188.114.96.125 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 142 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 150 | 172.67.75.231 | 172.67.75.231 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 169 | 104.18.33.253 | 104.18.33.253 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 172 | 162.159.44.58 | 162.159.44.58 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 183 | 2a06:98c1:3106:d8af:8b29:8a81:bf10:9cef | 2a06:98c1:3106:d8af:8b29:8a81:bf10:9cef | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 198 | 104.20.28.135 | 104.20.28.135 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 216 | 104.16.248.22 | 104.16.248.22 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 223 | 108.162.198.254 | 108.162.198.254 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 229 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 240 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 250 | cmcc.877774.xyz | 104.16.149.5 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 251 | 162.159.39.219 | 162.159.39.219 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 279 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 280 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 304 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 305 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 322 | 4444.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 331 | www.4444.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 346 | decker.ns.cloudflare.com | 172.64.35.155 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 379 | www.gov.ua | 172.67.209.127 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 391 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 398 | asia.877774.xyz | 104.17.139.62 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 403 | 172.64.151.55 | 172.64.151.55 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 407 | bestcf.030101.xyz | 104.17.185.207 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 408 | bestcf.030101.xyz | 104.17.101.139 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 434 | braden.ns.cloudflare.com | 162.159.44.169 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 436 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 438 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 457 | moura.ns.cloudflare.com | 108.162.195.217 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 461 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 472 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 494 | 2a06:98c1:3121:c677:c614:1f96:d4bf:a723 | 2a06:98c1:3121:c677:c614:1f96:d4bf:a723 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 505 | 162.159.17.243 | 162.159.17.243 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 522 | 104.18.47.253 | 104.18.47.253 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 523 | 173.245.58.237 | 173.245.58.237 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 529 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 532 | 172.64.150.30 | 172.64.150.30 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 543 | 456.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 547 | 172.67.65.159 | 172.67.65.159 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 554 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 557 | dnschecker.org | 104.26.7.89 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 573 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 586 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 589 | 104.17.142.12 | 104.17.142.12 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 594 | tasteatlas.com | 104.17.36.105 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 604 | icook.tw | 172.66.158.115 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 630 | damien.ns.cloudflare.com | 162.159.44.168 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 632 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 634 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 648 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 651 | 162.159.44.176 | 162.159.44.176 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 660 | 108.162.198.48 | 108.162.198.48 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 674 | 162.159.39.62 | 162.159.39.62 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 688 | 172.67.67.5 | 172.67.67.5 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 708 | 104.17.119.199 | 104.17.119.199 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 722 | 162.159.42.140 | 162.159.42.140 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 729 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 750 | 104.18.44.148 | 104.18.44.148 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 751 | 162.159.19.37 | 162.159.19.37 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 752 | 2a06:98c1:50:8be4:5078:7eea:e43d:164 | 2a06:98c1:50:8be4:5078:7eea:e43d:164 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 760 | 172.64.40.196 | 172.64.40.196 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 763 | 162.159.36.52 | 162.159.36.52 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 768 | 172.64.154.226 | 172.64.154.226 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 770 | 2a06:98c1:3109:be88:aeb7:b6d2:c9f2:4d65 | 2a06:98c1:3109:be88:aeb7:b6d2:c9f2:4d65 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 773 | 2a06:98c1:51:8a7e:2be1:4da9:97bb:7c59 | 2a06:98c1:51:8a7e:2be1:4da9:97bb:7c59 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 803 | 104.20.25.161 | 104.20.25.161 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 809 | 104.18.42.16 | 104.18.42.16 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 815 | 104.26.7.7 | 104.26.7.7 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 817 | 104.20.25.181 | 104.20.25.181 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 825 | 104.25.244.239 | 104.25.244.239 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 827 | 104.18.172.20 | 104.18.172.20 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 835 | 6666.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 841 | 104.17.25.87 | 104.17.25.87 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 847 | 104.25.245.233 | 104.25.245.233 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 848 | 104.18.166.232 | 104.18.166.232 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 854 | 162.159.38.134 | 162.159.38.134 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 860 | 172.64.229.156 | 172.64.229.156 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 875 | 104.20.22.91 | 104.20.22.91 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 896 | 104.26.5.53 | 104.26.5.53 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 920 | 172.67.79.249 | 172.67.79.249 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 928 | 104.17.62.194 | 104.17.62.194 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 930 | 172.64.53.220 | 172.64.53.220 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 949 | 104.20.17.233 | 104.20.17.233 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 951 | 104.26.8.192 | 104.26.8.192 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 968 | 172.64.52.15 | 172.64.52.15 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 981 | 162.159.1.111 | 162.159.1.111 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 992 | 172.64.151.235 | 172.64.151.235 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 994 | 162.159.18.240 | 162.159.18.240 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1007 | 172.67.65.81 | 172.67.65.81 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1010 | 104.20.22.141 | 104.20.22.141 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1017 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1019 | 108.162.198.54 | 108.162.198.54 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1044 | 162.159.140.116 | 162.159.140.116 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1045 | 104.18.81.19 | 104.18.81.19 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1061 | abdullah.ns.cloudflare.com | 172.64.35.203 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 11 | 104.17.129.66 | 104.17.129.66 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 35 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 39 | trevor.ns.cloudflare.com | 172.64.35.154 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 64 | 172.64.41.47 | 172.64.41.47 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 72 | cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 77 | cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 92 | 104.25.254.47 | 104.25.254.47 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 93 | 104.25.246.117 | 104.25.246.117 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 115 | 162.159.45.0 | 162.159.45.0 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 127 | cfip.xxxxxxxx.tk | 104.21.91.19 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 134 | cfip.xxxxxxxx.tk | 104.17.127.110 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 137 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 149 | 104.26.15.142 | 104.26.15.142 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 152 | 172.67.74.78 | 172.67.74.78 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 189 | 162.159.39.198 | 162.159.39.198 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 194 | 172.64.52.42 | 172.64.52.42 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 227 | cmcc.877774.xyz | 104.16.149.8 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 239 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 249 | cmcc.877774.xyz | 104.16.149.4 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 257 | 2a06:98c1:3100:be9c:5ff5:a2a3:647f:34f1 | 2a06:98c1:3100:be9c:5ff5:a2a3:647f:34f1 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 259 | 2a06:98c1:3100:4abd:4911:58dd:b563:9b09 | 2a06:98c1:3100:4abd:4911:58dd:b563:9b09 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 266 | 172.67.243.218 | 172.67.243.218 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 267 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 288 | craig.ns.cloudflare.com | 108.162.195.192 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 298 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 334 | www.4444.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 355 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 363 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 385 | cloudflare-ip.mofashi.ltd | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 404 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 405 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 421 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 430 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 439 | bowen.ns.cloudflare.com | 108.162.195.83 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 448 | 104.31.16.158 | 104.31.16.158 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 483 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 492 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 516 | 162.159.13.51 | 162.159.13.51 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 524 | 104.18.45.95 | 104.18.45.95 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 544 | 456.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 545 | 456.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 581 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 588 | gamer.com.tw | 104.18.3.197 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 596 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 611 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 618 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 633 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 637 | 104.17.168.159 | 104.17.168.159 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 678 | 2803:f800:50:9a81:aaf8:2b9b:dd37:67e2 | 2803:f800:50:9a81:aaf8:2b9b:dd37:67e2 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 686 | 172.67.77.196 | 172.67.77.196 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 692 | 104.20.18.47 | 104.20.18.47 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 720 | 104.17.215.66 | 104.17.215.66 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 730 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 733 | 104.17.25.241 | 104.17.25.241 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 735 | 172.64.52.67 | 172.64.52.67 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 739 | 162.159.39.136 | 162.159.39.136 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 759 | 104.18.32.174 | 104.18.32.174 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 826 | 104.17.193.113 | 104.17.193.113 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 832 | 6666.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 833 | 6666.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 864 | 172.64.53.202 | 172.64.53.202 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 870 | 104.20.31.132 | 104.20.31.132 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 872 | 172.67.67.0 | 172.67.67.0 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 876 | 104.26.4.135 | 104.26.4.135 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 877 | 172.67.72.212 | 172.67.72.212 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 889 | 2a06:98c1:3105:900d:3fc7:e3c6:68cd:ece3 | 2a06:98c1:3105:900d:3fc7:e3c6:68cd:ece3 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 895 | 172.64.229.15 | 172.64.229.15 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 901 | 2a06:98c1:3104:da84:1c63:f149:4d21:b339 | 2a06:98c1:3104:da84:1c63:f149:4d21:b339 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 902 | 104.25.249.225 | 104.25.249.225 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 919 | 162.159.38.83 | 162.159.38.83 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 937 | 162.159.6.186 | 162.159.6.186 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 939 | 104.26.1.55 | 104.26.1.55 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 989 | 172.64.53.181 | 172.64.53.181 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1000 | 172.64.153.141 | 172.64.153.141 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1003 | 104.18.40.216 | 104.18.40.216 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1004 | 104.26.2.2 | 104.26.2.2 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1046 | 104.18.89.52 | 104.18.89.52 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1054 | 104.17.170.137 | 104.17.170.137 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1060 | abdullah.ns.cloudflare.com | 162.159.44.203 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 12 | 104.25.241.19 | 104.25.241.19 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 23 | 104.17.171.88 | 104.17.171.88 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 69 | 172.67.73.129 | 172.67.73.129 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 86 | 104.25.240.21 | 104.25.240.21 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 107 | 2a06:98c1:3100:22:21ad:d760:d542:16c8 | 2a06:98c1:3100:22:21ad:d760:d542:16c8 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 118 | 172.64.52.168 | 172.64.52.168 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 125 | cfip.xxxxxxxx.tk | 190.93.246.67 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 144 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 153 | 172.67.73.94 | 172.67.73.94 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 158 | 104.16.148.143 | 104.16.148.143 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 165 | 104.17.119.130 | 104.17.119.130 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 199 | 104.20.29.239 | 104.20.29.239 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 219 | 162.159.38.120 | 162.159.38.120 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 226 | cmcc.877774.xyz | 104.16.149.7 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 231 | cmcc.877774.xyz | 104.16.149.12 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 234 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 236 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 248 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 255 | 2a06:98c1:3108::d6ec:e396:95d2 | 2a06:98c1:3108::d6ec:e396:95d2 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 265 | 172.67.120.0 | 172.67.120.0 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 283 | sullivan.ns.cloudflare.com | 162.159.44.161 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 284 | sullivan.ns.cloudflare.com | 172.64.35.161 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 313 | cf.0sm.com | 2606:4700:3031::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 337 | www.4444.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 369 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 392 | zread.ai | 172.67.202.78 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 411 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 412 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 490 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 491 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 504 | 2a06:98c1:3120:c39b:f77:4fc1:b18b:c12 | 2a06:98c1:3120:c39b:f77:4fc1:b18b:c12 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 528 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 580 | 162.159.133.85 | 162.159.133.85 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 587 | gamer.com.tw | 104.18.2.197 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 592 | 198.62.62.4 | 198.62.62.4 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 627 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 654 | lewis.ns.cloudflare.com | 108.162.195.159 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 664 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 675 | 2a06:98c1:310b:2522:4bfe:492f:64b3:2d36 | 2a06:98c1:310b:2522:4bfe:492f:64b3:2d36 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 681 | 2a06:98c1:3105:af:a833:8bb4:57b3:c4fd | 2a06:98c1:3105:af:a833:8bb4:57b3:c4fd | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 682 | 2a06:98c1:3106:7319:3a35:b2f6:24ef:ea97 | 2a06:98c1:3106:7319:3a35:b2f6:24ef:ea97 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 684 | 2a06:98c1:3107:0:cf9c:104d:1e03:9644 | 2a06:98c1:3107:0:cf9c:104d:1e03:9644 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 696 | 104.16.148.187 | 104.16.148.187 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 753 | 2a06:98c1:310a:0:15:735e:c4e:e2f7 | 2a06:98c1:310a:0:15:735e:c4e:e2f7 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 764 | 104.18.42.106 | 104.18.42.106 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 766 | 2400:cb00:2049:e59d:7af6:c00c:4418:a88a | 2400:cb00:2049:e59d:7af6:c00c:4418:a88a | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 769 | 2a06:98c1:3101:d7:eb36:3a1:c94d:32de | 2a06:98c1:3101:d7:eb36:3a1:c94d:32de | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 795 | 104.18.37.177 | 104.18.37.177 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 805 | 172.67.67.152 | 172.67.67.152 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 837 | 6666.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 846 | 162.159.38.45 | 162.159.38.45 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 853 | 162.159.45.67 | 162.159.45.67 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 856 | 162.159.12.120 | 162.159.12.120 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 865 | 162.159.1.39 | 162.159.1.39 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 867 | 108.162.198.70 | 108.162.198.70 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 869 | 2a06:98c1:310d:85:ac4c:8137:506:5188 | 2a06:98c1:310d:85:ac4c:8137:506:5188 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 871 | 172.67.70.56 | 172.67.70.56 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 892 | 104.25.244.36 | 104.25.244.36 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 905 | 2803:f800:50:9516:e4a1:4ba9:1c5e:7533 | 2803:f800:50:9516:e4a1:4ba9:1c5e:7533 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 921 | 104.17.56.177 | 104.17.56.177 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 932 | 108.162.198.232 | 108.162.198.232 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 948 | 104.26.6.159 | 104.26.6.159 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 955 | 104.17.50.237 | 104.17.50.237 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 991 | 108.162.198.170 | 108.162.198.170 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 993 | 172.64.145.242 | 172.64.145.242 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 997 | 172.64.42.158 | 172.64.42.158 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 998 | 172.67.73.120 | 172.67.73.120 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1002 | 104.18.42.61 | 104.18.42.61 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1009 | 104.20.26.221 | 104.20.26.221 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1035 | 104.26.10.239 | 104.26.10.239 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1058 | 104.18.255.167 | 104.18.255.167 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1064 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 16 | www.ipget.net | 2606:4700:3031::6815:fd4 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 21 | 104.16.247.125 | 104.16.247.125 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 22 | 104.25.255.103 | 104.25.255.103 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 26 | 104.18.44.159 | 104.18.44.159 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 34 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 154 | 104.26.0.124 | 104.26.0.124 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 156 | 104.18.44.187 | 104.18.44.187 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 176 | 2a06:98c1:3106:0:fb94:fc7b:2b7f:ae54 | 2a06:98c1:3106:0:fb94:fc7b:2b7f:ae54 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 204 | cf.877774.xyz | 2a06:98c1:3100::6812:29be | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 209 | 104.17.211.247 | 104.17.211.247 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 221 | 172.64.52.227 | 172.64.52.227 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 235 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 242 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 261 | 2a06:98c1:310a:fb:5613:e6aa:93f8:91f9 | 2a06:98c1:310a:fb:5613:e6aa:93f8:91f9 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 269 | freeyx.cloudflare88.eu.org | 172.64.147.165 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 290 | craig.ns.cloudflare.com | 172.64.35.192 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 294 | pranab.ns.cloudflare.com | 108.162.195.199 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 309 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 338 | toy-people.com | 172.67.72.18 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 341 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 424 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 427 | cf.090227.xyz | 2606:4700:440a::ac40:98f1 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 444 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 477 | 2a06:98c1:3121:c6d4:4130:7992:df42:f04c | 2a06:98c1:3121:c6d4:4130:7992:df42:f04c | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 478 | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 497 | 2a06:98c1:3121:c677:c614:7606:cec1:f722 | 2a06:98c1:3121:c677:c614:7606:cec1:f722 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 526 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 533 | 172.67.68.211 | 172.67.68.211 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 556 | dnschecker.org | 104.26.6.89 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 570 | julio.ns.cloudflare.com | 172.64.35.209 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 585 | 172.64.229.191 | 172.64.229.191 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 615 | 104.19.223.58 | 104.19.223.58 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 685 | 104.20.26.58 | 104.20.26.58 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 697 | 104.19.44.238 | 104.19.44.238 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 717 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 725 | 104.18.37.110 | 104.18.37.110 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 726 | 104.19.153.47 | 104.19.153.47 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 732 | icook.hk | 2606:4700:3033::6815:5ad2 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 758 | 172.64.49.146 | 172.64.49.146 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 781 | 2a06:98c1:3105:3dea:69ff:1edd:4cd:ed87 | 2a06:98c1:3105:3dea:69ff:1edd:4cd:ed87 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 821 | 104.17.153.151 | 104.17.153.151 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 824 | 104.25.241.198 | 104.25.241.198 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 852 | 172.64.52.224 | 172.64.52.224 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 885 | 2a06:98c1:310a:73ae:49fb:f5c4:1394:7e53 | 2a06:98c1:310a:73ae:49fb:f5c4:1394:7e53 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 891 | 104.25.247.78 | 104.25.247.78 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 899 | 2a06:98c1:310c:5874:e72e:d139:ebe3:e5ea | 2a06:98c1:310c:5874:e72e:d139:ebe3:e5ea | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 907 | 2a06:98c1:3100:f702:ebbf:618b:76c:9ba7 | 2a06:98c1:3100:f702:ebbf:618b:76c:9ba7 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 911 | 104.20.24.239 | 104.20.24.239 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 938 | 162.159.21.16 | 162.159.21.16 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 942 | 172.67.78.23 | 172.67.78.23 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 944 | 104.26.12.33 | 104.26.12.33 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 946 | 2a06:98c1:3100:0:a3:1339:d974:e2c | 2a06:98c1:3100:0:a3:1339:d974:e2c | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 954 | 104.17.24.232 | 104.17.24.232 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 973 | 172.64.53.144 | 172.64.53.144 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1024 | 172.64.52.127 | 172.64.52.127 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1041 | 162.159.128.253 | 162.159.128.253 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1043 | 104.26.8.117 | 104.26.8.117 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1057 | 104.25.244.87 | 104.25.244.87 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1062 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 1065 | 104.20.16.244 | 104.20.16.244 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 20 | comicabc.com | 2606:4700:3037::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 25 | 104.25.253.253 | 104.25.253.253 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 65 | 104.20.20.156 | 104.20.20.156 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 112 | 2a06:98c1:3100:22:21cb:7546:1cd8:a79f | 2a06:98c1:3100:22:21cb:7546:1cd8:a79f | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 126 | cfip.xxxxxxxx.tk | 188.114.97.144 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 164 | 172.64.154.86 | 172.64.154.86 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 205 | 104.20.24.17 | 104.20.24.17 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 206 | 104.26.9.202 | 104.26.9.202 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 218 | 104.17.145.27 | 104.17.145.27 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 233 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 272 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 274 | www.okcupid.com | 104.18.160.63 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 275 | www.okcupid.com | 104.16.239.254 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 277 | www.okcupid.com | 104.17.48.63 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 299 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 308 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 336 | www.4444.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 339 | toy-people.com | 104.26.2.36 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 350 | ct.877774.xyz | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 400 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 425 | cf.090227.xyz | 104.18.42.98 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 447 | 104.17.69.244 | 104.17.69.244 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 521 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 525 | 162.159.62.6 | 162.159.62.6 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 531 | 172.67.106.26 | 172.67.106.26 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 546 | 456.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 550 | ashton.ns.cloudflare.com | 162.159.44.173 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 575 | uriah.ns.cloudflare.com | 162.159.44.194 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 612 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 613 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 656 | lewis.ns.cloudflare.com | 172.64.35.159 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 671 | 162.159.0.115 | 162.159.0.115 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 737 | 162.159.21.222 | 162.159.21.222 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 779 | 162.159.6.44 | 162.159.6.44 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 818 | 172.67.65.150 | 172.67.65.150 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 882 | 104.17.56.208 | 104.17.56.208 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 887 | 2a06:98c1:3105:900d:4f38:5221:f77f:fe11 | 2a06:98c1:3105:900d:4f38:5221:f77f:fe11 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 897 | 2a06:98c1:51:a594:2926:2b16:6e8d:843e | 2a06:98c1:51:a594:2926:2b16:6e8d:843e | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 909 | 2a06:98c1:3106:6a:7ba4:346b:e06c:71c7 | 2a06:98c1:3106:6a:7ba4:346b:e06c:71c7 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 956 | 104.16.153.12 | 104.16.153.12 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 990 | 162.159.41.141 | 162.159.41.141 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 995 | 172.64.145.119 | 172.64.145.119 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1001 | 172.64.146.67 | 172.64.146.67 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1036 | 172.67.72.36 | 172.67.72.36 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1053 | 104.17.211.218 | 104.17.211.218 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 67 | 104.20.29.234 | 104.20.29.234 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 76 | cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 99 | 162.159.33.28 | 162.159.33.28 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 104 | 104.18.40.200 | 104.18.40.200 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 132 | cfip.xxxxxxxx.tk | 190.93.247.169 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 136 | cfip.xxxxxxxx.tk | 198.41.214.141 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 157 | 104.17.104.208 | 104.17.104.208 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 163 | 104.19.144.110 | 104.19.144.110 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 178 | 2a06:98c1:50::46cb:8c34:28e3 | 2a06:98c1:50::46cb:8c34:28e3 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 187 | 162.159.44.139 | 162.159.44.139 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 213 | 104.16.159.153 | 104.16.159.153 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 238 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 253 | 172.64.53.57 | 172.64.53.57 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 258 | 2a06:98c1:310b:0:9c31:ff76:6015:b9b4 | 2a06:98c1:310b:0:9c31:ff76:6015:b9b4 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 264 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 301 | cris.ns.cloudflare.com | 162.159.44.202 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 307 | www.pcmag.com | 104.16.21.118 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 311 | cf.0sm.com | 172.67.187.145 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 320 | 4444.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 323 | 4444.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 410 | bestcf.030101.xyz | 2606:4700:4b:db57:b087:b9fd:76cc:fb4 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 467 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 518 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 551 | ashton.ns.cloudflare.com | 172.64.35.173 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 679 | 2a06:98c1:310d:4c:4b41:a84:50ee:e810 | 2a06:98c1:310d:4c:4b41:a84:50ee:e810 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 698 | 104.18.40.39 | 104.18.40.39 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 782 | 2a06:98c1:3106:0:ef95:8505:25ee:e5ae | 2a06:98c1:3106:0:ef95:8505:25ee:e5ae | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 794 | 172.64.145.108 | 172.64.145.108 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 796 | 104.18.41.101 | 104.18.41.101 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 804 | 172.67.79.150 | 172.67.79.150 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 812 | 104.26.1.88 | 104.26.1.88 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 857 | 162.159.58.17 | 162.159.58.17 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 910 | 2a06:98c1:3104::f3:8fed:cac0 | 2a06:98c1:3104::f3:8fed:cac0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 950 | 172.67.70.253 | 172.67.70.253 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 985 | 162.159.39.177 | 162.159.39.177 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 986 | 162.159.45.145 | 162.159.45.145 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1020 | www.7749tv.com | 104.16.103.53 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1028 | 162.159.24.131 | 162.159.24.131 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1037 | 198.41.208.224 | 198.41.208.224 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1052 | 104.17.139.37 | 104.17.139.37 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 4 | 172.67.64.116 | 172.67.64.116 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 103 | 172.64.146.121 | 172.64.146.121 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 208 | 104.20.30.182 | 104.20.30.182 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 210 | 104.17.155.242 | 104.17.155.242 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 217 | 104.19.154.245 | 104.19.154.245 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 237 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 263 | 2a06:98c1:3100:4abd:4911:170c:c94a:913d | 2a06:98c1:3100:4abd:4911:170c:c94a:913d | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 273 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 285 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 296 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 335 | www.4444.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 426 | cf.090227.xyz | 172.64.145.158 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 475 | 104.18.189.153 | 104.18.189.153 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 498 | 2a06:98c1:3121:cdc1:6b1b:cfe6:f0:eaa2 | 2a06:98c1:3121:cdc1:6b1b:cfe6:f0:eaa2 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 568 | julio.ns.cloudflare.com | 108.162.195.209 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 598 | www.udemy.com | 104.16.142.237 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 650 | www.wto.org | 2a06:98c1:310b::ac40:9242 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 662 | 172.64.53.0 | 172.64.53.0 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 694 | 104.20.19.201 | 104.20.19.201 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 701 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 748 | 2a06:98c1:310a:b523:52dd:b43c:a5f:5a85 | 2a06:98c1:310a:b523:52dd:b43c:a5f:5a85 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 799 | 104.26.11.160 | 104.26.11.160 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 816 | 104.26.14.117 | 104.26.14.117 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 886 | 2a06:98c1:51:6e:e874:db4f:a1d5:2163 | 2a06:98c1:51:6e:e874:db4f:a1d5:2163 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 953 | 172.67.76.195 | 172.67.76.195 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 961 | 104.16.251.143 | 104.16.251.143 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 44 | 172.64.152.85 | 172.64.152.85 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 85 | 104.25.241.235 | 104.25.241.235 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 96 | 162.159.27.183 | 162.159.27.183 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 105 | 2a06:98c1:310a:0:de:2b25:85a5:8a26 | 2a06:98c1:310a:0:de:2b25:85a5:8a26 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 225 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 271 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 297 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 409 | bestcf.030101.xyz | 2606:4700:4b:56d4:21b8:5bd2:a220:6156 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 458 | moura.ns.cloudflare.com | 162.159.44.217 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 555 | 104.20.24.107 | 104.20.24.107 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 582 | 104.26.12.113 | 104.26.12.113 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 667 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 700 | 172.67.110.232 | 172.67.110.232 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 883 | 2a06:98c1:3107:ee7a:af11:b020:b50d:d4e2 | 2a06:98c1:3107:ee7a:af11:b020:b50d:d4e2 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 924 | 104.25.242.249 | 104.25.242.249 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 943 | 104.26.6.238 | 104.26.6.238 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 957 | 104.16.147.114 | 104.16.147.114 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 1008 | 172.67.75.212 | 172.67.75.212 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 66 | 172.67.64.123 | 172.67.64.123 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 170 | 162.159.45.8 | 162.159.45.8 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 181 | 2a06:98c1:3108:1a71:a277:b3bf:80a:c2a3 | 2a06:98c1:3108:1a71:a277:b3bf:80a:c2a3 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 262 | 2a06:98c1:3107:515b:5ec2:c60:d108:d92e | 2a06:98c1:3107:515b:5ec2:c60:d108:d92e | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 278 | www.okcupid.com | 104.16.223.254 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 328 | www.4444.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 330 | www.4444.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 342 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 470 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 480 | benedict.ns.cloudflare.com | 172.64.35.205 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 644 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 676 | 2a06:98c1:310e:68:b803:ed16:7e58:d249 | 2a06:98c1:310e:68:b803:ed16:7e58:d249 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 706 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 707 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 728 | 104.19.35.242 | 104.19.35.242 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 757 | 104.18.36.1 | 104.18.36.1 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 822 | 104.19.144.159 | 104.19.144.159 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 908 | 2a06:98c1:3107:54:2c60:eafc:f14d:ca4b | 2a06:98c1:3107:54:2c60:eafc:f14d:ca4b | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 958 | 104.17.30.164 | 104.17.30.164 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 1056 | 104.19.154.200 | 104.19.154.200 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 57 | 162.159.45.237 | 162.159.45.237 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 74 | cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 82 | 172.67.79.218 | 172.67.79.218 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 110 | 2a06:98c1:310a:d:1bd6:bbd1:d9a0:60b3 | 2a06:98c1:310a:d:1bd6:bbd1:d9a0:60b3 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 111 | 2a06:98c1:3100:b3:af54:9923:e84:af58 | 2a06:98c1:3100:b3:af54:9923:e84:af58 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 252 | 162.159.6.106 | 162.159.6.106 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 254 | 162.159.16.150 | 162.159.16.150 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 300 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 319 | 4444.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 517 | 162.159.46.238 | 162.159.46.238 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 520 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 731 | icook.hk | 2606:4700:3034::ac43:a168 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 747 | 2a06:98c1:310b:0:e474:ff3f:ecc6:5793 | 2a06:98c1:310b:0:e474:ff3f:ecc6:5793 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 772 | 2a06:98c1:3103:c550:9adb:34b4:ce11:19c | 2a06:98c1:3103:c550:9adb:34b4:ce11:19c | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 940 | 104.26.14.88 | 104.26.14.88 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1029 | 173.245.49.194 | 173.245.49.194 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1039 | 104.26.5.134 | 104.26.5.134 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 83 | 104.26.4.213 | 104.26.4.213 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 97 | 172.64.229.82 | 172.64.229.82 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 196 | 172.67.66.118 | 172.67.66.118 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 536 | 172.67.64.214 | 172.67.64.214 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 677 | 2a06:98c1:50:eac5:5d97:a2b9:5c3d:de2b | 2a06:98c1:50:eac5:5d97:a2b9:5c3d:de2b | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 709 | 103.160.204.59 | 103.160.204.59 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 742 | 162.159.38.67 | 162.159.38.67 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 893 | 104.25.241.85 | 104.25.241.85 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 960 | 104.17.53.25 | 104.17.53.25 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 68 | 172.67.77.104 | 172.67.77.104 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 106 | 2a06:98c1:3102:8768:b929:7455:f040:5aee | 2a06:98c1:3102:8768:b929:7455:f040:5aee | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 333 | www.4444.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 655 | lewis.ns.cloudflare.com | 162.159.44.159 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 668 | japan.com | 2606:4700:20::681a:53c | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 786 | 162.159.45.65 | 162.159.45.65 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 945 | 2a06:98c1:3102:96:65b:cff7:1c28:b82a | 2a06:98c1:3102:96:65b:cff7:1c28:b82a | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 48 | 2a06:98c1:310a:f7b9:fbc7:ac52:15f3:609c | 2a06:98c1:310a:f7b9:fbc7:ac52:15f3:609c | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 71 | cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 84 | 104.20.18.125 | 104.20.18.125 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 100 | 162.159.44.199 | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 155 | 172.67.79.166 | 172.67.79.166 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 166 | 172.64.229.172 | 172.64.229.172 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 203 | cf.877774.xyz | 2a06:98c1:310b::ac40:9242 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 243 | cmcc.877774.xyz | 104.16.148.11 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 295 | pranab.ns.cloudflare.com | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 329 | www.4444.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 636 | www.4chan.org | 104.16.229.229 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 680 | 2a06:98c1:310b:5429:cdf:3003:ae9c:e62e | 2a06:98c1:310b:5429:cdf:3003:ae9c:e62e | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 683 | 2803:f800:51:6a7b:7c95:5585:9678:1549 | 2803:f800:51:6a7b:7c95:5585:9678:1549 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 693 | 104.26.12.227 | 104.26.12.227 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 941 | 104.20.29.62 | 104.20.29.62 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 19 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 765 | 104.18.40.202 | 104.18.40.202 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1025 | 162.159.61.183 | 162.159.61.183 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 8 | 104.25.252.135 | 104.25.252.135 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 46 | 2a06:98c1:3102:94:16cd:b988:5dae:1295 | 2a06:98c1:3102:94:16cd:b988:5dae:1295 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 214 | 104.16.152.223 | 104.16.152.223 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 268 | www.visa.com.sg | 104.18.13.229 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 276 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 561 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 1021 | 172.64.82.114 | 172.64.82.114 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 9 | 104.17.97.146 | 104.17.97.146 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 45 | 108.162.198.223 | 108.162.198.223 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 47 | 2400:cb00:2049:ec9e:b468:412c:1558:69cb | 2400:cb00:2049:ec9e:b468:412c:1558:69cb | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 59 | 162.159.39.196 | 162.159.39.196 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 162 | 104.17.165.38 | 104.17.165.38 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 193 | 162.159.38.165 | 162.159.38.165 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 15 | www.ipget.net | 2606:4700:3037::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 60 | 108.162.198.152 | 108.162.198.152 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 1049 | 104.19.148.121 | 104.19.148.121 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 14 | www.ipget.net | 172.67.207.26 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 28 | 172.64.157.214 | 172.64.157.214 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 58 | 162.159.44.60 | 162.159.44.60 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 18 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 61 | 172.64.229.106 | 172.64.229.106 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 5 | 172.67.68.110 | 172.67.68.110 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 6 | 172.67.76.61 | 172.67.76.61 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 27 | 162.159.39.156 | 162.159.39.156 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 30 | 162.159.0.79 | 162.159.0.79 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 659 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 984 | 162.159.38.171 | 162.159.38.171 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 29 | 172.64.53.15 | 172.64.53.15 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 32 | wilson.ns.cloudflare.com | 162.159.44.110 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 746 | 2a06:98c1:51::c0bc:f0fe:59ba | 2a06:98c1:51::c0bc:f0fe:59ba | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 1066 | 104.19.212.207 | 104.19.212.207 | IPv4 | h2 | ✅ 成功 | 70 | cloudflare |
| 211 | 104.17.60.113 | 104.17.60.113 | IPv4 | h2 | ✅ 成功 | 73 | cloudflare |
| 212 | 104.17.126.38 | 104.17.126.38 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 360 | kyree.ns.cloudflare.com | 172.64.35.207 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 372 | dylan.ns.cloudflare.com | 108.162.195.187 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 966 | 108.162.198.69 | 108.162.198.69 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 192 | 172.64.49.54 | 172.64.49.54 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 345 | decker.ns.cloudflare.com | 162.159.44.155 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 374 | dylan.ns.cloudflare.com | 172.64.35.187 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 670 | 108.162.194.125 | 108.162.194.125 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 965 | 162.159.45.176 | 162.159.45.176 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 974 | 2a06:98c1:51:eb89:13e1:e7d0:738a:d1e6 | 2a06:98c1:51:eb89:13e1:e7d0:738a:d1e6 | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 1059 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 42 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 175 | 162.159.34.205 | 162.159.34.205 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 185 | 162.159.48.153 | 162.159.48.153 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 361 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 375 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 459 | moura.ns.cloudflare.com | 172.64.35.217 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 468 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 744 | 162.159.45.165 | 162.159.45.165 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 167 | 162.159.39.165 | 162.159.39.165 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 357 | ct.877774.xyz | 172.64.229.174 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 376 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 435 | braden.ns.cloudflare.com | 172.64.35.169 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 441 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 443 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 506 | 162.159.21.116 | 162.159.21.116 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 514 | 162.159.6.115 | 162.159.6.115 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 571 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 576 | uriah.ns.cloudflare.com | 172.64.35.194 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 969 | 162.159.39.99 | 162.159.39.99 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 971 | 162.159.44.128 | 162.159.44.128 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 978 | 2a06:98c1:51:e7:5abb:89e:d67d:c1a4 | 2a06:98c1:51:e7:5abb:89e:d67d:c1a4 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 40 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 120 | 162.159.38.68 | 162.159.38.68 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 377 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 440 | bowen.ns.cloudflare.com | 162.159.44.83 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 481 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 629 | damien.ns.cloudflare.com | 108.162.195.168 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 704 | huxley.ns.cloudflare.com | 172.64.35.188 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 811 | 162.159.36.205 | 162.159.36.205 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 845 | 172.64.53.41 | 172.64.53.41 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 855 | 162.159.3.128 | 162.159.3.128 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 888 | 2a06:98c1:51::ee:b8fb:877f | 2a06:98c1:51::ee:b8fb:877f | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 912 | 162.159.39.74 | 162.159.39.74 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 933 | 172.64.52.194 | 172.64.52.194 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 33 | wilson.ns.cloudflare.com | 172.64.35.110 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 95 | 162.159.49.244 | 162.159.49.244 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 173 | 162.159.3.222 | 162.159.3.222 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 190 | 172.64.53.89 | 172.64.53.89 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 302 | cris.ns.cloudflare.com | 172.64.35.202 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 602 | 172.64.35.24 | 172.64.35.24 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 661 | 162.159.38.192 | 162.159.38.192 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 702 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 761 | 162.159.1.145 | 162.159.1.145 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 785 | 162.159.38.226 | 162.159.38.226 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 850 | 162.159.11.128 | 162.159.11.128 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 918 | 162.159.43.50 | 162.159.43.50 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 168 | 162.159.46.38 | 162.159.46.38 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 287 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 442 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 462 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 464 | rustam.ns.cloudflare.com | 162.159.44.148 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 658 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 703 | huxley.ns.cloudflare.com | 162.159.44.188 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 793 | 162.159.36.223 | 162.159.36.223 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 256 | 2803:f800:50:6a35:2305:8385:b5c9:df67 | 2803:f800:50:6a35:2305:8385:b5c9:df67 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 723 | 108.162.195.1 | 108.162.195.1 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 740 | 172.64.53.40 | 172.64.53.40 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 866 | 198.41.222.191 | 198.41.222.191 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 898 | 2a06:98c1:51:aa:3e22:dd48:6279:eeb9 | 2a06:98c1:51:aa:3e22:dd48:6279:eeb9 | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 906 | 162.159.33.191 | 162.159.33.191 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 931 | 162.159.45.121 | 162.159.45.121 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 996 | 162.159.3.89 | 162.159.3.89 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 147 | 162.159.58.251 | 162.159.58.251 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 282 | sullivan.ns.cloudflare.com | 108.162.195.161 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 358 | kyree.ns.cloudflare.com | 108.162.195.207 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 669 | 172.64.50.51 | 172.64.50.51 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 738 | 162.159.42.146 | 162.159.42.146 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 798 | 162.159.16.136 | 162.159.16.136 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 987 | 172.64.52.90 | 172.64.52.90 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 43 | 162.159.40.8 | 162.159.40.8 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 180 | 2a06:98c1:51:4e:5188:50a9:cbd1:917d | 2a06:98c1:51:4e:5188:50a9:cbd1:917d | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 1032 | 162.159.58.65 | 162.159.58.65 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 38 | trevor.ns.cloudflare.com | 162.159.44.154 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 56 | 172.64.53.195 | 172.64.53.195 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 114 | 2a06:98c1:51:878:e123:da31:b2ee:2017 | 2a06:98c1:51:878:e123:da31:b2ee:2017 | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 884 | 2803:f800:51:0:fc87:e2d6:88c3:378b | 2803:f800:51:0:fc87:e2d6:88c3:378b | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 62 | 172.64.52.150 | 172.64.52.150 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 579 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 479 | benedict.ns.cloudflare.com | 162.159.44.205 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 787 | 172.64.53.165 | 172.64.53.165 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 863 | 162.159.39.180 | 162.159.39.180 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 900 | 2a06:98c1:3102:e8:d68a:c7f6:afaa:c80b | 2a06:98c1:3102:e8:d68a:c7f6:afaa:c80b | IPv6 | h2 | ✅ 成功 | 88 | cloudflare |
| 970 | 162.159.7.12 | 162.159.7.12 | IPv4 | h2 | ✅ 成功 | 89 | cloudflare |
| 224 | 162.159.44.151 | 162.159.44.151 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 41 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 94 | cloudflare |
| 289 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h2 | ✅ 成功 | 94 | cloudflare |
| 98 | 108.162.198.206 | 108.162.198.206 | IPv4 | h2 | ✅ 成功 | 97 | cloudflare |
| 124 | cfip.xxxxxxxx.tk | 104.16.241.229 | IPv4 | h2 | ✅ 成功 | 99 | cloudflare |
| 291 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | h2 | ✅ 成功 | 100 | cloudflare |
| 983 | 2a06:98c1:3106::c5:5d39:736d | 2a06:98c1:3106::c5:5d39:736d | IPv6 | h2 | ✅ 成功 | 159 | cloudflare |
| 17 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 203 | cloudflare |
| 13 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 206 | cloudflare |
| 31 | wilson.ns.cloudflare.com | 108.162.195.110 | IPv4 | h2 | ✅ 成功 | 210 | cloudflare |
| 37 | trevor.ns.cloudflare.com | 108.162.195.154 | IPv4 | h2 | ✅ 成功 | 210 | cloudflare |
| 1 | 2a06:98c1:310d:4d1d:135a:5c6:5e9a:b987 | 2a06:98c1:310d:4d1d:135a:5c6:5e9a:b987 | IPv6 | h2 | ✅ 成功 | 263 | cloudflare |
| 2 | 104.16.45.84 | 104.16.45.84 | IPv4 | h2 | ✅ 成功 | 268 | cloudflare |
| 3 | 172.64.154.18 | 172.64.154.18 | IPv4 | h2 | ✅ 成功 | 271 | cloudflare |
| 429 | 141.147.185.63 | 141.147.185.63 | IPv4 | h2 | ✅ 成功 | 2106 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 868 条记录
- **快 (50-100ms)**: 182 条记录
- **正常 (100-200ms)**: 2 条记录
- **慢 (200-500ms)**: 7 条记录
- **很慢 (>500ms)**: 1 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 8 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 6 次失败
- **h2**: 3 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
