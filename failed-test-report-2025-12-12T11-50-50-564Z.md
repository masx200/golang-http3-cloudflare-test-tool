# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 11:50:50
- **数据来源**: connectivity_results-20251212-115050.json
- **总测试数**: 442
- **失败测试数**: 168
- **成功测试数**: 274
- **失败率**: 38.01%
- **平均延迟**: 82.51ms
- **最小延迟**: 40ms
- **最大延迟**: 818ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 11:50:50
- **IP地址**: 20.102.223.200
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

- **网络不可达: 网络不可达**: 165 次 (98.2%)
- **连接超时: I/O超时**: 3 次 (1.8%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (165 次测试)

| 序号 | 主机/域名                             | 目标IP                                | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                                                              |
| ---- | ------------------------------------- | ------------------------------------- | ------ | ---- | ------ | -------- | ------ | ------------------------------------------------------------------------------------- |
| 5    | comicabc.com                          | 2606:4700:3036::6815:400a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable             |
| 6    | comicabc.com                          | 2606:4700:3030::ac43:ae15             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable             |
| 10   | wilson.ns.cloudflare.com              | 2a06:98c1:50::ac40:236e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable               |
| 11   | wilson.ns.cloudflare.com              | 2803:f800:50::6ca2:c36e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable               |
| 12   | wilson.ns.cloudflare.com              | 2606:4700:58::a29f:2c6e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable               |
| 16   | trevor.ns.cloudflare.com              | 2606:4700:58::a29f:2c9a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable               |
| 17   | trevor.ns.cloudflare.com              | 2803:f800:50::6ca2:c39a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable               |
| 18   | trevor.ns.cloudflare.com              | 2a06:98c1:50::ac40:239a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable               |
| 21   | ipinfo.in                             | 2606:4700:3037::ac43:c6cb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable             |
| 22   | ipinfo.in                             | 2606:4700:3031::6815:1581             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable             |
| 26   | steamdb.info                          | 2606:4700:10::6814:22d4               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable               |
| 27   | steamdb.info                          | 2606:4700:10::ac42:affa               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable               |
| 31   | iplocation.io                         | 2606:4700:20::ac43:4664               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable               |
| 32   | iplocation.io                         | 2606:4700:20::681a:bde                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable                |
| 33   | iplocation.io                         | 2606:4700:20::681a:ade                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable                |
| 39   | www.pcmag.com                         | 2606:4700::6810:1476                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable                  |
| 40   | www.pcmag.com                         | 2606:4700::6810:1576                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable                  |
| 44   | www.gov.ua                            | 2606:4700:3033::ac43:d17f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable             |
| 45   | www.gov.ua                            | 2606:4700:3031::6815:1748             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable             |
| 50   | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable              |
| 54   | cf.0sm.com                            | 2606:4700:3032::6815:785              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable              |
| 55   | cf.0sm.com                            | 2606:4700:3037::ac43:bb91             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable             |
| 58   | www.ipget.net                         | 2606:4700:3031::ac43:cf1a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable             |
| 59   | www.ipget.net                         | 2606:4700:3036::6815:fd4              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable              |
| 63   | icook.hk                              | 2606:4700:3037::ac43:a168             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable             |
| 64   | icook.hk                              | 2606:4700:3031::6815:5ad2             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable             |
| 102  | [2606:4700:8de6::5fa2:799e]           | 2606:4700:8de6::5fa2:799e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable             |
| 106  | www.hugedomains.com                   | 2606:4700:20::681a:625                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable                |
| 107  | www.hugedomains.com                   | 2606:4700:20::ac43:46bf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable               |
| 108  | www.hugedomains.com                   | 2606:4700:20::681a:725                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable                |
| 119  | sullivan.ns.cloudflare.com            | 2803:f800:50::6ca2:c3a1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable               |
| 120  | sullivan.ns.cloudflare.com            | 2606:4700:58::a29f:2ca1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable               |
| 121  | sullivan.ns.cloudflare.com            | 2a06:98c1:50::ac40:23a1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable               |
| 125  | cf.877771.xyz                         | 2606:4700:3033::ac43:98b7             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable             |
| 126  | cf.877771.xyz                         | 2606:4700:3033::6815:50b4             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable             |
| 130  | craig.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable               |
| 131  | craig.ns.cloudflare.com               | 2606:4700:58::a29f:2cc0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable               |
| 132  | craig.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable               |
| 149  | pranab.ns.cloudflare.com              | 2606:4700:58::a29f:2cc7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable               |
| 150  | pranab.ns.cloudflare.com              | 2803:f800:50::6ca2:c3c7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable               |
| 151  | pranab.ns.cloudflare.com              | 2a06:98c1:50::ac40:23c7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable               |
| 154  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2c90             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable             |
| 155  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable             |
| 161  | cris.ns.cloudflare.com                | 2803:f800:50::6ca2:c3ca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable               |
| 162  | cris.ns.cloudflare.com                | 2a06:98c1:50::ac40:23ca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable               |
| 163  | cris.ns.cloudflare.com                | 2606:4700:58::a29f:2cca               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable               |
| 170  | decker.ns.cloudflare.com              | 2606:4700:58::a29f:2c9b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable               |
| 171  | decker.ns.cloudflare.com              | 2803:f800:50::6ca2:c39b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable               |
| 172  | decker.ns.cloudflare.com              | 2a06:98c1:50::ac40:239b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable               |
| 176  | kyree.ns.cloudflare.com               | 2606:4700:58::a29f:2ccf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable               |
| 177  | kyree.ns.cloudflare.com               | 2a06:98c1:50::ac40:23cf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable               |
| 178  | kyree.ns.cloudflare.com               | 2803:f800:50::6ca2:c3cf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable               |
| 182  | huxley.ns.cloudflare.com              | 2606:4700:58::a29f:2cbc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable               |
| 183  | huxley.ns.cloudflare.com              | 2a06:98c1:50::ac40:23bc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable               |
| 184  | huxley.ns.cloudflare.com              | 2803:f800:50::6ca2:c3bc               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable               |
| 186  | freeyx.cloudflare88.eu.org            | 2606:4700:3009:0:72:9d2c:ac0d:3727    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3009:0:72:9d2c:ac0d:3727]:443: connect: network is unreachable    |
| 187  | freeyx.cloudflare88.eu.org            | 2606:4700:3010:bf:5dba:fa1d:5993:9cf8 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3010:bf:5dba:fa1d:5993:9cf8]:443: connect: network is unreachable |
| 191  | toy-people.com                        | 2606:4700:20::681a:324                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable                |
| 192  | toy-people.com                        | 2606:4700:20::ac43:4812               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable               |
| 193  | toy-people.com                        | 2606:4700:20::681a:224                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable                |
| 198  | zread.ai                              | 2606:4700:3032::ac43:ca4e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable             |
| 199  | zread.ai                              | 2606:4700:3033::6815:4cf0             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable             |
| 203  | www.whatismyip.com                    | 2606:4700:20::ac43:4581               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable               |
| 204  | www.whatismyip.com                    | 2606:4700:20::681a:c17                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable                |
| 205  | www.whatismyip.com                    | 2606:4700:20::681a:d17                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable                |
| 206  | [2606:4700:4409::5b5b:7758]           | 2606:4700:4409::5b5b:7758             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable             |
| 210  | dylan.ns.cloudflare.com               | 2a06:98c1:50::ac40:23bb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable               |
| 211  | dylan.ns.cloudflare.com               | 2606:4700:58::a29f:2cbb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable               |
| 212  | dylan.ns.cloudflare.com               | 2803:f800:50::6ca2:c3bb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable               |
| 215  | bestcf.030101.xyz                     | 2606:4700:0:b21c:66ba:fef:2ef4:2658   | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:b21c:66ba:fef:2ef4:2658]:443: connect: network is unreachable   |
| 216  | bestcf.030101.xyz                     | 2606:4700:0:26e6:9bb0:8293:779:dc27   | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:26e6:9bb0:8293:779:dc27]:443: connect: network is unreachable   |
| 222  | xn--b6gac.eu.org                      | 2606:4700:3035::6815:5a4e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable             |
| 223  | xn--b6gac.eu.org                      | 2606:4700:3037::ac43:99fd             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable             |
| 225  | [2606:4700:440f::53aa:4126]           | 2606:4700:440f::53aa:4126             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable             |
| 229  | braden.ns.cloudflare.com              | 2606:4700:58::a29f:2ca9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable               |
| 230  | braden.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable               |
| 231  | braden.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable               |
| 234  | fbi.gov                               | 2606:4700::6810:94f4                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable                  |
| 235  | fbi.gov                               | 2606:4700::6810:95f4                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable                  |
| 239  | bowen.ns.cloudflare.com               | 2606:4700:58::a29f:2c53               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable               |
| 240  | bowen.ns.cloudflare.com               | 2803:f800:50::6ca2:c353               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable               |
| 241  | bowen.ns.cloudflare.com               | 2a06:98c1:50::ac40:2353               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable               |
| 244  | cf.zhetengsha.eu.org                  | 2606:4700:4407::ac40:9052             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4407::ac40:9052]:443: connect: network is unreachable             |
| 245  | cf.zhetengsha.eu.org                  | 2a06:98c1:310d::6812:2bae             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:310d::6812:2bae]:443: connect: network is unreachable             |
| 248  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::ac43:9bac             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable             |
| 249  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::6815:48e9             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable             |
| 253  | moura.ns.cloudflare.com               | 2606:4700:58::a29f:2cd9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable               |
| 254  | moura.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable               |
| 255  | moura.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable               |
| 261  | time.is                               | 2606:4700:20::ac43:449d               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable               |
| 262  | time.is                               | 2606:4700:20::681a:d36                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable                |
| 263  | time.is                               | 2606:4700:20::681a:c36                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable                |
| 267  | rustam.ns.cloudflare.com              | 2606:4700:58::a29f:2c94               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable               |
| 268  | rustam.ns.cloudflare.com              | 2a06:98c1:50::ac40:2394               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable               |
| 269  | rustam.ns.cloudflare.com              | 2803:f800:50::6ca2:c394               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable               |
| 276  | benedict.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable               |
| 277  | benedict.ns.cloudflare.com            | 2606:4700:58::a29f:2ccd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable               |
| 278  | benedict.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable               |
| 283  | cf.090227.xyz                         | 2a06:98c1:3101::ac40:919e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3101::ac40:919e]:443: connect: network is unreachable             |
| 284  | cf.090227.xyz                         | 2a06:98c1:3108::6812:2a62             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3108::6812:2a62]:443: connect: network is unreachable             |
| 288  | palera.in                             | 2606:4700:3032::ac43:9d7a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable             |
| 289  | palera.in                             | 2606:4700:3035::6815:3a48             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable             |
| 293  | ip.sb                                 | 2606:4700:20::ac43:4bac               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable               |
| 294  | ip.sb                                 | 2606:4700:20::681a:d1f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable                |
| 295  | ip.sb                                 | 2606:4700:20::681a:c1f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable                |
| 300  | silkbook.com                          | 2606:4700:20::681a:9a0                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable                |
| 301  | silkbook.com                          | 2606:4700:20::ac43:4bd0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable               |
| 302  | silkbook.com                          | 2606:4700:20::681a:8a0                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable                |
| 306  | singapore.com                         | 2606:4700:20::681a:c8c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable                |
| 307  | singapore.com                         | 2606:4700:20::681a:d8c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable                |
| 308  | singapore.com                         | 2606:4700:20::ac43:4bc2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable               |
| 312  | damien.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable               |
| 313  | damien.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable               |
| 314  | damien.ns.cloudflare.com              | 2606:4700:58::a29f:2ca8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable               |
| 318  | dnschecker.org                        | 2606:4700:20::681a:759                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable                |
| 319  | dnschecker.org                        | 2606:4700:20::ac43:49d8               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable               |
| 320  | dnschecker.org                        | 2606:4700:20::681a:659                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable                |
| 323  | ip.gs                                 | 2606:4700:3035::ac43:a01c             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable             |
| 324  | ip.gs                                 | 2606:4700:3036::6815:eb0              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable              |
| 328  | ashton.ns.cloudflare.com              | 2803:f800:50::6ca2:c3ad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable               |
| 329  | ashton.ns.cloudflare.com              | 2606:4700:58::a29f:2cad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable               |
| 330  | ashton.ns.cloudflare.com              | 2a06:98c1:50::ac40:23ad               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable               |
| 332  | [2606:4700:964f::6e2c:588e]           | 2606:4700:964f::6e2c:588e             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable             |
| 335  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable             |
| 339  | whatismyipaddress.com                 | 2606:4700::6813:df4f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable                  |
| 340  | whatismyipaddress.com                 | 2606:4700::6813:de4f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable                  |
| 342  | [2606:4700:440b::3e6e:5f06]           | 2606:4700:440b::3e6e:5f06             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable             |
| 346  | julio.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable               |
| 347  | julio.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable               |
| 348  | julio.ns.cloudflare.com               | 2606:4700:58::a29f:2cd1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable               |
| 352  | uriah.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable               |
| 353  | uriah.ns.cloudflare.com               | 2606:4700:58::a29f:2cc2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable               |
| 354  | uriah.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable               |
| 357  | www.udemy.com                         | 2606:4700::6810:8eed                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable                  |
| 358  | www.udemy.com                         | 2606:4700::6810:8fed                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable                  |
| 359  | [2606:4700:4403::7357:544f]           | 2606:4700:4403::7357:544f             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable             |
| 362  | tasteatlas.com                        | 2606:4700::6811:2569                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable                  |
| 363  | tasteatlas.com                        | 2606:4700::6811:2469                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable                  |
| 366  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable             |
| 367  | [2606:4700:83bd::7d8:2b47]            | 2606:4700:83bd::7d8:2b47              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable              |
| 372  | icook.tw                              | 2606:4700:10::ac42:9e73               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable               |
| 373  | icook.tw                              | 2606:4700:10::6814:1c4a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable               |
| 381  | otto.ns.cloudflare.com                | 2a06:98c1:50::ac40:2387               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable               |
| 382  | otto.ns.cloudflare.com                | 2606:4700:58::a29f:2c87               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable               |
| 383  | otto.ns.cloudflare.com                | 2803:f800:50::6ca2:c387               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable               |
| 384  | [2606:4700:83be::11:74f]              | 2606:4700:83be::11:74f                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable                |
| 392  | www.digitalocean.com                  | 2606:4700::6813:ae44                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable                  |
| 393  | www.digitalocean.com                  | 2606:4700::6813:ad44                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable                  |
| 401  | ifconfig.co                           | 2606:4700:3030::ac43:a86a             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable             |
| 402  | ifconfig.co                           | 2606:4700:3037::6815:365b             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable             |
| 406  | japan.com                             | 2606:4700:20::ac43:465c               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable               |
| 407  | japan.com                             | 2606:4700:20::681a:53c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable                |
| 408  | japan.com                             | 2606:4700:20::681a:43c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable                |
| 412  | lewis.ns.cloudflare.com               | 2a06:98c1:50::ac40:239f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable               |
| 413  | lewis.ns.cloudflare.com               | 2606:4700:58::a29f:2c9f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable               |
| 414  | lewis.ns.cloudflare.com               | 2803:f800:50::6ca2:c39f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable               |
| 419  | cf.877774.xyz                         | 2606:4700:4406::ac40:9242             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable             |
| 420  | cf.877774.xyz                         | 2a06:98c1:3102::6812:29be             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable             |
| 423  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable             |
| 424  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1              | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable              |
| 427  | www.wto.org                           | 2606:4700:4406::ac40:9242             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable             |
| 428  | www.wto.org                           | 2a06:98c1:3102::6812:29be             | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable             |
| 438  | abdullah.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable               |
| 439  | abdullah.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable               |
| 440  | abdullah.ns.cloudflare.com            | 2606:4700:58::a29f:2ccb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable               |

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 386  | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 432  | 172.67.49.134    | 172.67.49.134  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.67.49.134:443: i/o timeout  |
| 442  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 165 次 (98.2%)
- **连接超时**: 3 次 (1.8%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 168 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 3 次，IPv6失败 165 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：wilson.ns.cloudflare.com (3次),
trevor.ns.cloudflare.com (3次), iplocation.io
(3次)，建议重点检查这些主机的网络状态和服务可用性

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                  | 目标IP          | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | -------------------------- | --------------- | ------ | ---- | ------- | -------- | ---------- |
| 30   | iplocation.io              | 172.67.70.100   | IPv4   | h3   | ✅ 成功 | 40       | cloudflare |
| 38   | www.pcmag.com              | 104.16.20.118   | IPv4   | h3   | ✅ 成功 | 41       | cloudflare |
| 61   | icook.hk                   | 104.21.90.210   | IPv4   | h3   | ✅ 成功 | 41       | cloudflare |
| 389  | 104.18.78.214              | 104.18.78.214   | IPv4   | h3   | ✅ 成功 | 42       | cloudflare |
| 164  | na.877774.xyz              | 104.19.74.233   | IPv4   | h3   | ✅ 成功 | 43       | cloudflare |
| 282  | cf.090227.xyz              | 172.64.152.241  | IPv4   | h3   | ✅ 成功 | 43       | cloudflare |
| 336  | 104.18.14.76               | 104.18.14.76    | IPv4   | h3   | ✅ 成功 | 43       | cloudflare |
| 371  | icook.tw                   | 104.20.28.74    | IPv4   | h3   | ✅ 成功 | 43       | cloudflare |
| 124  | cf.877771.xyz              | 172.67.152.183  | IPv4   | h3   | ✅ 成功 | 44       | cloudflare |
| 298  | silkbook.com               | 104.26.8.160    | IPv4   | h3   | ✅ 成功 | 44       | cloudflare |
| 396  | cfip.1323123.xyz           | 104.16.133.220  | IPv4   | h3   | ✅ 成功 | 44       | cloudflare |
| 88   | cmcc.877774.xyz            | 104.16.148.244  | IPv4   | h3   | ✅ 成功 | 45       | cloudflare |
| 256  | saas.sin.fan               | 162.159.36.20   | IPv4   | h3   | ✅ 成功 | 45       | cloudflare |
| 118  | sullivan.ns.cloudflare.com | 172.64.35.161   | IPv4   | h3   | ✅ 成功 | 46       | cloudflare |
| 270  | www.ipchicken.com          | 104.26.6.112    | IPv4   | h3   | ✅ 成功 | 46       | cloudflare |
| 287  | palera.in                  | 104.21.58.72    | IPv4   | h3   | ✅ 成功 | 46       | cloudflare |
| 403  | japan.com                  | 104.26.5.60     | IPv4   | h3   | ✅ 成功 | 46       | cloudflare |
| 28   | iplocation.io              | 104.26.10.222   | IPv4   | h3   | ✅ 成功 | 47       | cloudflare |
| 285  | 162.159.36.104             | 162.159.36.104  | IPv4   | h3   | ✅ 成功 | 47       | cloudflare |
| 390  | www.digitalocean.com       | 104.19.174.68   | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 399  | ifconfig.co                | 104.21.54.91    | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 3    | comicabc.com               | 104.21.64.10    | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 322  | ip.gs                      | 104.21.14.176   | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 387  | cfip.xxxxxxxx.tk           | 104.16.232.223  | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 422  | stock.hostmonit.com        | 172.67.187.251  | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 95   | cmcc.877774.xyz            | 104.16.148.9    | IPv4   | h3   | ✅ 成功 | 50       | cloudflare |
| 280  | www.glassdoor.com          | 104.16.25.46    | IPv4   | h3   | ✅ 成功 | 50       | cloudflare |
| 93   | cmcc.877774.xyz            | 104.16.148.1    | IPv4   | h3   | ✅ 成功 | 51       | cloudflare |
| 310  | damien.ns.cloudflare.com   | 108.162.195.168 | IPv4   | h3   | ✅ 成功 | 51       | cloudflare |
| 114  | www.4chan.org              | 104.16.229.229  | IPv4   | h3   | ✅ 成功 | 52       | cloudflare |
| 46   | 104.18.37.13               | 104.18.37.13    | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 100  | cmcc.877774.xyz            | 104.16.149.12   | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 341  | 162.159.133.85             | 162.159.133.85  | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 356  | www.udemy.com              | 104.16.142.237  | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 25   | steamdb.info               | 104.20.34.212   | IPv4   | h3   | ✅ 成功 | 54       | cloudflare |
| 272  | www.ipchicken.com          | 172.67.68.101   | IPv4   | h3   | ✅ 成功 | 54       | cloudflare |
| 292  | ip.sb                      | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 54       | cloudflare |
| 137  | cu.877774.xyz              | 104.26.4.117    | IPv4   | h3   | ✅ 成功 | 55       | cloudflare |
| 60   | 104.18.254.88              | 104.18.254.88   | IPv4   | h3   | ✅ 成功 | 56       | cloudflare |
| 72   | ct.877774.xyz              | 172.64.229.195  | IPv4   | h3   | ✅ 成功 | 56       | cloudflare |
| 219  | asia.877774.xyz            | 104.17.139.62   | IPv4   | h3   | ✅ 成功 | 56       | cloudflare |
| 20   | ipinfo.in                  | 172.67.198.203  | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 104  | www.hugedomains.com        | 104.26.6.37     | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 309  | damien.ns.cloudflare.com   | 172.64.35.168   | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 62   | icook.hk                   | 172.67.161.104  | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 144  | www.visa.com.sg            | 104.18.12.229   | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 299  | silkbook.com               | 104.26.9.160    | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 369  | 172.67.79.211              | 172.67.79.211   | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 378  | otto.ns.cloudflare.com     | 108.162.195.135 | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 138  | cu.877774.xyz              | 104.26.4.118    | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 142  | cu.877774.xyz              | 104.26.4.113    | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 188  | toy-people.com             | 104.26.3.36     | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 279  | www.glassdoor.com          | 104.17.64.70    | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 421  | stock.hostmonit.com        | 104.21.7.193    | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 81   | cmcc.877774.xyz            | 104.16.149.11   | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 139  | cu.877774.xyz              | 104.26.4.119    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 232  | fbi.gov                    | 104.16.148.244  | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 260  | time.is                    | 104.26.12.54    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 395  | 104.19.223.58              | 104.19.223.58   | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 69   | ct.877774.xyz              | 172.64.229.173  | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 99   | cmcc.877774.xyz            | 104.16.149.244  | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 174  | kyree.ns.cloudflare.com    | 108.162.195.207 | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 304  | singapore.com              | 104.26.13.140   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 425  | www.wto.org                | 172.64.146.66   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 434  | www.csgo.com               | 195.85.59.161   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 51   | 104.16.61.163              | 104.16.61.163   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 70   | ct.877774.xyz              | 172.64.229.174  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 105  | www.hugedomains.com        | 104.26.7.37     | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 110  | www.okcupid.com            | 104.16.223.254  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 160  | cris.ns.cloudflare.com     | 172.64.35.202   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 181  | huxley.ns.cloudflare.com   | 108.162.195.188 | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 220  | xn--b6gac.eu.org           | 172.67.153.253  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 290  | ip.sb                      | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 350  | uriah.ns.cloudflare.com    | 172.64.35.194   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 9    | wilson.ns.cloudflare.com   | 172.64.35.110   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 13   | trevor.ns.cloudflare.com   | 172.64.35.154   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 96   | cmcc.877774.xyz            | 104.16.149.1    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 140  | cu.877774.xyz              | 104.26.4.111    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 175  | kyree.ns.cloudflare.com    | 172.64.35.207   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 196  | zread.ai                   | 188.114.96.3    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 197  | zread.ai                   | 188.114.97.3    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 236  | bowen.ns.cloudflare.com    | 108.162.195.83  | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 271  | www.ipchicken.com          | 104.26.7.112    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 404  | japan.com                  | 172.67.70.92    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 405  | japan.com                  | 104.26.4.60     | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 430  | eur.877774.xyz             | 104.21.29.164   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 35   | 104.18.39.196              | 104.18.39.196   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 75   | ct.877774.xyz              | 172.64.229.44   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 80   | cmcc.877774.xyz            | 104.16.148.4    | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 257  | saas.sin.fan               | 162.159.36.5    | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 331  | 104.18.42.26               | 104.18.42.26    | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 8    | wilson.ns.cloudflare.com   | 108.162.195.110 | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 65   | ipv4.ip.sb                 | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 66   | ipv4.ip.sb                 | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 87   | cmcc.877774.xyz            | 104.16.149.8    | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 92   | cmcc.877774.xyz            | 104.16.148.5    | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 127  | craig.ns.cloudflare.com    | 172.64.35.192   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 157  | www.visa.cn                | 162.159.153.2   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 224  | 172.64.151.55              | 172.64.151.55   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 315  | dnschecker.org             | 104.26.6.89     | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 25 条记录
- **快 (50-100ms)**: 75 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录

---

## 详细分析

### 按IP版本统计

- **IPv4 失败**: 3 次
- **IPv6 失败**: 165 次

### 按协议统计

- **none**: 168 次失败

---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

_此报告由 HTTP/3 连接测试报告生成器自动生成_
