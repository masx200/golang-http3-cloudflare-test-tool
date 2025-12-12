# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 14:51:49
- **数据来源**: connectivity_results-20251212-145149.json
- **总测试数**: 442
- **失败测试数**: 166
- **成功测试数**: 276
- **失败率**: 37.56%
- **平均延迟**: 131.16ms
- **最小延迟**: 37ms
- **最大延迟**: 642ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 14:51:50
- **IP地址**: 4.236.151.0
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

- **网络不可达: 网络不可达**: 163 次 (98.2%)
- **连接超时: I/O超时**: 3 次 (1.8%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (163 次测试)

| 序号 | 主机/域名                             | 目标IP                                | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                                                              |
| ---- | ------------------------------------- | ------------------------------------- | ------ | ---- | ------ | -------- | ------ | ------------------------------------------------------------------------------------- |
| 1    | [2606:4700:440f::53aa:4126]           | 2606:4700:440f::53aa:4126             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable             |
| 6    | www.ipget.net                         | 2606:4700:3036::6815:fd4              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable              |
| 7    | www.ipget.net                         | 2606:4700:3031::ac43:cf1a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable             |
| 10   | cf.0sm.com                            | 2606:4700:3037::ac43:bb91             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable             |
| 11   | cf.0sm.com                            | 2606:4700:3032::6815:785              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable              |
| 15   | wilson.ns.cloudflare.com              | 2a06:98c1:50::ac40:236e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable               |
| 16   | wilson.ns.cloudflare.com              | 2803:f800:50::6ca2:c36e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable               |
| 17   | wilson.ns.cloudflare.com              | 2606:4700:58::a29f:2c6e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable               |
| 20   | comicabc.com                          | 2606:4700:3030::ac43:ae15             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable             |
| 21   | comicabc.com                          | 2606:4700:3036::6815:400a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable             |
| 24   | www.pcmag.com                         | 2606:4700::6810:1476                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable                  |
| 25   | www.pcmag.com                         | 2606:4700::6810:1576                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable                  |
| 28   | ipinfo.in                             | 2606:4700:3037::ac43:c6cb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable             |
| 29   | ipinfo.in                             | 2606:4700:3031::6815:1581             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable             |
| 34   | trevor.ns.cloudflare.com              | 2803:f800:50::6ca2:c39a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable               |
| 35   | trevor.ns.cloudflare.com              | 2a06:98c1:50::ac40:239a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable               |
| 36   | trevor.ns.cloudflare.com              | 2606:4700:58::a29f:2c9a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable               |
| 45   | www.gov.ua                            | 2606:4700:3031::6815:1748             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable             |
| 46   | www.gov.ua                            | 2606:4700:3033::ac43:d17f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable             |
| 50   | steamdb.info                          | 2606:4700:10::ac42:affa               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable               |
| 51   | steamdb.info                          | 2606:4700:10::6814:22d4               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable               |
| 52   | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable              |
| 59   | iplocation.io                         | 2606:4700:20::ac43:4664               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable               |
| 60   | iplocation.io                         | 2606:4700:20::681a:ade                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable                |
| 61   | iplocation.io                         | 2606:4700:20::681a:bde                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable                |
| 74   | huxley.ns.cloudflare.com              | 2606:4700:58::a29f:2cbc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable               |
| 75   | huxley.ns.cloudflare.com              | 2803:f800:50::6ca2:c3bc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable               |
| 76   | huxley.ns.cloudflare.com              | 2a06:98c1:50::ac40:23bc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable               |
| 81   | icook.hk                              | 2606:4700:3037::ac43:a168             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable             |
| 82   | icook.hk                              | 2606:4700:3031::6815:5ad2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable             |
| 83   | [2606:4700:8de6::5fa2:799e]           | 2606:4700:8de6::5fa2:799e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable             |
| 87   | www.hugedomains.com                   | 2606:4700:20::ac43:46bf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable               |
| 88   | www.hugedomains.com                   | 2606:4700:20::681a:625                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable                |
| 89   | www.hugedomains.com                   | 2606:4700:20::681a:725                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable                |
| 128  | cf.877771.xyz                         | 2606:4700:3033::6815:50b4             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable             |
| 129  | cf.877771.xyz                         | 2606:4700:3033::ac43:98b7             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable             |
| 138  | sullivan.ns.cloudflare.com            | 2803:f800:50::6ca2:c3a1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable               |
| 139  | sullivan.ns.cloudflare.com            | 2606:4700:58::a29f:2ca1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable               |
| 140  | sullivan.ns.cloudflare.com            | 2a06:98c1:50::ac40:23a1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable               |
| 144  | craig.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable               |
| 145  | craig.ns.cloudflare.com               | 2606:4700:58::a29f:2cc0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable               |
| 146  | craig.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable               |
| 154  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable             |
| 155  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2c90             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable             |
| 162  | pranab.ns.cloudflare.com              | 2a06:98c1:50::ac40:23c7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable               |
| 163  | pranab.ns.cloudflare.com              | 2803:f800:50::6ca2:c3c7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable               |
| 164  | pranab.ns.cloudflare.com              | 2606:4700:58::a29f:2cc7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable               |
| 168  | cris.ns.cloudflare.com                | 2606:4700:58::a29f:2cca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable               |
| 169  | cris.ns.cloudflare.com                | 2803:f800:50::6ca2:c3ca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable               |
| 170  | cris.ns.cloudflare.com                | 2a06:98c1:50::ac40:23ca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable               |
| 176  | www.whatismyip.com                    | 2606:4700:20::681a:d17                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable                |
| 177  | www.whatismyip.com                    | 2606:4700:20::ac43:4581               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable               |
| 178  | www.whatismyip.com                    | 2606:4700:20::681a:c17                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable                |
| 182  | kyree.ns.cloudflare.com               | 2a06:98c1:50::ac40:23cf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable               |
| 183  | kyree.ns.cloudflare.com               | 2803:f800:50::6ca2:c3cf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable               |
| 184  | kyree.ns.cloudflare.com               | 2606:4700:58::a29f:2ccf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable               |
| 188  | dylan.ns.cloudflare.com               | 2606:4700:58::a29f:2cbb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable               |
| 189  | dylan.ns.cloudflare.com               | 2803:f800:50::6ca2:c3bb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable               |
| 190  | dylan.ns.cloudflare.com               | 2a06:98c1:50::ac40:23bb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable               |
| 195  | bestcf.030101.xyz                     | 2606:4700:0:b684:c5c1:5d02:e603:436c  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:b684:c5c1:5d02:e603:436c]:443: connect: network is unreachable  |
| 198  | xn--b6gac.eu.org                      | 2606:4700:3037::ac43:99fd             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable             |
| 199  | xn--b6gac.eu.org                      | 2606:4700:3035::6815:5a4e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable             |
| 202  | cf.zhetengsha.eu.org                  | 2606:4700:4407::ac40:9052             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4407::ac40:9052]:443: connect: network is unreachable             |
| 203  | cf.zhetengsha.eu.org                  | 2a06:98c1:310d::6812:2bae             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:310d::6812:2bae]:443: connect: network is unreachable             |
| 204  | [2606:4700:4409::5b5b:7758]           | 2606:4700:4409::5b5b:7758             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable             |
| 207  | zread.ai                              | 2606:4700:3033::6815:4cf0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable             |
| 208  | zread.ai                              | 2606:4700:3032::ac43:ca4e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable             |
| 212  | toy-people.com                        | 2606:4700:20::ac43:4812               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable               |
| 213  | toy-people.com                        | 2606:4700:20::681a:224                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable                |
| 214  | toy-people.com                        | 2606:4700:20::681a:324                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable                |
| 218  | decker.ns.cloudflare.com              | 2606:4700:58::a29f:2c9b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable               |
| 219  | decker.ns.cloudflare.com              | 2803:f800:50::6ca2:c39b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable               |
| 220  | decker.ns.cloudflare.com              | 2a06:98c1:50::ac40:239b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable               |
| 223  | freeyx.cloudflare88.eu.org            | 2606:4700:3010:bf:5dba:14ae:9501:48f7 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3010:bf:5dba:14ae:9501:48f7]:443: connect: network is unreachable |
| 226  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::ac43:9bac             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable             |
| 227  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::6815:48e9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable             |
| 231  | fbi.gov                               | 2606:4700::6810:94f4                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable                  |
| 232  | fbi.gov                               | 2606:4700::6810:95f4                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable                  |
| 236  | braden.ns.cloudflare.com              | 2606:4700:58::a29f:2ca9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable               |
| 237  | braden.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable               |
| 238  | braden.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable               |
| 246  | cf.090227.xyz                         | 2a06:98c1:310d::6812:2bae             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:310d::6812:2bae]:443: connect: network is unreachable             |
| 247  | cf.090227.xyz                         | 2606:4700:4407::ac40:9052             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4407::ac40:9052]:443: connect: network is unreachable             |
| 251  | bowen.ns.cloudflare.com               | 2606:4700:58::a29f:2c53               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable               |
| 252  | bowen.ns.cloudflare.com               | 2803:f800:50::6ca2:c353               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable               |
| 253  | bowen.ns.cloudflare.com               | 2a06:98c1:50::ac40:2353               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable               |
| 257  | moura.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable               |
| 258  | moura.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable               |
| 259  | moura.ns.cloudflare.com               | 2606:4700:58::a29f:2cd9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable               |
| 263  | rustam.ns.cloudflare.com              | 2606:4700:58::a29f:2c94               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable               |
| 264  | rustam.ns.cloudflare.com              | 2a06:98c1:50::ac40:2394               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable               |
| 265  | rustam.ns.cloudflare.com              | 2803:f800:50::6ca2:c394               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable               |
| 272  | time.is                               | 2606:4700:20::681a:c36                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable                |
| 273  | time.is                               | 2606:4700:20::681a:d36                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable                |
| 274  | time.is                               | 2606:4700:20::ac43:449d               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable               |
| 278  | benedict.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable               |
| 279  | benedict.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable               |
| 280  | benedict.ns.cloudflare.com            | 2606:4700:58::a29f:2ccd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable               |
| 284  | ip.sb                                 | 2606:4700:20::681a:c1f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable                |
| 285  | ip.sb                                 | 2606:4700:20::681a:d1f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable                |
| 286  | ip.sb                                 | 2606:4700:20::ac43:4bac               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable               |
| 295  | singapore.com                         | 2606:4700:20::681a:c8c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable                |
| 296  | singapore.com                         | 2606:4700:20::681a:d8c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable                |
| 297  | singapore.com                         | 2606:4700:20::ac43:4bc2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable               |
| 300  | palera.in                             | 2a06:98c1:3121::3                     | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3121::3]:443: connect: network is unreachable                     |
| 301  | palera.in                             | 2a06:98c1:3120::3                     | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3120::3]:443: connect: network is unreachable                     |
| 309  | silkbook.com                          | 2606:4700:20::681a:9a0                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable                |
| 310  | silkbook.com                          | 2606:4700:20::ac43:4bd0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable               |
| 311  | silkbook.com                          | 2606:4700:20::681a:8a0                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable                |
| 314  | ip.gs                                 | 2606:4700:3035::ac43:a01c             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable             |
| 315  | ip.gs                                 | 2606:4700:3036::6815:eb0              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable              |
| 317  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable             |
| 320  | whatismyipaddress.com                 | 2606:4700::6813:df4f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable                  |
| 321  | whatismyipaddress.com                 | 2606:4700::6813:de4f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable                  |
| 323  | [2606:4700:964f::6e2c:588e]           | 2606:4700:964f::6e2c:588e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable             |
| 328  | ashton.ns.cloudflare.com              | 2606:4700:58::a29f:2cad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable               |
| 329  | ashton.ns.cloudflare.com              | 2803:f800:50::6ca2:c3ad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable               |
| 330  | ashton.ns.cloudflare.com              | 2a06:98c1:50::ac40:23ad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable               |
| 334  | dnschecker.org                        | 2606:4700:20::ac43:49d8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable               |
| 335  | dnschecker.org                        | 2606:4700:20::681a:659                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable                |
| 336  | dnschecker.org                        | 2606:4700:20::681a:759                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable                |
| 341  | julio.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable               |
| 342  | julio.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable               |
| 343  | julio.ns.cloudflare.com               | 2606:4700:58::a29f:2cd1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable               |
| 344  | [2606:4700:440b::3e6e:5f06]           | 2606:4700:440b::3e6e:5f06             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable             |
| 348  | uriah.ns.cloudflare.com               | 2606:4700:58::a29f:2cc2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable               |
| 349  | uriah.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable               |
| 350  | uriah.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable               |
| 353  | [2606:4700:4403::7357:544f]           | 2606:4700:4403::7357:544f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable             |
| 358  | cf.877774.xyz                         | 2606:4700:4406::ac40:9242             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable             |
| 359  | cf.877774.xyz                         | 2a06:98c1:3102::6812:29be             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable             |
| 360  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable             |
| 363  | www.udemy.com                         | 2606:4700::6810:8eed                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable                  |
| 364  | www.udemy.com                         | 2606:4700::6810:8fed                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable                  |
| 368  | tasteatlas.com                        | 2606:4700::6811:2569                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable                  |
| 369  | tasteatlas.com                        | 2606:4700::6811:2469                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable                  |
| 373  | www.digitalocean.com                  | 2606:4700::6813:ad44                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable                  |
| 374  | www.digitalocean.com                  | 2606:4700::6813:ae44                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable                  |
| 380  | [2606:4700:83be::11:74f]              | 2606:4700:83be::11:74f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable                |
| 384  | icook.tw                              | 2606:4700:10::ac42:9e73               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable               |
| 385  | icook.tw                              | 2606:4700:10::6814:1c4a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable               |
| 387  | [2606:4700:83bd::7d8:2b47]            | 2606:4700:83bd::7d8:2b47              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable              |
| 393  | otto.ns.cloudflare.com                | 2a06:98c1:50::ac40:2387               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable               |
| 394  | otto.ns.cloudflare.com                | 2803:f800:50::6ca2:c387               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable               |
| 395  | otto.ns.cloudflare.com                | 2606:4700:58::a29f:2c87               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable               |
| 398  | ifconfig.co                           | 2606:4700:3037::6815:365b             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable             |
| 399  | ifconfig.co                           | 2606:4700:3030::ac43:a86a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable             |
| 404  | damien.ns.cloudflare.com              | 2606:4700:58::a29f:2ca8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable               |
| 405  | damien.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable               |
| 406  | damien.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable               |
| 413  | lewis.ns.cloudflare.com               | 2606:4700:58::a29f:2c9f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable               |
| 414  | lewis.ns.cloudflare.com               | 2803:f800:50::6ca2:c39f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable               |
| 415  | lewis.ns.cloudflare.com               | 2a06:98c1:50::ac40:239f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable               |
| 418  | www.wto.org                           | 2a06:98c1:3102::6812:29be             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable             |
| 419  | www.wto.org                           | 2606:4700:4406::ac40:9242             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable             |
| 423  | japan.com                             | 2606:4700:20::681a:53c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable                |
| 424  | japan.com                             | 2606:4700:20::ac43:465c               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable               |
| 425  | japan.com                             | 2606:4700:20::681a:43c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable                |
| 431  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable              |
| 432  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable             |
| 438  | abdullah.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable               |
| 439  | abdullah.ns.cloudflare.com            | 2606:4700:58::a29f:2ccb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable               |
| 440  | abdullah.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable               |

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 302  | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 365  | 172.67.49.134    | 172.67.49.134  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.67.49.134:443: i/o timeout  |
| 442  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 163 次 (98.2%)
- **连接超时**: 3 次 (1.8%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 166 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 3 次，IPv6失败 163 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：wilson.ns.cloudflare.com (3次),
trevor.ns.cloudflare.com (3次), iplocation.io
(3次)，建议重点检查这些主机的网络状态和服务可用性

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                  | 目标IP          | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | -------------------------- | --------------- | ------ | ---- | ------- | -------- | ---------- |
| 371  | www.digitalocean.com       | 104.19.173.68   | IPv4   | h3   | ✅ 成功 | 37       | cloudflare |
| 347  | uriah.ns.cloudflare.com    | 108.162.195.194 | IPv4   | h3   | ✅ 成功 | 47       | cloudflare |
| 156  | na.877774.xyz              | 104.18.187.25   | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 357  | cf.877774.xyz              | 104.18.41.190   | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 372  | www.digitalocean.com       | 104.19.174.68   | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 416  | www.wto.org                | 172.64.146.66   | IPv4   | h3   | ✅ 成功 | 66       | cloudflare |
| 27   | ipinfo.in                  | 104.21.21.129   | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 85   | www.hugedomains.com        | 172.67.70.191   | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 224  | cloudflare-ip.mofashi.ltd  | 172.67.155.172  | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 411  | lewis.ns.cloudflare.com    | 172.64.35.159   | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 428  | eur.877774.xyz             | 104.21.26.150   | IPv4   | h3   | ✅ 成功 | 76       | cloudflare |
| 53   | 172.67.110.232             | 172.67.110.232  | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 205  | zread.ai                   | 104.21.76.240   | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 377  | gamer.com.tw               | 104.18.3.197    | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 351  | 162.159.133.85             | 162.159.133.85  | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 355  | www.visa.com.hk            | 104.18.21.69    | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 150  | www.visa.com.sg            | 104.18.13.229   | IPv4   | h3   | ✅ 成功 | 80       | cloudflare |
| 420  | japan.com                  | 104.26.4.60     | IPv4   | h3   | ✅ 成功 | 80       | cloudflare |
| 96   | cu.877774.xyz              | 104.26.4.113    | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 141  | craig.ns.cloudflare.com    | 108.162.195.192 | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 421  | japan.com                  | 104.26.5.60     | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 354  | www.visa.com.hk            | 104.18.20.69    | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 143  | craig.ns.cloudflare.com    | 172.64.35.192   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 270  | time.is                    | 104.26.12.54    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 422  | japan.com                  | 172.67.70.92    | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 244  | cf.090227.xyz              | 104.18.35.15    | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 293  | singapore.com              | 104.26.12.140   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 434  | www.csgo.com               | 195.85.59.161   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 260  | rustam.ns.cloudflare.com   | 108.162.195.148 | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 318  | whatismyipaddress.com      | 104.19.222.79   | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 42   | 104.18.37.13               | 104.18.37.13    | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 361  | www.udemy.com              | 104.16.143.237  | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 115  | cmcc.877774.xyz            | 104.16.148.9    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 125  | 172.67.120.0               | 172.67.120.0    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 132  | www.okcupid.com            | 104.18.160.63   | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 90   | cu.877774.xyz              | 104.26.4.116    | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 173  | www.whatismyip.com         | 104.26.12.23    | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 210  | toy-people.com             | 104.26.3.36     | IPv4   | h3   | ✅ 成功 | 90       | cloudflare |
| 430  | stock.hostmonit.com        | 104.21.7.193    | IPv4   | h3   | ✅ 成功 | 91       | cloudflare |
| 103  | cmcc.877774.xyz            | 104.16.149.10   | IPv4   | h3   | ✅ 成功 | 92       | cloudflare |
| 200  | cf.zhetengsha.eu.org       | 172.64.152.241  | IPv4   | h3   | ✅ 成功 | 92       | cloudflare |
| 101  | cmcc.877774.xyz            | 104.16.149.8    | IPv4   | h3   | ✅ 成功 | 93       | cloudflare |
| 117  | cmcc.877774.xyz            | 104.16.148.11   | IPv4   | h3   | ✅ 成功 | 94       | cloudflare |
| 133  | www.okcupid.com            | 104.16.239.254  | IPv4   | h3   | ✅ 成功 | 94       | cloudflare |
| 375  | 172.67.79.211              | 172.67.79.211   | IPv4   | h3   | ✅ 成功 | 94       | cloudflare |
| 378  | 104.18.37.40               | 104.18.37.40    | IPv4   | h3   | ✅ 成功 | 94       | cloudflare |
| 397  | ifconfig.co                | 104.21.54.91    | IPv4   | h3   | ✅ 成功 | 94       | cloudflare |
| 40   | ipv4.ip.sb                 | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 95       | cloudflare |
| 167  | cris.ns.cloudflare.com     | 108.162.195.202 | IPv4   | h3   | ✅ 成功 | 95       | cloudflare |
| 131  | www.okcupid.com            | 104.17.48.63    | IPv4   | h3   | ✅ 成功 | 96       | cloudflare |
| 221  | freeyx.cloudflare88.eu.org | 141.101.120.165 | IPv4   | h3   | ✅ 成功 | 96       | cloudflare |
| 222  | freeyx.cloudflare88.eu.org | 141.101.120.38  | IPv4   | h3   | ✅ 成功 | 96       | cloudflare |
| 346  | uriah.ns.cloudflare.com    | 172.64.35.194   | IPv4   | h3   | ✅ 成功 | 96       | cloudflare |
| 206  | zread.ai                   | 172.67.202.78   | IPv4   | h3   | ✅ 成功 | 97       | cloudflare |
| 271  | time.is                    | 172.67.68.157   | IPv4   | h3   | ✅ 成功 | 97       | cloudflare |
| 362  | www.udemy.com              | 104.16.142.237  | IPv4   | h3   | ✅ 成功 | 97       | cloudflare |
| 283  | ip.sb                      | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 98       | cloudflare |
| 325  | ashton.ns.cloudflare.com   | 108.162.195.173 | IPv4   | h3   | ✅ 成功 | 98       | cloudflare |
| 426  | eur.877774.xyz             | 104.21.29.164   | IPv4   | h3   | ✅ 成功 | 98       | cloudflare |
| 403  | damien.ns.cloudflare.com   | 108.162.195.168 | IPv4   | h3   | ✅ 成功 | 99       | cloudflare |
| 113  | cmcc.877774.xyz            | 104.16.148.7    | IPv4   | h3   | ✅ 成功 | 100      | cloudflare |
| 319  | whatismyipaddress.com      | 104.19.223.79   | IPv4   | h3   | ✅ 成功 | 100      | cloudflare |
| 381  | 172.64.35.24               | 172.64.35.24    | IPv4   | h3   | ✅ 成功 | 100      | cloudflare |
| 55   | shopify.com                | 23.227.38.33    | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 112  | cmcc.877774.xyz            | 104.16.148.6    | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 159  | pranab.ns.cloudflare.com   | 172.64.35.199   | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 194  | bestcf.030101.xyz          | 104.19.153.222  | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 352  | 104.26.13.31               | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 386  | 104.18.78.214              | 104.18.78.214   | IPv4   | h3   | ✅ 成功 | 101      | cloudflare |
| 86   | www.hugedomains.com        | 104.26.6.37     | IPv4   | h3   | ✅ 成功 | 102      | cloudflare |
| 165  | cris.ns.cloudflare.com     | 172.64.35.202   | IPv4   | h3   | ✅ 成功 | 102      | cloudflare |
| 233  | braden.ns.cloudflare.com   | 172.64.35.169   | IPv4   | h3   | ✅ 成功 | 102      | cloudflare |
| 308  | silkbook.com               | 104.26.8.160    | IPv4   | h3   | ✅ 成功 | 102      | cloudflare |
| 313  | ip.gs                      | 104.21.14.176   | IPv4   | h3   | ✅ 成功 | 103      | cloudflare |
| 68   | ct.877774.xyz              | 172.64.229.161  | IPv4   | h3   | ✅ 成功 | 104      | cloudflare |
| 130  | www.okcupid.com            | 104.16.223.254  | IPv4   | h3   | ✅ 成功 | 104      | cloudflare |
| 333  | dnschecker.org             | 172.67.73.216   | IPv4   | h3   | ✅ 成功 | 104      | cloudflare |
| 54   | 103.160.204.59             | 103.160.204.59  | IPv4   | h3   | ✅ 成功 | 105      | cloudflare |
| 201  | cf.zhetengsha.eu.org       | 104.18.35.15    | IPv4   | h3   | ✅ 成功 | 105      | cloudflare |
| 275  | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4   | h3   | ✅ 成功 | 105      | cloudflare |
| 93   | cu.877774.xyz              | 104.26.4.119    | IPv4   | h3   | ✅ 成功 | 106      | cloudflare |
| 179  | kyree.ns.cloudflare.com    | 108.162.195.207 | IPv4   | h3   | ✅ 成功 | 106      | cloudflare |
| 303  | cfip.xxxxxxxx.tk           | 104.16.232.223  | IPv4   | h3   | ✅ 成功 | 106      | cloudflare |
| 402  | damien.ns.cloudflare.com   | 172.64.35.168   | IPv4   | h3   | ✅ 成功 | 106      | cloudflare |
| 4    | www.ipget.net              | 104.21.15.212   | IPv4   | h3   | ✅ 成功 | 107      | cloudflare |
| 121  | cmcc.877774.xyz            | 104.16.149.2    | IPv4   | h3   | ✅ 成功 | 107      | cloudflare |
| 429  | stock.hostmonit.com        | 172.67.187.251  | IPv4   | h3   | ✅ 成功 | 107      | cloudflare |
| 12   | wilson.ns.cloudflare.com   | 108.162.195.110 | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 116  | cmcc.877774.xyz            | 104.16.148.10   | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 240  | asia.877774.xyz            | 104.17.142.146  | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 243  | saas.sin.fan               | 162.159.36.5    | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 289  | 104.16.61.163              | 104.16.61.163   | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 339  | julio.ns.cloudflare.com    | 108.162.195.209 | IPv4   | h3   | ✅ 成功 | 108      | cloudflare |
| 33   | trevor.ns.cloudflare.com   | 172.64.35.154   | IPv4   | h3   | ✅ 成功 | 109      | cloudflare |
| 306  | silkbook.com               | 104.26.9.160    | IPv4   | h3   | ✅ 成功 | 109      | cloudflare |
| 312  | ip.gs                      | 172.67.160.28   | IPv4   | h3   | ✅ 成功 | 109      | cloudflare |
| 109  | cmcc.877774.xyz            | 104.16.148.3    | IPv4   | h3   | ✅ 成功 | 110      | cloudflare |
| 114  | cmcc.877774.xyz            | 104.16.148.8    | IPv4   | h3   | ✅ 成功 | 110      | cloudflare |
| 148  | www.visa.cn                | 162.159.153.2   | IPv4   | h3   | ✅ 成功 | 110      | cloudflare |
| 158  | na.877774.xyz              | 104.19.74.233   | IPv4   | h3   | ✅ 成功 | 110      | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 3 条记录
- **快 (50-100ms)**: 57 条记录
- **正常 (100-200ms)**: 40 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录

---

## 详细分析

### 按IP版本统计

- **IPv4 失败**: 3 次
- **IPv6 失败**: 163 次

### 按协议统计

- **none**: 166 次失败

---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

_此报告由 HTTP/3 连接测试报告生成器自动生成_
