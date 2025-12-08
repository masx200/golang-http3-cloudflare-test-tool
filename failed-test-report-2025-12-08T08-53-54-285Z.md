# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/8 08:53:54
- **数据来源**: connectivity_results.json
- **总测试数**: 488
- **失败测试数**: 187
- **成功测试数**: 301
- **失败率**: 38.32%
- **平均延迟**: 107.47ms
- **最小延迟**: 41ms
- **最大延迟**: 5874ms

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 174 次 (93.0%)
- **连接超时: I/O超时**: 9 次 (4.8%)
- **连接被拒绝: 通用连接拒绝**: 2 次 (1.1%)
- **DNS解析错误: 其他DNS错误**: 1 次 (0.5%)
- **连接超时: 上下文超时**: 1 次 (0.5%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (174 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 10 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable |
| 11 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable |
| 12 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable |
| 13 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable |
| 17 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable |
| 18 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable |
| 19 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable |
| 23 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable |
| 24 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable |
| 25 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable |
| 29 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable |
| 30 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable |
| 31 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable |
| 35 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable |
| 36 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable |
| 37 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable |
| 40 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable |
| 41 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable |
| 44 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable |
| 45 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable |
| 49 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable |
| 50 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable |
| 54 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 55 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 56 | japan.com | 2606:4700:20::681a:43c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable |
| 60 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable |
| 61 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable |
| 65 | time.is | 2606:4700:20::681a:c36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable |
| 66 | time.is | 2606:4700:20::ac43:449d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable |
| 67 | time.is | 2606:4700:20::681a:d36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable |
| 72 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable |
| 73 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable |
| 74 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable |
| 78 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |
| 79 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable |
| 80 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable |
| 85 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable |
| 86 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable |
| 91 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 92 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 100 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable |
| 101 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable |
| 102 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable |
| 106 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable |
| 107 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable |
| 119 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable |
| 120 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable |
| 121 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable |
| 124 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable |
| 125 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable |
| 131 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable |
| 134 | bestcf.030101.xyz | 2606:4700::69f4:ed8c:2f05:1c41 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::69f4:ed8c:2f05:1c41]:443: connect: network is unreachable |
| 135 | bestcf.030101.xyz | 2606:4700:0:5d3:8010:fe57:6ca8:4452 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:0:5d3:8010:fe57:6ca8:4452]:443: connect: network is unreachable |
| 140 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable |
| 141 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable |
| 145 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable |
| 146 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable |
| 149 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable |
| 150 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable |
| 153 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 154 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 157 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 158 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 161 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable |
| 162 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable |
| 165 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable |
| 166 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable |
| 196 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable |
| 197 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable |
| 198 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable |
| 201 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable |
| 202 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable |
| 206 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable |
| 207 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable |
| 208 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable |
| 213 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable |
| 214 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable |
| 215 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable |
| 219 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable |
| 220 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable |
| 221 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable |
| 225 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable |
| 226 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable |
| 227 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable |
| 231 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable |
| 232 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable |
| 233 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable |
| 237 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable |
| 238 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable |
| 239 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable |
| 242 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3034::6815:9e6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:9e6]:443: connect: network is unreachable |
| 243 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3033::ac43:a162 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:a162]:443: connect: network is unreachable |
| 246 | freeyx.cloudflare88.eu.org | 2606:4700:3010:0:f8:a503:68e6:63ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3010:0:f8:a503:68e6:63ca]:443: connect: network is unreachable |
| 247 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa73:2243:9a08:a5fe:816f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa73:2243:9a08:a5fe:816f]:443: connect: network is unreachable |
| 252 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable |
| 253 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable |
| 254 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable |
| 257 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable |
| 258 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable |
| 265 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable |
| 266 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable |
| 267 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable |
| 280 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable |
| 281 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable |
| 282 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable |
| 288 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable |
| 289 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable |
| 290 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable |
| 296 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable |
| 297 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable |
| 298 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable |
| 301 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 302 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 305 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3036::ac43:d4c5 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::ac43:d4c5]:443: connect: network is unreachable |
| 306 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3034::6815:3db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:3db6]:443: connect: network is unreachable |
| 307 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable |
| 314 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable |
| 324 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable |
| 325 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable |
| 326 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable |
| 329 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable |
| 330 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable |
| 338 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable |
| 339 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable |
| 340 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable |
| 354 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable |
| 355 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable |
| 356 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable |
| 359 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 360 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 365 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable |
| 366 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable |
| 367 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable |
| 373 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable |
| 374 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable |
| 375 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable |
| 379 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable |
| 380 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable |
| 384 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable |
| 385 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable |
| 386 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable |
| 389 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable |
| 390 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable |
| 394 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable |
| 395 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable |
| 396 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable |
| 399 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 400 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 404 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable |
| 405 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable |
| 406 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable |
| 410 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable |
| 413 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable |
| 414 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable |
| 421 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable |
| 422 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable |
| 431 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3034::6815:2ffc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:2ffc]:443: connect: network is unreachable |
| 432 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3037::ac43:aedb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:aedb]:443: connect: network is unreachable |
| 436 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable |
| 438 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable |
| 441 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable |
| 442 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable |
| 447 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable |
| 448 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable |
| 452 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable |
| 453 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable |
| 454 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable |
| 457 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable |
| 461 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable |
| 462 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable |
| 463 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable |
| 471 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable |
| 472 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable |
| 473 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (9 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 312 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 427 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 465 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 466 | 172.67.49.134 | 172.67.49.134 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.67.49.134:443: i/o timeout |
| 467 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |
| 484 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 486 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 487 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |
| 488 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |

#### 连接被拒绝: 通用连接拒绝 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 6 | 138.2.18.82 | 138.2.18.82 | IPv4 | none | N/A | 0 | N/A | dial tcp 138.2.18.82:443: connect: connection refused |
| 346 | 222.105.131.225 | 222.105.131.225 | IPv4 | none | N/A | 0 | N/A | dial tcp 222.105.131.225:443: connect: connection refused |

#### DNS解析错误: 其他DNS错误 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 311 | 168.138.184.172 | 168.138.184.172 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": remote error: tls: unrecognized name |

#### 连接超时: 上下文超时 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 485 | 158.101.77.33 | 158.101.77.33 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": context deadline exceeded |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 174 次 (93.0%)
- **连接超时**: 10 次 (5.3%)
- **连接被拒绝**: 2 次 (1.1%)
- **DNS解析错误**: 1 次 (0.5%)

#### 错误模式分析

**超时集中度分析**: 共有 9 次超时，主要集中在IP段 119.194（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 185 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 13 次，IPv6失败 174 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：ip.sb (3次), singapore.com (3次), silkbook.com (3次)，建议重点检查这些主机的网络状态和服务可用性



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 299 | www.wto.org | 172.64.146.66 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 444 | www.visa.com.hk | 104.18.21.69 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 377 | ifconfig.co | 104.21.54.91 | IPv4 | h3 | ✅ 成功 | 45 | cloudflare |
| 451 | sullivan.ns.cloudflare.com | 172.64.35.161 | IPv4 | h3 | ✅ 成功 | 46 | cloudflare |
| 248 | 172.64.38.15 | 172.64.38.15 | IPv4 | h3 | ✅ 成功 | 47 | cloudflare |
| 428 | 104.19.223.58 | 104.19.223.58 | IPv4 | h3 | ✅ 成功 | 47 | cloudflare |
| 342 | www.okcupid.com | 104.16.144.63 | IPv4 | h3 | ✅ 成功 | 48 | cloudflare |
| 118 | toy-people.com | 104.26.2.36 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 185 | cmcc.877774.xyz | 104.16.149.5 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 304 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 172.67.212.197 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 59 | ipinfo.in | 172.67.198.203 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 378 | ifconfig.co | 172.67.168.106 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 362 | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4 | h3 | ✅ 成功 | 57 | cloudflare |
| 175 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h3 | ✅ 成功 | 58 | cloudflare |
| 316 | www.ipchicken.com | 172.67.68.101 | IPv4 | h3 | ✅ 成功 | 58 | cloudflare |
| 182 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h3 | ✅ 成功 | 59 | cloudflare |
| 42 | ip.gs | 104.21.14.176 | IPv4 | h3 | ✅ 成功 | 60 | cloudflare |
| 136 | 104.17.68.85 | 104.17.68.85 | IPv4 | h3 | ✅ 成功 | 60 | cloudflare |
| 151 | cf.zhetengsha.eu.org | 172.66.47.179 | IPv4 | h3 | ✅ 成功 | 60 | cloudflare |
| 4 | 103.160.204.59 | 103.160.204.59 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 46 | 172.67.243.218 | 172.67.243.218 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 143 | www.gov.ua | 104.21.23.72 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 144 | www.gov.ua | 172.67.209.127 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 159 | www.digitalocean.com | 104.19.173.68 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 163 | tasteatlas.com | 104.17.37.105 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 387 | palera.in | 104.21.58.72 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 420 | www.udemy.com | 104.16.143.237 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 186 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 200 | zread.ai | 172.67.202.78 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 212 | iplocation.io | 104.26.10.222 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 275 | cu.877774.xyz | 104.26.4.118 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 276 | cu.877774.xyz | 104.26.4.119 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 279 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 90 | cf.877774.xyz | 104.18.41.190 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 99 | www.hugedomains.com | 104.26.6.37 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 164 | tasteatlas.com | 104.17.36.105 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 241 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 104.21.9.230 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 331 | 172.64.153.172 | 172.64.153.172 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 409 | 104.16.223.179 | 104.16.223.179 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 439 | icook.tw | 104.20.28.74 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 480 | ct.877774.xyz | 172.64.229.236 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 32 | julio.ns.cloudflare.com | 108.162.195.209 | IPv4 | h3 | ✅ 成功 | 64 | cloudflare |
| 83 | steamdb.info | 104.20.34.212 | IPv4 | h3 | ✅ 成功 | 64 | cloudflare |
| 347 | www.glassdoor.com | 104.17.64.70 | IPv4 | h3 | ✅ 成功 | 64 | cloudflare |
| 417 | www.visa.cn | 162.159.152.2 | IPv4 | h3 | ✅ 成功 | 64 | cloudflare |
| 437 | 104.18.37.40 | 104.18.37.40 | IPv4 | h3 | ✅ 成功 | 64 | cloudflare |
| 82 | gamer.com.tw | 104.18.3.197 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 156 | ae8a9c24-83de.masx200.ddns-ip.net | 104.21.14.41 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 190 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 344 | www.okcupid.com | 104.17.48.63 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 416 | www.visa.cn | 162.159.153.2 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 455 | 172.64.144.188 | 172.64.144.188 | IPv4 | h3 | ✅ 成功 | 65 | cloudflare |
| 62 | time.is | 104.26.12.54 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 142 | www.7749tv.com | 104.19.133.4 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 261 | 104.18.39.196 | 104.18.39.196 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 285 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 319 | saas.sin.fan | 162.159.36.5 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 348 | www.glassdoor.com | 104.16.25.46 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 446 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h3 | ✅ 成功 | 66 | cloudflare |
| 95 | eur.877774.xyz | 104.21.29.164 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 97 | www.hugedomains.com | 104.26.7.37 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 174 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 210 | iplocation.io | 172.67.70.100 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 223 | www.whatismyip.com | 172.67.69.129 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 244 | freeyx.cloudflare88.eu.org | 141.101.120.183 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 303 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 104.21.61.182 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 370 | pranab.ns.cloudflare.com | 108.162.195.199 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 435 | asia.877774.xyz | 104.17.139.62 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 5 | 172.64.49.165 | 172.64.49.165 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 9 | icook.hk | 172.67.161.104 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 20 | singapore.com | 172.67.75.194 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 180 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 199 | zread.ai | 104.21.76.240 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 352 | dnschecker.org | 104.26.7.89 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 475 | ct.877774.xyz | 172.64.229.173 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 479 | ct.877774.xyz | 172.64.229.217 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 53 | japan.com | 104.26.5.60 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 171 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 177 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 308 | na.877774.xyz | 104.18.187.25 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 320 | saas.sin.fan | 162.159.36.20 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 468 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 75 | 162.159.133.85 | 162.159.133.85 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 76 | stock.hostmonit.com | 104.21.7.193 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 168 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 170 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 188 | cmcc.877774.xyz | 104.16.149.8 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 228 | trevor.ns.cloudflare.com | 172.64.35.154 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 255 | www.pcmag.com | 104.16.20.118 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 321 | uriah.ns.cloudflare.com | 108.162.195.194 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 77 | stock.hostmonit.com | 172.67.187.251 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 89 | cf.877774.xyz | 172.64.146.66 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 110 | www.csgo.com | 195.85.59.161 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 117 | toy-people.com | 104.26.3.36 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 128 | www.4chan.org | 104.16.229.229 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 236 | moura.ns.cloudflare.com | 172.64.35.217 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 260 | 198.62.62.4 | 198.62.62.4 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 383 | dylan.ns.cloudflare.com | 172.64.35.187 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 419 | www.udemy.com | 104.16.142.237 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 460 | damien.ns.cloudflare.com | 172.64.35.168 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 7 条记录
- **快 (50-100ms)**: 93 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 13 次
- **IPv6 失败**: 174 次

### 按协议统计

- **none**: 185 次失败
- **h2**: 2 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
