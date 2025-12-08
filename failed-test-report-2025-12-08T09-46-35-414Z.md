# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/8 09:46:35
- **数据来源**: connectivity_results.json
- **总测试数**: 499
- **失败测试数**: 185
- **成功测试数**: 314
- **失败率**: 37.07%
- **平均延迟**: 74.47ms
- **最小延迟**: 33ms
- **最大延迟**: 1261ms

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 173 次 (93.5%)
- **连接超时: I/O超时**: 10 次 (5.4%)
- **连接被拒绝: 通用连接拒绝**: 2 次 (1.1%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (173 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 10 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable |
| 11 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable |
| 12 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable |
| 13 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable |
| 17 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable |
| 18 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable |
| 19 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable |
| 23 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable |
| 24 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable |
| 25 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable |
| 29 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable |
| 30 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable |
| 31 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable |
| 35 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable |
| 36 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable |
| 37 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable |
| 41 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable |
| 42 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable |
| 43 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable |
| 47 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable |
| 48 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable |
| 51 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable |
| 52 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable |
| 55 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable |
| 56 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable |
| 61 | japan.com | 2606:4700:20::681a:43c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable |
| 62 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 63 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 67 | time.is | 2606:4700:20::ac43:449d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable |
| 68 | time.is | 2606:4700:20::681a:d36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable |
| 69 | time.is | 2606:4700:20::681a:c36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable |
| 73 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable |
| 74 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable |
| 78 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable |
| 79 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable |
| 80 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable |
| 82 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable |
| 87 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |
| 88 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable |
| 91 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable |
| 92 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable |
| 98 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 99 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 103 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable |
| 104 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable |
| 105 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable |
| 108 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable |
| 109 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable |
| 125 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable |
| 126 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable |
| 127 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable |
| 134 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable |
| 135 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable |
| 136 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable |
| 141 | bestcf.030101.xyz | 2606:4700::e81a:f8c6:467d:2d94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::e81a:f8c6:467d:2d94]:443: connect: network is unreachable |
| 142 | bestcf.030101.xyz | 2606:4700:0:db:66c:f662:2aa0:bf33 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:0:db:66c:f662:2aa0:bf33]:443: connect: network is unreachable |
| 146 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable |
| 147 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable |
| 150 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable |
| 151 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable |
| 154 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable |
| 155 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable |
| 158 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 159 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 163 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable |
| 164 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable |
| 168 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable |
| 169 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable |
| 170 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable |
| 174 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable |
| 175 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable |
| 176 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable |
| 205 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable |
| 206 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable |
| 209 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 210 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 215 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable |
| 216 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable |
| 217 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable |
| 221 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable |
| 222 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable |
| 223 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable |
| 227 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable |
| 228 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable |
| 229 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable |
| 233 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable |
| 234 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable |
| 235 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable |
| 238 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa59:4b79:c982:d8f5:e853 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa59:4b79:c982:d8f5:e853]:443: connect: network is unreachable |
| 242 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable |
| 243 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable |
| 244 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable |
| 247 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3034::6815:9e6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:9e6]:443: connect: network is unreachable |
| 248 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3033::ac43:a162 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:a162]:443: connect: network is unreachable |
| 253 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable |
| 254 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable |
| 255 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable |
| 258 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable |
| 259 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable |
| 275 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable |
| 276 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable |
| 277 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable |
| 281 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable |
| 282 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable |
| 283 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable |
| 288 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable |
| 289 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable |
| 295 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable |
| 296 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable |
| 297 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable |
| 300 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 301 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 304 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3034::6815:3db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:3db6]:443: connect: network is unreachable |
| 305 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3036::ac43:d4c5 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::ac43:d4c5]:443: connect: network is unreachable |
| 306 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable |
| 316 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable |
| 321 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable |
| 322 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable |
| 326 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable |
| 327 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable |
| 328 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable |
| 338 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable |
| 339 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable |
| 340 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable |
| 353 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable |
| 354 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable |
| 355 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable |
| 358 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 359 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 364 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable |
| 365 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable |
| 366 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable |
| 371 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable |
| 372 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable |
| 373 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable |
| 378 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable |
| 379 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable |
| 383 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable |
| 384 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable |
| 385 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable |
| 388 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable |
| 389 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable |
| 393 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable |
| 394 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable |
| 395 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable |
| 398 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 399 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 403 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable |
| 404 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable |
| 405 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable |
| 409 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable |
| 410 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable |
| 412 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable |
| 419 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable |
| 420 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable |
| 428 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3037::ac43:aedb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:aedb]:443: connect: network is unreachable |
| 429 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3034::6815:2ffc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:2ffc]:443: connect: network is unreachable |
| 434 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable |
| 435 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable |
| 436 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable |
| 438 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable |
| 441 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable |
| 442 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable |
| 449 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable |
| 450 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable |
| 451 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable |
| 454 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable |
| 459 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable |
| 460 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable |
| 461 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable |
| 468 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable |
| 469 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable |
| 470 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (10 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 331 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 462 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 463 | 172.67.49.134 | 172.67.49.134 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.67.49.134:443: i/o timeout |
| 464 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |
| 481 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 482 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 483 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |
| 484 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |
| 490 | cfip.xxxxxxxx.tk | 104.20.255.53 | IPv4 | none | N/A | 0 | N/A | dial tcp 104.20.255.53:443: i/o timeout |
| 497 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |

#### 连接被拒绝: 通用连接拒绝 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 6 | 138.2.18.82 | 138.2.18.82 | IPv4 | none | N/A | 0 | N/A | dial tcp 138.2.18.82:443: connect: connection refused |
| 334 | 222.105.131.225 | 222.105.131.225 | IPv4 | none | N/A | 0 | N/A | dial tcp 222.105.131.225:443: connect: connection refused |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 173 次 (93.5%)
- **连接超时**: 10 次 (5.4%)
- **连接被拒绝**: 2 次 (1.1%)

#### 错误模式分析

**超时集中度分析**: 共有 10 次超时，主要集中在IP段 119.194（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 185 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 12 次，IPv6失败 173 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：singapore.com (3次), silkbook.com (3次), ip.sb (3次)，建议重点检查这些主机的网络状态和服务可用性



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 152 | www.digitalocean.com | 104.19.173.68 | IPv4 | h3 | ✅ 成功 | 33 | cloudflare |
| 138 | 104.17.68.85 | 104.17.68.85 | IPv4 | h3 | ✅ 成功 | 34 | cloudflare |
| 160 | www.7749tv.com | 104.16.0.150 | IPv4 | h3 | ✅ 成功 | 34 | cloudflare |
| 172 | wilson.ns.cloudflare.com | 172.64.35.110 | IPv4 | h3 | ✅ 成功 | 35 | cloudflare |
| 188 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h3 | ✅ 成功 | 35 | cloudflare |
| 439 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h3 | ✅ 成功 | 35 | cloudflare |
| 145 | fbi.gov | 104.16.149.244 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 162 | tasteatlas.com | 104.17.37.105 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 189 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 257 | www.pcmag.com | 104.16.21.118 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 284 | 104.18.78.214 | 104.18.78.214 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 313 | www.ipchicken.com | 104.26.6.112 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 402 | decker.ns.cloudflare.com | 108.162.195.155 | IPv4 | h3 | ✅ 成功 | 36 | cloudflare |
| 343 | www.okcupid.com | 104.17.48.63 | IPv4 | h3 | ✅ 成功 | 37 | cloudflare |
| 347 | www.glassdoor.com | 104.16.25.46 | IPv4 | h3 | ✅ 成功 | 37 | cloudflare |
| 452 | 172.64.144.188 | 172.64.144.188 | IPv4 | h3 | ✅ 成功 | 37 | cloudflare |
| 491 | cfip.xxxxxxxx.tk | 104.21.91.19 | IPv4 | h3 | ✅ 成功 | 37 | cloudflare |
| 417 | www.udemy.com | 104.16.142.237 | IPv4 | h3 | ✅ 成功 | 38 | cloudflare |
| 423 | asia.877774.xyz | 104.17.142.146 | IPv4 | h3 | ✅ 成功 | 38 | cloudflare |
| 348 | 172.64.229.249 | 172.64.229.249 | IPv4 | h3 | ✅ 成功 | 39 | cloudflare |
| 143 | 172.64.146.16 | 172.64.146.16 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 251 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 376 | ifconfig.co | 172.67.168.106 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 478 | ct.877774.xyz | 172.64.229.174 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 496 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h3 | ✅ 成功 | 41 | cloudflare |
| 280 | abdullah.ns.cloudflare.com | 172.64.35.203 | IPv4 | h3 | ✅ 成功 | 42 | cloudflare |
| 465 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h3 | ✅ 成功 | 42 | cloudflare |
| 498 | cfip.xxxxxxxx.tk | 104.16.241.229 | IPv4 | h3 | ✅ 成功 | 42 | cloudflare |
| 173 | wilson.ns.cloudflare.com | 108.162.195.110 | IPv4 | h3 | ✅ 成功 | 43 | cloudflare |
| 363 | benedict.ns.cloudflare.com | 172.64.35.205 | IPv4 | h3 | ✅ 成功 | 43 | cloudflare |
| 262 | 104.18.39.196 | 104.18.39.196 | IPv4 | h3 | ✅ 成功 | 44 | cloudflare |
| 308 | na.877774.xyz | 104.18.187.25 | IPv4 | h3 | ✅ 成功 | 44 | cloudflare |
| 369 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h3 | ✅ 成功 | 44 | cloudflare |
| 437 | 104.18.37.40 | 104.18.37.40 | IPv4 | h3 | ✅ 成功 | 45 | cloudflare |
| 84 | gamer.com.tw | 104.18.3.197 | IPv4 | h3 | ✅ 成功 | 46 | cloudflare |
| 471 | ct.877774.xyz | 172.64.229.185 | IPv4 | h3 | ✅ 成功 | 46 | cloudflare |
| 494 | cfip.xxxxxxxx.tk | 104.25.105.1 | IPv4 | h3 | ✅ 成功 | 46 | cloudflare |
| 299 | www.wto.org | 104.18.41.190 | IPv4 | h3 | ✅ 成功 | 47 | cloudflare |
| 367 | 172.64.148.15 | 172.64.148.15 | IPv4 | h3 | ✅ 成功 | 47 | cloudflare |
| 199 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h3 | ✅ 成功 | 48 | cloudflare |
| 256 | www.pcmag.com | 104.16.20.118 | IPv4 | h3 | ✅ 成功 | 48 | cloudflare |
| 45 | comicabc.com | 104.21.64.10 | IPv4 | h3 | ✅ 成功 | 49 | cloudflare |
| 86 | stock.hostmonit.com | 172.67.187.251 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 107 | www.ipget.net | 172.67.207.26 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 185 | cmcc.877774.xyz | 104.16.149.12 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 427 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 172.67.174.219 | IPv4 | h3 | ✅ 成功 | 50 | cloudflare |
| 27 | ip.sb | 104.26.13.31 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 77 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 178 | cmcc.877774.xyz | 104.16.149.5 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 226 | www.whatismyip.com | 104.26.13.23 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 312 | saas.sin.fan | 162.159.36.5 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 7 | 172.64.159.6 | 172.64.159.6 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 64 | time.is | 104.26.12.54 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 102 | www.hugedomains.com | 104.26.6.37 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 121 | shopify.com | 23.227.38.33 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 196 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 346 | www.glassdoor.com | 104.17.64.70 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 390 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 425 | 172.64.147.73 | 172.64.147.73 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 476 | ct.877774.xyz | 172.64.229.161 | IPv4 | h3 | ✅ 成功 | 52 | cloudflare |
| 50 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 65 | time.is | 104.26.13.54 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 66 | time.is | 172.67.68.157 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 116 | eur.877774.xyz | 104.21.47.209 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 148 | www.gov.ua | 104.21.23.72 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 156 | cf.zhetengsha.eu.org | 172.66.47.179 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 187 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 193 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 203 | zread.ai | 172.67.202.78 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 207 | ae8a9c24-83de.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 302 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 104.21.61.182 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 457 | damien.ns.cloudflare.com | 108.162.195.168 | IPv4 | h3 | ✅ 成功 | 53 | cloudflare |
| 21 | silkbook.com | 104.26.8.160 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 34 | lewis.ns.cloudflare.com | 108.162.195.159 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 44 | 172.67.243.218 | 172.67.243.218 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 46 | comicabc.com | 172.67.174.21 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 124 | toy-people.com | 172.67.72.18 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 139 | bestcf.030101.xyz | 104.19.32.55 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 186 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 211 | 172.67.110.232 | 172.67.110.232 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 230 | trevor.ns.cloudflare.com | 172.64.35.154 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 272 | bowen.ns.cloudflare.com | 108.162.195.83 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 286 | cloudflare-ip.mofashi.ltd | 104.21.72.233 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 336 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 356 | cf.090227.xyz | 172.66.44.77 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 396 | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 455 | cfip.1323123.xyz | 104.16.133.220 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 474 | ct.877774.xyz | 172.64.229.236 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 475 | ct.877774.xyz | 172.64.229.44 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 14 | singapore.com | 172.67.75.194 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 15 | singapore.com | 104.26.13.140 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 49 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 53 | ip.gs | 104.21.14.176 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 57 | 172.67.79.211 | 172.67.79.211 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 89 | steamdb.info | 104.20.34.212 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 202 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 249 | 172.64.38.15 | 172.64.38.15 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 252 | huxley.ns.cloudflare.com | 172.64.35.188 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 261 | 198.62.62.4 | 198.62.62.4 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 386 | palera.in | 172.67.157.122 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 42 条记录
- **快 (50-100ms)**: 58 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 12 次
- **IPv6 失败**: 173 次

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
