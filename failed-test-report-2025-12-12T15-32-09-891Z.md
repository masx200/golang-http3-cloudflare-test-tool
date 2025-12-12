# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 15:32:09
- **数据来源**: connectivity_results-20251212-153209.json
- **总测试数**: 441
- **失败测试数**: 2
- **成功测试数**: 439
- **失败率**: 0.45%
- **平均延迟**: 98.18ms
- **最小延迟**: 74ms
- **最大延迟**: 954ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 15:32:10
- **IP地址**: 2a09:bac1:76a0:8628::22e:35
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 41.1446, -104.8116
- **时区**: America/Denver
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 2 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 119 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 341 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 2 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 2 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 434 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 74 | cloudflare |
| 20 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 78 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 429 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 201 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 220 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 76 | cloudflare |
| 5 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 117 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 145 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 173 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 185 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 296 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 297 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 359 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 21 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 75 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 108 | dnschecker.org | 172.67.73.216 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 146 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 150 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 247 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 331 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 371 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 399 | cf.zhetengsha.eu.org | 2a06:98c1:3105::6812:230f | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 404 | xn--b6gac.eu.org | 2606:4700:3037::ac43:99fd | IPv6 | h2 | ✅ 成功 | 78 | cloudflare |
| 436 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 47 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 49 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 70 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 87 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 138 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 151 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 191 | www.visa.cn | 162.159.153.2 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 196 | www.okcupid.com | 104.16.239.254 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 206 | cf.877771.xyz | 188.114.97.3 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 246 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 274 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 280 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 283 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 328 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 79 | cloudflare |
| 382 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 430 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 3 | www.7749tv.com | 104.16.10.137 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 6 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 8 | cf.090227.xyz | 172.64.145.158 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 53 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 81 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 92 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 126 | cf.0sm.com | 172.67.187.145 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 178 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 182 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 202 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 208 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 223 | craig.ns.cloudflare.com | 172.64.35.192 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 299 | 104.18.14.76 | 104.18.14.76 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 364 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 388 | damien.ns.cloudflare.com | 172.64.35.168 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 417 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 424 | braden.ns.cloudflare.com | 108.162.195.169 | IPv4 | h2 | ✅ 成功 | 80 | cloudflare |
| 13 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 28 | trevor.ns.cloudflare.com | 108.162.195.154 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 48 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 50 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 57 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 58 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 124 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 137 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 144 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 147 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 154 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 193 | www.okcupid.com | 104.16.223.254 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 217 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 228 | cu.877774.xyz | 104.26.4.119 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 239 | freeyx.cloudflare88.eu.org | 141.101.121.109 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 251 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 254 | toy-people.com | 104.26.2.36 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 290 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 308 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 313 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 338 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 345 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 349 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 381 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 416 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 418 | japan.com | 2606:4700:20::681a:53c | IPv6 | h2 | ✅ 成功 | 81 | cloudflare |
| 12 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 23 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 64 | palera.in | 2a06:98c1:3121::3 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 65 | palera.in | 2a06:98c1:3120::3 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 74 | ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 91 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 106 | dnschecker.org | 104.26.6.89 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 115 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 125 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 128 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 158 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 168 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 170 | 172.67.49.134 | 172.67.49.134 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 222 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 225 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 257 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 0 条记录
- **快 (50-100ms)**: 100 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 2 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 2 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
