# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 09:47:47
- **数据来源**: connectivity_results-20251212-094746.json
- **总测试数**: 457
- **失败测试数**: 175
- **成功测试数**: 282
- **失败率**: 38.29%
- **平均延迟**: 79.31ms
- **最小延迟**: 35ms
- **最大延迟**: 752ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 09:47:47
- **IP地址**: 64.236.142.232
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

- **网络不可达: 网络不可达**: 172 次 (98.3%)
- **连接超时: I/O超时**: 3 次 (1.7%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (172 次测试)

| 序号 | 主机/域名                                                             | 目标IP                                  | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                                                                |
| ---- | --------------------------------------------------------------------- | --------------------------------------- | ------ | ---- | ------ | -------- | ------ | --------------------------------------------------------------------------------------- |
| 4    | www.pcmag.com                                                         | 2606:4700::6810:1476                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable                    |
| 5    | www.pcmag.com                                                         | 2606:4700::6810:1576                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable                    |
| 8    | bhr01erx45.inzjddnkdz.de5.net                                         | 2606:4700:3031::6815:49fa               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:49fa]:443: connect: network is unreachable               |
| 9    | bhr01erx45.inzjddnkdz.de5.net                                         | 2606:4700:3034::ac43:97cf               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3034::ac43:97cf]:443: connect: network is unreachable               |
| 12   | comicabc.com                                                          | 2606:4700:3036::6815:400a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable               |
| 13   | comicabc.com                                                          | 2606:4700:3030::ac43:ae15               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable               |
| 16   | www.ipget.net                                                         | 2606:4700:3031::ac43:cf1a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable               |
| 17   | www.ipget.net                                                         | 2606:4700:3036::6815:fd4                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable                |
| 21   | wilson.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c36e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable                 |
| 22   | wilson.ns.cloudflare.com                                              | 2606:4700:58::a29f:2c6e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable                 |
| 23   | wilson.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:236e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable                 |
| 27   | trevor.ns.cloudflare.com                                              | 2606:4700:58::a29f:2c9a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable                 |
| 28   | trevor.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c39a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable                 |
| 29   | trevor.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:239a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable                 |
| 32   | steamdb.info                                                          | 2606:4700:10::6814:22d4                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable                 |
| 33   | steamdb.info                                                          | 2606:4700:10::ac42:affa                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable                 |
| 36   | www.gov.ua                                                            | 2606:4700:3033::ac43:d17f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable               |
| 37   | www.gov.ua                                                            | 2606:4700:3031::6815:1748               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable               |
| 41   | cf.090227.xyz                                                         | 2a06:98c1:3101::ac40:919e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3101::ac40:919e]:443: connect: network is unreachable               |
| 42   | cf.090227.xyz                                                         | 2a06:98c1:3108::6812:2a62               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3108::6812:2a62]:443: connect: network is unreachable               |
| 48   | iplocation.io                                                         | 2606:4700:20::ac43:4664                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable                 |
| 49   | iplocation.io                                                         | 2606:4700:20::681a:ade                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable                  |
| 50   | iplocation.io                                                         | 2606:4700:20::681a:bde                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable                  |
| 54   | ipinfo.in                                                             | 2606:4700:3031::6815:1581               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable               |
| 55   | ipinfo.in                                                             | 2606:4700:3037::ac43:c6cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable               |
| 58   | [2606:4700:9add::880:52fc]                                            | 2606:4700:9add::880:52fc                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable                |
| 89   | huxley.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3bc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable                 |
| 90   | huxley.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23bc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable                 |
| 91   | huxley.ns.cloudflare.com                                              | 2606:4700:58::a29f:2cbc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable                 |
| 103  | cf.0sm.com                                                            | 2606:4700:3032::6815:785                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable                |
| 104  | cf.0sm.com                                                            | 2606:4700:3037::ac43:bb91               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable               |
| 107  | icook.hk                                                              | 2606:4700:3037::ac43:a168               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable               |
| 108  | icook.hk                                                              | 2606:4700:3031::6815:5ad2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable               |
| 112  | [2606:4700:8de6::5fa2:799e]                                           | 2606:4700:8de6::5fa2:799e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable               |
| 116  | www.hugedomains.com                                                   | 2606:4700:20::681a:725                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable                  |
| 117  | www.hugedomains.com                                                   | 2606:4700:20::ac43:46bf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable                 |
| 118  | www.hugedomains.com                                                   | 2606:4700:20::681a:625                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable                  |
| 127  | sullivan.ns.cloudflare.com                                            | 2606:4700:58::a29f:2ca1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable                 |
| 128  | sullivan.ns.cloudflare.com                                            | 2803:f800:50::6ca2:c3a1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable                 |
| 129  | sullivan.ns.cloudflare.com                                            | 2a06:98c1:50::ac40:23a1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable                 |
| 143  | craig.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cc0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable                 |
| 144  | craig.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3c0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable                 |
| 145  | craig.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23c0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable                 |
| 152  | 6a507fac-b8e4-45be-b2f0-9310f72c7eca.b.3.b.f.0.7.4.0.1.0.0.2.ip6.arpa | 2606:4700:3030::6815:63c                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::6815:63c]:443: connect: network is unreachable                |
| 153  | 6a507fac-b8e4-45be-b2f0-9310f72c7eca.b.3.b.f.0.7.4.0.1.0.0.2.ip6.arpa | 2606:4700:3031::ac43:868b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:868b]:443: connect: network is unreachable               |
| 156  | cf.877771.xyz                                                         | 2606:4700:3033::6815:50b4               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable               |
| 157  | cf.877771.xyz                                                         | 2606:4700:3033::ac43:98b7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable               |
| 165  | cris.ns.cloudflare.com                                                | 2606:4700:58::a29f:2cca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable                 |
| 166  | cris.ns.cloudflare.com                                                | 2803:f800:50::6ca2:c3ca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable                 |
| 167  | cris.ns.cloudflare.com                                                | 2a06:98c1:50::ac40:23ca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable                 |
| 171  | pranab.ns.cloudflare.com                                              | 2606:4700:58::a29f:2cc7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable                 |
| 172  | pranab.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3c7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable                 |
| 173  | pranab.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23c7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable                 |
| 182  | toy-people.com                                                        | 2606:4700:20::681a:324                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable                  |
| 183  | toy-people.com                                                        | 2606:4700:20::ac43:4812                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable                 |
| 184  | toy-people.com                                                        | 2606:4700:20::681a:224                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable                  |
| 188  | decker.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:239b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable                 |
| 189  | decker.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c39b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable                 |
| 190  | decker.ns.cloudflare.com                                              | 2606:4700:58::a29f:2c9b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable                 |
| 194  | kyree.ns.cloudflare.com                                               | 2606:4700:58::a29f:2ccf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable                 |
| 195  | kyree.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3cf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable                 |
| 196  | kyree.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23cf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable                 |
| 201  | zread.ai                                                              | 2606:4700:3033::6815:4cf0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable               |
| 202  | zread.ai                                                              | 2606:4700:3032::ac43:ca4e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable               |
| 206  | www.whatismyip.com                                                    | 2606:4700:20::681a:c17                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable                  |
| 207  | www.whatismyip.com                                                    | 2606:4700:20::681a:d17                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable                  |
| 208  | www.whatismyip.com                                                    | 2606:4700:20::ac43:4581                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable                 |
| 212  | dylan.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3bb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable                 |
| 213  | dylan.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cbb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable                 |
| 214  | dylan.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23bb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable                 |
| 215  | [2606:4700:4409::5b5b:7758]                                           | 2606:4700:4409::5b5b:7758               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable               |
| 218  | bestcf.030101.xyz                                                     | 2606:4700::fffd:819d:acda               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::fffd:819d:acda]:443: connect: network is unreachable               |
| 219  | bestcf.030101.xyz                                                     | 2606:4700::8d:f082:8938:66d8            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::8d:f082:8938:66d8]:443: connect: network is unreachable            |
| 221  | freeyx.cloudflare88.eu.org                                            | 2606:4700:3009:aa59:4b67:cd47:f6c9:b814 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3009:aa59:4b67:cd47:f6c9:b814]:443: connect: network is unreachable |
| 224  | fbi.gov                                                               | 2606:4700::6810:94f4                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable                    |
| 225  | fbi.gov                                                               | 2606:4700::6810:95f4                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable                    |
| 229  | braden.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23a9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable                 |
| 230  | braden.ns.cloudflare.com                                              | 2606:4700:58::a29f:2ca9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable                 |
| 231  | braden.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3a9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable                 |
| 233  | [2606:4700:440f::53aa:4126]                                           | 2606:4700:440f::53aa:4126               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable               |
| 239  | xn--b6gac.eu.org                                                      | 2606:4700:3037::ac43:99fd               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable               |
| 240  | xn--b6gac.eu.org                                                      | 2606:4700:3035::6815:5a4e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable               |
| 243  | cf.zhetengsha.eu.org                                                  | 2a06:98c1:3105::6812:230f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3105::6812:230f]:443: connect: network is unreachable               |
| 244  | cf.zhetengsha.eu.org                                                  | 2606:4700:440a::ac40:98f1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440a::ac40:98f1]:443: connect: network is unreachable               |
| 248  | bowen.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c353                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable                 |
| 249  | bowen.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:2353                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable                 |
| 250  | bowen.ns.cloudflare.com                                               | 2606:4700:58::a29f:2c53                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable                 |
| 253  | www.udemy.com                                                         | 2606:4700::6810:8fed                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable                    |
| 254  | www.udemy.com                                                         | 2606:4700::6810:8eed                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable                    |
| 258  | rustam.ns.cloudflare.com                                              | 2606:4700:58::a29f:2c94                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable                 |
| 259  | rustam.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c394                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable                 |
| 260  | rustam.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:2394                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable                 |
| 264  | moura.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3d9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable                 |
| 265  | moura.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cd9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable                 |
| 266  | moura.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23d9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable                 |
| 270  | time.is                                                               | 2606:4700:20::681a:d36                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable                  |
| 271  | time.is                                                               | 2606:4700:20::ac43:449d                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable                 |
| 272  | time.is                                                               | 2606:4700:20::681a:c36                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable                  |
| 279  | benedict.ns.cloudflare.com                                            | 2803:f800:50::6ca2:c3cd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable                 |
| 280  | benedict.ns.cloudflare.com                                            | 2a06:98c1:50::ac40:23cd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable                 |
| 281  | benedict.ns.cloudflare.com                                            | 2606:4700:58::a29f:2ccd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable                 |
| 284  | cloudflare-ip.mofashi.ltd                                             | 2606:4700:3037::ac43:9bac               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable               |
| 285  | cloudflare-ip.mofashi.ltd                                             | 2606:4700:3037::6815:48e9               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable               |
| 289  | ip.sb                                                                 | 2606:4700:20::681a:c1f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable                  |
| 290  | ip.sb                                                                 | 2606:4700:20::681a:d1f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable                  |
| 291  | ip.sb                                                                 | 2606:4700:20::ac43:4bac                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable                 |
| 294  | palera.in                                                             | 2606:4700:3035::6815:3a48               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable               |
| 295  | palera.in                                                             | 2606:4700:3032::ac43:9d7a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable               |
| 302  | singapore.com                                                         | 2606:4700:20::681a:d8c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable                  |
| 303  | singapore.com                                                         | 2606:4700:20::ac43:4bc2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable                 |
| 304  | singapore.com                                                         | 2606:4700:20::681a:c8c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable                  |
| 314  | ip.gs                                                                 | 2a06:98c1:3120::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3120::3]:443: connect: network is unreachable                       |
| 315  | ip.gs                                                                 | 2a06:98c1:3121::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3121::3]:443: connect: network is unreachable                       |
| 319  | silkbook.com                                                          | 2606:4700:20::ac43:4bd0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable                 |
| 320  | silkbook.com                                                          | 2606:4700:20::681a:8a0                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable                  |
| 321  | silkbook.com                                                          | 2606:4700:20::681a:9a0                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable                  |
| 324  | whatismyipaddress.com                                                 | 2606:4700::6813:de4f                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable                    |
| 325  | whatismyipaddress.com                                                 | 2606:4700::6813:df4f                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable                    |
| 329  | dnschecker.org                                                        | 2606:4700:20::ac43:49d8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable                 |
| 330  | dnschecker.org                                                        | 2606:4700:20::681a:659                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable                  |
| 331  | dnschecker.org                                                        | 2606:4700:20::681a:759                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable                  |
| 333  | local-aria2-webui.masx200.ddns-ip.net                                 | 2606:4700:3031::ac43:9db6               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable               |
| 337  | ashton.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23ad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable                 |
| 338  | ashton.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3ad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable                 |
| 339  | ashton.ns.cloudflare.com                                              | 2606:4700:58::a29f:2cad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable                 |
| 340  | [2606:4700:964f::6e2c:588e]                                           | 2606:4700:964f::6e2c:588e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable               |
| 347  | julio.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cd1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable                 |
| 348  | julio.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23d1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable                 |
| 349  | julio.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3d1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable                 |
| 353  | uriah.ns.cloudflare.com                                               | 2606:4700:58::a29f:2cc2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable                 |
| 354  | uriah.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c3c2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable                 |
| 355  | uriah.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:23c2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable                 |
| 357  | [2606:4700:440b::3e6e:5f06]                                           | 2606:4700:440b::3e6e:5f06               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable               |
| 362  | ae8a9c24-83de.masx200.ddns-ip.net                                     | 2606:4700:3030::6815:e29                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable                |
| 363  | ae8a9c24-83de.masx200.ddns-ip.net                                     | 2606:4700:3031::ac43:9db6               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable               |
| 366  | tasteatlas.com                                                        | 2606:4700::6811:2469                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable                    |
| 367  | tasteatlas.com                                                        | 2606:4700::6811:2569                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable                    |
| 368  | [2606:4700:4403::7357:544f]                                           | 2606:4700:4403::7357:544f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable               |
| 371  | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org                | 2606:4700:3033::ac43:a162               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:a162]:443: connect: network is unreachable               |
| 372  | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org                | 2606:4700:3034::6815:9e6                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3034::6815:9e6]:443: connect: network is unreachable                |
| 375  | yx-auto.pages.dev                                                     | 2606:4700:310c::ac42:2c90               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable               |
| 376  | yx-auto.pages.dev                                                     | 2606:4700:310c::ac42:2f70               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable               |
| 377  | [2606:4700:4408::18c5:3304]                                           | 2606:4700:4408::18c5:3304               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable               |
| 388  | www.digitalocean.com                                                  | 2606:4700::6813:ad44                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable                    |
| 389  | www.digitalocean.com                                                  | 2606:4700::6813:ae44                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable                    |
| 392  | icook.tw                                                              | 2606:4700:10::6814:1c4a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable                 |
| 393  | icook.tw                                                              | 2606:4700:10::ac42:9e73                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable                 |
| 394  | [2606:4700:83be::11:74f]                                              | 2606:4700:83be::11:74f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable                  |
| 400  | [2606:4700:83bd::7d8:2b47]                                            | 2606:4700:83bd::7d8:2b47                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable                |
| 404  | otto.ns.cloudflare.com                                                | 2606:4700:58::a29f:2c87                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable                 |
| 405  | otto.ns.cloudflare.com                                                | 2803:f800:50::6ca2:c387                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable                 |
| 406  | otto.ns.cloudflare.com                                                | 2a06:98c1:50::ac40:2387                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable                 |
| 412  | damien.ns.cloudflare.com                                              | 2606:4700:58::a29f:2ca8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable                 |
| 413  | damien.ns.cloudflare.com                                              | 2803:f800:50::6ca2:c3a8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable                 |
| 414  | damien.ns.cloudflare.com                                              | 2a06:98c1:50::ac40:23a8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable                 |
| 418  | cf.877774.xyz                                                         | 2a06:98c1:3102::6812:29be               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable               |
| 419  | cf.877774.xyz                                                         | 2606:4700:4406::ac40:9242               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable               |
| 422  | ifconfig.co                                                           | 2606:4700:3030::ac43:a86a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable               |
| 423  | ifconfig.co                                                           | 2606:4700:3037::6815:365b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable               |
| 428  | www.wto.org                                                           | 2a06:98c1:3102::6812:29be               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable               |
| 429  | www.wto.org                                                           | 2606:4700:4406::ac40:9242               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable               |
| 433  | lewis.ns.cloudflare.com                                               | 2606:4700:58::a29f:2c9f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable                 |
| 434  | lewis.ns.cloudflare.com                                               | 2803:f800:50::6ca2:c39f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable                 |
| 435  | lewis.ns.cloudflare.com                                               | 2a06:98c1:50::ac40:239f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable                 |
| 439  | japan.com                                                             | 2606:4700:20::681a:43c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable                  |
| 440  | japan.com                                                             | 2606:4700:20::ac43:465c                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable                 |
| 441  | japan.com                                                             | 2606:4700:20::681a:53c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable                  |
| 447  | stock.hostmonit.com                                                   | 2606:4700:3037::6815:7c1                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable                |
| 448  | stock.hostmonit.com                                                   | 2606:4700:3033::ac43:bbfb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable               |
| 452  | abdullah.ns.cloudflare.com                                            | 2a06:98c1:50::ac40:23cb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable                 |
| 453  | abdullah.ns.cloudflare.com                                            | 2606:4700:58::a29f:2ccb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable                 |
| 454  | abdullah.ns.cloudflare.com                                            | 2803:f800:50::6ca2:c3cb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable                 |

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 308  | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 415  | 172.67.49.134    | 172.67.49.134  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.67.49.134:443: i/o timeout  |
| 457  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 172 次 (98.3%)
- **连接超时**: 3 次 (1.7%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 175 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 3 次，IPv6失败 172 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：wilson.ns.cloudflare.com (3次),
trevor.ns.cloudflare.com (3次), iplocation.io
(3次)，建议重点检查这些主机的网络状态和服务可用性

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                                              | 目标IP          | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | ------------------------------------------------------ | --------------- | ------ | ---- | ------- | -------- | ---------- |
| 332  | local-aria2-webui.masx200.ddns-ip.net                  | 172.67.157.182  | IPv4   | h3   | ✅ 成功 | 35       | cloudflare |
| 417  | cf.877774.xyz                                          | 172.64.146.66   | IPv4   | h3   | ✅ 成功 | 39       | cloudflare |
| 98   | ct.877774.xyz                                          | 172.64.229.174  | IPv4   | h3   | ✅ 成功 | 40       | cloudflare |
| 327  | dnschecker.org                                         | 104.26.7.89     | IPv4   | h3   | ✅ 成功 | 40       | cloudflare |
| 398  | eur.877774.xyz                                         | 104.21.26.150   | IPv4   | h3   | ✅ 成功 | 41       | cloudflare |
| 65   | cmcc.877774.xyz                                        | 104.16.148.7    | IPv4   | h3   | ✅ 成功 | 42       | cloudflare |
| 203  | www.whatismyip.com                                     | 172.67.69.129   | IPv4   | h3   | ✅ 成功 | 42       | cloudflare |
| 60   | cmcc.877774.xyz                                        | 104.16.148.2    | IPv4   | h3   | ✅ 成功 | 43       | cloudflare |
| 365  | tasteatlas.com                                         | 104.17.36.105   | IPv4   | h3   | ✅ 成功 | 44       | cloudflare |
| 286  | ip.sb                                                  | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 45       | cloudflare |
| 420  | ifconfig.co                                            | 172.67.168.106  | IPv4   | h3   | ✅ 成功 | 45       | cloudflare |
| 187  | decker.ns.cloudflare.com                               | 172.64.35.155   | IPv4   | h3   | ✅ 成功 | 47       | cloudflare |
| 106  | icook.hk                                               | 104.21.90.210   | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 278  | benedict.ns.cloudflare.com                             | 172.64.35.205   | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 313  | ip.gs                                                  | 104.21.14.176   | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 352  | uriah.ns.cloudflare.com                                | 172.64.35.194   | IPv4   | h3   | ✅ 成功 | 48       | cloudflare |
| 268  | time.is                                                | 172.67.68.157   | IPv4   | h3   | ✅ 成功 | 49       | cloudflare |
| 137  | cu.877774.xyz                                          | 104.26.4.116    | IPv4   | h3   | ✅ 成功 | 50       | cloudflare |
| 380  | gamer.com.tw                                           | 104.18.3.197    | IPv4   | h3   | ✅ 成功 | 50       | cloudflare |
| 205  | www.whatismyip.com                                     | 104.26.13.23    | IPv4   | h3   | ✅ 成功 | 51       | cloudflare |
| 269  | time.is                                                | 104.26.12.54    | IPv4   | h3   | ✅ 成功 | 51       | cloudflare |
| 105  | icook.hk                                               | 172.67.161.104  | IPv4   | h3   | ✅ 成功 | 52       | cloudflare |
| 56   | 104.26.6.112                                           | 104.26.6.112    | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 158  | ipv4.ip.sb                                             | 104.26.12.31    | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 300  | singapore.com                                          | 172.67.75.194   | IPv4   | h3   | ✅ 成功 | 53       | cloudflare |
| 95   | ct.877774.xyz                                          | 172.64.229.44   | IPv4   | h3   | ✅ 成功 | 54       | cloudflare |
| 15   | www.ipget.net                                          | 188.114.96.3    | IPv4   | h3   | ✅ 成功 | 55       | cloudflare |
| 181  | toy-people.com                                         | 104.26.2.36     | IPv4   | h3   | ✅ 成功 | 55       | cloudflare |
| 444  | www.csgo.com                                           | 195.85.59.95    | IPv4   | h3   | ✅ 成功 | 55       | cloudflare |
| 64   | cmcc.877774.xyz                                        | 104.16.148.6    | IPv4   | h3   | ✅ 成功 | 56       | cloudflare |
| 132  | cu.877774.xyz                                          | 104.26.4.111    | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 234  | asia.877774.xyz                                        | 104.16.211.153  | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 318  | silkbook.com                                           | 104.26.8.160    | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 346  | julio.ns.cloudflare.com                                | 172.64.35.209   | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 369  | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 104.21.9.230    | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 35   | www.gov.ua                                             | 172.67.209.127  | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 61   | cmcc.877774.xyz                                        | 104.16.148.3    | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 124  | sullivan.ns.cloudflare.com                             | 108.162.195.161 | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 223  | fbi.gov                                                | 104.16.148.244  | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 328  | dnschecker.org                                         | 172.67.73.216   | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 385  | 172.64.35.24                                           | 172.64.35.24    | IPv4   | h3   | ✅ 成功 | 58       | cloudflare |
| 24   | trevor.ns.cloudflare.com                               | 108.162.195.154 | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 45   | iplocation.io                                          | 172.67.70.100   | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 74   | cmcc.877774.xyz                                        | 104.16.149.3    | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 209  | dylan.ns.cloudflare.com                                | 108.162.195.187 | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 287  | ip.sb                                                  | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 335  | ashton.ns.cloudflare.com                               | 108.162.195.173 | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 424  | 104.19.175.123                                         | 104.19.175.123  | IPv4   | h3   | ✅ 成功 | 59       | cloudflare |
| 34   | www.gov.ua                                             | 104.21.23.72    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 69   | cmcc.877774.xyz                                        | 104.16.148.11   | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 76   | cmcc.877774.xyz                                        | 104.16.149.5    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 81   | cmcc.877774.xyz                                        | 104.16.149.10   | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 114  | www.hugedomains.com                                    | 104.26.7.37     | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 141  | craig.ns.cloudflare.com                                | 108.162.195.192 | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 155  | cf.877771.xyz                                          | 188.114.97.3    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 175  | www.visa.com.sg                                        | 104.18.13.229   | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 252  | www.udemy.com                                          | 104.16.142.237  | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 256  | rustam.ns.cloudflare.com                               | 108.162.195.148 | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 311  | saas.sin.fan                                           | 162.159.36.5    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 30   | steamdb.info                                           | 104.20.34.212   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 53   | ipinfo.in                                              | 172.67.198.203  | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 119  | www.okcupid.com                                        | 104.16.239.254  | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 123  | www.okcupid.com                                        | 104.16.223.254  | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 138  | cu.877774.xyz                                          | 104.26.4.117    | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 160  | ipv4.ip.sb                                             | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 174  | www.visa.com.sg                                        | 104.18.12.229   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 180  | toy-people.com                                         | 172.67.72.18    | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 306  | 104.17.68.85                                           | 104.17.68.85    | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 322  | whatismyipaddress.com                                  | 104.19.222.79   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 334  | ashton.ns.cloudflare.com                               | 172.64.35.173   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 382  | 172.67.79.211                                          | 172.67.79.211   | IPv4   | h3   | ✅ 成功 | 61       | cloudflare |
| 66   | cmcc.877774.xyz                                        | 104.16.148.8    | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 78   | cmcc.877774.xyz                                        | 104.16.149.7    | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 92   | ct.877774.xyz                                          | 172.64.229.195  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 115  | www.hugedomains.com                                    | 104.26.6.37     | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 121  | www.okcupid.com                                        | 104.18.160.63   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 148  | www.visa.cn                                            | 162.159.153.2   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 191  | kyree.ns.cloudflare.com                                | 108.162.195.207 | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 216  | bestcf.030101.xyz                                      | 104.19.146.193  | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 310  | saas.sin.fan                                           | 162.159.36.20   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 326  | dnschecker.org                                         | 104.26.6.89     | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 402  | otto.ns.cloudflare.com                                 | 108.162.195.135 | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 3    | www.pcmag.com                                          | 104.16.20.118   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 59   | cmcc.877774.xyz                                        | 104.16.148.1    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 68   | cmcc.877774.xyz                                        | 104.16.148.10   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 94   | ct.877774.xyz                                          | 172.64.229.236  | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 204  | www.whatismyip.com                                     | 104.26.12.23    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 395  | 104.26.13.31                                           | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 397  | eur.877774.xyz                                         | 104.21.47.209   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 47   | iplocation.io                                          | 104.26.11.222   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 73   | cmcc.877774.xyz                                        | 104.16.149.2    | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 96   | ct.877774.xyz                                          | 172.64.229.161  | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 111  | www.4chan.org                                          | 104.16.228.229  | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 136  | cu.877774.xyz                                          | 104.26.4.115    | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 140  | craig.ns.cloudflare.com                                | 172.64.35.192   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 159  | ipv4.ip.sb                                             | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 396  | eur.877774.xyz                                         | 104.21.29.164   | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 437  | japan.com                                              | 104.26.5.60     | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 445  | stock.hostmonit.com                                    | 172.67.187.251  | IPv4   | h3   | ✅ 成功 | 64       | cloudflare |
| 6    | bhr01erx45.inzjddnkdz.de5.net                          | 104.21.73.250   | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 17 条记录
- **快 (50-100ms)**: 83 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录

---

## 详细分析

### 按IP版本统计

- **IPv4 失败**: 3 次
- **IPv6 失败**: 172 次

### 按协议统计

- **none**: 175 次失败

---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

_此报告由 HTTP/3 连接测试报告生成器自动生成_
