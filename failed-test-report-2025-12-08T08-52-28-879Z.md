# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/8 08:52:28
- **数据来源**: connectivity_results.json
- **总测试数**: 487
- **失败测试数**: 185
- **成功测试数**: 302
- **失败率**: 37.99%
- **平均延迟**: 117.36ms
- **最小延迟**: 67ms
- **最大延迟**: 5283ms

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 174 次 (94.1%)
- **连接超时: I/O超时**: 9 次 (4.9%)
- **连接被拒绝: 通用连接拒绝**: 2 次 (1.1%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (174 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 10 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable |
| 11 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable |
| 15 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable |
| 16 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable |
| 17 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable |
| 21 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable |
| 22 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable |
| 23 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable |
| 27 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable |
| 28 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable |
| 29 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable |
| 33 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable |
| 34 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable |
| 35 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable |
| 39 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable |
| 40 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable |
| 43 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable |
| 44 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable |
| 47 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable |
| 48 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable |
| 52 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable |
| 53 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable |
| 54 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable |
| 57 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable |
| 58 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable |
| 63 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable |
| 64 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable |
| 68 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 69 | japan.com | 2606:4700:20::681a:43c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable |
| 70 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 74 | time.is | 2606:4700:20::681a:c36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable |
| 75 | time.is | 2606:4700:20::681a:d36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable |
| 76 | time.is | 2606:4700:20::ac43:449d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable |
| 81 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable |
| 82 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable |
| 83 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable |
| 86 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable |
| 87 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable |
| 93 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable |
| 97 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable |
| 98 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable |
| 101 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable |
| 102 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable |
| 107 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |
| 108 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable |
| 111 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 112 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 119 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable |
| 120 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable |
| 121 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable |
| 125 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable |
| 126 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable |
| 138 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable |
| 139 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable |
| 140 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable |
| 146 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable |
| 147 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable |
| 148 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable |
| 155 | bestcf.030101.xyz | 2606:4700:0:5d3:8010:fe57:6ca8:4452 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:0:5d3:8010:fe57:6ca8:4452]:443: connect: network is unreachable |
| 156 | bestcf.030101.xyz | 2606:4700::69f4:ed8c:2f05:1c41 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::69f4:ed8c:2f05:1c41]:443: connect: network is unreachable |
| 160 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable |
| 161 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable |
| 164 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable |
| 165 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable |
| 168 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable |
| 169 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable |
| 172 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable |
| 173 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable |
| 176 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 177 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 180 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 181 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 185 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable |
| 186 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable |
| 187 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable |
| 191 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable |
| 192 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable |
| 193 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable |
| 196 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable |
| 197 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable |
| 201 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable |
| 202 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable |
| 203 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable |
| 234 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable |
| 235 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable |
| 236 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable |
| 238 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa:66d2:154e:f17c:9632 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa:66d2:154e:f17c:9632]:443: connect: network is unreachable |
| 239 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa73:2243:9add:8c5a:8a20 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa73:2243:9add:8c5a:8a20]:443: connect: network is unreachable |
| 243 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable |
| 244 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable |
| 245 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable |
| 248 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3033::ac43:a162 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:a162]:443: connect: network is unreachable |
| 249 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3034::6815:9e6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:9e6]:443: connect: network is unreachable |
| 253 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable |
| 254 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable |
| 255 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable |
| 259 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable |
| 260 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable |
| 261 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable |
| 265 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable |
| 266 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable |
| 267 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable |
| 271 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable |
| 272 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable |
| 273 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable |
| 279 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable |
| 280 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable |
| 281 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable |
| 287 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable |
| 288 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable |
| 289 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable |
| 292 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 293 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 303 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable |
| 306 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3036::ac43:d4c5 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::ac43:d4c5]:443: connect: network is unreachable |
| 307 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3034::6815:3db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:3db6]:443: connect: network is unreachable |
| 315 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable |
| 323 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable |
| 324 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable |
| 325 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable |
| 328 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable |
| 329 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable |
| 338 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable |
| 339 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable |
| 340 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable |
| 353 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable |
| 354 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable |
| 355 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable |
| 359 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable |
| 360 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable |
| 361 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable |
| 365 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 366 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 371 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable |
| 372 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable |
| 373 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable |
| 378 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable |
| 379 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable |
| 383 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable |
| 384 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable |
| 385 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable |
| 388 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable |
| 389 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable |
| 394 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable |
| 395 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable |
| 396 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable |
| 399 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 400 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 406 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable |
| 407 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable |
| 408 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable |
| 409 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable |
| 413 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable |
| 414 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable |
| 419 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable |
| 420 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable |
| 431 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3037::ac43:aedb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:aedb]:443: connect: network is unreachable |
| 432 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3034::6815:2ffc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:2ffc]:443: connect: network is unreachable |
| 433 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable |
| 435 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable |
| 438 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable |
| 439 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable |
| 448 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable |
| 449 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable |
| 450 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable |
| 453 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable |
| 454 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable |
| 456 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable |
| 461 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable |
| 462 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable |
| 463 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable |
| 477 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable |
| 478 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable |
| 479 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (9 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 331 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 421 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 473 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 480 | 172.67.49.134 | 172.67.49.134 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.67.49.134:443: i/o timeout |
| 481 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |
| 484 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 485 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 486 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |
| 487 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |

#### 连接被拒绝: 通用连接拒绝 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 59 | 138.2.18.82 | 138.2.18.82 | IPv4 | none | N/A | 0 | N/A | dial tcp 138.2.18.82:443: connect: connection refused |
| 334 | 222.105.131.225 | 222.105.131.225 | IPv4 | none | N/A | 0 | N/A | dial tcp 222.105.131.225:443: connect: connection refused |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 174 次 (94.1%)
- **连接超时**: 9 次 (4.9%)
- **连接被拒绝**: 2 次 (1.1%)

#### 错误模式分析

**超时集中度分析**: 共有 9 次超时，主要集中在IP段 119.194（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 185 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 11 次，IPv6失败 174 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：ip.sb (3次), silkbook.com (3次), lewis.ns.cloudflare.com (3次)，建议重点检查这些主机的网络状态和服务可用性



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 430 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 172.67.174.219 | IPv4 | h3 | ✅ 成功 | 67 | cloudflare |
| 210 | cmcc.877774.xyz | 104.16.149.12 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 298 | cu.877774.xyz | 104.26.4.117 | IPv4 | h3 | ✅ 成功 | 68 | cloudflare |
| 295 | cu.877774.xyz | 104.26.4.114 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 326 | cf.877771.xyz | 172.67.152.183 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 391 | craig.ns.cloudflare.com | 108.162.195.192 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 427 | 172.64.147.73 | 172.64.147.73 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 41 | icook.hk | 172.67.161.104 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 342 | www.okcupid.com | 104.17.48.63 | IPv4 | h3 | ✅ 成功 | 70 | cloudflare |
| 175 | ae8a9c24-83de.masx200.ddns-ip.net | 104.21.14.41 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 344 | www.okcupid.com | 104.16.223.254 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 393 | craig.ns.cloudflare.com | 172.64.35.192 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 460 | damien.ns.cloudflare.com | 172.64.35.168 | IPv4 | h3 | ✅ 成功 | 71 | cloudflare |
| 304 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 172.67.212.197 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 310 | na.877774.xyz | 104.19.74.233 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 327 | cf.877771.xyz | 104.21.80.180 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 411 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 13 | ip.sb | 104.26.12.31 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 20 | silkbook.com | 104.26.8.160 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 217 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 424 | www.visa.cn | 162.159.153.2 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 436 | icook.tw | 172.66.158.115 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 50 | singapore.com | 104.26.13.140 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 73 | time.is | 172.67.68.157 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 137 | toy-people.com | 104.26.2.36 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 233 | www.whatismyip.com | 104.26.12.23 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 294 | cu.877774.xyz | 104.26.4.113 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 380 | dylan.ns.cloudflare.com | 108.162.195.187 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 387 | palera.in | 104.21.58.72 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 455 | 172.64.144.188 | 172.64.144.188 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 467 | ct.877774.xyz | 172.64.229.173 | IPv4 | h3 | ✅ 成功 | 74 | cloudflare |
| 105 | stock.hostmonit.com | 104.21.7.193 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 128 | www.csgo.com | 195.85.59.95 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 142 | www.4chan.org | 104.16.229.229 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 179 | cf.zhetengsha.eu.org | 172.66.44.77 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 322 | uriah.ns.cloudflare.com | 172.64.35.194 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 368 | pranab.ns.cloudflare.com | 108.162.195.199 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 159 | fbi.gov | 104.16.149.244 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 174 | ae8a9c24-83de.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 207 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 225 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 270 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 319 | saas.sin.fan | 162.159.36.5 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 405 | decker.ns.cloudflare.com | 172.64.35.155 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 30 | julio.ns.cloudflare.com | 108.162.195.209 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 46 | comicabc.com | 104.21.64.10 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 51 | singapore.com | 172.67.75.194 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 115 | eur.877774.xyz | 104.21.29.164 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 163 | www.gov.ua | 172.67.209.127 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 222 | cmcc.877774.xyz | 104.16.148.11 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 226 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 264 | huxley.ns.cloudflare.com | 172.64.35.188 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 332 | 172.67.181.209 | 172.67.181.209 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 367 | 172.64.148.15 | 172.64.148.15 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 375 | 104.18.42.26 | 104.18.42.26 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 417 | www.udemy.com | 104.16.142.237 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 443 | www.visa.com.hk | 104.18.20.69 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 451 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 37 | 172.64.49.165 | 172.64.49.165 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 124 | www.ipget.net | 104.21.15.212 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 134 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 149 | www.visa.com.sg | 104.18.12.229 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 152 | 172.64.146.16 | 172.64.146.16 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 166 | www.digitalocean.com | 104.19.174.68 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 224 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 232 | www.whatismyip.com | 104.26.13.23 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 337 | ashton.ns.cloudflare.com | 172.64.35.173 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 341 | www.okcupid.com | 104.16.239.254 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 363 | cf.090227.xyz | 172.66.47.179 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 382 | dylan.ns.cloudflare.com | 172.64.35.187 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 418 | www.udemy.com | 104.16.143.237 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 445 | sullivan.ns.cloudflare.com | 108.162.195.161 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 9 | www.pcmag.com | 104.16.21.118 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 118 | www.hugedomains.com | 172.67.70.191 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 154 | bestcf.030101.xyz | 104.19.152.12 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 167 | www.digitalocean.com | 104.19.173.68 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 184 | kyree.ns.cloudflare.com | 172.64.35.207 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 212 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 240 | rustam.ns.cloudflare.com | 108.162.195.148 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 268 | bowen.ns.cloudflare.com | 108.162.195.83 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 275 | 172.67.106.26 | 172.67.106.26 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 318 | saas.sin.fan | 162.159.36.20 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 343 | www.okcupid.com | 104.18.160.63 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 350 | dnschecker.org | 104.26.6.89 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 410 | 104.16.223.179 | 104.16.223.179 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 415 | 172.64.33.67 | 172.64.33.67 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 423 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 434 | 104.18.37.40 | 104.18.37.40 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 452 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 55 | ip.gs | 104.21.14.176 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 84 | ipinfo.in | 104.21.21.129 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 91 | gamer.com.tw | 104.18.3.197 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 117 | www.hugedomains.com | 104.26.6.37 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 127 | 172.64.157.120 | 172.64.157.120 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 144 | cf.0sm.com | 104.21.7.133 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 145 | cf.0sm.com | 172.67.187.145 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 151 | 104.17.68.85 | 104.17.68.85 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 153 | bestcf.030101.xyz | 104.18.84.250 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 230 | 172.67.110.232 | 172.67.110.232 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 312 | www.ipchicken.com | 104.26.6.112 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 11 次
- **IPv6 失败**: 174 次

### 按协议统计

- **none**: 185 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
