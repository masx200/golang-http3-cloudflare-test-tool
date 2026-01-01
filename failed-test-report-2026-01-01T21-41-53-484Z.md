# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/1/1 21:41:53
- **数据来源**: connectivity_results-20260101-214152.json
- **总测试数**: 432
- **失败测试数**: 4
- **成功测试数**: 428
- **失败率**: 0.93%
- **平均延迟**: 88.17ms
- **最小延迟**: 52ms
- **最大延迟**: 964ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/1/1 21:41:53
- **IP地址**: 2a09:bac5:7495:25a5::3c0:3e
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 41.6021, -93.6124
- **时区**: America/Chicago
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 4 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (4 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 14 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 132 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 226 | lewis.ns.cloudflare.com | 162.159.44.159 | IPv4 | none | N/A | 0 | N/A | dial tcp 162.159.44.159:443: i/o timeout |
| 266 | abdullah.ns.cloudflare.com | 162.159.44.203 | IPv4 | none | N/A | 0 | N/A | dial tcp 162.159.44.203:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 4 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 4 次超时，主要集中在IP段 162.159（2 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 4 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 360 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 408 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 239 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 301 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 93 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 195 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 253 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 296 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 400 | cf.zhetengsha.eu.org | 172.64.144.82 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 110 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 285 | 172.67.120.0 | 172.67.120.0 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 289 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 397 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 140 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 183 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 410 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 46 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 88 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 149 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 157 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 160 | 104.19.223.58 | 104.19.223.58 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 280 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 314 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 364 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 411 | cf.090227.xyz | 104.18.43.174 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 19 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 54 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 58 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 150 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 250 | steamdb.info | 104.20.34.212 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 283 | www.4chan.org | 104.16.229.229 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 299 | cf.877771.xyz | 104.21.80.180 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 310 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 316 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 401 | cf.zhetengsha.eu.org | 2a06:98c1:3101::ac40:919e | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 43 | www.glassdoor.com | 104.17.64.70 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 61 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 62 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 94 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 139 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 158 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 187 | www.csgo.com | 195.85.59.95 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 209 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 210 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 216 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 219 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 273 | 172.67.49.134 | 172.67.49.134 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 281 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 313 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 338 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 347 | 104.17.79.11 | 104.17.79.11 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 358 | toy-people.com | 172.67.72.18 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 11 | www.ipchicken.com | 104.26.7.112 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 45 | ct.877774.xyz | 172.64.229.44 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 76 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 78 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 117 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 129 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 131 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 155 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 156 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 185 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 197 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 213 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 220 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 236 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 240 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 257 | www.gov.ua | 104.21.23.72 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 275 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 298 | cf.877771.xyz | 172.67.152.183 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 303 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 309 | www.hugedomains.com | 172.67.70.191 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 336 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 339 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 362 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 406 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | h2 | ✅ 成功 | 65 | cloudflare |
| 22 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 28 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 41 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 75 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 80 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 89 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 95 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 125 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 211 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 238 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 243 | cf.0sm.com | 172.67.187.145 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 248 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 251 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 258 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 276 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 286 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 287 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 288 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 311 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 312 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 317 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 356 | asia.877774.xyz | 104.17.142.146 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 390 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 407 | fbi.gov | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 4 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 4 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
