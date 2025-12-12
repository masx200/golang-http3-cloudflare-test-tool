# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 11:39:17
- **数据来源**: connectivity_results-20251212-113917.json
- **总测试数**: 450
- **失败测试数**: 8
- **成功测试数**: 442
- **失败率**: 1.78%
- **平均延迟**: 65.51ms
- **最小延迟**: 47ms
- **最大延迟**: 666ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 11:39:17
- **IP地址**: 2a09:bac5:9f24:a0::10:4ba
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 36.4766, -78.1847
- **时区**: America/New_York
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **DNS解析错误: 其他DNS错误**: 3 次 (37.5%)
- **网络不可达: 网络不可达**: 3 次 (37.5%)
- **连接超时: I/O超时**: 2 次 (25.0%)

### 🔍 按错误类型分类的失败测试详情

#### DNS解析错误: 其他DNS错误 (3 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 106 | ********-****-****-****-************.*.*.*.*.*.*.*.*.*.*.*.*.***.**** | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析无结果 |
| 262 | **********.********************.***.** | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析无结果 |
| 331 | **********.**********.***.*** | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析无结果 |

#### 网络不可达: 网络不可达 (3 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 423 | japan.com | 2606:4700:20::681a:53c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::681a:53c]:443: connect: network is unreachable |
| 424 | japan.com | 2606:4700:20::ac43:465c | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:20::ac43:465c]:443: connect: network is unreachable |
| 428 | stock.hostmonit.com | 2606:4700:3033::ac43:bbfb | IPv6 | none | N/A | 0 | N/A | dial tcp [2606:4700:3033::ac43:bbfb]:443: connect: network is unreachable |

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 85 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 382 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

### 📈 错误分析总结

#### 主错误类型分布

- **DNS解析错误**: 3 次 (37.5%)
- **网络不可达**: 3 次 (37.5%)
- **连接超时**: 2 次 (25.0%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 8 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: IPv4失败 2 次，IPv6失败 3 次，两种协议都存在问题



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 70 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 166 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 435 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 48 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 79 | 103.160.204.59 | 103.160.204.59 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 232 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 285 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 288 | rustam.ns.cloudflare.com | 162.159.44.148 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 359 | uriah.ns.cloudflare.com | 108.162.195.194 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 434 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 57 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 211 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 228 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 231 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 296 | benedict.ns.cloudflare.com | 172.64.35.205 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 342 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 433 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 442 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 62 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 143 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 170 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 263 | bowen.ns.cloudflare.com | 108.162.195.83 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 274 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 362 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 379 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 386 | 104.19.223.58 | 104.19.223.58 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 420 | japan.com | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 17 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 20 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 27 | trevor.ns.cloudflare.com | 108.162.195.154 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 40 | www.pcmag.com | 104.16.21.118 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 49 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 54 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 55 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 76 | 104.26.6.112 | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 91 | 172.67.49.134 | 172.67.49.134 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 92 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 95 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 101 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 104 | icook.hk | 2606:4700:3031::6815:5ad2 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 107 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 146 | cu.877774.xyz | 104.26.4.119 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 156 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 160 | pranab.ns.cloudflare.com | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 165 | cris.ns.cloudflare.com | 172.64.35.202 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 171 | toy-people.com | 104.26.2.36 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 200 | cloudflare-ip.mofashi.ltd | 2606:4700:3037::ac43:9bac | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 210 | www.whatismyip.com | 172.67.69.129 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 212 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 218 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 252 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 261 | www.glassdoor.com | 104.16.25.46 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 279 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 283 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 290 | rustam.ns.cloudflare.com | 172.64.35.148 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 302 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 308 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 309 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 313 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 363 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 365 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 389 | icook.tw | 172.66.158.115 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 418 | 108.162.198.54 | 108.162.198.54 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 419 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 422 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 425 | stock.hostmonit.com | 172.67.187.251 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 429 | ifconfig.co | 104.21.54.91 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 18 | www.ipget.net | 172.67.207.26 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 31 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 74 | www.gov.ua | 2606:4700:3031::6815:1748 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 96 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 97 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 103 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 113 | www.visa.cn | 162.159.152.2 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 147 | cu.877774.xyz | 104.26.4.111 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 153 | cu.877774.xyz | 104.26.4.117 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 174 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 188 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 192 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 209 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 230 | cmcc.877774.xyz | 104.16.149.11 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 233 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 234 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 245 | bestcf.030101.xyz | 104.17.27.231 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 251 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 257 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 258 | www.ipchicken.com | 104.26.7.112 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 312 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 315 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 351 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 364 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 395 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 409 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 431 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 16 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 19 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 53 | cf.0sm.com | 2606:4700:3037::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 64 | ct.877774.xyz | 172.64.229.174 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 90 | cfip.xxxxxxxx.tk | 104.27.21.118 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 102 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 10 条记录
- **快 (50-100ms)**: 90 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 2 次
- **IPv6 失败**: 3 次

### 按协议统计

- **none**: 8 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
