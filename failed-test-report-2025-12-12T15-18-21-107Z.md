# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 15:18:21
- **数据来源**: connectivity_results-20251212-151820.json
- **总测试数**: 449
- **失败测试数**: 4
- **成功测试数**: 445
- **失败率**: 0.89%
- **平均延迟**: 76.91ms
- **最小延迟**: 37ms
- **最大延迟**: 709ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 15:18:21
- **IP地址**: 2a09:bac5:7977:25a5::3c0:61
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 41.8874, -87.6318
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
| 109 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 354 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 407 | otto.ns.cloudflare.com | 162.159.44.135 | IPv4 | none | N/A | 0 | N/A | dial tcp 162.159.44.135:443: i/o timeout |
| 422 | lewis.ns.cloudflare.com | 172.64.35.159 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.35.159:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 4 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 4 次超时，主要集中在IP段 172.64（2 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 4 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 87 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 297 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 62 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 318 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 48 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 220 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 302 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 45 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 46 | ipinfo.in | 2606:4700:3031::6815:1581 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 193 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 224 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 251 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 274 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 303 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 361 | 172.67.79.211 | 172.67.79.211 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 373 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 17 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 69 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 286 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 372 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 9 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 54 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 63 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 128 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 233 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 234 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 301 | silkbook.com | 172.67.75.208 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 343 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 367 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 399 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 29 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 47 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 50 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 150 | cu.877774.xyz | 104.26.4.119 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 357 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 381 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 5 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 23 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 66 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 95 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 124 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 229 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 256 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 276 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 7 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 15 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 78 | iplocation.io | 172.67.70.100 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 81 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 117 | cfip.xxxxxxxx.tk | 190.93.247.169 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 120 | cf.877771.xyz | 104.21.80.180 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 121 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 155 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 320 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 337 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 346 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 397 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 403 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 419 | japan.com | 2606:4700:20::681a:53c | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 11 | cf.090227.xyz | 172.64.145.158 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 13 | cf.090227.xyz | 2606:4700:4407::ac40:9052 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 40 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 80 | iplocation.io | 104.26.11.222 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 130 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 151 | cu.877774.xyz | 104.26.4.111 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 152 | cu.877774.xyz | 104.26.4.112 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 181 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 222 | cmcc.877774.xyz | 104.16.149.8 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 341 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 434 | xn--b6gac.eu.org | 2606:4700:3035::6815:5a4e | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 442 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 31 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 39 | steamdb.info | 104.20.34.212 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 60 | 104.16.45.84 | 104.16.45.84 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 70 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 88 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 104 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 148 | cu.877774.xyz | 104.26.4.117 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 228 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 261 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 316 | 104.18.14.76 | 104.18.14.76 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 335 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 379 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 404 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 41 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 43 | 104.18.39.196 | 104.18.39.196 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 53 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 58 | ct.877774.xyz | 172.64.229.173 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 84 | www.4chan.org | 104.16.228.229 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 86 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 116 | cfip.xxxxxxxx.tk | 104.17.127.110 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 118 | cfip.xxxxxxxx.tk | 104.18.228.35 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 146 | cu.877774.xyz | 104.26.4.115 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 202 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 291 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 321 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 363 | 198.62.62.4 | 198.62.62.4 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 368 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 384 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 61 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 75 | 103.160.204.59 | 103.160.204.59 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 36 条记录
- **快 (50-100ms)**: 64 条记录
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
