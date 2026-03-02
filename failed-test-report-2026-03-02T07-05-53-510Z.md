# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/3/2 07:05:53
- **数据来源**: connectivity_results-20260302-070552.json
- **总测试数**: 430
- **失败测试数**: 2
- **成功测试数**: 428
- **失败率**: 0.47%
- **平均延迟**: 47.04ms
- **最小延迟**: 26ms
- **最大延迟**: 865ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/3/2 07:05:53
- **IP地址**: 2a09:bac6:d73a:3050::4d0:74
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

- **连接超时: I/O超时**: 2 次 (100.0%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (2 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 43 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 317 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

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
| 142 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 26 | cloudflare |
| 118 | 104.18.39.196 | 104.18.39.196 | IPv4 | h2 | ✅ 成功 | 27 | cloudflare |
| 223 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | h2 | ✅ 成功 | 27 | cloudflare |
| 264 | bestcf.030101.xyz | 104.17.206.188 | IPv4 | h2 | ✅ 成功 | 27 | cloudflare |
| 401 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 27 | cloudflare |
| 67 | silkbook.com | 2606:4700:20::ac43:4bd0 | IPv6 | h2 | ✅ 成功 | 28 | cloudflare |
| 70 | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 127 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 134 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 28 | cloudflare |
| 143 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 147 | www.gov.ua | 2606:4700:3033::ac43:d17f | IPv6 | h2 | ✅ 成功 | 28 | cloudflare |
| 155 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 182 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 207 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 230 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 28 | cloudflare |
| 246 | 104.17.79.11 | 104.17.79.11 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 259 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 260 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 28 | cloudflare |
| 319 | 172.67.79.211 | 172.67.79.211 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 347 | damien.ns.cloudflare.com | 162.159.44.168 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 373 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 378 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 427 | cmcc.877774.xyz | 104.16.148.11 | IPv4 | h2 | ✅ 成功 | 28 | cloudflare |
| 3 | www.glassdoor.com | 104.16.25.46 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 8 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 12 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 15 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 19 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 31 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 32 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 50 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 51 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 65 | silkbook.com | 104.26.9.160 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 72 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 74 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 76 | ip.gs | 104.21.14.176 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 80 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 101 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 102 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 104 | www.pcmag.com | 104.16.21.118 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 105 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 125 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 128 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 129 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 148 | www.4chan.org | 104.16.228.229 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 154 | icook.hk | 2606:4700:3037::ac43:a168 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 175 | www.okcupid.com | 104.18.160.63 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 176 | www.visa.cn | 162.159.152.2 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 177 | www.visa.cn | 162.159.153.2 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 186 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 194 | freeyx.cloudflare88.eu.org | 172.64.147.205 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 195 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 201 | craig.ns.cloudflare.com | 172.64.35.192 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 215 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 217 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 244 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 247 | cloudflare-ip.mofashi.ltd | 104.21.72.233 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 257 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 262 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 266 | bestcf.030101.xyz | 2606:4700:0:dd:df95:6eb1:ffa4:6779 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 267 | bestcf.030101.xyz | 2606:4700:0:d9:2acf:b5e0:5a46:4358 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 273 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 277 | 162.159.133.85 | 162.159.133.85 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 283 | cf.zhetengsha.eu.org | 172.64.145.158 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 286 | cf.zhetengsha.eu.org | 2606:4700:4407::ac40:9052 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 292 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 298 | bowen.ns.cloudflare.com | 162.159.44.83 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 321 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 327 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 329 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 330 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 336 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 338 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 375 | www.wto.org | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 377 | japan.com | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 379 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 391 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 396 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 399 | www.ipget.net | 2606:4700:3036::6815:fd4 | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 400 | www.ipget.net | 2606:4700:3031::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 29 | cloudflare |
| 402 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 406 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 412 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 413 | cmcc.877774.xyz | 104.16.148.9 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 424 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 429 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 29 | cloudflare |
| 9 | moura.ns.cloudflare.com | 172.64.35.217 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 13 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 20 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 29 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 34 | rustam.ns.cloudflare.com | 108.162.195.148 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 40 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 52 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 53 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 55 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 62 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 63 | ct.877774.xyz | 172.64.229.173 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 68 | silkbook.com | 2606:4700:20::681a:8a0 | IPv6 | h2 | ✅ 成功 | 30 | cloudflare |
| 77 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |
| 90 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h2 | ✅ 成功 | 30 | cloudflare |

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
