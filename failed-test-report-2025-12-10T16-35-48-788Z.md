# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/10 16:35:48
- **数据来源**: connectivity_results.json
- **总测试数**: 475
- **失败测试数**: 175
- **成功测试数**: 300
- **失败率**: 36.84%
- **平均延迟**: 169.35ms
- **最小延迟**: 61ms
- **最大延迟**: 1622ms

---

## 失败测试详情

### 📊 错误类型统计

- **网络不可达: 网络不可达**: 165 次 (94.3%)
- **连接超时: I/O超时**: 9 次 (5.1%)
- **DNS解析错误: 其他DNS错误**: 1 次 (0.6%)

### 🔍 按错误类型分类的失败测试详情

#### 网络不可达: 网络不可达 (165 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 12 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:94f4]:443: connect: network is unreachable |
| 13 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:95f4]:443: connect: network is unreachable |
| 17 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccf]:443: connect: network is unreachable |
| 18 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cf]:443: connect: network is unreachable |
| 19 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cf]:443: connect: network is unreachable |
| 23 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccd]:443: connect: network is unreachable |
| 24 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cd]:443: connect: network is unreachable |
| 25 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cd]:443: connect: network is unreachable |
| 29 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd9]:443: connect: network is unreachable |
| 30 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d9]:443: connect: network is unreachable |
| 31 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d9]:443: connect: network is unreachable |
| 35 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cd1]:443: connect: network is unreachable |
| 36 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3d1]:443: connect: network is unreachable |
| 37 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23d1]:443: connect: network is unreachable |
| 41 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9f]:443: connect: network is unreachable |
| 42 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39f]:443: connect: network is unreachable |
| 43 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239f]:443: connect: network is unreachable |
| 47 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cad]:443: connect: network is unreachable |
| 48 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ad]:443: connect: network is unreachable |
| 49 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ad]:443: connect: network is unreachable |
| 52 | bestcf.030101.xyz | 2606:4700::c7f3:a5b8:311:f0f0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::c7f3:a5b8:311:f0f0]:443: connect: network is unreachable |
| 53 | bestcf.030101.xyz | 2606:4700:0:c036:7268:c773:9eb8:6edc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:0:c036:7268:c773:9eb8:6edc]:443: connect: network is unreachable |
| 57 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca9]:443: connect: network is unreachable |
| 58 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a9]:443: connect: network is unreachable |
| 59 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a9]:443: connect: network is unreachable |
| 64 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c87]:443: connect: network is unreachable |
| 65 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c387]:443: connect: network is unreachable |
| 66 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2387]:443: connect: network is unreachable |
| 69 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:1c4a]:443: connect: network is unreachable |
| 70 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:9e73]:443: connect: network is unreachable |
| 74 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc0]:443: connect: network is unreachable |
| 75 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c0]:443: connect: network is unreachable |
| 76 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c0]:443: connect: network is unreachable |
| 82 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9a]:443: connect: network is unreachable |
| 83 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39a]:443: connect: network is unreachable |
| 84 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239a]:443: connect: network is unreachable |
| 88 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:9d7a]:443: connect: network is unreachable |
| 89 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:3a48]:443: connect: network is unreachable |
| 100 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |
| 101 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:7c1]:443: connect: network is unreachable |
| 107 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:de4f]:443: connect: network is unreachable |
| 108 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:df4f]:443: connect: network is unreachable |
| 114 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc2]:443: connect: network is unreachable |
| 115 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c2]:443: connect: network is unreachable |
| 116 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c2]:443: connect: network is unreachable |
| 122 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca1]:443: connect: network is unreachable |
| 123 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a1]:443: connect: network is unreachable |
| 124 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a1]:443: connect: network is unreachable |
| 129 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4581]:443: connect: network is unreachable |
| 130 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c17]:443: connect: network is unreachable |
| 131 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d17]:443: connect: network is unreachable |
| 141 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:1581]:443: connect: network is unreachable |
| 142 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:c6cb]:443: connect: network is unreachable |
| 146 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c94]:443: connect: network is unreachable |
| 147 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c394]:443: connect: network is unreachable |
| 148 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2394]:443: connect: network is unreachable |
| 152 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ca8]:443: connect: network is unreachable |
| 153 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3a8]:443: connect: network is unreachable |
| 154 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23a8]:443: connect: network is unreachable |
| 157 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c90]:443: connect: network is unreachable |
| 158 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2f70]:443: connect: network is unreachable |
| 162 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c9b]:443: connect: network is unreachable |
| 163 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c39b]:443: connect: network is unreachable |
| 164 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:239b]:443: connect: network is unreachable |
| 168 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:ade]:443: connect: network is unreachable |
| 169 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:bde]:443: connect: network is unreachable |
| 170 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4664]:443: connect: network is unreachable |
| 171 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83be::11:74f]:443: connect: network is unreachable |
| 175 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c1f]:443: connect: network is unreachable |
| 176 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d1f]:443: connect: network is unreachable |
| 177 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bac]:443: connect: network is unreachable |
| 181 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::6815:5a4e]:443: connect: network is unreachable |
| 182 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:99fd]:443: connect: network is unreachable |
| 186 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c6e]:443: connect: network is unreachable |
| 187 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c36e]:443: connect: network is unreachable |
| 188 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:236e]:443: connect: network is unreachable |
| 194 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c8c]:443: connect: network is unreachable |
| 195 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d8c]:443: connect: network is unreachable |
| 196 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bc2]:443: connect: network is unreachable |
| 203 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1476]:443: connect: network is unreachable |
| 204 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:1576]:443: connect: network is unreachable |
| 209 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2ccb]:443: connect: network is unreachable |
| 210 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3cb]:443: connect: network is unreachable |
| 211 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23cb]:443: connect: network is unreachable |
| 222 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::6814:22d4]:443: connect: network is unreachable |
| 223 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:10::ac42:affa]:443: connect: network is unreachable |
| 225 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440f::53aa:4126]:443: connect: network is unreachable |
| 255 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ad44]:443: connect: network is unreachable |
| 256 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6813:ae44]:443: connect: network is unreachable |
| 260 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:224]:443: connect: network is unreachable |
| 261 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4812]:443: connect: network is unreachable |
| 262 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:324]:443: connect: network is unreachable |
| 268 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 269 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 277 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 278 | cf.zhetengsha.eu.org | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 282 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cca]:443: connect: network is unreachable |
| 283 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3ca]:443: connect: network is unreachable |
| 284 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23ca]:443: connect: network is unreachable |
| 285 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4408::18c5:3304]:443: connect: network is unreachable |
| 294 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8eed]:443: connect: network is unreachable |
| 295 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6810:8fed]:443: connect: network is unreachable |
| 297 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:9add::880:52fc]:443: connect: network is unreachable |
| 301 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:625]:443: connect: network is unreachable |
| 302 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:46bf]:443: connect: network is unreachable |
| 303 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:725]:443: connect: network is unreachable |
| 304 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:440b::3e6e:5f06]:443: connect: network is unreachable |
| 306 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4409::5b5b:7758]:443: connect: network is unreachable |
| 312 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::ac43:ca4e]:443: connect: network is unreachable |
| 313 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:4cf0]:443: connect: network is unreachable |
| 315 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:83bd::7d8:2b47]:443: connect: network is unreachable |
| 324 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3032::6815:785]:443: connect: network is unreachable |
| 325 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:bb91]:443: connect: network is unreachable |
| 329 | time.is | 2606:4700:20::ac43:449d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:449d]:443: connect: network is unreachable |
| 330 | time.is | 2606:4700:20::681a:c36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:c36]:443: connect: network is unreachable |
| 331 | time.is | 2606:4700:20::681a:d36 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:d36]:443: connect: network is unreachable |
| 335 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbc]:443: connect: network is unreachable |
| 336 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bc]:443: connect: network is unreachable |
| 337 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bc]:443: connect: network is unreachable |
| 341 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:8a0]:443: connect: network is unreachable |
| 342 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:4bd0]:443: connect: network is unreachable |
| 343 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:9a0]:443: connect: network is unreachable |
| 346 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:8de6::5fa2:799e]:443: connect: network is unreachable |
| 349 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3030::6815:e29 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::6815:e29]:443: connect: network is unreachable |
| 350 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:9db6]:443: connect: network is unreachable |
| 364 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:5ad2]:443: connect: network is unreachable |
| 365 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:a168]:443: connect: network is unreachable |
| 368 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::ac43:9bac]:443: connect: network is unreachable |
| 369 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::6815:48e9 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:48e9]:443: connect: network is unreachable |
| 372 | cf.090227.xyz | 2606:4700:310c::ac42:2c4d | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2c4d]:443: connect: network is unreachable |
| 373 | cf.090227.xyz | 2606:4700:310c::ac42:2fb3 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:310c::ac42:2fb3]:443: connect: network is unreachable |
| 376 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:98b7]:443: connect: network is unreachable |
| 377 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::6815:50b4]:443: connect: network is unreachable |
| 383 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3035::ac43:a01c]:443: connect: network is unreachable |
| 384 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:eb0]:443: connect: network is unreachable |
| 386 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4403::7357:544f]:443: connect: network is unreachable |
| 389 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:3102::6812:29be]:443: connect: network is unreachable |
| 390 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:4406::ac40:9242]:443: connect: network is unreachable |
| 394 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 395 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 396 | japan.com | 2606:4700:20::681a:43c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:43c]:443: connect: network is unreachable |
| 399 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:964f::6e2c:588e]:443: connect: network is unreachable |
| 402 | bhr01erx45.inzjddnkdz.de5.net | 2606:4700:3034::ac43:97cf | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3034::ac43:97cf]:443: connect: network is unreachable |
| 403 | bhr01erx45.inzjddnkdz.de5.net | 2606:4700:3031::6815:49fa | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::6815:49fa]:443: connect: network is unreachable |
| 406 | freeyx.cloudflare88.eu.org | 2606:4700:3009:aa73:82e3:b098:334a:b5b2 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3009:aa73:82e3:b098:334a:b5b2]:443: connect: network is unreachable |
| 413 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3037::6815:365b]:443: connect: network is unreachable |
| 414 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:a86a]:443: connect: network is unreachable |
| 420 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cbb]:443: connect: network is unreachable |
| 421 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3bb]:443: connect: network is unreachable |
| 422 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23bb]:443: connect: network is unreachable |
| 428 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3031::ac43:cf1a]:443: connect: network is unreachable |
| 429 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:fd4]:443: connect: network is unreachable |
| 432 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2569]:443: connect: network is unreachable |
| 433 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700::6811:2469]:443: connect: network is unreachable |
| 436 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3036::6815:400a]:443: connect: network is unreachable |
| 437 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3030::ac43:ae15]:443: connect: network is unreachable |
| 445 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:659]:443: connect: network is unreachable |
| 446 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:759]:443: connect: network is unreachable |
| 447 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:49d8]:443: connect: network is unreachable |
| 451 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2c53]:443: connect: network is unreachable |
| 452 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c353]:443: connect: network is unreachable |
| 453 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:2353]:443: connect: network is unreachable |
| 458 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:58::a29f:2cc7]:443: connect: network is unreachable |
| 459 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2803:f800:50::6ca2:c3c7]:443: connect: network is unreachable |
| 460 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | none | N/A | 0 | N/A | dial tcp [2a06:98c1:50::ac40:23c7]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (9 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 397 | 119.194.220.146 | 119.194.220.146 | IPv4 | none | N/A | 0 | N/A | dial tcp 119.194.220.146:443: i/o timeout |
| 416 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 461 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 468 | 52.76.110.129 | 52.76.110.129 | IPv4 | none | N/A | 0 | N/A | dial tcp 52.76.110.129:443: i/o timeout |
| 469 | 121.188.182.190 | 121.188.182.190 | IPv4 | none | N/A | 0 | N/A | dial tcp 121.188.182.190:443: i/o timeout |
| 472 | 115.22.115.218 | 115.22.115.218 | IPv4 | none | N/A | 0 | N/A | dial tcp 115.22.115.218:443: i/o timeout |
| 473 | 111.171.108.67 | 111.171.108.67 | IPv4 | none | N/A | 0 | N/A | dial tcp 111.171.108.67:443: i/o timeout |
| 474 | 172.67.49.134 | 172.67.49.134 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.67.49.134:443: i/o timeout |
| 475 | 175.212.207.13 | 175.212.207.13 | IPv4 | none | N/A | 0 | N/A | dial tcp 175.212.207.13:443: i/o timeout |

#### DNS解析错误: 其他DNS错误 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 380 | 168.138.184.172 | 168.138.184.172 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": remote error: tls: unrecognized name |

### 📈 错误分析总结

#### 主错误类型分布

- **网络不可达**: 165 次 (94.3%)
- **连接超时**: 9 次 (5.1%)
- **DNS解析错误**: 1 次 (0.6%)

#### 错误模式分析

**超时集中度分析**: 共有 9 次超时，主要集中在IP段 119.194（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 174 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 10 次，IPv6失败 165 次，两种协议都存在问题

**问题主机分析**: 以下主机出现多次失败：kyree.ns.cloudflare.com (3次), benedict.ns.cloudflare.com (3次), moura.ns.cloudflare.com (3次)，建议重点检查这些主机的网络状态和服务可用性



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|| 292 | www.udemy.com | 104.16.143.237 | IPv4 | h3 | ✅ 成功 | 61 | cloudflare |
| 385 | 104.18.37.40 | 104.18.37.40 | IPv4 | h3 | ✅ 成功 | 72 | cloudflare |
| 293 | www.udemy.com | 104.16.142.237 | IPv4 | h3 | ✅ 成功 | 75 | cloudflare |
| 218 | 104.18.37.13 | 104.18.37.13 | IPv4 | h3 | ✅ 成功 | 82 | cloudflare |
| 308 | www.csgo.com | 195.85.59.95 | IPv4 | h3 | ✅ 成功 | 82 | cloudflare |
| 133 | www.gov.ua | 104.21.23.72 | IPv4 | h3 | ✅ 成功 | 84 | cloudflare |
| 272 | 104.17.79.11 | 104.17.79.11 | IPv4 | h3 | ✅ 成功 | 91 | cloudflare |
| 192 | singapore.com | 104.26.12.140 | IPv4 | h3 | ✅ 成功 | 92 | cloudflare |
| 266 | cf.877774.xyz | 172.64.146.66 | IPv4 | h3 | ✅ 成功 | 96 | cloudflare |
| 340 | silkbook.com | 104.26.8.160 | IPv4 | h3 | ✅ 成功 | 98 | cloudflare |
| 227 | cmcc.877774.xyz | 104.16.149.7 | IPv4 | h3 | ✅ 成功 | 100 | cloudflare |
| 125 | 104.17.142.12 | 104.17.142.12 | IPv4 | h3 | ✅ 成功 | 101 | cloudflare |
| 14 | kyree.ns.cloudflare.com | 108.162.195.207 | IPv4 | h3 | ✅ 成功 | 104 | cloudflare |
| 241 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h3 | ✅ 成功 | 104 | cloudflare |
| 427 | www.ipget.net | 104.21.15.212 | IPv4 | h3 | ✅ 成功 | 104 | cloudflare |
| 270 | 172.67.110.232 | 172.67.110.232 | IPv4 | h3 | ✅ 成功 | 105 | cloudflare |
| 351 | saas.sin.fan | 162.159.36.5 | IPv4 | h3 | ✅ 成功 | 105 | cloudflare |
| 449 | bowen.ns.cloudflare.com | 162.159.44.83 | IPv4 | h3 | ✅ 成功 | 105 | cloudflare |
| 111 | uriah.ns.cloudflare.com | 108.162.195.194 | IPv4 | h3 | ✅ 成功 | 106 | cloudflare |
| 207 | abdullah.ns.cloudflare.com | 162.159.44.203 | IPv4 | h3 | ✅ 成功 | 107 | cloudflare |
| 237 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h3 | ✅ 成功 | 107 | cloudflare |
| 409 | eur.877774.xyz | 104.21.26.150 | IPv4 | h3 | ✅ 成功 | 107 | cloudflare |
| 7 | 172.64.33.67 | 172.64.33.67 | IPv4 | h3 | ✅ 成功 | 108 | cloudflare |
| 202 | www.pcmag.com | 104.16.21.118 | IPv4 | h3 | ✅ 成功 | 108 | cloudflare |
| 215 | 104.16.61.163 | 104.16.61.163 | IPv4 | h3 | ✅ 成功 | 108 | cloudflare |
| 426 | www.ipget.net | 172.67.207.26 | IPv4 | h3 | ✅ 成功 | 108 | cloudflare |
| 457 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h3 | ✅ 成功 | 108 | cloudflare |
| 105 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h3 | ✅ 成功 | 109 | cloudflare |
| 193 | singapore.com | 172.67.75.194 | IPv4 | h3 | ✅ 成功 | 109 | cloudflare |
| 200 | shopify.com | 23.227.38.33 | IPv4 | h3 | ✅ 成功 | 110 | cloudflare |
| 279 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h3 | ✅ 成功 | 110 | cloudflare |
| 305 | 104.18.78.214 | 104.18.78.214 | IPv4 | h3 | ✅ 成功 | 110 | cloudflare |
| 155 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h3 | ✅ 成功 | 111 | cloudflare |
| 273 | 104.26.13.31 | 104.26.13.31 | IPv4 | h3 | ✅ 成功 | 111 | cloudflare |
| 388 | www.wto.org | 104.18.41.190 | IPv4 | h3 | ✅ 成功 | 111 | cloudflare |
| 167 | iplocation.io | 172.67.70.100 | IPv4 | h3 | ✅ 成功 | 112 | cloudflare |
| 374 | cf.877771.xyz | 104.21.80.180 | IPv4 | h3 | ✅ 成功 | 112 | cloudflare |
| 444 | dnschecker.org | 104.26.7.89 | IPv4 | h3 | ✅ 成功 | 112 | cloudflare |
| 212 | 172.64.49.165 | 172.64.49.165 | IPv4 | h3 | ✅ 成功 | 113 | cloudflare |
| 401 | bhr01erx45.inzjddnkdz.de5.net | 104.21.73.250 | IPv4 | h3 | ✅ 成功 | 113 | cloudflare |
| 46 | ashton.ns.cloudflare.com | 172.64.35.173 | IPv4 | h3 | ✅ 成功 | 114 | cloudflare |
| 93 | ct.877774.xyz | 172.64.229.217 | IPv4 | h3 | ✅ 成功 | 114 | cloudflare |
| 144 | rustam.ns.cloudflare.com | 162.159.44.148 | IPv4 | h3 | ✅ 成功 | 114 | cloudflare |
| 317 | www.okcupid.com | 104.17.48.63 | IPv4 | h3 | ✅ 成功 | 114 | cloudflare |
| 250 | cmcc.877774.xyz | 104.16.149.4 | IPv4 | h3 | ✅ 成功 | 115 | cloudflare |
| 252 | 104.19.175.123 | 104.19.175.123 | IPv4 | h3 | ✅ 成功 | 115 | cloudflare |
| 419 | dylan.ns.cloudflare.com | 172.64.35.187 | IPv4 | h3 | ✅ 成功 | 115 | cloudflare |
| 63 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h3 | ✅ 成功 | 116 | cloudflare |
| 220 | steamdb.info | 104.20.34.212 | IPv4 | h3 | ✅ 成功 | 117 | cloudflare |
| 299 | www.hugedomains.com | 104.26.7.37 | IPv4 | h3 | ✅ 成功 | 117 | cloudflare |
| 314 | 104.16.45.84 | 104.16.45.84 | IPv4 | h3 | ✅ 成功 | 117 | cloudflare |
| 61 | otto.ns.cloudflare.com | 108.162.195.135 | IPv4 | h3 | ✅ 成功 | 118 | cloudflare |
| 86 | palera.in | 172.67.157.122 | IPv4 | h3 | ✅ 成功 | 118 | cloudflare |
| 328 | time.is | 172.67.68.157 | IPv4 | h3 | ✅ 成功 | 118 | cloudflare |
| 424 | asia.877774.xyz | 104.17.142.146 | IPv4 | h3 | ✅ 成功 | 118 | cloudflare |
| 462 | cfip.xxxxxxxx.tk | 104.27.21.118 | IPv4 | h3 | ✅ 成功 | 118 | cloudflare |
| 102 | www.ipchicken.com | 104.26.6.112 | IPv4 | h3 | ✅ 成功 | 119 | cloudflare |
| 165 | iplocation.io | 104.26.10.222 | IPv4 | h3 | ✅ 成功 | 119 | cloudflare |
| 166 | iplocation.io | 104.26.11.222 | IPv4 | h3 | ✅ 成功 | 119 | cloudflare |
| 281 | cris.ns.cloudflare.com | 172.64.35.202 | IPv4 | h3 | ✅ 成功 | 119 | cloudflare |
| 184 | wilson.ns.cloudflare.com | 162.159.44.110 | IPv4 | h3 | ✅ 成功 | 120 | cloudflare |
| 216 | www.visa.com.sg | 104.18.12.229 | IPv4 | h3 | ✅ 成功 | 120 | cloudflare |
| 347 | local-aria2-webui.masx200.ddns-ip.net | 104.21.14.41 | IPv4 | h3 | ✅ 成功 | 120 | cloudflare |
| 9 | www.4chan.org | 104.16.229.229 | IPv4 | h3 | ✅ 成功 | 121 | cloudflare |
| 179 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h3 | ✅ 成功 | 121 | cloudflare |
| 205 | 104.18.254.88 | 104.18.254.88 | IPv4 | h3 | ✅ 成功 | 121 | cloudflare |
| 450 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h3 | ✅ 成功 | 122 | cloudflare |
| 464 | cfip.xxxxxxxx.tk | 104.16.241.229 | IPv4 | h3 | ✅ 成功 | 122 | cloudflare |
| 21 | benedict.ns.cloudflare.com | 162.159.44.205 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 224 | 172.64.154.18 | 172.64.154.18 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 240 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 276 | cf.zhetengsha.eu.org | 172.66.47.179 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 288 | 172.64.144.188 | 172.64.144.188 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 438 | 103.160.204.59 | 103.160.204.59 | IPv4 | h3 | ✅ 成功 | 123 | cloudflare |
| 201 | www.pcmag.com | 104.16.20.118 | IPv4 | h3 | ✅ 成功 | 124 | cloudflare |
| 77 | 172.64.35.24 | 172.64.35.24 | IPv4 | h3 | ✅ 成功 | 125 | cloudflare |
| 138 | 172.64.156.195 | 172.64.156.195 | IPv4 | h3 | ✅ 成功 | 125 | cloudflare |
| 239 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h3 | ✅ 成功 | 126 | cloudflare |
| 275 | cf.zhetengsha.eu.org | 172.66.44.77 | IPv4 | h3 | ✅ 成功 | 126 | cloudflare |
| 358 | cu.877774.xyz | 104.26.4.118 | IPv4 | h3 | ✅ 成功 | 126 | cloudflare |
| 382 | ip.gs | 172.67.160.28 | IPv4 | h3 | ✅ 成功 | 126 | cloudflare |
| 466 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h3 | ✅ 成功 | 126 | cloudflare |
| 39 | lewis.ns.cloudflare.com | 162.159.44.159 | IPv4 | h3 | ✅ 成功 | 127 | cloudflare |
| 113 | uriah.ns.cloudflare.com | 172.64.35.194 | IPv4 | h3 | ✅ 成功 | 127 | cloudflare |
| 174 | ip.sb | 104.26.12.31 | IPv4 | h3 | ✅ 成功 | 127 | cloudflare |
| 375 | cf.877771.xyz | 172.67.152.183 | IPv4 | h3 | ✅ 成功 | 127 | cloudflare |
| 228 | cmcc.877774.xyz | 104.16.149.8 | IPv4 | h3 | ✅ 成功 | 128 | cloudflare |
| 287 | www.glassdoor.com | 104.16.25.46 | IPv4 | h3 | ✅ 成功 | 128 | cloudflare |
| 318 | www.okcupid.com | 104.18.160.63 | IPv4 | h3 | ✅ 成功 | 128 | cloudflare |
| 360 | cu.877774.xyz | 104.26.4.111 | IPv4 | h3 | ✅ 成功 | 128 | cloudflare |
| 22 | benedict.ns.cloudflare.com | 172.64.35.205 | IPv4 | h3 | ✅ 成功 | 129 | cloudflare |
| 258 | toy-people.com | 104.26.3.36 | IPv4 | h3 | ✅ 成功 | 129 | cloudflare |
| 67 | icook.tw | 172.66.158.115 | IPv4 | h3 | ✅ 成功 | 130 | cloudflare |
| 320 | www.okcupid.com | 104.16.223.254 | IPv4 | h3 | ✅ 成功 | 130 | cloudflare |
| 338 | silkbook.com | 104.26.9.160 | IPv4 | h3 | ✅ 成功 | 130 | cloudflare |
| 339 | silkbook.com | 172.67.75.208 | IPv4 | h3 | ✅ 成功 | 130 | cloudflare |
| 44 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h3 | ✅ 成功 | 131 | cloudflare |
| 126 | www.whatismyip.com | 104.26.12.23 | IPv4 | h3 | ✅ 成功 | 131 | cloudflare |
| 191 | singapore.com | 104.26.13.140 | IPv4 | h3 | ✅ 成功 | 131 | cloudflare |
| 344 | 104.18.14.76 | 104.18.14.76 | IPv4 | h3 | ✅ 成功 | 131 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 10 条记录
- **正常 (100-200ms)**: 90 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 10 次
- **IPv6 失败**: 165 次

### 按协议统计

- **none**: 174 次失败
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
