# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/8 14:02:06
- **数据来源**: connectivity_results.json
- **总测试数**: 484
- **失败测试数**: 183
- **成功测试数**: 301
- **失败率**: 37.81%
- **平均延迟**: 127.37ms
- **最小延迟**: 51ms
- **最大延迟**: 634ms

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 173 次 (94.5%)
- **连接超时: I/O超时**: 9 次 (4.9%)
- **连接超时: 上下文超时**: 1 次 (0.5%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (173 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 9 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable |
| 10 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable |
| 14 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable |
| 15 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable |
| 16 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable |
| 20 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable |
| 21 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable |
| 22 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable |
| 26 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable |
| 27 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable |
| 28 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable |
| 32 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable |
| 33 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable |
| 37 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable |
| 38 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable |
| 39 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable |
| 43 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable |
| 44 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable |
| 47 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable |
| 48 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable |
| 50 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable |
| 54 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable |
| 55 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable |
| 56 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable |
| 59 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 60 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 64 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 65 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 68 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 69 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 76 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable |
| 77 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable |
| 78 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable |
| 81 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable |
| 82 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable |
| 83 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable |
| 100 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable |
| 101 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable |
| 108 | bestcf.030101.xyz | 2606:4700:0:8ae5:3d76:94ab:bdc7:687f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:0:8ae5:3d76:94ab:bdc7:687f]:443: connect: network is unreachable |
| 109 | bestcf.030101.xyz | 2606:4700::96:b1ba:c3ec:a1ee | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::96:b1ba:c3ec:a1ee]:443: connect: network is unreachable |
| 115 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable |
| 116 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable |
| 120 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable |
| 121 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable |
| 122 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable |
| 130 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable |
| 131 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable |
| 132 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable |
| 135 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable |
| 139 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable |
| 140 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable |
| 141 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable |
| 146 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |
| 147 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable |
| 151 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable |
| 152 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable |
| 153 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable |
| 156 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable |
| 157 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable |
| 166 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable |
| 167 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable |
| 168 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable |
| 174 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable |
| 175 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable |
| 179 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable |
| 180 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable |
| 183 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable |
| 185 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable |
| 189 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 190 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 191 | japan.com | 2606:4700:20::681a:43c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable |
| 195 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 196 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 198 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable |
| 201 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 202 | ae8a9c24-83de.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 203 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable |
| 207 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable |
| 208 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable |
| 209 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable |
| 213 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable |
| 214 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable |
| 215 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable |
| 219 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable |
| 220 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable |
| 221 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable |
| 225 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable |
| 226 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable |
| 227 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable |
| 241 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable |
| 242 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable |
| 243 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable |
| 247 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable |
| 248 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable |
| 249 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable |
| 253 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable |
| 254 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable |
| 255 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable |
| 259 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable |
| 260 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable |
| 261 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable |
| 268 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable |
| 269 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable |
| 270 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable |
| 279 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable |
| 280 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable |
| 284 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable |
| 285 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable |
| 286 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable |
| 290 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable |
| 291 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable |
| 292 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable |
| 299 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1748]:443: connect: network is unreachable |
| 300 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:d17f]:443: connect: network is unreachable |
| 303 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable |
| 304 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable |
| 307 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable |
| 308 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable |
| 311 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable |
| 312 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable |
| 316 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable |
| 317 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable |
| 318 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable |
| 323 | time.is | 2606:4700:20::ac43:449d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable |
| 324 | time.is | 2606:4700:20::681a:d36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable |
| 325 | time.is | 2606:4700:20::681a:c36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable |
| 328 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3034::6815:3db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:3db6]:443: connect: network is unreachable |
| 329 | 72806a5a-a251-48b4-a523-dfbd1c981ec0.ce225219-fea4-47a0-bb82-70b612b27ab7.netlib.re | 2606:4700:3036::ac43:d4c5 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::ac43:d4c5]:443: connect: network is unreachable |
| 334 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable |
| 335 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable |
| 338 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa59:4b67:cdf7:3783:cfe9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa59:4b67:cdf7:3783:cfe9]:443: connect: network is unreachable |
| 342 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable |
| 343 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable |
| 344 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable |
| 346 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable |
| 352 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable |
| 353 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable |
| 354 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable |
| 362 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable |
| 363 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable |
| 368 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable |
| 369 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable |
| 370 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable |
| 373 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable |
| 374 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable |
| 405 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable |
| 406 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable |
| 407 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable |
| 411 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable |
| 412 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable |
| 413 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable |
| 416 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable |
| 417 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable |
| 425 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3034::6815:9e6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:9e6]:443: connect: network is unreachable |
| 426 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 2606:4700:3033::ac43:a162 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:a162]:443: connect: network is unreachable |
| 429 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 430 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 437 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable |
| 438 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable |
| 439 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable |
| 444 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable |
| 445 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable |
| 446 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable |
| 449 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable |
| 455 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable |
| 456 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable |
| 459 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable |
| 460 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable |
| 463 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3034::6815:2ffc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::6815:2ffc]:443: connect: network is unreachable |
| 464 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 2606:4700:3037::ac43:aedb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:aedb]:443: connect: network is unreachable |
| 472 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable |
| 473 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable |
| 475 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (9 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 401 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 448 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 452 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |
| 474 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 476 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 477 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 478 | 172.67.49.134 | 172.67.49.134 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.67.49.134:443: i/o timeout |
| 481 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |
| 484 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |

#### 连接超时: 上下文超时 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 483 | 140.238.50.134 | 140.238.50.134 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": context deadline exceeded |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 173 次 (94.5%)
- **连接超时**: 10 次 (5.5%)

#### 错误模式分析

**超时集中度分析**: 共有 9 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 182 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 10 次，IPv6失败 173 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：www.whatismyip.com (3次), uriah.ns.cloudflare.com (3次), singapore.com (3次)，建议重点检查这些主机的网络状态和服务可用性



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 58 | cf.zhetengsha.eu.org | 172.66.44.77 | IPv4 | h3 | ✅ 成功 | 51 | cloudflare |
| 228 | 172.67.120.0 | 172.67.120.0 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 271 | 172.64.49.165 | 172.64.49.165 | IPv4 | h3 | ✅ 成功 | 54 | cloudflare |
| 6 | 172.64.156.195 | 172.64.156.195 | IPv4 | h3 | ✅ 成功 | 55 | cloudflare |
| 331 | 162.159.36.104 | 162.159.36.104 | IPv4 | h3 | ✅ 成功 | 57 | cloudflare |
| 421 | www.glassdoor.com | 104.17.64.70 | IPv4 | h3 | ✅ 成功 | 60 | cloudflare |
| 422 | www.glassdoor.com | 104.16.25.46 | IPv4 | h3 | ✅ 成功 | 60 | cloudflare |
| 371 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h3 | ✅ 成功 | 62 | cloudflare |
| 235 | ct.877774.xyz | 172.64.229.217 | IPv4 | h3 | ✅ 成功 | 63 | cloudflare |
| 397 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h3 | ✅ 成功 | 69 | cloudflare |
| 184 | shopify.com | 23.227.38.33 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 351 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 192 | 104.18.39.196 | 104.18.39.196 | IPv4 | h3 | ✅ 成功 | 73 | cloudflare |
| 85 | www.ipchicken.com | 104.26.7.112 | IPv4 | h3 | ✅ 成功 | 76 | cloudflare |
| 53 | dnschecker.org | 172.67.73.216 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 57 | cf.zhetengsha.eu.org | 172.66.47.179 | IPv4 | h3 | ✅ 成功 | 77 | cloudflare |
| 177 | ip.gs | 104.21.14.176 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 262 | 172.64.146.16 | 172.64.146.16 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 337 | freeyx.cloudflare88.eu.org | 141.101.121.222 | IPv4 | h3 | ✅ 成功 | 78 | cloudflare |
| 160 | 172.64.147.73 | 172.64.147.73 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 289 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 461 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 104.21.47.252 | IPv4 | h3 | ✅ 成功 | 79 | cloudflare |
| 107 | bestcf.030101.xyz | 104.19.33.72 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 398 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h3 | ✅ 成功 | 80 | cloudflare |
| 367 | wilson.ns.cloudflare.com | 172.64.35.110 | IPv4 | h3 | ✅ 成功 | 81 | cloudflare |
| 395 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h3 | ✅ 成功 | 81 | cloudflare |
| 95 | cu.877774.xyz | 104.26.4.117 | IPv4 | h3 | ✅ 成功 | 82 | cloudflare |
| 102 | 172.64.144.188 | 172.64.144.188 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 182 | gamer.com.tw | 104.18.3.197 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 187 | japan.com | 104.26.5.60 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 267 | trevor.ns.cloudflare.com | 172.64.35.154 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 293 | saas.sin.fan | 162.159.36.5 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 358 | 198.62.62.4 | 198.62.62.4 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 471 | steamdb.info | 172.66.175.250 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 275 | www.okcupid.com | 104.16.239.254 | IPv4 | h3 | ✅ 成功 | 85 | cloudflare |
| 306 | cloudflare-ip.mofashi.ltd | 104.21.72.233 | IPv4 | h3 | ✅ 成功 | 85 | cloudflare |
| 93 | cu.877774.xyz | 104.26.4.115 | IPv4 | h3 | ✅ 成功 | 86 | cloudflare |
| 199 | ae8a9c24-83de.masx200.ddns-ip.net | 104.21.14.41 | IPv4 | h3 | ✅ 成功 | 86 | cloudflare |
| 310 | www.digitalocean.com | 104.19.173.68 | IPv4 | h3 | ✅ 成功 | 86 | cloudflare |
| 234 | ct.877774.xyz | 172.64.229.195 | IPv4 | h3 | ✅ 成功 | 87 | cloudflare |
| 322 | time.is | 104.26.13.54 | IPv4 | h3 | ✅ 成功 | 87 | cloudflare |
| 396 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h3 | ✅ 成功 | 87 | cloudflare |
| 466 | www.visa.com.sg | 104.18.13.229 | IPv4 | h3 | ✅ 成功 | 87 | cloudflare |
| 188 | japan.com | 104.26.4.60 | IPv4 | h3 | ✅ 成功 | 88 | cloudflare |
| 287 | otto.ns.cloudflare.com | 108.162.195.135 | IPv4 | h3 | ✅ 成功 | 88 | cloudflare |
| 385 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h3 | ✅ 成功 | 88 | cloudflare |
| 98 | www.pcmag.com | 104.16.20.118 | IPv4 | h3 | ✅ 成功 | 89 | cloudflare |
| 162 | www.4chan.org | 104.16.229.229 | IPv4 | h3 | ✅ 成功 | 89 | cloudflare |
| 347 | www.csgo.com | 195.85.59.161 | IPv4 | h3 | ✅ 成功 | 89 | cloudflare |
| 375 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h3 | ✅ 成功 | 89 | cloudflare |
| 169 | na.877774.xyz | 104.19.74.233 | IPv4 | h3 | ✅ 成功 | 90 | cloudflare |
| 197 | 172.64.151.55 | 172.64.151.55 | IPv4 | h3 | ✅ 成功 | 90 | cloudflare |
| 420 | 172.64.153.172 | 172.64.153.172 | IPv4 | h3 | ✅ 成功 | 90 | cloudflare |
| 432 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h3 | ✅ 成功 | 90 | cloudflare |
| 165 | sullivan.ns.cloudflare.com | 172.64.35.161 | IPv4 | h3 | ✅ 成功 | 91 | cloudflare |
| 236 | ct.877774.xyz | 172.64.229.236 | IPv4 | h3 | ✅ 成功 | 91 | cloudflare |
| 383 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h3 | ✅ 成功 | 91 | cloudflare |
| 408 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h3 | ✅ 成功 | 91 | cloudflare |
| 469 | www.7749tv.com | 104.19.133.4 | IPv4 | h3 | ✅ 成功 | 92 | cloudflare |
| 12 | www.whatismyip.com | 104.26.13.23 | IPv4 | h3 | ✅ 成功 | 93 | cloudflare |
| 88 | cu.877774.xyz | 104.26.4.119 | IPv4 | h3 | ✅ 成功 | 93 | cloudflare |
| 404 | ashton.ns.cloudflare.com | 172.64.35.173 | IPv4 | h3 | ✅ 成功 | 93 | cloudflare |
| 29 | 172.64.229.249 | 172.64.229.249 | IPv4 | h3 | ✅ 成功 | 94 | cloudflare |
| 424 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 172.67.161.98 | IPv4 | h3 | ✅ 成功 | 94 | cloudflare |
| 431 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h3 | ✅ 成功 | 94 | cloudflare |
| 451 | 103.160.204.59 | 103.160.204.59 | IPv4 | h3 | ✅ 成功 | 94 | cloudflare |
| 86 | www.ipchicken.com | 172.67.68.101 | IPv4 | h3 | ✅ 成功 | 95 | cloudflare |
| 193 | cf.090227.xyz | 172.66.44.77 | IPv4 | h3 | ✅ 成功 | 95 | cloudflare |
| 384 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h3 | ✅ 成功 | 95 | cloudflare |
| 423 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx201.dpdns.org | 104.21.9.230 | IPv4 | h3 | ✅ 成功 | 95 | cloudflare |
| 52 | dnschecker.org | 104.26.7.89 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 75 | rustam.ns.cloudflare.com | 172.64.35.148 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 176 | 104.17.68.85 | 104.17.68.85 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 265 | trevor.ns.cloudflare.com | 108.162.195.154 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 276 | www.okcupid.com | 104.16.144.63 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 302 | cf.0sm.com | 172.67.187.145 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 436 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 171 | na.877774.xyz | 104.18.187.25 | IPv4 | h3 | ✅ 成功 | 97 | cloudflare |
| 46 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 91 | cu.877774.xyz | 104.26.4.113 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 172 | tasteatlas.com | 104.17.36.105 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 296 | 104.18.37.13 | 104.18.37.13 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 360 | icook.tw | 172.66.158.115 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 283 | ip.sb | 104.26.12.31 | IPv4 | h3 | ✅ 成功 | 99 | cloudflare |
| 301 | cf.0sm.com | 104.21.7.133 | IPv4 | h3 | ✅ 成功 | 99 | cloudflare |
| 391 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h3 | ✅ 成功 | 99 | cloudflare |
| 393 | cmcc.877774.xyz | 104.16.149.11 | IPv4 | h3 | ✅ 成功 | 99 | cloudflare |
| 94 | cu.877774.xyz | 104.26.4.116 | IPv4 | h3 | ✅ 成功 | 100 | cloudflare |
| 356 | 104.18.37.40 | 104.18.37.40 | IPv4 | h3 | ✅ 成功 | 100 | cloudflare |
| 462 | 04c6cf21-1294-4fae-8bf8-715bbc897b60.masx200.netlib.re | 172.67.174.219 | IPv4 | h3 | ✅ 成功 | 100 | cloudflare |
| 11 | www.whatismyip.com | 172.67.69.129 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 112 | eur.877774.xyz | 104.21.26.150 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 218 | huxley.ns.cloudflare.com | 172.64.35.188 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 281 | ip.sb | 172.67.75.172 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 341 | decker.ns.cloudflare.com | 172.64.35.155 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 345 | 172.64.33.67 | 172.64.33.67 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 414 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 468 | 104.17.79.11 | 104.17.79.11 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 313 | moura.ns.cloudflare.com | 108.162.195.217 | IPv4 | h3 | ✅ 成功 | 102 | cloudflare |
| 427 | local-aria2-webui.masx200.ddns-ip.net | 104.21.14.41 | IPv4 | h3 | ✅ 成功 | 102 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 87 条记录
- **正常 (100-200ms)**: 13 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 10 次
- **IPv6 失败**: 173 次

### 按协议统计

- **none**: 182 次失败
- **h2**: 1 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
