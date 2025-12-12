# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 14:56:06
- **数据来源**: connectivity_results-20251212-145606.json
- **总测试数**: 442
- **失败测试数**: 2
- **成功测试数**: 440
- **失败率**: 0.45%
- **平均延迟**: 63.12ms
- **最小延迟**: 40ms
- **最大延迟**: 925ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 14:56:07
- **IP地址**: 2a09:bac5:6212:1232::1d0:6f
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 37.1835, -121.7714
- **时区**: America/Los_Angeles
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
| 31 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |
| 377 | 172.64.201.25 | 172.64.201.25 | IPv4 | none | N/A | 0 | N/A | dial tcp 172.64.201.25:443: i/o timeout |

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
| 246 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 339 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 414 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 87 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 130 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 153 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 163 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 170 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 176 | cloudflare-ip.mofashi.ltd | 172.67.155.172 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 252 | cf.090227.xyz | 2a06:98c1:310d::6812:2bae | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 268 | www.glassdoor.com | 104.17.64.70 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 288 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 313 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 419 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 174 | zread.ai | 2606:4700:3033::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 198 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 203 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 251 | cf.090227.xyz | 172.64.152.241 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 261 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 287 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 306 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 317 | silkbook.com | 172.67.75.208 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 350 | cf.877774.xyz | 2606:4700:4406::ac40:9242 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 366 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 29 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 30 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 57 | ipinfo.in | 2606:4700:3037::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 75 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 78 | www.4chan.org | 104.16.228.229 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 105 | www.hugedomains.com | 172.67.70.191 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 108 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 110 | cf.877771.xyz | 104.21.80.180 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 150 | pranab.ns.cloudflare.com | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 171 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 181 | asia.877774.xyz | 104.17.139.62 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 228 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 250 | cf.090227.xyz | 104.18.35.15 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 253 | cf.090227.xyz | 2606:4700:4407::ac40:9052 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 265 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 280 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 282 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 290 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 300 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 304 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 357 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 381 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 389 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 392 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 399 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 407 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 421 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 12 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 77 | www.4chan.org | 104.16.229.229 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 140 | cu.877774.xyz | 104.26.4.114 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 143 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 144 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 175 | zread.ai | 2606:4700:3032::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 186 | kyree.ns.cloudflare.com | 172.64.35.207 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 206 | bestcf.030101.xyz | 2606:4700:0:b684:c5c1:5d02:e603:436c | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 221 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 234 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 263 | icook.tw | 172.66.158.115 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 266 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 270 | bowen.ns.cloudflare.com | 162.159.44.83 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 289 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 292 | palera.in | 2a06:98c1:3121::3 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 293 | palera.in | 2a06:98c1:3120::3 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 295 | benedict.ns.cloudflare.com | 162.159.44.205 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 298 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 303 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 328 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 333 | 104.18.14.76 | 104.18.14.76 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 345 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 393 | eur.877774.xyz | 104.21.47.209 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 401 | 108.162.198.54 | 108.162.198.54 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 435 | stock.hostmonit.com | 2606:4700:3037::6815:7c1 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 9 | comicabc.com | 2606:4700:3030::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 14 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 23 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 26 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 48 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 52 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 56 | ipinfo.in | 104.21.21.129 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 63 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 66 | 104.26.6.112 | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 68 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 85 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 98 | www.visa.cn | 162.159.152.2 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 114 | www.visa.com.sg | 104.18.13.229 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 196 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 205 | bestcf.030101.xyz | 104.19.153.222 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 223 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 232 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 239 | cf.zhetengsha.eu.org | 2606:4700:4407::ac40:9052 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 275 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 283 | rustam.ns.cloudflare.com | 108.162.195.148 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 291 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 301 | ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 307 | ip.gs | 104.21.14.176 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 311 | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |

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
