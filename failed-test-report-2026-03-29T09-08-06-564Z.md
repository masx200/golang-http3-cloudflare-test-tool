# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/3/29 09:08:06
- **数据来源**: connectivity_results-20260329-090806.json
- **总测试数**: 435
- **失败测试数**: 3
- **成功测试数**: 432
- **失败率**: 0.69%
- **平均延迟**: 65.84ms
- **最小延迟**: 44ms
- **最大延迟**: 916ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/3/29 09:08:06
- **IP地址**: 2a09:bac6:d70d:1791::259:55
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 37.751, -97.822
- **时区**: America/Chicago
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 2 次 (66.7%)
- **DNS解析错误: 其他DNS错误**: 1 次 (33.3%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 49 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 144 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

#### DNS解析错误: 其他DNS错误 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 322 | freeyx.cloudflare88.eu.org | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析无结果 |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 2 次 (66.7%)
- **DNS解析错误**: 1 次 (33.3%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 3 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 25 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 159 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 184 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 244 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 393 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 68 | ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 80 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 89 | silkbook.com | 2606:4700:20::681a:9a0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 103 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 129 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 160 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 161 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 186 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 198 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 215 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 307 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 329 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 414 | cf.090227.xyz | 104.18.42.98 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 92 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 98 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 110 | dnschecker.org | 104.26.7.89 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 135 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 155 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 194 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 216 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 217 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 241 | cf.0sm.com | 2606:4700:3032::6815:785 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 246 | ipinfo.in | 104.21.21.129 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 284 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 296 | cf.877771.xyz | 172.67.152.183 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 305 | www.okcupid.com | 104.18.160.63 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 306 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 323 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 380 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 398 | 172.64.151.55 | 172.64.151.55 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 399 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 400 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 403 | cf.zhetengsha.eu.org | 172.64.144.82 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 411 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 412 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 413 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 5 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 32 | www.glassdoor.com | 104.16.25.46 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 63 | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 72 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 91 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 163 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 172 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 176 | damien.ns.cloudflare.com | 108.162.195.168 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 187 | www.wto.org | 2a06:98c1:3102::6812:29be | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 214 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 223 | cmcc.877774.xyz | 104.16.148.9 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 270 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 278 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 282 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 294 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 302 | www.okcupid.com | 104.17.48.63 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 312 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 314 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 317 | sullivan.ns.cloudflare.com | 162.159.44.161 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 321 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 355 | toy-people.com | 104.26.3.36 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 358 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 367 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 373 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 387 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 401 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 410 | fbi.gov | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 422 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 14 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 41 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 53 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 64 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 70 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 71 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 76 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 79 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 87 | silkbook.com | 104.26.9.160 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 111 | dnschecker.org | 172.67.73.216 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 128 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 138 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 140 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 156 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 180 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 181 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 182 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 183 | 108.162.198.54 | 108.162.198.54 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 210 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 221 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 225 | cmcc.877774.xyz | 104.16.148.11 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 245 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 277 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 281 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 297 | cf.877771.xyz | 104.21.80.180 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 303 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 308 | www.hugedomains.com | 172.67.70.191 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 325 | na.877774.xyz | 104.18.187.25 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 342 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 344 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 351 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 100 条记录
- **快 (50-100ms)**: 0 条记录
- **正常 (100-200ms)**: 0 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 0 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 2 次
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
