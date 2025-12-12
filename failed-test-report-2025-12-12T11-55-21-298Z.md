# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 11:55:21
- **数据来源**: connectivity_results-20251212-115520.json
- **总测试数**: 448
- **失败测试数**: 2
- **成功测试数**: 446
- **失败率**: 0.45%
- **平均延迟**: 80.89ms
- **最小延迟**: 59ms
- **最大延迟**: 862ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 11:55:21
- **IP地址**: 2a09:bac1:76a0:260::3c0:46
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

- **连接超时: I/O超时**: 2 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 71 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 376 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

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
| 54 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 79 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 414 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 58 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 134 | cu.877774.xyz | 104.26.4.116 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 172 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 283 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 373 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 380 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 428 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 439 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 38 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 51 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 53 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 77 | iplocation.io | 104.26.11.222 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 106 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 108 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 138 | cu.877774.xyz | 104.26.4.111 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 239 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 250 | cf.090227.xyz | 104.18.42.98 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 305 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 326 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 327 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 368 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 37 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 73 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 76 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 84 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 111 | cf.877771.xyz | 2606:4700:3033::ac43:98b7 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 132 | cu.877774.xyz | 104.26.4.114 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 178 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 182 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 201 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 214 | cf.zhetengsha.eu.org | 2606:4700:440a::ac40:98f1 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 242 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 248 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 261 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 279 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 291 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 313 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 330 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 340 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 349 | gamer.com.tw | 104.18.3.197 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 378 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 381 | 198.62.62.4 | 198.62.62.4 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 392 | www.digitalocean.com | 104.19.173.68 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 393 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 426 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 432 | www.csgo.com | 195.85.59.95 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 436 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 440 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 441 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 3 | www.ipget.net | 172.67.207.26 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 11 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 22 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 36 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 40 | 104.16.45.84 | 104.16.45.84 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 41 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 45 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 55 | www.gov.ua | 172.67.209.127 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 57 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 59 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 62 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 74 | cfip.xxxxxxxx.tk | 104.17.127.110 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 119 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 141 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 142 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 152 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 158 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 176 | cloudflare-ip.mofashi.ltd | 104.21.72.233 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 202 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 205 | bestcf.030101.xyz | 104.17.27.231 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 220 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 222 | cmcc.877774.xyz | 104.16.148.9 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 236 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 266 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 298 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 309 | ip.gs | 104.21.14.176 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 312 | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 320 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 323 | silkbook.com | 104.26.9.160 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 328 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 331 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 346 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 379 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 382 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 384 | cfip.1323123.xyz | 104.16.133.220 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 391 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 415 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 418 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 419 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 427 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 430 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 63 | cloudflare |
| 437 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 6 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 12 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 16 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 19 | ipinfo.in | 104.21.21.129 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 20 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 39 | 104.18.39.196 | 104.18.39.196 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |

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
