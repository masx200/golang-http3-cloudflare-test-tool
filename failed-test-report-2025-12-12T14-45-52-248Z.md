# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 14:45:52
- **数据来源**: connectivity_results-20251212-144552.json
- **总测试数**: 447
- **失败测试数**: 168
- **成功测试数**: 279
- **失败率**: 37.58%
- **平均延迟**: 104.44ms
- **最小延迟**: 52ms
- **最大延迟**: 629ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 14:45:52
- **IP地址**: 20.168.110.187
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

| 序号 | 主机/域名                             | 目标IP                                  | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                                                                |
| ---- | ------------------------------------- | --------------------------------------- | ------ | ---- | ------ | -------- | ------ | --------------------------------------------------------------------------------------- |
| 1    | [2606:4700:440f::53aa:4126]           | 2606:4700:440f::53aa:4126               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable               |
| 6    | www.ipget.net                         | 2606:4700:3036::6815:fd4                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable                |
| 7    | www.ipget.net                         | 2606:4700:3031::ac43:cf1a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable               |
| 10   | comicabc.com                          | 2606:4700:3036::6815:400a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable               |
| 11   | comicabc.com                          | 2606:4700:3030::ac43:ae15               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable               |
| 15   | benedict.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable                 |
| 16   | benedict.ns.cloudflare.com            | 2606:4700:58::a29f:2ccd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable                 |
| 17   | benedict.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cd                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable                 |
| 21   | bowen.ns.cloudflare.com               | 2803:f800:50::6ca2:c353                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable                 |
| 22   | bowen.ns.cloudflare.com               | 2606:4700:58::a29f:2c53                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable                 |
| 23   | bowen.ns.cloudflare.com               | 2a06:98c1:50::ac40:2353                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable                 |
| 35   | silkbook.com                          | 2606:4700:20::681a:9a0                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable                  |
| 36   | silkbook.com                          | 2606:4700:20::ac43:4bd0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable                 |
| 37   | silkbook.com                          | 2606:4700:20::681a:8a0                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable                  |
| 42   | palera.in                             | 2606:4700:3035::6815:3a48               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable               |
| 43   | palera.in                             | 2606:4700:3032::ac43:9d7a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable               |
| 46   | cf.090227.xyz                         | 2606:4700:440a::ac40:98f1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440a::ac40:98f1]:443: connect: network is unreachable               |
| 47   | cf.090227.xyz                         | 2a06:98c1:3105::6812:230f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3105::6812:230f]:443: connect: network is unreachable               |
| 51   | ashton.ns.cloudflare.com              | 2a06:98c1:50::ac40:23ad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable                 |
| 52   | ashton.ns.cloudflare.com              | 2606:4700:58::a29f:2cad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable                 |
| 53   | ashton.ns.cloudflare.com              | 2803:f800:50::6ca2:c3ad                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable                 |
| 57   | moura.ns.cloudflare.com               | 2606:4700:58::a29f:2cd9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable                 |
| 58   | moura.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable                 |
| 59   | moura.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable                 |
| 63   | rustam.ns.cloudflare.com              | 2a06:98c1:50::ac40:2394                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable                 |
| 64   | rustam.ns.cloudflare.com              | 2803:f800:50::6ca2:c394                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable                 |
| 65   | rustam.ns.cloudflare.com              | 2606:4700:58::a29f:2c94                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable                 |
| 69   | time.is                               | 2606:4700:20::681a:c36                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable                  |
| 70   | time.is                               | 2606:4700:20::681a:d36                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable                  |
| 71   | time.is                               | 2606:4700:20::ac43:449d                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable                 |
| 74   | whatismyipaddress.com                 | 2606:4700::6813:df4f                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable                    |
| 75   | whatismyipaddress.com                 | 2606:4700::6813:de4f                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable                    |
| 77   | [2606:4700:964f::6e2c:588e]           | 2606:4700:964f::6e2c:588e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable               |
| 79   | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable               |
| 85   | julio.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable                 |
| 86   | julio.ns.cloudflare.com               | 2606:4700:58::a29f:2cd1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable                 |
| 87   | julio.ns.cloudflare.com               | 2803:f800:50::6ca2:c3d1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable                 |
| 91   | dnschecker.org                        | 2606:4700:20::681a:659                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable                  |
| 92   | dnschecker.org                        | 2606:4700:20::681a:759                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable                  |
| 93   | dnschecker.org                        | 2606:4700:20::ac43:49d8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable                 |
| 94   | [2606:4700:440b::3e6e:5f06]           | 2606:4700:440b::3e6e:5f06               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable               |
| 99   | singapore.com                         | 2606:4700:20::ac43:4bc2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable                 |
| 100  | singapore.com                         | 2606:4700:20::681a:d8c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable                  |
| 101  | singapore.com                         | 2606:4700:20::681a:c8c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable                  |
| 105  | ip.sb                                 | 2606:4700:20::681a:d1f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable                  |
| 106  | ip.sb                                 | 2606:4700:20::ac43:4bac                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable                 |
| 107  | ip.sb                                 | 2606:4700:20::681a:c1f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable                  |
| 108  | [2606:4700:4403::7357:544f]           | 2606:4700:4403::7357:544f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable               |
| 111  | ip.gs                                 | 2606:4700:3036::6815:eb0                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable                |
| 112  | ip.gs                                 | 2606:4700:3035::ac43:a01c               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable               |
| 116  | uriah.ns.cloudflare.com               | 2606:4700:58::a29f:2cc2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable                 |
| 117  | uriah.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable                 |
| 118  | uriah.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c2                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable                 |
| 119  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable               |
| 125  | tasteatlas.com                        | 2606:4700::6811:2569                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable                    |
| 126  | tasteatlas.com                        | 2606:4700::6811:2469                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable                    |
| 129  | www.udemy.com                         | 2606:4700::6810:8eed                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable                    |
| 130  | www.udemy.com                         | 2606:4700::6810:8fed                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable                    |
| 137  | [2606:4700:83be::11:74f]              | 2606:4700:83be::11:74f                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable                  |
| 141  | icook.tw                              | 2606:4700:10::6814:1c4a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable                 |
| 142  | icook.tw                              | 2606:4700:10::ac42:9e73                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable                 |
| 144  | [2606:4700:83bd::7d8:2b47]            | 2606:4700:83bd::7d8:2b47                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable                |
| 147  | cf.877774.xyz                         | 2a06:98c1:3102::6812:29be               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable               |
| 148  | cf.877774.xyz                         | 2606:4700:4406::ac40:9242               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable               |
| 155  | ifconfig.co                           | 2606:4700:3030::ac43:a86a               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable               |
| 156  | ifconfig.co                           | 2606:4700:3037::6815:365b               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable               |
| 159  | www.digitalocean.com                  | 2606:4700::6813:ad44                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable                    |
| 160  | www.digitalocean.com                  | 2606:4700::6813:ae44                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable                    |
| 164  | damien.ns.cloudflare.com              | 2606:4700:58::a29f:2ca8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable                 |
| 165  | damien.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable                 |
| 166  | damien.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a8                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable                 |
| 171  | lewis.ns.cloudflare.com               | 2606:4700:58::a29f:2c9f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable                 |
| 172  | lewis.ns.cloudflare.com               | 2803:f800:50::6ca2:c39f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable                 |
| 173  | lewis.ns.cloudflare.com               | 2a06:98c1:50::ac40:239f                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable                 |
| 177  | otto.ns.cloudflare.com                | 2606:4700:58::a29f:2c87                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable                 |
| 178  | otto.ns.cloudflare.com                | 2803:f800:50::6ca2:c387                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable                 |
| 179  | otto.ns.cloudflare.com                | 2a06:98c1:50::ac40:2387                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable                 |
| 184  | japan.com                             | 2606:4700:20::681a:53c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable                  |
| 185  | japan.com                             | 2606:4700:20::681a:43c                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable                  |
| 186  | japan.com                             | 2606:4700:20::ac43:465c                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable                 |
| 191  | trevor.ns.cloudflare.com              | 2606:4700:58::a29f:2c9a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable                 |
| 192  | trevor.ns.cloudflare.com              | 2803:f800:50::6ca2:c39a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable                 |
| 193  | trevor.ns.cloudflare.com              | 2a06:98c1:50::ac40:239a                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable                 |
| 197  | wilson.ns.cloudflare.com              | 2a06:98c1:50::ac40:236e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable                 |
| 198  | wilson.ns.cloudflare.com              | 2803:f800:50::6ca2:c36e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable                 |
| 199  | wilson.ns.cloudflare.com              | 2606:4700:58::a29f:2c6e                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable                 |
| 203  | www.wto.org                           | 2606:4700:4406::ac40:9242               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable               |
| 204  | www.wto.org                           | 2a06:98c1:3102::6812:29be               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable               |
| 207  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable               |
| 208  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable                |
| 214  | abdullah.ns.cloudflare.com            | 2803:f800:50::6ca2:c3cb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable                 |
| 215  | abdullah.ns.cloudflare.com            | 2a06:98c1:50::ac40:23cb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable                 |
| 216  | abdullah.ns.cloudflare.com            | 2606:4700:58::a29f:2ccb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable                 |
| 219  | www.pcmag.com                         | 2606:4700::6810:1576                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable                    |
| 220  | www.pcmag.com                         | 2606:4700::6810:1476                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable                    |
| 223  | cf.0sm.com                            | 2606:4700:3037::ac43:bb91               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable               |
| 224  | cf.0sm.com                            | 2606:4700:3032::6815:785                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable                |
| 235  | steamdb.info                          | 2606:4700:10::ac42:affa                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable                 |
| 236  | steamdb.info                          | 2606:4700:10::6814:22d4                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable                 |
| 239  | ipinfo.in                             | 2606:4700:3031::6815:1581               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable               |
| 240  | ipinfo.in                             | 2606:4700:3037::ac43:c6cb               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable               |
| 245  | www.gov.ua                            | 2606:4700:3031::6815:1748               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable               |
| 246  | www.gov.ua                            | 2606:4700:3033::ac43:d17f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable               |
| 259  | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc                | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable                |
| 263  | iplocation.io                         | 2606:4700:20::ac43:4664                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable                 |
| 264  | iplocation.io                         | 2606:4700:20::681a:bde                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable                  |
| 265  | iplocation.io                         | 2606:4700:20::681a:ade                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable                  |
| 296  | icook.hk                              | 2606:4700:3037::ac43:a168               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable               |
| 297  | icook.hk                              | 2606:4700:3031::6815:5ad2               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable               |
| 302  | huxley.ns.cloudflare.com              | 2803:f800:50::6ca2:c3bc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable                 |
| 303  | huxley.ns.cloudflare.com              | 2a06:98c1:50::ac40:23bc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable                 |
| 304  | huxley.ns.cloudflare.com              | 2606:4700:58::a29f:2cbc                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable                 |
| 308  | [2606:4700:8de6::5fa2:799e]           | 2606:4700:8de6::5fa2:799e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable               |
| 321  | decker.ns.cloudflare.com              | 2606:4700:58::a29f:2c9b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable                 |
| 322  | decker.ns.cloudflare.com              | 2803:f800:50::6ca2:c39b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable                 |
| 323  | decker.ns.cloudflare.com              | 2a06:98c1:50::ac40:239b                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable                 |
| 327  | www.hugedomains.com                   | 2606:4700:20::681a:725                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable                  |
| 328  | www.hugedomains.com                   | 2606:4700:20::ac43:46bf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable                 |
| 329  | www.hugedomains.com                   | 2606:4700:20::681a:625                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable                  |
| 334  | sullivan.ns.cloudflare.com            | 2803:f800:50::6ca2:c3a1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable                 |
| 335  | sullivan.ns.cloudflare.com            | 2606:4700:58::a29f:2ca1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable                 |
| 336  | sullivan.ns.cloudflare.com            | 2a06:98c1:50::ac40:23a1                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable                 |
| 340  | craig.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable                 |
| 341  | craig.ns.cloudflare.com               | 2606:4700:58::a29f:2cc0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable                 |
| 342  | craig.ns.cloudflare.com               | 2a06:98c1:50::ac40:23c0                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable                 |
| 345  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2c90               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable               |
| 346  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable               |
| 354  | pranab.ns.cloudflare.com              | 2606:4700:58::a29f:2cc7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable                 |
| 355  | pranab.ns.cloudflare.com              | 2803:f800:50::6ca2:c3c7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable                 |
| 356  | pranab.ns.cloudflare.com              | 2a06:98c1:50::ac40:23c7                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable                 |
| 364  | cris.ns.cloudflare.com                | 2803:f800:50::6ca2:c3ca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable                 |
| 365  | cris.ns.cloudflare.com                | 2606:4700:58::a29f:2cca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable                 |
| 366  | cris.ns.cloudflare.com                | 2a06:98c1:50::ac40:23ca                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable                 |
| 369  | cf.877771.xyz                         | 2606:4700:3033::ac43:98b7               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable               |
| 370  | cf.877771.xyz                         | 2606:4700:3033::6815:50b4               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable               |
| 377  | toy-people.com                        | 2606:4700:20::681a:224                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable                  |
| 378  | toy-people.com                        | 2606:4700:20::ac43:4812                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable                 |
| 379  | toy-people.com                        | 2606:4700:20::681a:324                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable                  |
| 383  | kyree.ns.cloudflare.com               | 2803:f800:50::6ca2:c3cf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable                 |
| 384  | kyree.ns.cloudflare.com               | 2a06:98c1:50::ac40:23cf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable                 |
| 385  | kyree.ns.cloudflare.com               | 2606:4700:58::a29f:2ccf                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable                 |
| 389  | dylan.ns.cloudflare.com               | 2a06:98c1:50::ac40:23bb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable                 |
| 390  | dylan.ns.cloudflare.com               | 2606:4700:58::a29f:2cbb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable                 |
| 391  | dylan.ns.cloudflare.com               | 2803:f800:50::6ca2:c3bb                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable                 |
| 397  | freeyx.cloudflare88.eu.org            | 2606:4700:3009:aa73:82e3:b098:d42a:658f | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3009:aa73:82e3:b098:d42a:658f]:443: connect: network is unreachable |
| 398  | freeyx.cloudflare88.eu.org            | 2606:4700:3009:7dab:39d5:a339:79a3:2365 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3009:7dab:39d5:a339:79a3:2365]:443: connect: network is unreachable |
| 403  | www.whatismyip.com                    | 2606:4700:20::ac43:4581                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable                 |
| 404  | www.whatismyip.com                    | 2606:4700:20::681a:c17                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable                  |
| 405  | www.whatismyip.com                    | 2606:4700:20::681a:d17                  | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable                  |
| 408  | zread.ai                              | 2606:4700:3032::ac43:ca4e               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable               |
| 409  | zread.ai                              | 2606:4700:3033::6815:4cf0               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable               |
| 412  | bestcf.030101.xyz                     | 2606:4700:0:c8c9:724e:bf54:61f9:838d    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:0:c8c9:724e:bf54:61f9:838d]:443: connect: network is unreachable    |
| 413  | bestcf.030101.xyz                     | 2606:4700::13:7aa5:8275:4599            | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::13:7aa5:8275:4599]:443: connect: network is unreachable            |
| 414  | [2606:4700:4409::5b5b:7758]           | 2606:4700:4409::5b5b:7758               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable               |
| 422  | braden.ns.cloudflare.com              | 2606:4700:58::a29f:2ca9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable                 |
| 423  | braden.ns.cloudflare.com              | 2803:f800:50::6ca2:c3a9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable                 |
| 424  | braden.ns.cloudflare.com              | 2a06:98c1:50::ac40:23a9                 | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable                 |
| 427  | cf.zhetengsha.eu.org                  | 2606:4700:440a::ac40:98f1               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700:440a::ac40:98f1]:443: connect: network is unreachable               |
| 428  | cf.zhetengsha.eu.org                  | 2a06:98c1:3105::6812:230f               | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3105::6812:230f]:443: connect: network is unreachable               |
| 431  | xn--b6gac.eu.org                      | 2a06:98c1:3120::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3120::3]:443: connect: network is unreachable                       |
| 432  | xn--b6gac.eu.org                      | 2a06:98c1:3121::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3121::3]:443: connect: network is unreachable                       |
| 435  | fbi.gov                               | 2606:4700::6810:95f4                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable                    |
| 436  | fbi.gov                               | 2606:4700::6810:94f4                    | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable                    |
| 439  | cloudflare-ip.mofashi.ltd             | 2a06:98c1:3120::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3120::3]:443: connect: network is unreachable                       |
| 440  | cloudflare-ip.mofashi.ltd             | 2a06:98c1:3121::3                       | IPv6   | none | N/A    | 0        | N/A    | dial tcp [2a06:98c1:3121::3]:443: connect: network is unreachable                       |

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 418  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |
| 443  | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 447  | 172.67.49.134    | 172.67.49.134  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.67.49.134:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 165 次 (98.2%)
- **连接超时**: 3 次 (1.8%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 172.64（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 168 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 3 次，IPv6失败 165 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：benedict.ns.cloudflare.com (3次),
bowen.ns.cloudflare.com (3次), silkbook.com
(3次)，建议重点检查这些主机的网络状态和服务可用性

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                  | 目标IP          | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | -------------------------- | --------------- | ------ | ---- | ------- | -------- | ---------- |
| 233  | steamdb.info               | 104.20.34.212   | IPv4   | h3   | ✅ 成功 | 52       | cloudflare |
| 109  | ip.gs                      | 104.21.14.176   | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 163  | damien.ns.cloudflare.com   | 172.64.35.168   | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 326  | www.hugedomains.com        | 104.26.6.37     | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 401  | www.whatismyip.com         | 104.26.13.23    | IPv4   | h3   | ✅ 成功 | 57       | cloudflare |
| 183  | japan.com                  | 172.67.70.92    | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 419  | braden.ns.cloudflare.com   | 108.162.195.169 | IPv4   | h3   | ✅ 成功 | 60       | cloudflare |
| 351  | pranab.ns.cloudflare.com   | 172.64.35.199   | IPv4   | h3   | ✅ 成功 | 62       | cloudflare |
| 332  | sullivan.ns.cloudflare.com | 172.64.35.161   | IPv4   | h3   | ✅ 成功 | 63       | cloudflare |
| 114  | uriah.ns.cloudflare.com    | 162.159.44.194  | IPv4   | h3   | ✅ 成功 | 65       | cloudflare |
| 300  | huxley.ns.cloudflare.com   | 172.64.35.188   | IPv4   | h3   | ✅ 成功 | 68       | cloudflare |
| 168  | lewis.ns.cloudflare.com    | 172.64.35.159   | IPv4   | h3   | ✅ 成功 | 69       | cloudflare |
| 253  | www.okcupid.com            | 104.16.144.63   | IPv4   | h3   | ✅ 成功 | 69       | cloudflare |
| 375  | toy-people.com             | 104.26.3.36     | IPv4   | h3   | ✅ 成功 | 69       | cloudflare |
| 343  | yx-auto.pages.dev          | 172.66.44.144   | IPv4   | h3   | ✅ 成功 | 71       | cloudflare |
| 68   | time.is                    | 104.26.13.54    | IPv4   | h3   | ✅ 成功 | 72       | cloudflare |
| 175  | otto.ns.cloudflare.com     | 108.162.195.135 | IPv4   | h3   | ✅ 成功 | 72       | cloudflare |
| 338  | craig.ns.cloudflare.com    | 172.64.35.192   | IPv4   | h3   | ✅ 成功 | 72       | cloudflare |
| 361  | cris.ns.cloudflare.com     | 108.162.195.202 | IPv4   | h3   | ✅ 成功 | 72       | cloudflare |
| 19   | bowen.ns.cloudflare.com    | 108.162.195.83  | IPv4   | h3   | ✅ 成功 | 73       | cloudflare |
| 140  | icook.tw                   | 172.66.158.115  | IPv4   | h3   | ✅ 成功 | 73       | cloudflare |
| 14   | benedict.ns.cloudflare.com | 172.64.35.205   | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 249  | ipv4.ip.sb                 | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 262  | iplocation.io              | 104.26.11.222   | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 402  | www.whatismyip.com         | 104.26.12.23    | IPv4   | h3   | ✅ 成功 | 74       | cloudflare |
| 386  | dylan.ns.cloudflare.com    | 162.159.44.187  | IPv4   | h3   | ✅ 成功 | 75       | cloudflare |
| 442  | saas.sin.fan               | 162.159.36.5    | IPv4   | h3   | ✅ 成功 | 75       | cloudflare |
| 150  | eur.877774.xyz             | 104.21.47.209   | IPv4   | h3   | ✅ 成功 | 76       | cloudflare |
| 228  | ct.877774.xyz              | 172.64.229.236  | IPv4   | h3   | ✅ 成功 | 76       | cloudflare |
| 429  | xn--b6gac.eu.org           | 172.67.153.253  | IPv4   | h3   | ✅ 成功 | 76       | cloudflare |
| 28   | www.ipchicken.com          | 104.26.6.112    | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 60   | rustam.ns.cloudflare.com   | 172.64.35.148   | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 298  | shopify.com                | 23.227.38.33    | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 426  | cf.zhetengsha.eu.org       | 104.18.35.15    | IPv4   | h3   | ✅ 成功 | 77       | cloudflare |
| 102  | ip.sb                      | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 425  | cf.zhetengsha.eu.org       | 172.64.152.241  | IPv4   | h3   | ✅ 成功 | 78       | cloudflare |
| 9    | comicabc.com               | 188.114.96.3    | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 41   | palera.in                  | 188.114.96.3    | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 138  | 104.26.13.31               | 104.26.13.31    | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 195  | wilson.ns.cloudflare.com   | 108.162.195.110 | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 260  | iplocation.io              | 104.26.10.222   | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 362  | cris.ns.cloudflare.com     | 162.159.44.202  | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 380  | kyree.ns.cloudflare.com    | 162.159.44.207  | IPv4   | h3   | ✅ 成功 | 79       | cloudflare |
| 261  | iplocation.io              | 172.67.70.100   | IPv4   | h3   | ✅ 成功 | 80       | cloudflare |
| 40   | palera.in                  | 188.114.97.3    | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 89   | dnschecker.org             | 104.26.6.89     | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 145  | cf.877774.xyz              | 172.64.146.66   | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 312  | cu.877774.xyz              | 104.26.4.116    | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 360  | www.visa.cn                | 162.159.152.2   | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 376  | toy-people.com             | 172.67.72.18    | IPv4   | h3   | ✅ 成功 | 81       | cloudflare |
| 82   | julio.ns.cloudflare.com    | 172.64.35.209   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 84   | julio.ns.cloudflare.com    | 162.159.44.209  | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 121  | www.visa.com.hk            | 104.18.20.69    | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 182  | japan.com                  | 104.26.5.60     | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 237  | ipinfo.in                  | 104.21.21.129   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 349  | www.visa.com.sg            | 104.18.12.229   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 382  | kyree.ns.cloudflare.com    | 172.64.35.207   | IPv4   | h3   | ✅ 成功 | 82       | cloudflare |
| 5    | www.ipget.net              | 104.21.15.212   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 133  | 104.18.37.40               | 104.18.37.40    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 139  | icook.tw                   | 104.20.28.74    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 234  | steamdb.info               | 172.66.175.250  | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 241  | 104.18.39.196              | 104.18.39.196   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 257  | 104.26.6.112               | 104.26.6.112    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 314  | cu.877774.xyz              | 104.26.4.118    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 350  | www.visa.com.sg            | 104.18.13.229   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 421  | braden.ns.cloudflare.com   | 172.64.35.169   | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 430  | xn--b6gac.eu.org           | 104.21.90.78    | IPv4   | h3   | ✅ 成功 | 83       | cloudflare |
| 33   | silkbook.com               | 104.26.9.160    | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 226  | ct.877774.xyz              | 172.64.229.195  | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 232  | ct.877774.xyz              | 172.64.229.174  | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 251  | www.okcupid.com            | 104.16.223.254  | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 325  | www.hugedomains.com        | 104.26.7.37     | IPv4   | h3   | ✅ 成功 | 84       | cloudflare |
| 61   | rustam.ns.cloudflare.com   | 162.159.44.148  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 317  | cu.877774.xyz              | 104.26.4.112    | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 319  | decker.ns.cloudflare.com   | 162.159.44.155  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 324  | www.hugedomains.com        | 172.67.70.191   | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 393  | freeyx.cloudflare88.eu.org | 141.101.120.157 | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 395  | freeyx.cloudflare88.eu.org | 141.101.120.61  | IPv4   | h3   | ✅ 成功 | 85       | cloudflare |
| 4    | www.ipget.net              | 172.67.207.26   | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 13   | benedict.ns.cloudflare.com | 162.159.44.205  | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 44   | cf.090227.xyz              | 172.64.152.241  | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 90   | dnschecker.org             | 104.26.7.89     | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 256  | 104.18.37.13               | 104.18.37.13    | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 318  | decker.ns.cloudflare.com   | 108.162.195.155 | IPv4   | h3   | ✅ 成功 | 86       | cloudflare |
| 45   | cf.090227.xyz              | 104.18.35.15    | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 80   | 172.67.106.26              | 172.67.106.26   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 103  | ip.sb                      | 172.67.75.172   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 124  | tasteatlas.com             | 104.17.36.105   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 266  | 103.160.204.59             | 103.160.204.59  | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 271  | cmcc.877774.xyz            | 104.16.149.12   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 284  | cmcc.877774.xyz            | 104.16.148.12   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 372  | na.877774.xyz              | 104.18.38.235   | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 392  | freeyx.cloudflare88.eu.org | 141.101.120.182 | IPv4   | h3   | ✅ 成功 | 87       | cloudflare |
| 282  | cmcc.877774.xyz            | 104.16.148.10   | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 310  | cu.877774.xyz              | 104.26.4.114    | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 331  | sullivan.ns.cloudflare.com | 108.162.195.161 | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 394  | freeyx.cloudflare88.eu.org | 141.101.120.7   | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 445  | cfip.xxxxxxxx.tk           | 188.114.96.125  | IPv4   | h3   | ✅ 成功 | 88       | cloudflare |
| 8    | comicabc.com               | 188.114.97.3    | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |
| 48   | ashton.ns.cloudflare.com   | 108.162.195.173 | IPv4   | h3   | ✅ 成功 | 89       | cloudflare |

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
