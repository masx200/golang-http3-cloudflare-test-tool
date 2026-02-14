# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/2/14 12:32:22
- **数据来源**: connectivity_results-20260214-123221.json
- **总测试数**: 448
- **失败测试数**: 3
- **成功测试数**: 445
- **失败率**: 0.67%
- **平均延迟**: 48.72ms
- **最小延迟**: 24ms
- **最大延迟**: 836ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/2/14 12:32:22
- **IP地址**: 2a09:bac5:c852:166e::23c:95
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 38.6877, -77.8369
- **时区**: America/New_York
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 3 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (3 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 69 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |
| 356 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 405 | 162.159.36.104 | 162.159.36.104 | IPv4 | none | N/A | 0 | N/A | dial tcp 162.159.36.104:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 3 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 3 次超时，主要集中在IP段 172.64（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 3 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 225 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 24 | cloudflare |
| 349 | cfip.xxxxxxxx.tk | 190.93.247.169 | IPv4 | h2 | ✅ 成功 | 24 | cloudflare |
| 127 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 16 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 129 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 164 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 81 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 159 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 193 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 366 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 14 | cf.877771.xyz | 2606:4700:3033::6815:50b4 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 29 | dnschecker.org | 104.26.7.89 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 32 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 33 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 43 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 65 | gamer.com.tw | 104.18.2.197 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 88 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 100 | ifconfig.co | 172.67.168.106 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 162 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 184 | toy-people.com | 104.26.2.36 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 191 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 192 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 284 | 104.26.6.112 | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 334 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 339 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 377 | www.glassdoor.com | 104.17.64.70 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 383 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | h2 | ✅ 成功 | 31 | cloudflare |
| 430 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 431 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 31 | cloudflare |
| 10 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 17 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 20 | 172.67.106.26 | 172.67.106.26 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 28 | dnschecker.org | 104.26.6.89 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 60 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 61 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 63 | cf.877774.xyz | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 74 | 172.67.79.211 | 172.67.79.211 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 77 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 80 | 198.62.62.4 | 198.62.62.4 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 82 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 90 | www.digitalocean.com | 104.19.173.68 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 93 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 94 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 115 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 125 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 137 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 146 | comicabc.com | 188.114.97.3 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 151 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 152 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 163 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 169 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 182 | freeyx.cloudflare88.eu.org | 2606:4700:3009:6:ca1e:c45b:53c8:4d7e | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 183 | freeyx.cloudflare88.eu.org | 2606:4700:3009:0:a69:765d:d132:934d | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 190 | zread.ai | 172.67.202.78 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 202 | cloudflare-ip.mofashi.ltd | 172.67.155.172 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 210 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 232 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 239 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 260 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 282 | ct.877774.xyz | 172.64.229.236 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 290 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 293 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 296 | 172.64.151.55 | 172.64.151.55 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 297 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 312 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 315 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 341 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 351 | cfip.xxxxxxxx.tk | 104.25.105.1 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 381 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 393 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 396 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 400 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 401 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 409 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 32 | cloudflare |
| 425 | cmcc.877774.xyz | 104.16.149.4 | IPv4 | h2 | ✅ 成功 | 32 | cloudflare |
| 6 | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 19 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 27 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 38 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 64 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 66 | gamer.com.tw | 104.18.3.197 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 71 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 75 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 84 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 97 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 98 | eur.877774.xyz | 104.21.47.209 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 101 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 117 | 172.64.154.18 | 172.64.154.18 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 118 | www.csgo.com | 195.85.59.161 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 119 | www.csgo.com | 195.85.59.95 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 122 | stock.hostmonit.com | 104.21.7.193 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 123 | stock.hostmonit.com | 172.67.187.251 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 128 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 133 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 140 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 141 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 144 | www.visa.com.sg | 104.18.13.229 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 148 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |
| 149 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 33 | cloudflare |
| 161 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 33 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 100 条记录
- **快 (50-100ms)**: 0 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 3 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 3 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
