# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 11:34:57
- **数据来源**: connectivity_results-20251212-113457.json
- **总测试数**: 450
- **失败测试数**: 170
- **成功测试数**: 280
- **失败率**: 37.78%
- **平均延迟**: 107.19ms
- **最小延迟**: 59ms
- **最大延迟**: 1325ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 11:34:57
- **IP地址**: 132.196.83.35
- **国家/地区**: United States (US)
- **ASN**: AS8075
- **网络组织**: Microsoft Corporation
- **网络域名**: microsoft.com
- **大洲**: North America (NA)
- **数据源**: ipinfo.io

---

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 164 次 (96.5%)
- **DNS解析错误: 其他DNS错误**: 3 次 (1.8%)
- **连接超时: I/O超时**: 3 次 (1.8%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (164 次测试)

| 序号 | 主机/域名                             | 目标IP                              | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                                                            |
| ---- | ------------------------------------- | ----------------------------------- | ------ | ---- | ------ | -------- | ------ | ----------------------------------------------------------------------------------- |
| 1    | [2606:4700:440f::53aa:4126]           | 2606:4700:440f::53aa:4126           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable           |
| 10   | moura.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable             |
| 11   | moura.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable             |
| 12   | moura.ns.cloudflare.com               | 2606:4700:58::a29f:2cd9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable             |
| 15   | comicabc.com                          | 2606:4700:3030::ac43:ae15           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable           |
| 16   | comicabc.com                          | 2606:4700:3036::6815:400a           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable           |
| 19   | www.ipget.net                         | 2606:4700:3031::ac43:cf1a           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable           |
| 20   | www.ipget.net                         | 2606:4700:3036::6815:fd4            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable            |
| 24   | rustam.ns.cloudflare.com              | 2606:4700:58::a29f:2c94             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable             |
| 25   | rustam.ns.cloudflare.com              | 2a06:98c1:50::ac40:2394             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable             |
| 26   | rustam.ns.cloudflare.com              | 2803:f800:50::6ca2:c394             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable             |
| 30   | wilson.ns.cloudflare.com              | 2803:f800:50::6ca2:c36e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable             |
| 31   | wilson.ns.cloudflare.com              | 2a06:98c1:50::ac40:236e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable             |
| 32   | wilson.ns.cloudflare.com              | 2606:4700:58::a29f:2c6e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable             |
| 36   | time.is                               | 2606:4700:20::681a:c36              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable              |
| 37   | time.is                               | 2606:4700:20::ac43:449d             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable             |
| 38   | time.is                               | 2606:4700:20::681a:d36              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable              |
| 42   | cf.0sm.com                            | 2606:4700:3032::6815:785            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable            |
| 43   | cf.0sm.com                            | 2606:4700:3037::ac43:bb91           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable           |
| 87   | trevor.ns.cloudflare.com              | 2606:4700:58::a29f:2c9a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable             |
| 88   | trevor.ns.cloudflare.com              | 2803:f800:50::6ca2:c39a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable             |
| 89   | trevor.ns.cloudflare.com              | 2a06:98c1:50::ac40:239a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable             |
| 93   | www.gov.ua                            | 2606:4700:3031::6815:1748           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable           |
| 94   | www.gov.ua                            | 2606:4700:3033::ac43:d17f           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable           |
| 98   | iplocation.io                         | 2606:4700:20::681a:bde              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable              |
| 99   | iplocation.io                         | 2606:4700:20::ac43:4664             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable             |
| 100  | iplocation.io                         | 2606:4700:20::681a:ade              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable              |
| 102  | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable            |
| 109  | ipinfo.in                             | 2606:4700:3031::6815:1581           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable           |
| 110  | ipinfo.in                             | 2606:4700:3037::ac43:c6cb           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable           |
| 114  | huxley.ns.cloudflare.com              | 2606:4700:58::a29f:2cbc             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable             |
| 115  | huxley.ns.cloudflare.com              | 2803:f800:50::6ca2:c3bc             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable             |
| 116  | huxley.ns.cloudflare.com              | 2a06:98c1:50::ac40:23bc             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable             |
| 119  | icook.hk                              | 2606:4700:3037::ac43:a168           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable           |
| 120  | icook.hk                              | 2606:4700:3031::6815:5ad2           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable           |
| 126  | www.hugedomains.com                   | 2606:4700:20::681a:725              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable              |
| 127  | www.hugedomains.com                   | 2606:4700:20::ac43:46bf             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable             |
| 128  | www.hugedomains.com                   | 2606:4700:20::681a:625              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable              |
| 129  | [2606:4700:8de6::5fa2:799e]           | 2606:4700:8de6::5fa2:799e           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable           |
| 132  | steamdb.info                          | 2606:4700:10::6814:22d4             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable             |
| 133  | steamdb.info                          | 2606:4700:10::ac42:affa             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable             |
| 150  | www.pcmag.com                         | 2606:4700::6810:1476                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable                |
| 151  | www.pcmag.com                         | 2606:4700::6810:1576                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable                |
| 155  | sullivan.ns.cloudflare.com            | 2803:f800:50::6ca2:c3a1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable             |
| 156  | sullivan.ns.cloudflare.com            | 2a06:98c1:50::ac40:23a1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable             |
| 157  | sullivan.ns.cloudflare.com            | 2606:4700:58::a29f:2ca1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable             |
| 162  | craig.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable             |
| 163  | craig.ns.cloudflare.com               | 2606:4700:58::a29f:2cc0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable             |
| 164  | craig.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable             |
| 169  | benedict.ns.cloudflare.com            | 2606:4700:58::a29f:2ccd             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable             |
| 170  | benedict.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cd             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable             |
| 171  | benedict.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cd             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable             |
| 175  | ip.sb                                 | 2606:4700:20::681a:d1f              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable              |
| 176  | ip.sb                                 | 2606:4700:20::ac43:4bac             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable             |
| 177  | ip.sb                                 | 2606:4700:20::681a:c1f              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable              |
| 184  | cf.877771.xyz                         | 2606:4700:3033::6815:50b4           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable           |
| 185  | cf.877771.xyz                         | 2606:4700:3033::ac43:98b7           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable           |
| 192  | pranab.ns.cloudflare.com              | 2606:4700:58::a29f:2cc7             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable             |
| 193  | pranab.ns.cloudflare.com              | 2803:f800:50::6ca2:c3c7             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable             |
| 194  | pranab.ns.cloudflare.com              | 2a06:98c1:50::ac40:23c7             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable             |
| 198  | cris.ns.cloudflare.com                | 2803:f800:50::6ca2:c3ca             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable             |
| 199  | cris.ns.cloudflare.com                | 2606:4700:58::a29f:2cca             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable             |
| 200  | cris.ns.cloudflare.com                | 2a06:98c1:50::ac40:23ca             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable             |
| 206  | toy-people.com                        | 2606:4700:20::ac43:4812             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable             |
| 207  | toy-people.com                        | 2606:4700:20::681a:324              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable              |
| 208  | toy-people.com                        | 2606:4700:20::681a:224              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable              |
| 212  | decker.ns.cloudflare.com              | 2a06:98c1:50::ac40:239b             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable             |
| 213  | decker.ns.cloudflare.com              | 2803:f800:50::6ca2:c39b             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable             |
| 214  | decker.ns.cloudflare.com              | 2606:4700:58::a29f:2c9b             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable             |
| 221  | kyree.ns.cloudflare.com               | 2a06:98c1:50::ac40:23cf             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable             |
| 222  | kyree.ns.cloudflare.com               | 2803:f800:50::6ca2:c3cf             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable             |
| 223  | kyree.ns.cloudflare.com               | 2606:4700:58::a29f:2ccf             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable             |
| 228  | zread.ai                              | 2606:4700:3032::ac43:ca4e           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable           |
| 229  | zread.ai                              | 2606:4700:3033::6815:4cf0           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable           |
| 233  | www.whatismyip.com                    | 2606:4700:20::ac43:4581             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable             |
| 234  | www.whatismyip.com                    | 2606:4700:20::681a:d17              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable              |
| 235  | www.whatismyip.com                    | 2606:4700:20::681a:c17              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable              |
| 239  | dylan.ns.cloudflare.com               | 2803:f800:50::6ca2:c3bb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable             |
| 240  | dylan.ns.cloudflare.com               | 2a06:98c1:50::ac40:23bb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable             |
| 241  | dylan.ns.cloudflare.com               | 2606:4700:58::a29f:2cbb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable             |
| 244  | bestcf.030101.xyz                     | 2606:4700:0:b21c:66ba:fef:2ef4:2658 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:b21c:66ba:fef:2ef4:2658]:443: connect: network is unreachable |
| 245  | bestcf.030101.xyz                     | 2606:4700:0:26e6:9bb0:8293:779:dc27 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:26e6:9bb0:8293:779:dc27]:443: connect: network is unreachable |
| 248  | palera.in                             | 2606:4700:3035::6815:3a48           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable           |
| 249  | palera.in                             | 2606:4700:3032::ac43:9d7a           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable           |
| 254  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::6815:48e9           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable           |
| 255  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::ac43:9bac           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable           |
| 261  | singapore.com                         | 2606:4700:20::681a:d8c              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable              |
| 262  | singapore.com                         | 2606:4700:20::681a:c8c              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable              |
| 263  | singapore.com                         | 2606:4700:20::ac43:4bc2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable             |
| 267  | silkbook.com                          | 2606:4700:20::681a:9a0              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable              |
| 268  | silkbook.com                          | 2606:4700:20::ac43:4bd0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable             |
| 269  | silkbook.com                          | 2606:4700:20::681a:8a0              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable              |
| 271  | freeyx.cloudflare88.eu.org            | 2606:4700:3010:0:fb:e00f:f23d:42c6  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3010:0:fb:e00f:f23d:42c6]:443: connect: network is unreachable  |
| 277  | ip.gs                                 | 2606:4700:3035::ac43:a01c           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable           |
| 278  | ip.gs                                 | 2606:4700:3036::6815:eb0            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable            |
| 280  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable           |
| 284  | ashton.ns.cloudflare.com              | 2606:4700:58::a29f:2cad             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable             |
| 285  | ashton.ns.cloudflare.com              | 2803:f800:50::6ca2:c3ad             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable             |
| 286  | ashton.ns.cloudflare.com              | 2a06:98c1:50::ac40:23ad             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable             |
| 290  | dnschecker.org                        | 2606:4700:20::681a:659              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable              |
| 291  | dnschecker.org                        | 2606:4700:20::681a:759              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable              |
| 292  | dnschecker.org                        | 2606:4700:20::ac43:49d8             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable             |
| 293  | [2606:4700:964f::6e2c:588e]           | 2606:4700:964f::6e2c:588e           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable           |
| 296  | whatismyipaddress.com                 | 2606:4700::6813:de4f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable                |
| 297  | whatismyipaddress.com                 | 2606:4700::6813:df4f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable                |
| 304  | [2606:4700:440b::3e6e:5f06]           | 2606:4700:440b::3e6e:5f06           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable           |
| 308  | uriah.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable             |
| 309  | uriah.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable             |
| 310  | uriah.ns.cloudflare.com               | 2606:4700:58::a29f:2cc2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable             |
| 313  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2c90           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable           |
| 314  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable           |
| 317  | www.udemy.com                         | 2606:4700::6810:8fed                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable                |
| 318  | www.udemy.com                         | 2606:4700::6810:8eed                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable                |
| 319  | [2606:4700:4403::7357:544f]           | 2606:4700:4403::7357:544f           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable           |
| 322  | tasteatlas.com                        | 2606:4700::6811:2469                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable                |
| 323  | tasteatlas.com                        | 2606:4700::6811:2569                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable                |
| 325  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable           |
| 328  | cf.877774.xyz                         | 2a06:98c1:3102::6812:29be           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable           |
| 329  | cf.877774.xyz                         | 2606:4700:4406::ac40:9242           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable           |
| 333  | julio.ns.cloudflare.com               | 2606:4700:58::a29f:2cd1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable             |
| 334  | julio.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable             |
| 335  | julio.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d1             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable             |
| 352  | [2606:4700:83be::11:74f]              | 2606:4700:83be::11:74f              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable              |
| 355  | www.digitalocean.com                  | 2606:4700::6813:ad44                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable                |
| 356  | www.digitalocean.com                  | 2606:4700::6813:ae44                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable                |
| 359  | icook.tw                              | 2606:4700:10::6814:1c4a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable             |
| 360  | icook.tw                              | 2606:4700:10::ac42:9e73             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable             |
| 362  | [2606:4700:83bd::7d8:2b47]            | 2606:4700:83bd::7d8:2b47            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable            |
| 368  | otto.ns.cloudflare.com                | 2803:f800:50::6ca2:c387             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable             |
| 369  | otto.ns.cloudflare.com                | 2a06:98c1:50::ac40:2387             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable             |
| 370  | otto.ns.cloudflare.com                | 2606:4700:58::a29f:2c87             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable             |
| 374  | damien.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a8             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable             |
| 375  | damien.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a8             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable             |
| 376  | damien.ns.cloudflare.com              | 2606:4700:58::a29f:2ca8             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable             |
| 381  | lewis.ns.cloudflare.com               | 2a06:98c1:50::ac40:239f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable             |
| 382  | lewis.ns.cloudflare.com               | 2606:4700:58::a29f:2c9f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable             |
| 383  | lewis.ns.cloudflare.com               | 2803:f800:50::6ca2:c39f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable             |
| 386  | ifconfig.co                           | 2606:4700:3037::6815:365b           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable           |
| 387  | ifconfig.co                           | 2606:4700:3030::ac43:a86a           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable           |
| 399  | japan.com                             | 2606:4700:20::681a:43c              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable              |
| 400  | japan.com                             | 2606:4700:20::ac43:465c             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable             |
| 401  | japan.com                             | 2606:4700:20::681a:53c              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable              |
| 404  | www.wto.org                           | 2606:4700:4406::ac40:9242           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable           |
| 405  | www.wto.org                           | 2a06:98c1:3102::6812:29be           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable           |
| 406  | [2606:4700:4409::5b5b:7758]           | 2606:4700:4409::5b5b:7758           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable           |
| 409  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable            |
| 410  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable           |
| 416  | abdullah.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable             |
| 417  | abdullah.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable             |
| 418  | abdullah.ns.cloudflare.com            | 2606:4700:58::a29f:2ccb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable             |
| 422  | bowen.ns.cloudflare.com               | 2606:4700:58::a29f:2c53             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable             |
| 423  | bowen.ns.cloudflare.com               | 2803:f800:50::6ca2:c353             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable             |
| 424  | bowen.ns.cloudflare.com               | 2a06:98c1:50::ac40:2353             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable             |
| 427  | xn--b6gac.eu.org                      | 2606:4700:3035::6815:5a4e           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable           |
| 428  | xn--b6gac.eu.org                      | 2606:4700:3037::ac43:99fd           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable           |
| 431  | fbi.gov                               | 2606:4700::6810:94f4                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable                |
| 432  | fbi.gov                               | 2606:4700::6810:95f4                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable                |
| 436  | braden.ns.cloudflare.com              | 2606:4700:58::a29f:2ca9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable             |
| 437  | braden.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable             |
| 438  | braden.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable             |
| 441  | cf.zhetengsha.eu.org                  | 2606:4700:4407::ac40:9052           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4407::ac40:9052]:443: connect: network is unreachable           |
| 442  | cf.zhetengsha.eu.org                  | 2a06:98c1:310d::6812:2bae           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:310d::6812:2bae]:443: connect: network is unreachable           |
| 445  | cf.090227.xyz                         | 2606:4700:440a::ac40:98f1           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440a::ac40:98f1]:443: connect: network is unreachable           |
| 446  | cf.090227.xyz                         | 2a06:98c1:3105::6812:230f           | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3105::6812:230f]:443: connect: network is unreachable           |

#### DNS解析错误: 其他DNS错误 (3 次测试)

| 序号 | 主机/域名                                                             | 目标IP  | IP版本  | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息      |
| ---- | --------------------------------------------------------------------- | ------- | ------- | ---- | ------ | -------- | ------ | ------------- |
| 179  | ********-****-****-****-************._._._._._._._._._._._._._**.**_* | Unknown | Unknown | none | N/A    | 0        | N/A    | DNS解析无结果 |
| 250  | **********.*****************_**.**_.**                                | Unknown | Unknown | none | N/A    | 0        | N/A    | DNS解析无结果 |
| 324  | **********.**********._**.**_                                         | Unknown | Unknown | none | N/A    | 0        | N/A    | DNS解析无结果 |

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 346  | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 392  | 172.67.49.134    | 172.67.49.134  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.67.49.134:443: i/o timeout  |
| 450  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 164 次 (96.5%)
- **DNS解析错误**: 3 次 (1.8%)
- **连接超时**: 3 次 (1.8%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 170 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 3 次，IPv6失败 164 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：moura.ns.cloudflare.com (3次),
rustam.ns.cloudflare.com (3次), wilson.ns.cloudflare.com
(3次)，建议重点检查这些主机的网络状态和服务可用性

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                  | 目标IP          | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | -------------------------- | --------------- | ------ | ---- | ------- | -------- | ---------- |
| 204  | toy-people.com             | 104.26.3.36     | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 111  | huxley.ns.cloudflare.com   | 108.162.195.188 | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 391  | eur.877774.xyz             | 104.21.29.164   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 411  | www.csgo.com               | 195.85.59.161   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 425  | xn--b6gac.eu.org           | 172.67.153.253  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 134  | www.okcupid.com            | 104.18.160.63   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 146  | cu.877774.xyz              | 104.26.4.115    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 84   | trevor.ns.cloudflare.com   | 108.162.195.154 | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 390  | eur.877774.xyz             | 104.21.26.150   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 13   | comicabc.com               | 172.67.174.21   | IPv4   | h3   | ✅ 成功 | 68       | cloudflare |
| 253  | cloudflare-ip.mofashi.ltd  | 104.21.72.233   | IPv4   | h3   | ✅ 成功 | 70       | cloudflare |
| 18   | www.ipget.net              | 172.67.207.26   | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 67   | cmcc.877774.xyz            | 104.16.148.244  | IPv4   | h3   | ✅ 成功 | 72       | cloudflare |
| 83   | 172.67.75.172              | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 73       | cloudflare |
| 61   | cmcc.877774.xyz            | 104.16.148.7    | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 389  | eur.877774.xyz             | 104.21.47.209   | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 365  | otto.ns.cloudflare.com     | 172.64.35.135   | IPv4   | h3   | ✅ 成功 | 75       | cloudflare |
| 385  | ifconfig.co                | 172.67.168.106  | IPv4   | h3   | ✅ 成功 | 75       | cloudflare |
| 80   | cmcc.877774.xyz            | 104.16.149.244  | IPv4   | h3   | ✅ 成功 | 76       | cloudflare |
| 343  | cfip.xxxxxxxx.tk           | 188.114.96.125  | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 35   | time.is                    | 104.26.13.54    | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 55   | 104.18.39.196              | 104.18.39.196   | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 96   | iplocation.io              | 172.67.70.100   | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 39   | www.7749tv.com             | 104.17.90.189   | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 202  | www.glassdoor.com          | 104.16.25.46    | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 252  | cloudflare-ip.mofashi.ltd  | 172.67.155.172  | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 315  | www.udemy.com              | 104.16.142.237  | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 270  | freeyx.cloudflare88.eu.org | 141.101.120.13  | IPv4   | h3   | ✅ 成功 | 80       | cloudflare |
| 395  | 104.17.79.11               | 104.17.79.11    | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 105  | 103.160.204.59             | 103.160.204.59  | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 112  | huxley.ns.cloudflare.com   | 172.64.35.188   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 125  | www.hugedomains.com        | 104.26.7.37     | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 145  | cu.877774.xyz              | 104.26.4.114    | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 205  | toy-people.com             | 172.67.72.18    | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 332  | julio.ns.cloudflare.com    | 172.64.35.209   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 70   | cmcc.877774.xyz            | 104.16.149.3    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 173  | ip.sb                      | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 216  | na.877774.xyz              | 104.18.187.25   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 301  | www.visa.com.hk            | 104.18.20.69    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 366  | otto.ns.cloudflare.com     | 108.162.195.135 | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 65   | cmcc.877774.xyz            | 104.16.148.11   | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 124  | www.hugedomains.com        | 172.67.70.191   | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 140  | cu.877774.xyz              | 104.26.4.118    | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 144  | cu.877774.xyz              | 104.26.4.113    | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 172  | ip.sb                      | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 187  | www.visa.cn                | 162.159.153.2   | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 353  | www.digitalocean.com       | 104.19.174.68   | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 430  | fbi.gov                    | 104.16.149.244  | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 44   | ipv4.ip.sb                 | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 77   | cmcc.877774.xyz            | 104.16.149.10   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 97   | iplocation.io              | 104.26.10.222   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 101  | shopify.com                | 23.227.38.33    | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 159  | craig.ns.cloudflare.com    | 108.162.195.192 | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 238  | dylan.ns.cloudflare.com    | 172.64.35.187   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 273  | asia.877774.xyz            | 104.17.142.146  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 331  | julio.ns.cloudflare.com    | 108.162.195.209 | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 339  | gamer.com.tw               | 104.18.3.197    | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 340  | gamer.com.tw               | 104.18.2.197    | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 349  | cfip.xxxxxxxx.tk           | 104.16.241.229  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 396  | japan.com                  | 104.26.4.60     | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 440  | cf.zhetengsha.eu.org       | 172.64.152.241  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 14   | comicabc.com               | 104.21.64.10    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 57   | cmcc.877774.xyz            | 104.16.148.3    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 108  | ipinfo.in                  | 172.67.198.203  | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 154  | sullivan.ns.cloudflare.com | 108.162.195.161 | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 232  | www.whatismyip.com         | 104.26.12.23    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 257  | 104.17.68.85               | 104.17.68.85    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 281  | ashton.ns.cloudflare.com   | 108.162.195.173 | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 320  | tasteatlas.com             | 104.17.36.105   | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 347  | cfip.xxxxxxxx.tk           | 198.41.214.141  | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 398  | japan.com                  | 172.67.70.92    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 40   | cf.0sm.com                 | 104.21.7.133    | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 66   | cmcc.877774.xyz            | 104.16.148.12   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 181  | www.visa.com.sg            | 104.18.12.229   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 305  | uriah.ns.cloudflare.com    | 172.64.35.194   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 350  | cfip.xxxxxxxx.tk           | 104.17.127.110  | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 354  | www.digitalocean.com       | 104.19.173.68   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 377  | cfip.1323123.xyz           | 104.16.133.220  | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 33   | time.is                    | 104.26.12.54    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 45   | ipv4.ip.sb                 | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 266  | silkbook.com               | 104.26.9.160    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 289  | dnschecker.org             | 104.26.6.89     | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 302  | www.visa.com.hk            | 104.18.21.69    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 327  | cf.877774.xyz              | 172.64.146.66   | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 336  | 104.17.142.12              | 104.17.142.12   | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 341  | 104.18.37.40               | 104.18.37.40    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 394  | 108.162.198.54             | 108.162.198.54  | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 48   | ct.877774.xyz              | 172.64.229.174  | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 63   | cmcc.877774.xyz            | 104.16.148.9    | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 123  | www.hugedomains.com        | 104.26.6.37     | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 148  | www.pcmag.com              | 104.16.20.118   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 149  | www.pcmag.com              | 104.16.21.118   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 161  | craig.ns.cloudflare.com    | 172.64.35.192   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 180  | www.visa.com.sg            | 104.18.13.229   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 217  | na.877774.xyz              | 104.19.74.233   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 227  | zread.ai                   | 172.67.202.78   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 242  | bestcf.030101.xyz          | 104.17.99.183   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 298  | 104.18.42.26               | 104.18.42.26    | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 303  | 162.159.133.85             | 162.159.133.85  | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 321  | tasteatlas.com             | 104.17.37.105   | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录

---

## 详细分析

### 按IP版本统计

- **IPv4 失败**: 3 次
- **IPv6 失败**: 164 次

### 按协议统计

- **none**: 170 次失败

---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

_此报告由 HTTP/3 连接测试报告生成器自动生成_
