# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2026/7/10 17:58:28
- **数据来源**: connectivity_results-20260710-175827.json
- **总测试数**: 1118
- **失败测试数**: 9
- **成功测试数**: 1109
- **失败率**: 0.81%
- **平均延迟**: 54.03ms
- **最小延迟**: 36ms
- **最大延迟**: 696ms

## 🌐 当前测试环境信息

- **获取时间**: 2026/7/10 17:58:28
- **IP地址**: 2a09:bac1:76c1:62b0::259:b2
- **国家/地区**: United States (US)
- **ASN**: AS13335
- **网络组织**: CLOUDFLARENET
- **网络域名**: cloudflare.com
- **大洲**: North America (NA)
- **地理坐标**: 38.9609, -77.3429
- **时区**: America/New_York
- **数据源**: combined

---

---

## 失败测试详情

### 📊 错误类型统计

- **连接超时: I/O超时**: 4 次 (44.4%)
- **DNS解析错误: 其他DNS错误**: 4 次 (44.4%)
- **连接超时: 上下文超时**: 1 次 (11.1%)

### 🔍 按错误类型分类的失败测试详情

#### 连接超时: I/O超时 (4 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 12 | 34.143.159.175 | 34.143.159.175 | IPv4 | none | N/A | 0 | N/A | dial tcp 34.143.159.175:443: i/o timeout |
| 272 | local-aria2-webui.masx200.ddns-ip.net | 188.165.11.93 | IPv4 | none | N/A | 0 | N/A | dial tcp 188.165.11.93:443: i/o timeout |
| 397 | 198.41.194.162 | 198.41.194.162 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.194.162:443: i/o timeout |
| 650 | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4 | none | N/A | 0 | N/A | dial tcp 198.41.212.130:443: i/o timeout |

#### DNS解析错误: 其他DNS错误 (4 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 143 | cf.zhetengsha.eu.org | Unknown | Unknown | none | N/A | 0 | N/A | DNS解析失败: 未查询到任何IP记录 |
| 341 | stock.hostmonit.com | 154.9.224.237 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": tls: failed to verify certificate: x509: certificate is valid for api.hostmonit.com, not local-aria2-webui.masx200.ddns-ip.net |
| 345 | 3.0.50.69 | 3.0.50.69 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": EOF |
| 353 | www.csgo.com | 147.135.254.170 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": tls: failed to verify certificate: x509: certificate has expired or is not yet valid: current time 2026-07-10T17:52:06Z is after 2016-10-03T13:42:20Z |

#### 连接超时: 上下文超时 (1 次测试)

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |
|------|-----------|--------|--------|------|--------|----------|--------|----------|
| 207 | 141.147.185.63 | 141.147.185.63 | IPv4 | h2 | N/A | 0 | N/A | Get "https://local-aria2-webui.masx200.ddns-ip.net:443/": context deadline exceeded |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 5 次 (55.6%)
- **DNS解析错误**: 4 次 (44.4%)

#### 错误模式分析

**超时集中度分析**: 共有 4 次超时，主要集中在IP段 198.41（2 次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 5 次失败是因为协议协商失败（protocol: none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**: 所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好



---

## 🚀 延迟最低的 1109 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|
| 110 | 4444.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 883 | 104.26.4.213 | 104.26.4.213 | IPv4 | h2 | ✅ 成功 | 36 | cloudflare |
| 384 | japan.com | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 614 | 104.18.40.216 | 104.18.40.216 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 680 | 104.26.1.194 | 104.26.1.194 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 931 | 172.64.53.101 | 172.64.53.101 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 973 | 104.18.44.187 | 104.18.44.187 | IPv4 | h2 | ✅ 成功 | 37 | cloudflare |
| 442 | 108.162.192.66 | 108.162.192.66 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 739 | cmcc.877774.xyz | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 820 | 104.26.6.238 | 104.26.6.238 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 830 | 104.25.252.135 | 104.25.252.135 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 834 | 104.26.5.194 | 104.26.5.194 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 884 | 104.20.18.125 | 104.20.18.125 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 978 | 104.18.160.38 | 104.18.160.38 | IPv4 | h2 | ✅ 成功 | 38 | cloudflare |
| 116 | 4444.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 223 | time.is | 104.26.12.54 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 366 | ifconfig.co | 2606:4700:3037::6815:365b | IPv6 | h2 | ✅ 成功 | 39 | cloudflare |
| 573 | 104.16.144.235 | 104.16.144.235 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 697 | 104.17.187.186 | 104.17.187.186 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 804 | 172.64.53.41 | 172.64.53.41 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 979 | 104.16.245.121 | 104.16.245.121 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 1078 | 104.19.154.245 | 104.19.154.245 | IPv4 | h2 | ✅ 成功 | 39 | cloudflare |
| 40 | icook.hk | 104.21.90.210 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 90 | yx-auto.pages.dev | 2606:4700:310c::ac42:2c90 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 95 | craig.ns.cloudflare.com | 2606:4700:58::a29f:2cc0 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 112 | 4444.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 115 | 4444.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 137 | toy-people.com | 2606:4700:20::ac43:4812 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 156 | kyree.ns.cloudflare.com | 2803:f800:50::6ca2:c3cf | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 161 | dylan.ns.cloudflare.com | 2606:4700:58::a29f:2cbb | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 394 | 162.159.136.89 | 162.159.136.89 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 463 | 104.17.156.81 | 104.17.156.81 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 541 | 104.26.2.166 | 104.26.2.166 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 552 | 172.67.70.253 | 172.67.70.253 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 554 | 104.26.4.44 | 104.26.4.44 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 595 | 162.159.39.177 | 162.159.39.177 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 615 | 104.26.2.2 | 104.26.2.2 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 633 | 104.17.189.30 | 104.17.189.30 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 692 | 104.16.155.230 | 104.16.155.230 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 715 | 2a06:98c1:3105:3dea:69ff:1edd:4cd:ed87 | 2a06:98c1:3105:3dea:69ff:1edd:4cd:ed87 | IPv6 | h2 | ✅ 成功 | 40 | cloudflare |
| 743 | cmcc.877774.xyz | 104.16.149.4 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 776 | 104.25.241.198 | 104.25.241.198 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 977 | 104.17.143.82 | 104.17.143.82 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 987 | 104.17.119.130 | 104.17.119.130 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 999 | 162.159.6.186 | 162.159.6.186 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1055 | 104.26.1.211 | 104.26.1.211 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1058 | 172.67.66.49 | 172.67.66.49 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 1067 | 104.17.49.114 | 104.17.49.114 | IPv4 | h2 | ✅ 成功 | 40 | cloudflare |
| 41 | icook.hk | 2606:4700:3034::ac43:a168 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 96 | craig.ns.cloudflare.com | 2803:f800:50::6ca2:c3c0 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 99 | na.877774.xyz | 104.19.74.233 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 134 | toy-people.com | 104.26.3.36 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 151 | 104.17.79.11 | 104.17.79.11 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 166 | cloudflare-ip.mofashi.ltd | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 169 | www.whatismyip.com | 104.26.13.23 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 187 | xn--b6gac.eu.org | 104.21.90.78 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 215 | www.glassdoor.com | 104.17.64.70 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 230 | rustam.ns.cloudflare.com | 108.162.195.148 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 269 | www.visa.com.hk | 104.18.21.69 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 324 | cfip.1323123.xyz | 104.16.133.220 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 326 | 104.18.37.40 | 104.18.37.40 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 371 | www.wto.org | 2a06:98c1:310b::ac40:9242 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 389 | japan.com | 2606:4700:20::ac43:465c | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 393 | 104.26.4.90 | 104.26.4.90 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 402 | 104.26.8.117 | 104.26.8.117 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 416 | 104.17.139.37 | 104.17.139.37 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 435 | 2a06:98c1:3121:c677:c614:7606:cec1:f722 | 2a06:98c1:3121:c677:c614:7606:cec1:f722 | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 437 | 2a06:98c1:3120:c39b:7522:c680:d288:d13c | 2a06:98c1:3120:c39b:7522:c680:d288:d13c | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 458 | 172.67.72.254 | 172.67.72.254 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 604 | 172.64.145.242 | 172.64.145.242 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 607 | 172.64.145.119 | 172.64.145.119 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 613 | 104.18.42.61 | 104.18.42.61 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 618 | 172.67.73.120 | 172.67.73.120 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 622 | 172.67.72.36 | 172.67.72.36 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 652 | cfip.xxxxxxxx.tk | 104.20.255.53 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 695 | 104.16.251.254 | 104.16.251.254 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 749 | cmcc.877774.xyz | 104.16.149.10 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 831 | 104.17.97.146 | 104.17.97.146 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 842 | 104.25.253.253 | 104.25.253.253 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 849 | 162.159.39.156 | 162.159.39.156 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 891 | 104.25.252.192 | 104.25.252.192 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 922 | 172.64.151.253 | 172.64.151.253 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 958 | 172.67.75.231 | 172.67.75.231 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 960 | 172.67.74.78 | 172.67.74.78 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 975 | 104.16.148.143 | 104.16.148.143 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 989 | 172.64.229.172 | 172.64.229.172 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1050 | 104.20.30.182 | 104.20.30.182 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1066 | 172.64.144.188 | 172.64.144.188 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1099 | 172.64.53.57 | 172.64.53.57 | IPv4 | h2 | ✅ 成功 | 41 | cloudflare |
| 1110 | 2803:f800:50:a9:dcf3:5d54:4ded:7f9d | 2803:f800:50:a9:dcf3:5d54:4ded:7f9d | IPv6 | h2 | ✅ 成功 | 41 | cloudflare |
| 48 | huxley.ns.cloudflare.com | 162.159.44.188 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 53 | cf.877774.xyz | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 55 | cf.877774.xyz | 2a06:98c1:3100::6812:29be | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 67 | cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 69 | cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 79 | www.hugedomains.com | 2606:4700:20::ac43:46bf | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 84 | sullivan.ns.cloudflare.com | 172.64.35.161 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 111 | 4444.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 113 | 4444.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 121 | cris.ns.cloudflare.com | 2803:f800:50::6ca2:c3ca | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 126 | www.4444.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 133 | toy-people.com | 172.67.72.18 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 265 | singapore.com | 2606:4700:20::681a:d8c | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 267 | singapore.com | 2606:4700:20::681a:c8c | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 282 | ashton.ns.cloudflare.com | 108.162.195.173 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 290 | gamer.com.tw | 104.18.2.197 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 296 | julio.ns.cloudflare.com | 2a06:98c1:50::ac40:23d1 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 316 | tasteatlas.com | 104.17.37.105 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 322 | www.udemy.com | 2606:4700::6810:8eed | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 358 | damien.ns.cloudflare.com | 2606:4700:58::a29f:2ca8 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 368 | www.7749tv.com | 104.25.178.174 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 378 | lewis.ns.cloudflare.com | 172.64.35.159 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 398 | 104.26.5.134 | 104.26.5.134 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 418 | 104.19.154.200 | 104.19.154.200 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 430 | 2a06:98c1:3121:c6d4:af96:6677:59bf:faec | 2a06:98c1:3121:c6d4:af96:6677:59bf:faec | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 431 | 2a06:98c1:3121:5d:1caa:56dd:a908:af7b | 2a06:98c1:3121:5d:1caa:56dd:a908:af7b | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 539 | 162.159.62.6 | 162.159.62.6 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 623 | 104.26.10.239 | 104.26.10.239 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 648 | cfip.xxxxxxxx.tk | 188.114.97.144 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 667 | 2a06:98c1:310b:fd:febc:dbaf:d5f9:76d4 | 2a06:98c1:310b:fd:febc:dbaf:d5f9:76d4 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 668 | 162.159.6.44 | 162.159.6.44 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 673 | 172.64.145.108 | 172.64.145.108 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 675 | 104.18.37.177 | 104.18.37.177 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 683 | 104.20.25.161 | 104.20.25.161 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 696 | 104.17.214.136 | 104.17.214.136 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 713 | 2a06:98c1:310f:5820:a733:3f39:ff68:f260 | 2a06:98c1:310f:5820:a733:3f39:ff68:f260 | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 732 | cmcc.877774.xyz | 104.16.148.6 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 758 | 104.20.25.181 | 104.20.25.181 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 759 | 172.67.65.150 | 172.67.65.150 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 761 | 6666.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 780 | 104.17.111.150 | 104.17.111.150 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 810 | 162.159.44.202 | 162.159.44.202 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 824 | 104.26.4.135 | 104.26.4.135 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 836 | 104.25.245.215 | 104.25.245.215 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 852 | 162.159.0.79 | 162.159.0.79 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 860 | 2606:4700:59:764d:d406:c823:e52f:4f3a | 2606:4700:59:764d:d406:c823:e52f:4f3a | IPv6 | h2 | ✅ 成功 | 42 | cloudflare |
| 881 | 172.67.76.20 | 172.67.76.20 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 903 | 104.18.47.193 | 104.18.47.193 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 959 | 104.20.19.37 | 104.20.19.37 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 986 | 172.64.154.86 | 172.64.154.86 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 988 | 162.159.39.165 | 162.159.39.165 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 1091 | 162.159.39.219 | 162.159.39.219 | IPv4 | h2 | ✅ 成功 | 42 | cloudflare |
| 39 | icook.hk | 172.67.161.104 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 54 | cf.877774.xyz | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 60 | www.okcupid.com | 104.16.223.254 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 97 | craig.ns.cloudflare.com | 2a06:98c1:50::ac40:23c0 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 98 | na.877774.xyz | 104.18.187.25 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 102 | pranab.ns.cloudflare.com | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 103 | pranab.ns.cloudflare.com | 172.64.35.199 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 108 | 4444.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 109 | 4444.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 124 | www.4444.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 125 | www.4444.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 141 | zread.ai | 2606:4700:3037::ac43:ca4e | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 147 | decker.ns.cloudflare.com | 172.64.35.155 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 152 | kyree.ns.cloudflare.com | 108.162.195.207 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 164 | cloudflare-ip.mofashi.ltd | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 167 | www.whatismyip.com | 104.26.12.23 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 173 | [2606:4700:4409::5b5b:7758] | 2606:4700:4409::5b5b:7758 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 236 | 104.17.68.85 | 104.17.68.85 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 263 | singapore.com | 104.26.13.140 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 297 | [2606:4700:4408::18c5:3304] | 2606:4700:4408::18c5:3304 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 298 | uriah.ns.cloudflare.com | 108.162.195.194 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 306 | 456.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 333 | 104.26.13.31 | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 337 | www.digitalocean.com | 2606:4700::6813:ad44 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 351 | otto.ns.cloudflare.com | 2a06:98c1:50::ac40:2387 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 365 | ifconfig.co | 172.67.168.106 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 388 | japan.com | 2606:4700:20::681a:53c | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 429 | 2a06:98c1:3121:c6d4:4130:7992:df42:f04c | 2a06:98c1:3121:c6d4:4130:7992:df42:f04c | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 503 | 104.18.40.39 | 104.18.40.39 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 538 | 162.159.19.37 | 162.159.19.37 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 540 | 104.26.12.113 | 104.26.12.113 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 580 | 162.159.7.12 | 162.159.7.12 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 581 | 162.159.44.128 | 162.159.44.128 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 594 | 162.159.38.171 | 162.159.38.171 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 603 | 172.64.151.235 | 172.64.151.235 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 609 | 162.159.1.111 | 162.159.1.111 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 645 | cfip.xxxxxxxx.tk | 188.114.96.125 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 671 | 172.64.152.215 | 172.64.152.215 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 704 | 162.159.36.52 | 162.159.36.52 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 705 | 104.18.42.106 | 104.18.42.106 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 712 | 2a06:98c1:51:8a7e:2be1:4da9:97bb:7c59 | 2a06:98c1:51:8a7e:2be1:4da9:97bb:7c59 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 797 | 2a06:98c1:3107:ee7a:af11:b020:b50d:d4e2 | 2a06:98c1:3107:ee7a:af11:b020:b50d:d4e2 | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 822 | 172.67.72.250 | 172.67.72.250 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 827 | 172.67.68.110 | 172.67.68.110 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 833 | 104.17.129.66 | 104.17.129.66 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 837 | 104.17.56.208 | 104.17.56.208 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 841 | 104.25.255.103 | 104.25.255.103 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 844 | 104.25.244.36 | 104.25.244.36 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 851 | 172.64.157.214 | 172.64.157.214 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 873 | 172.64.40.68 | 172.64.40.68 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 874 | 172.64.41.47 | 172.64.41.47 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 948 | 2a06:98c1:3107:54:2c60:eafc:f14d:ca4b | 2a06:98c1:3107:54:2c60:eafc:f14d:ca4b | IPv6 | h2 | ✅ 成功 | 43 | cloudflare |
| 955 | 172.67.75.212 | 172.67.75.212 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 961 | 172.67.73.94 | 172.67.73.94 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 971 | 104.26.0.124 | 104.26.0.124 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 974 | 104.17.104.208 | 104.17.104.208 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 981 | 104.18.42.129 | 104.18.42.129 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 996 | 162.159.46.38 | 162.159.46.38 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1028 | 172.64.42.235 | 172.64.42.235 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1030 | 172.64.52.42 | 172.64.52.42 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1052 | 104.17.155.242 | 104.17.155.242 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1079 | 104.17.145.27 | 104.17.145.27 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 1117 | 104.18.35.187 | 104.18.35.187 | IPv4 | h2 | ✅ 成功 | 43 | cloudflare |
| 62 | www.visa.com.sg | 104.18.12.229 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 65 | cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 74 | www.hugedomains.com | 104.26.6.37 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 81 | freeyx.cloudflare88.eu.org | 172.64.146.153 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 118 | cris.ns.cloudflare.com | 162.159.44.202 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 119 | cris.ns.cloudflare.com | 172.64.35.202 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 138 | toy-people.com | 2606:4700:20::681a:324 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 159 | dylan.ns.cloudflare.com | 162.159.44.187 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 163 | dylan.ns.cloudflare.com | 2a06:98c1:50::ac40:23bb | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 226 | time.is | 2606:4700:20::681a:c36 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 231 | rustam.ns.cloudflare.com | 162.159.44.148 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 250 | ip.sb | 2606:4700:20::681a:c1f | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 277 | dnschecker.org | 104.26.7.89 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 301 | uriah.ns.cloudflare.com | 2606:4700:58::a29f:2cc2 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 357 | damien.ns.cloudflare.com | 172.64.35.168 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 381 | lewis.ns.cloudflare.com | 2a06:98c1:50::ac40:239f | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 425 | 104.16.105.166 | 104.16.105.166 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 436 | 2a06:98c1:3121:cdc1:6b1b:cfe6:f0:eaa2 | 2a06:98c1:3121:cdc1:6b1b:cfe6:f0:eaa2 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 441 | 162.159.6.115 | 162.159.6.115 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 465 | 104.17.16.248 | 104.17.16.248 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 583 | 172.64.53.144 | 172.64.53.144 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 592 | 2a06:98c1:310b:eecc:184:7caf:f7e0:b92 | 2a06:98c1:310b:eecc:184:7caf:f7e0:b92 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 597 | 172.64.52.90 | 172.64.52.90 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 610 | 162.159.22.29 | 162.159.22.29 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 612 | 172.64.146.67 | 172.64.146.67 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 634 | 172.64.52.67 | 172.64.52.67 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 638 | 172.64.53.40 | 172.64.53.40 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 639 | 162.159.44.133 | 162.159.44.133 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 651 | cfip.xxxxxxxx.tk | 190.93.247.169 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 654 | cfip.xxxxxxxx.tk | 190.93.246.67 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 685 | 172.67.67.152 | 172.67.67.152 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 694 | 104.18.44.25 | 104.18.44.25 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 700 | 104.18.32.174 | 104.18.32.174 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 716 | 2a06:98c1:3106:0:ef95:8505:25ee:e5ae | 2a06:98c1:3106:0:ef95:8505:25ee:e5ae | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 734 | cmcc.877774.xyz | 104.16.148.8 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 763 | 6666.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 774 | 104.26.13.110 | 104.26.13.110 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 786 | 162.159.3.128 | 162.159.3.128 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 811 | 172.64.229.156 | 172.64.229.156 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 819 | 104.20.22.91 | 104.20.22.91 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 823 | 172.67.64.116 | 172.67.64.116 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 861 | 2a06:98c1:310b:d5f5:74cf:317a:6c39:4c5f | 2a06:98c1:310b:d5f5:74cf:317a:6c39:4c5f | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 871 | 108.162.198.152 | 108.162.198.152 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 876 | 104.20.20.156 | 104.20.20.156 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 900 | 162.159.33.28 | 162.159.33.28 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 905 | 104.18.40.200 | 104.18.40.200 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 916 | 104.25.254.14 | 104.25.254.14 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 918 | 162.159.33.191 | 162.159.33.191 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 926 | 162.159.44.36 | 162.159.44.36 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 930 | 162.159.38.68 | 162.159.38.68 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 935 | 172.64.229.15 | 172.64.229.15 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 953 | 104.26.5.53 | 104.26.5.53 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 963 | 172.67.65.81 | 172.67.65.81 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 968 | 104.17.56.177 | 104.17.56.177 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 972 | 172.67.79.166 | 172.67.79.166 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 980 | 104.17.62.194 | 104.17.62.194 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 990 | 162.159.44.246 | 162.159.44.246 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1002 | 162.159.45.8 | 162.159.45.8 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1031 | 172.67.66.118 | 172.67.66.118 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1042 | 104.20.24.17 | 104.20.24.17 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1046 | 104.20.30.77 | 104.20.30.77 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1056 | 162.159.137.92 | 162.159.137.92 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 1095 | 2a06:98c1:51:0:c6c6:cbf:a418:66a8 | 2a06:98c1:51:0:c6c6:cbf:a418:66a8 | IPv6 | h2 | ✅ 成功 | 44 | cloudflare |
| 1098 | 162.159.16.150 | 162.159.16.150 | IPv4 | h2 | ✅ 成功 | 44 | cloudflare |
| 73 | cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 87 | sullivan.ns.cloudflare.com | 2a06:98c1:50::ac40:23a1 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 106 | pranab.ns.cloudflare.com | 2a06:98c1:50::ac40:23c7 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 122 | cris.ns.cloudflare.com | 2a06:98c1:50::ac40:23ca | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 123 | www.4444.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 130 | www.4444.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 140 | zread.ai | 104.21.76.240 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 174 | 172.64.151.55 | 172.64.151.55 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 201 | braden.ns.cloudflare.com | 108.162.195.169 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 211 | bowen.ns.cloudflare.com | 2606:4700:58::a29f:2c53 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 222 | time.is | 104.26.13.54 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 252 | ip.sb | 2606:4700:20::ac43:4bac | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 273 | 104.18.14.76 | 104.18.14.76 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 276 | dnschecker.org | 104.26.6.89 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 304 | 456.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 310 | 456.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 344 | eur.877774.xyz | 104.21.26.150 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 361 | 108.162.198.54 | 108.162.198.54 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 392 | 173.245.49.194 | 173.245.49.194 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 401 | 104.26.3.162 | 104.26.3.162 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 404 | 104.18.81.19 | 104.18.81.19 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 417 | 104.19.220.22 | 104.19.220.22 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 428 | 104.16.65.1 | 104.16.65.1 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 445 | 104.18.47.253 | 104.18.47.253 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 551 | 104.20.17.233 | 104.20.17.233 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 569 | ct.877774.xyz | 172.64.229.44 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 578 | 172.64.52.15 | 172.64.52.15 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 591 | 2a06:98c1:3100:0:a3:1339:d974:e2c | 2a06:98c1:3100:0:a3:1339:d974:e2c | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 608 | 172.64.42.158 | 172.64.42.158 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 628 | 104.17.215.66 | 104.17.215.66 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 655 | cfip.xxxxxxxx.tk | 104.16.241.229 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 658 | 162.159.61.106 | 162.159.61.106 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 674 | 104.17.53.129 | 104.17.53.129 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 681 | 104.26.6.171 | 104.26.6.171 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 691 | 104.17.110.226 | 104.17.110.226 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 753 | 162.159.36.205 | 162.159.36.205 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 769 | 6666.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 795 | 2a06:98c1:3108:0:edda:98f0:da65:4271 | 2a06:98c1:3108:0:edda:98f0:da65:4271 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 835 | 104.18.148.235 | 104.18.148.235 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 840 | 104.16.247.125 | 104.16.247.125 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 846 | 104.25.240.123 | 104.25.240.123 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 848 | 104.18.44.159 | 104.18.44.159 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 855 | 172.64.152.85 | 172.64.152.85 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 889 | 104.25.243.36 | 104.25.243.36 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 906 | 2a06:98c1:3102:8768:b929:7455:f040:5aee | 2a06:98c1:3102:8768:b929:7455:f040:5aee | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 914 | 104.25.249.225 | 104.25.249.225 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 943 | 104.18.32.161 | 104.18.32.161 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 964 | 172.67.77.185 | 172.67.77.185 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 969 | 104.25.246.24 | 104.25.246.24 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 970 | 104.25.240.227 | 104.25.240.227 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 985 | 104.19.144.110 | 104.19.144.110 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 998 | 172.64.229.149 | 172.64.229.149 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1010 | 104.26.1.55 | 104.26.1.55 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1032 | 104.26.0.45 | 104.26.0.45 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1034 | 172.64.149.150 | 172.64.149.150 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1051 | 104.17.211.247 | 104.17.211.247 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1054 | 104.20.28.236 | 104.20.28.236 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1069 | 104.16.159.153 | 104.16.159.153 | IPv4 | h2 | ✅ 成功 | 45 | cloudflare |
| 1094 | 2a06:98c1:3100:d955:99d5:aac7:737e:f54c | 2a06:98c1:3100:d955:99d5:aac7:737e:f54c | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 1111 | 2a06:98c1:51:7b:aa82:5d9d:8a4f:b468 | 2a06:98c1:51:7b:aa82:5d9d:8a4f:b468 | IPv6 | h2 | ✅ 成功 | 45 | cloudflare |
| 13 | 172.67.110.232 | 172.67.110.232 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 14 | www.ipget.net | 172.67.207.26 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 18 | comicabc.com | 104.21.64.10 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 63 | www.visa.com.sg | 104.18.13.229 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 64 | cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 114 | 4444.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 154 | kyree.ns.cloudflare.com | 172.64.35.207 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 180 | bestcf.030101.xyz | 104.17.101.139 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 195 | cf.090227.xyz | 172.64.145.158 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 196 | cf.090227.xyz | 2a06:98c1:3103::ac40:9052 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 213 | bowen.ns.cloudflare.com | 2a06:98c1:50::ac40:2353 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 258 | whatismyipaddress.com | 104.19.222.79 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 261 | whatismyipaddress.com | 2606:4700::6813:df4f | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 321 | www.udemy.com | 2606:4700::6810:8fed | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 363 | 104.17.162.3 | 104.17.162.3 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 370 | www.wto.org | 104.18.41.190 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 376 | lewis.ns.cloudflare.com | 108.162.195.159 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 379 | lewis.ns.cloudflare.com | 2606:4700:58::a29f:2c9f | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 386 | japan.com | 104.26.5.60 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 387 | japan.com | 2606:4700:20::681a:43c | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 396 | 172.64.229.7 | 172.64.229.7 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 454 | 172.67.65.159 | 172.67.65.159 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 457 | 104.20.30.198 | 104.20.30.198 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 462 | 172.64.229.191 | 172.64.229.191 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 466 | 104.17.168.159 | 104.17.168.159 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 472 | 162.159.38.192 | 162.159.38.192 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 482 | 2a06:98c1:50:eac5:5d97:a2b9:5c3d:de2b | 2a06:98c1:50:eac5:5d97:a2b9:5c3d:de2b | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 495 | 104.20.20.42 | 104.20.20.42 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 550 | 104.26.6.159 | 104.26.6.159 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 553 | 104.26.8.192 | 104.26.8.192 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 561 | 104.17.154.254 | 104.17.154.254 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 596 | 162.159.45.145 | 162.159.45.145 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 605 | 162.159.18.240 | 162.159.18.240 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 636 | 162.159.21.222 | 162.159.21.222 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 653 | cfip.xxxxxxxx.tk | 104.21.91.19 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 664 | 2400:cb00:2049:e59d:7af6:c00c:4418:a88a | 2400:cb00:2049:e59d:7af6:c00c:4418:a88a | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 693 | 104.17.25.87 | 104.17.25.87 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 698 | 104.18.36.1 | 104.18.36.1 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 738 | cmcc.877774.xyz | 104.16.148.12 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 779 | 104.18.172.20 | 104.18.172.20 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 787 | 162.159.38.134 | 162.159.38.134 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 796 | 2a06:98c1:310d:85:ac4c:8137:506:5188 | 2a06:98c1:310d:85:ac4c:8137:506:5188 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 803 | 2a06:98c1:3106:f0:fa21:b1c1:bf1b:efd7 | 2a06:98c1:3106:f0:fa21:b1c1:bf1b:efd7 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 813 | 162.159.20.46 | 162.159.20.46 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 817 | 104.26.11.33 | 104.26.11.33 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 870 | 162.159.39.196 | 162.159.39.196 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 875 | 172.67.64.123 | 172.67.64.123 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 904 | 172.64.146.121 | 172.64.146.121 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 910 | 2a06:98c1:3100:e1e7:ae26:af07:44a6:82da | 2a06:98c1:3100:e1e7:ae26:af07:44a6:82da | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 939 | 2a06:98c1:3102:e8:d68a:c7f6:afaa:c80b | 2a06:98c1:3102:e8:d68a:c7f6:afaa:c80b | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 945 | 104.26.2.242 | 104.26.2.242 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 950 | 2a06:98c1:3104::f3:8fed:cac0 | 2a06:98c1:3104::f3:8fed:cac0 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 954 | 172.67.73.196 | 172.67.73.196 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 976 | 104.25.242.249 | 104.25.242.249 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1004 | 162.159.9.224 | 162.159.9.224 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1013 | 2a06:98c1:3100:7f11:4805:1c25:83ab:6033 | 2a06:98c1:3100:7f11:4805:1c25:83ab:6033 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 1045 | 162.159.145.245 | 162.159.145.245 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1057 | 104.26.7.106 | 104.26.7.106 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1068 | 104.17.126.38 | 104.17.126.38 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1080 | 162.159.38.120 | 162.159.38.120 | IPv4 | h2 | ✅ 成功 | 46 | cloudflare |
| 1114 | 2a06:98c1:310d:4d1d:135a:5c6:5e9a:b987 | 2a06:98c1:310d:4d1d:135a:5c6:5e9a:b987 | IPv6 | h2 | ✅ 成功 | 46 | cloudflare |
| 31 | www.4chan.org | 104.16.228.229 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 32 | www.4chan.org | 104.16.229.229 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 58 | www.okcupid.com | 104.17.48.63 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 68 | cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 91 | yx-auto.pages.dev | 2606:4700:310c::ac42:2f70 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 104 | pranab.ns.cloudflare.com | 2606:4700:58::a29f:2cc7 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 131 | www.4444.cloudflare.182682.xyz | 2606:4700:e7::3151:47a9 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 136 | toy-people.com | 2606:4700:20::681a:224 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 144 | 104.16.223.179 | 104.16.223.179 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 190 | fbi.gov | 104.16.148.244 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 192 | fbi.gov | 2606:4700::6810:94f4 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 194 | cf.090227.xyz | 104.18.42.98 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 198 | www.ipchicken.com | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 217 | moura.ns.cloudflare.com | 162.159.44.217 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 279 | dnschecker.org | 2606:4700:20::681a:659 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 289 | gamer.com.tw | 104.18.3.197 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 331 | icook.tw | 2606:4700:10::ac42:9e73 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 360 | damien.ns.cloudflare.com | 2a06:98c1:50::ac40:23a8 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 362 | 172.64.82.114 | 172.64.82.114 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 374 | 162.159.140.85 | 162.159.140.85 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 411 | abdullah.ns.cloudflare.com | 2606:4700:58::a29f:2ccb | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 446 | 173.245.58.237 | 173.245.58.237 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 447 | 104.18.45.95 | 104.18.45.95 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 455 | 104.20.22.185 | 104.20.22.185 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 467 | 104.17.170.110 | 104.17.170.110 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 519 | ipinfo.in | 104.21.21.129 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 589 | 2a06:98c1:3104:0:4:5eb4:7182:42a0 | 2a06:98c1:3104:0:4:5eb4:7182:42a0 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 611 | 172.64.153.141 | 172.64.153.141 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 627 | 104.19.34.231 | 104.19.34.231 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 656 | 108.162.198.148 | 108.162.198.148 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 676 | 104.18.41.101 | 104.18.41.101 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 677 | 172.64.32.77 | 172.64.32.77 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 708 | 2a06:98c1:3101:d7:eb36:3a1:c94d:32de | 2a06:98c1:3101:d7:eb36:3a1:c94d:32de | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 746 | cmcc.877774.xyz | 104.16.149.7 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 765 | 6666.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 766 | 6666.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 770 | 104.26.0.210 | 104.26.0.210 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 826 | 104.20.19.180 | 104.20.19.180 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 845 | 104.25.241.85 | 104.25.241.85 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 847 | 172.64.229.185 | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 854 | 108.162.198.223 | 108.162.198.223 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 862 | 2a06:98c1:51:8:7944:48b0:1301:5ced | 2a06:98c1:51:8:7944:48b0:1301:5ced | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 894 | 104.25.246.117 | 104.25.246.117 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 917 | 104.25.250.205 | 104.25.250.205 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 919 | 162.159.39.74 | 162.159.39.74 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 921 | 172.64.144.132 | 172.64.144.132 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 923 | 2400:cb00:2049:5d:a92a:97f:6fa3:f803 | 2400:cb00:2049:5d:a92a:97f:6fa3:f803 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 927 | 172.64.52.168 | 172.64.52.168 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 928 | 162.159.43.50 | 162.159.43.50 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 946 | 104.26.5.121 | 104.26.5.121 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 965 | 104.26.3.117 | 104.26.3.117 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 1007 | 162.159.18.22 | 162.159.18.22 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 1026 | 172.64.49.54 | 172.64.49.54 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 1081 | 172.64.52.227 | 172.64.52.227 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 1100 | 2803:f800:50:6a35:2305:8385:b5c9:df67 | 2803:f800:50:6a35:2305:8385:b5c9:df67 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 1105 | 2a06:98c1:50:d138:459d:9395:648d:4960 | 2a06:98c1:50:d138:459d:9395:648d:4960 | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 1109 | 2a06:98c1:51:4b:681b:bb6:d563:363f | 2a06:98c1:51:4b:681b:bb6:d563:363f | IPv6 | h2 | ✅ 成功 | 47 | cloudflare |
| 1115 | 172.64.48.39 | 172.64.48.39 | IPv4 | h2 | ✅ 成功 | 47 | cloudflare |
| 23 | 103.160.204.59 | 103.160.204.59 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 28 | iplocation.io | 2606:4700:20::681a:ade | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 30 | iplocation.io | 2606:4700:20::ac43:4664 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 42 | icook.hk | 2606:4700:3033::6815:5ad2 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 44 | cu.877774.xyz | 104.18.42.54 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 49 | huxley.ns.cloudflare.com | 172.64.35.188 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 61 | www.okcupid.com | 104.16.144.63 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 72 | cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 75 | www.hugedomains.com | 172.67.70.191 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 86 | sullivan.ns.cloudflare.com | 2803:f800:50::6ca2:c3a1 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 88 | yx-auto.pages.dev | 172.66.47.112 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 89 | yx-auto.pages.dev | 172.66.44.144 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 175 | asia.877774.xyz | 104.17.142.146 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 191 | fbi.gov | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 204 | braden.ns.cloudflare.com | 2606:4700:58::a29f:2ca9 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 220 | moura.ns.cloudflare.com | 2803:f800:50::6ca2:c3d9 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 225 | time.is | 2606:4700:20::ac43:449d | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 233 | rustam.ns.cloudflare.com | 2606:4700:58::a29f:2c94 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 251 | ip.sb | 2606:4700:20::681a:d1f | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 255 | ip.gs | 2606:4700:3035::ac43:a01c | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 256 | ip.gs | 2606:4700:3036::6815:eb0 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 262 | singapore.com | 104.26.12.140 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 266 | singapore.com | 2606:4700:20::ac43:4bc2 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 288 | [2606:4700:4403::7357:544f] | 2606:4700:4403::7357:544f | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 300 | uriah.ns.cloudflare.com | 172.64.35.194 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 302 | uriah.ns.cloudflare.com | 2803:f800:50::6ca2:c3c2 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 307 | 456.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 312 | 456.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 343 | eur.877774.xyz | 104.21.47.209 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 352 | 172.67.181.209 | 172.67.181.209 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 383 | 172.64.91.69 | 172.64.91.69 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 385 | japan.com | 172.67.70.92 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 406 | 104.18.166.129 | 104.18.166.129 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 413 | abdullah.ns.cloudflare.com | 2a06:98c1:50::ac40:23cb | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 427 | 104.18.189.153 | 104.18.189.153 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 438 | 2a06:98c1:3120:c39b:f77:4fc1:b18b:c12 | 2a06:98c1:3120:c39b:f77:4fc1:b18b:c12 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 456 | 104.20.24.107 | 104.20.24.107 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 460 | 104.17.169.180 | 104.17.169.180 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 469 | 104.17.105.198 | 104.17.105.198 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 508 | 104.17.101.208 | 104.17.101.208 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 544 | wilson.ns.cloudflare.com | 172.64.35.110 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 562 | ct.877774.xyz | 172.64.229.161 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 566 | ct.877774.xyz | 172.64.229.195 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 570 | 104.17.53.25 | 104.17.53.25 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 617 | 104.26.5.101 | 104.26.5.101 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 621 | 172.67.75.11 | 172.67.75.11 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 647 | cfip.xxxxxxxx.tk | 198.41.214.141 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 666 | 2a06:98c1:310b:0:e474:ff3f:ec26:c616 | 2a06:98c1:310b:0:e474:ff3f:ec26:c616 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 706 | 104.18.40.202 | 104.18.40.202 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 710 | 2a06:98c1:3105:0:2359:4222:d558:10fb | 2a06:98c1:3105:0:2359:4222:d558:10fb | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 718 | 108.162.198.85 | 108.162.198.85 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 724 | 162.159.39.146 | 162.159.39.146 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 733 | cmcc.877774.xyz | 104.16.148.7 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 737 | cmcc.877774.xyz | 104.16.148.11 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 764 | 6666.cloudflare.182682.xyz | 104.21.227.134 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 782 | 104.25.245.233 | 104.25.245.233 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 791 | 172.64.53.202 | 172.64.53.202 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 794 | 108.162.198.70 | 108.162.198.70 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 815 | 172.67.70.56 | 172.67.70.56 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 832 | 104.25.247.129 | 104.25.247.129 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 843 | 104.17.171.88 | 104.17.171.88 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 859 | 2a06:98c1:3102:94:1604:ebd:f1ec:37be | 2a06:98c1:3102:94:1604:ebd:f1ec:37be | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 877 | 172.67.77.104 | 172.67.77.104 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 880 | 172.67.65.44 | 172.67.65.44 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 885 | 104.25.241.235 | 104.25.241.235 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 893 | 104.25.254.47 | 104.25.254.47 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 912 | 2a06:98c1:3100:b3:af54:9923:e84:af58 | 2a06:98c1:3100:b3:af54:9923:e84:af58 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 913 | 2a06:98c1:3100:22:21cb:7546:1cd8:a79f | 2a06:98c1:3100:22:21cb:7546:1cd8:a79f | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 940 | 2a06:98c1:3104:da84:1c63:f149:4d21:b339 | 2a06:98c1:3104:da84:1c63:f149:4d21:b339 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 941 | 2803:f800:50:9516:e4a1:4ba9:1c5e:7533 | 2803:f800:50:9516:e4a1:4ba9:1c5e:7533 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 947 | 104.26.15.142 | 104.26.15.142 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 949 | 2a06:98c1:3106:6a:7ba4:346b:e06c:71c7 | 2a06:98c1:3106:6a:7ba4:346b:e06c:71c7 | IPv6 | h2 | ✅ 成功 | 48 | cloudflare |
| 992 | 172.64.53.220 | 172.64.53.220 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 1047 | 104.26.5.150 | 104.26.5.150 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 1049 | 104.26.6.117 | 104.26.6.117 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 1059 | 172.67.74.174 | 172.67.74.174 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 1073 | 104.17.173.244 | 104.17.173.244 | IPv4 | h2 | ✅ 成功 | 48 | cloudflare |
| 24 | 104.18.254.88 | 104.18.254.88 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 29 | iplocation.io | 2606:4700:20::681a:bde | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 43 | cu.877774.xyz | 172.64.145.202 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 100 | na.877774.xyz | 104.18.38.235 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 107 | 4444.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 160 | dylan.ns.cloudflare.com | 172.64.35.187 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 176 | asia.877774.xyz | 104.16.211.153 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 177 | asia.877774.xyz | 104.17.139.62 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 179 | bestcf.030101.xyz | 104.17.185.207 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 197 | cf.090227.xyz | 2a06:98c1:3108::6812:2bae | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 278 | dnschecker.org | 172.67.73.216 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 313 | 456.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 320 | www.udemy.com | 104.16.142.237 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 328 | icook.tw | 172.66.158.115 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 338 | www.digitalocean.com | 2606:4700::6813:ae44 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 342 | eur.877774.xyz | 104.21.29.164 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 373 | 198.41.208.15 | 198.41.208.15 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 424 | 104.18.223.253 | 104.18.223.253 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 433 | 2a06:98c1:3121:0:efde:82d1:8124:3fed | 2a06:98c1:3121:0:efde:82d1:8124:3fed | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 448 | 172.64.150.30 | 172.64.150.30 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 452 | 172.67.74.57 | 172.67.74.57 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 504 | 104.17.119.199 | 104.17.119.199 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 509 | 104.16.157.50 | 104.16.157.50 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 513 | ipv4.ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 533 | www.gov.ua | 172.67.209.127 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 572 | 104.17.21.106 | 104.17.21.106 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 579 | 162.159.39.99 | 162.159.39.99 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 590 | 2a06:98c1:3100:27a8:686d:aa56:c917:4726 | 2a06:98c1:3100:27a8:686d:aa56:c917:4726 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 640 | 162.159.38.67 | 162.159.38.67 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 649 | cfip.xxxxxxxx.tk | 104.18.228.35 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 659 | 2a06:98c1:51::c0bc:f0fe:59ba | 2a06:98c1:51::c0bc:f0fe:59ba | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 660 | 2a06:98c1:310b:0:e474:ff3f:ecc6:5793 | 2a06:98c1:310b:0:e474:ff3f:ecc6:5793 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 684 | 172.67.79.150 | 172.67.79.150 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 709 | 2a06:98c1:3109:be88:aeb7:b6d2:c9f2:4d65 | 2a06:98c1:3109:be88:aeb7:b6d2:c9f2:4d65 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 771 | 2803:f800:51:0:fc87:e2d6:88c3:378b | 2803:f800:51:0:fc87:e2d6:88c3:378b | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 775 | 104.17.97.228 | 104.17.97.228 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 777 | 104.25.244.239 | 104.25.244.239 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 784 | 104.25.250.174 | 104.25.250.174 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 866 | 172.64.53.195 | 172.64.53.195 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 867 | 162.159.45.237 | 162.159.45.237 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 886 | 104.25.240.21 | 104.25.240.21 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 888 | 104.25.245.173 | 104.25.245.173 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 896 | 108.162.198.206 | 108.162.198.206 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 901 | 162.159.44.199 | 162.159.44.199 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 907 | 2a06:98c1:310a:0:de:2b25:85a5:8a26 | 2a06:98c1:310a:0:de:2b25:85a5:8a26 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 920 | 172.64.153.183 | 172.64.153.183 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 966 | 104.25.244.87 | 104.25.244.87 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 1022 | 162.159.42.140 | 162.159.42.140 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 1075 | 172.64.229.202 | 172.64.229.202 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 1092 | 172.64.159.195 | 172.64.159.195 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 1101 | 2a06:98c1:3108::d6ec:e396:95d2 | 2a06:98c1:3108::d6ec:e396:95d2 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 1103 | 2a06:98c1:310b:0:9c31:ff76:6015:b9b4 | 2a06:98c1:310b:0:9c31:ff76:6015:b9b4 | IPv6 | h2 | ✅ 成功 | 49 | cloudflare |
| 1116 | 162.159.17.213 | 162.159.17.213 | IPv4 | h2 | ✅ 成功 | 49 | cloudflare |
| 21 | comicabc.com | 2606:4700:3037::ac43:ae15 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 50 | huxley.ns.cloudflare.com | 2606:4700:58::a29f:2cbc | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 52 | huxley.ns.cloudflare.com | 2a06:98c1:50::ac40:23bc | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 66 | cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 71 | cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 82 | sullivan.ns.cloudflare.com | 108.162.195.161 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 85 | sullivan.ns.cloudflare.com | 2606:4700:58::a29f:2ca1 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 171 | www.whatismyip.com | 2606:4700:20::681a:c17 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 183 | saas.sin.fan | 162.159.36.20 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 186 | xn--b6gac.eu.org | 172.67.153.253 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 193 | fbi.gov | 2606:4700::6810:95f4 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 205 | braden.ns.cloudflare.com | 2803:f800:50::6ca2:c3a9 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 238 | palera.in | 172.67.157.122 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 247 | ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 248 | ip.sb | 104.26.13.31 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 249 | ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 257 | 104.18.42.26 | 104.18.42.26 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 268 | www.visa.com.hk | 104.18.20.69 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 280 | dnschecker.org | 2606:4700:20::681a:759 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 281 | dnschecker.org | 2606:4700:20::ac43:49d8 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 283 | ashton.ns.cloudflare.com | 162.159.44.173 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 286 | ashton.ns.cloudflare.com | 2803:f800:50::6ca2:c3ad | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 294 | julio.ns.cloudflare.com | 2606:4700:58::a29f:2cd1 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 299 | uriah.ns.cloudflare.com | 162.159.44.194 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 309 | 456.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 311 | 456.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 315 | tasteatlas.com | 104.17.36.105 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 319 | www.udemy.com | 104.16.143.237 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 334 | 104.18.78.214 | 104.18.78.214 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 335 | www.digitalocean.com | 104.19.174.68 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 354 | 104.19.175.123 | 104.19.175.123 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 399 | 162.159.137.204 | 162.159.137.204 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 403 | 162.159.140.116 | 162.159.140.116 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 440 | 162.159.21.116 | 162.159.21.116 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 450 | 104.26.15.85 | 104.26.15.85 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 459 | 104.26.3.176 | 104.26.3.176 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 468 | 104.18.39.15 | 104.18.39.15 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 520 | ipinfo.in | 172.67.198.203 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 535 | www.gov.ua | 2606:4700:3037::ac43:d17f | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 549 | 172.67.68.252 | 172.67.68.252 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 555 | 172.67.76.195 | 172.67.76.195 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 574 | 172.64.147.235 | 172.64.147.235 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 600 | 172.64.53.181 | 172.64.53.181 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 620 | 104.26.1.181 | 104.26.1.181 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 629 | 104.19.153.47 | 104.19.153.47 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 635 | 162.159.42.146 | 162.159.42.146 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 690 | 104.19.144.159 | 104.19.144.159 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 703 | 104.18.47.46 | 104.18.47.46 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 714 | 2a06:98c1:3102:0:90e8:b850:3d09:cfc8 | 2a06:98c1:3102:0:90e8:b850:3d09:cfc8 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 731 | cmcc.877774.xyz | 104.16.148.5 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 754 | 104.26.1.88 | 104.26.1.88 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 785 | 162.159.11.128 | 162.159.11.128 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 808 | 162.159.45.67 | 162.159.45.67 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 816 | 172.67.67.0 | 172.67.67.0 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 869 | 162.159.44.60 | 162.159.44.60 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 909 | 2a06:98c1:310c::dd:f399:427e | 2a06:98c1:310c::dd:f399:427e | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 911 | 2a06:98c1:310a:d:1bd6:bbd1:d9a0:60b3 | 2a06:98c1:310a:d:1bd6:bbd1:d9a0:60b3 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 938 | 2a06:98c1:310c:5874:e72e:d139:ebe3:e5ea | 2a06:98c1:310c:5874:e72e:d139:ebe3:e5ea | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 982 | 104.17.118.227 | 104.17.118.227 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1011 | 2a06:98c1:50::46cb:8c34:28e3 | 2a06:98c1:50::46cb:8c34:28e3 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 1014 | 2a06:98c1:3108:1a71:a277:b3bf:80a:c2a3 | 2a06:98c1:3108:1a71:a277:b3bf:80a:c2a3 | IPv6 | h2 | ✅ 成功 | 50 | cloudflare |
| 1035 | 104.18.36.195 | 104.18.36.195 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1038 | 172.64.148.182 | 172.64.148.182 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1043 | 104.26.9.202 | 104.26.9.202 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1062 | 104.18.89.123 | 104.18.89.123 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1064 | 172.64.157.43 | 172.64.157.43 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1065 | 104.16.255.232 | 104.16.255.232 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 1070 | 104.16.152.223 | 104.16.152.223 | IPv4 | h2 | ✅ 成功 | 50 | cloudflare |
| 17 | www.ipget.net | 2606:4700:3031::6815:fd4 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 36 | trevor.ns.cloudflare.com | 2606:4700:58::a29f:2c9a | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 56 | cf.877774.xyz | 2a06:98c1:310b::ac40:9242 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 80 | 172.67.243.218 | 172.67.243.218 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 101 | pranab.ns.cloudflare.com | 108.162.195.199 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 117 | cris.ns.cloudflare.com | 108.162.195.202 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 149 | decker.ns.cloudflare.com | 2803:f800:50::6ca2:c39b | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 170 | www.whatismyip.com | 2606:4700:20::ac43:4581 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 203 | braden.ns.cloudflare.com | 172.64.35.169 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 227 | time.is | 2606:4700:20::681a:d36 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 234 | rustam.ns.cloudflare.com | 2803:f800:50::6ca2:c394 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 274 | 162.159.133.85 | 162.159.133.85 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 330 | icook.tw | 2606:4700:10::6814:1c4a | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 332 | [2606:4700:83be::11:74f] | 2606:4700:83be::11:74f | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 346 | otto.ns.cloudflare.com | 108.162.195.135 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 348 | otto.ns.cloudflare.com | 172.64.35.135 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 356 | damien.ns.cloudflare.com | 162.159.44.168 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 364 | ifconfig.co | 104.21.54.91 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 367 | ifconfig.co | 2606:4700:3030::ac43:a86a | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 382 | 162.159.61.183 | 162.159.61.183 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 400 | 162.159.128.253 | 162.159.128.253 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 439 | 162.159.17.243 | 162.159.17.243 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 464 | 104.16.255.1 | 104.16.255.1 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 563 | ct.877774.xyz | 172.64.229.173 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 602 | 108.162.198.170 | 108.162.198.170 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 626 | 104.17.115.224 | 104.17.115.224 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 661 | 2a06:98c1:310a:b523:52dd:b43c:a5f:5a85 | 2a06:98c1:310a:b523:52dd:b43c:a5f:5a85 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 721 | 172.64.53.165 | 172.64.53.165 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 828 | 172.67.76.61 | 172.67.76.61 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 856 | 2a06:98c1:3102:94:16cd:b988:5dae:1295 | 2a06:98c1:3102:94:16cd:b988:5dae:1295 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 857 | 2400:cb00:2049:ec9e:b468:412c:1558:69cb | 2400:cb00:2049:ec9e:b468:412c:1558:69cb | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 858 | 2a06:98c1:310a:f7b9:fbc7:ac52:15f3:609c | 2a06:98c1:310a:f7b9:fbc7:ac52:15f3:609c | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 863 | 2a06:98c1:310b:0:cfd2:7ebe:a043:8535 | 2a06:98c1:310b:0:cfd2:7ebe:a043:8535 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 887 | 162.159.45.150 | 162.159.45.150 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 892 | 104.25.242.137 | 104.25.242.137 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 908 | 2a06:98c1:3100:22:21ad:d760:d542:16c8 | 2a06:98c1:3100:22:21ad:d760:d542:16c8 | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 932 | 162.159.39.189 | 162.159.39.189 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 936 | 2a06:98c1:51:a594:2926:2b16:6e8d:843e | 2a06:98c1:51:a594:2926:2b16:6e8d:843e | IPv6 | h2 | ✅ 成功 | 51 | cloudflare |
| 951 | 104.20.24.239 | 104.20.24.239 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 962 | 104.20.22.141 | 104.20.22.141 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 967 | 104.25.254.89 | 104.25.254.89 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 993 | 172.64.52.194 | 172.64.52.194 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 1076 | 104.16.248.22 | 104.16.248.22 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 1090 | 162.159.44.151 | 162.159.44.151 | IPv4 | h2 | ✅ 成功 | 51 | cloudflare |
| 120 | cris.ns.cloudflare.com | 2606:4700:58::a29f:2cca | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 185 | 162.159.19.219 | 162.159.19.219 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 235 | rustam.ns.cloudflare.com | 2a06:98c1:50::ac40:2394 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 264 | singapore.com | 172.67.75.194 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 275 | [2606:4700:440b::3e6e:5f06] | 2606:4700:440b::3e6e:5f06 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 287 | ashton.ns.cloudflare.com | 2a06:98c1:50::ac40:23ad | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 329 | icook.tw | 104.20.28.74 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 336 | www.digitalocean.com | 104.19.173.68 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 420 | 104.19.212.207 | 104.19.212.207 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 422 | 104.31.16.158 | 104.31.16.158 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 423 | 104.17.167.134 | 104.17.167.134 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 432 | 2a06:98c1:3121:c677:c614:1f96:d4bf:a723 | 2a06:98c1:3121:c677:c614:1f96:d4bf:a723 | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 473 | 172.64.53.0 | 172.64.53.0 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 505 | 104.19.50.35 | 104.19.50.35 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 536 | 104.18.39.228 | 104.18.39.228 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 556 | 104.17.24.232 | 104.17.24.232 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 559 | 104.16.147.114 | 104.16.147.114 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 568 | ct.877774.xyz | 172.64.229.236 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 599 | 104.20.25.82 | 104.20.25.82 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 637 | 162.159.39.136 | 162.159.39.136 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 678 | 162.159.16.136 | 162.159.16.136 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 728 | cmcc.877774.xyz | 104.16.148.2 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 736 | cmcc.877774.xyz | 104.16.148.10 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 755 | 104.20.28.239 | 104.20.28.239 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 838 | 104.25.247.78 | 104.25.247.78 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 890 | 104.25.250.121 | 104.25.250.121 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 933 | 172.64.229.158 | 172.64.229.158 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 1001 | 104.18.33.253 | 104.18.33.253 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 1012 | 2a06:98c1:51:4e:5188:50a9:cbd1:917d | 2a06:98c1:51:4e:5188:50a9:cbd1:917d | IPv6 | h2 | ✅ 成功 | 52 | cloudflare |
| 1061 | 104.17.177.186 | 104.17.177.186 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 1072 | 104.16.152.68 | 104.16.152.68 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 1118 | 104.18.37.110 | 104.18.37.110 | IPv4 | h2 | ✅ 成功 | 52 | cloudflare |
| 33 | trevor.ns.cloudflare.com | 108.162.195.154 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 37 | trevor.ns.cloudflare.com | 2803:f800:50::6ca2:c39a | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 76 | www.hugedomains.com | 104.26.7.37 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 142 | zread.ai | 2606:4700:3030::6815:4cf0 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 181 | bestcf.030101.xyz | 2606:4700:4b:56d4:21b8:5bd2:a220:6156 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 216 | moura.ns.cloudflare.com | 108.162.195.217 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 253 | ip.gs | 104.21.14.176 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 390 | 172.64.48.226 | 172.64.48.226 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 407 | 198.41.208.224 | 198.41.208.224 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 419 | 104.18.255.167 | 104.18.255.167 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 483 | 2803:f800:50:9a81:aaf8:2b9b:dd37:67e2 | 2803:f800:50:9a81:aaf8:2b9b:dd37:67e2 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 494 | 104.20.21.161 | 104.20.21.161 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 502 | 104.19.44.238 | 104.19.44.238 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 514 | ipv4.ip.sb | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 542 | wilson.ns.cloudflare.com | 108.162.195.110 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 582 | 162.159.38.35 | 162.159.38.35 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 625 | 104.17.170.137 | 104.17.170.137 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 630 | 104.17.209.79 | 104.17.209.79 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 632 | 104.17.25.241 | 104.17.25.241 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 641 | cfip.xxxxxxxx.tk | 104.27.21.118 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 644 | cfip.xxxxxxxx.tk | 104.25.105.1 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 657 | 162.159.45.165 | 162.159.45.165 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 682 | 172.67.78.67 | 172.67.78.67 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 686 | 104.20.17.51 | 104.20.17.51 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 740 | cmcc.877774.xyz | 104.16.149.1 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 747 | cmcc.877774.xyz | 104.16.149.8 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 807 | 172.64.52.224 | 172.64.52.224 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 829 | 172.64.146.137 | 172.64.146.137 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 839 | 104.25.241.19 | 104.25.241.19 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 995 | 108.162.198.232 | 108.162.198.232 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 1017 | 2a06:98c1:3106:d8af:8b29:8a81:bf10:9cef | 2a06:98c1:3106:d8af:8b29:8a81:bf10:9cef | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 1025 | 162.159.45.69 | 162.159.45.69 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 1039 | 104.20.28.135 | 104.20.28.135 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 1040 | 104.20.29.239 | 104.20.29.239 | IPv4 | h2 | ✅ 成功 | 53 | cloudflare |
| 1108 | 2803:f800:51:37:f534:4775:c551:9ff6 | 2803:f800:51:37:f534:4775:c551:9ff6 | IPv6 | h2 | ✅ 成功 | 53 | cloudflare |
| 25 | iplocation.io | 104.26.10.222 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 128 | www.4444.cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 129 | www.4444.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 153 | kyree.ns.cloudflare.com | 162.159.44.207 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 199 | www.ipchicken.com | 104.26.7.112 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 239 | palera.in | 2606:4700:3032::ac43:9d7a | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 259 | whatismyipaddress.com | 104.19.223.79 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 325 | 198.62.62.4 | 198.62.62.4 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 359 | damien.ns.cloudflare.com | 2803:f800:50::6ca2:c3a8 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 414 | 104.19.148.121 | 104.19.148.121 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 434 | 2a06:98c1:3121:0:ef18:6ab0:b648:d756 | 2a06:98c1:3121:0:ef18:6ab0:b648:d756 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 444 | 162.159.46.238 | 162.159.46.238 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 516 | www.pcmag.com | 104.16.21.118 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 523 | steamdb.info | 104.20.34.212 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 557 | 104.17.50.237 | 104.17.50.237 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 575 | 162.159.45.176 | 162.159.45.176 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 577 | 162.159.45.65 | 162.159.45.65 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 584 | 2a06:98c1:51:eb89:13e1:e7d0:738a:d1e6 | 2a06:98c1:51:eb89:13e1:e7d0:738a:d1e6 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 593 | 2a06:98c1:3106::c5:5d39:736d | 2a06:98c1:3106::c5:5d39:736d | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 727 | cmcc.877774.xyz | 104.16.148.1 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 750 | cmcc.877774.xyz | 104.16.149.11 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 751 | cmcc.877774.xyz | 104.16.149.12 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 756 | 104.26.6.247 | 104.26.6.247 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 757 | 104.26.14.117 | 104.26.14.117 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 767 | 6666.cloudflare.182682.xyz | 2606:4700:8ca0::3dc4:21a2 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 789 | 162.159.58.17 | 162.159.58.17 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 800 | 2a06:98c1:3105:900d:4f38:5221:f77f:fe11 | 2a06:98c1:3105:900d:4f38:5221:f77f:fe11 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 805 | 162.159.38.45 | 162.159.38.45 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 853 | 162.159.40.8 | 162.159.40.8 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 902 | 172.64.53.103 | 172.64.53.103 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 984 | 104.17.165.38 | 104.17.165.38 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1003 | 162.159.3.222 | 162.159.3.222 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1005 | 162.159.44.58 | 162.159.44.58 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1023 | 162.159.44.139 | 162.159.44.139 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1048 | 172.67.70.68 | 172.67.70.68 | IPv4 | h2 | ✅ 成功 | 54 | cloudflare |
| 1093 | 2803:f800:51:0:8735:c47d:80:2f5e | 2803:f800:51:0:8735:c47d:80:2f5e | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 1102 | 2a06:98c1:3100:be9c:5ff5:a2a3:647f:34f1 | 2a06:98c1:3100:be9c:5ff5:a2a3:647f:34f1 | IPv6 | h2 | ✅ 成功 | 54 | cloudflare |
| 20 | comicabc.com | 2606:4700:3036::6815:400a | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 45 | [2606:4700:8de6::5fa2:799e] | 2606:4700:8de6::5fa2:799e | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 57 | www.okcupid.com | 104.18.160.63 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 70 | cloudflare.182682.xyz | 2606:4700:3035::1a4f:5642 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 135 | toy-people.com | 104.26.2.36 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 318 | tasteatlas.com | 2606:4700::6811:2469 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 421 | 104.17.69.244 | 104.17.69.244 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 449 | 172.67.68.211 | 172.67.68.211 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 515 | www.pcmag.com | 104.16.20.118 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 548 | 104.20.16.244 | 104.20.16.244 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 587 | 2a06:98c1:3105:0:db:557f:8a53:2469 | 2a06:98c1:3105:0:db:557f:8a53:2469 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 631 | 104.19.35.242 | 104.19.35.242 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 642 | cfip.xxxxxxxx.tk | 104.16.232.223 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 669 | 172.64.154.113 | 172.64.154.113 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 730 | cmcc.877774.xyz | 104.16.148.4 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 735 | cmcc.877774.xyz | 104.16.148.9 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 864 | 2a06:98c1:310b::fda8:fa9e:4a3e | 2a06:98c1:310b::fda8:fa9e:4a3e | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 942 | 2a06:98c1:3100:f702:ebbf:618b:76c:9ba7 | 2a06:98c1:3100:f702:ebbf:618b:76c:9ba7 | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 944 | 162.159.58.251 | 162.159.58.251 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 956 | 104.20.26.221 | 104.20.26.221 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 1041 | 104.20.27.11 | 104.20.27.11 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 1053 | 104.17.60.113 | 104.17.60.113 | IPv4 | h2 | ✅ 成功 | 55 | cloudflare |
| 1113 | 2a06:98c1:3100:4abd:4911:170c:c94a:913d | 2a06:98c1:3100:4abd:4911:170c:c94a:913d | IPv6 | h2 | ✅ 成功 | 55 | cloudflare |
| 165 | cloudflare-ip.mofashi.ltd | 104.26.4.60 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 214 | www.glassdoor.com | 104.16.25.46 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 219 | moura.ns.cloudflare.com | 2606:4700:58::a29f:2cd9 | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 224 | time.is | 172.67.68.157 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 245 | benedict.ns.cloudflare.com | 2803:f800:50::6ca2:c3cd | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 260 | whatismyipaddress.com | 2606:4700::6813:de4f | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 293 | julio.ns.cloudflare.com | 172.64.35.209 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 471 | 108.162.198.48 | 108.162.198.48 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 492 | 104.26.8.148 | 104.26.8.148 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 527 | cf.0sm.com | 104.21.7.133 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 537 | 104.18.44.148 | 104.18.44.148 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 571 | 104.16.251.143 | 104.16.251.143 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 624 | 104.17.211.218 | 104.17.211.218 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 711 | 2a06:98c1:3103:c550:9adb:34b4:ce11:19c | 2a06:98c1:3103:c550:9adb:34b4:ce11:19c | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 720 | 104.26.14.88 | 104.26.14.88 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 748 | cmcc.877774.xyz | 104.16.149.9 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 790 | 162.159.39.180 | 162.159.39.180 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 934 | 162.159.38.83 | 162.159.38.83 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 1008 | 2a06:98c1:3106:0:fb94:fc7b:2b7f:ae54 | 2a06:98c1:3106:0:fb94:fc7b:2b7f:ae54 | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 1019 | 162.159.48.153 | 162.159.48.153 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 1024 | 104.18.40.175 | 104.18.40.175 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 1071 | 104.17.188.11 | 104.17.188.11 | IPv4 | h2 | ✅ 成功 | 56 | cloudflare |
| 1104 | 2a06:98c1:3100:4abd:4911:58dd:b563:9b09 | 2a06:98c1:3100:4abd:4911:58dd:b563:9b09 | IPv6 | h2 | ✅ 成功 | 56 | cloudflare |
| 78 | www.hugedomains.com | 2606:4700:20::681a:625 | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 210 | bowen.ns.cloudflare.com | 172.64.35.83 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 242 | benedict.ns.cloudflare.com | 162.159.44.205 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 314 | 104.17.142.12 | 104.17.142.12 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 317 | tasteatlas.com | 2606:4700::6811:2569 | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 349 | otto.ns.cloudflare.com | 2606:4700:58::a29f:2c87 | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 461 | 104.17.101.37 | 104.17.101.37 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 619 | 104.26.3.120 | 104.26.3.120 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 679 | 104.26.11.160 | 104.26.11.160 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 688 | 104.26.7.7 | 104.26.7.7 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 689 | 104.17.153.151 | 104.17.153.151 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 768 | 6666.cloudflare.182682.xyz | 2a06:98c1:3120::5692:61a4 | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 773 | 104.20.20.192 | 104.20.20.192 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 792 | 198.41.222.191 | 198.41.222.191 | IPv4 | h2 | ✅ 成功 | 57 | cloudflare |
| 865 | 2a06:98c1:3102:0:e263:6cdc:a8ce:a339 | 2a06:98c1:3102:0:e263:6cdc:a8ce:a339 | IPv6 | h2 | ✅ 成功 | 57 | cloudflare |
| 11 | 104.26.6.112 | 104.26.6.112 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 27 | iplocation.io | 172.67.70.100 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 139 | zread.ai | 172.67.202.78 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 182 | bestcf.030101.xyz | 2606:4700:4b:db57:b087:b9fd:76cc:fb4 | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 184 | saas.sin.fan | 162.159.36.5 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 200 | www.ipchicken.com | 172.67.68.101 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 323 | 172.67.79.211 | 172.67.79.211 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 339 | [2606:4700:83bd::7d8:2b47] | 2606:4700:83bd::7d8:2b47 | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 369 | www.wto.org | 172.64.146.66 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 372 | www.wto.org | 2a06:98c1:3100::6812:29be | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 395 | 162.159.58.65 | 162.159.58.65 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 415 | 104.18.151.172 | 104.18.151.172 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 493 | 172.67.67.5 | 172.67.67.5 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 500 | 104.17.60.233 | 104.17.60.233 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 501 | 104.16.148.187 | 104.16.148.187 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 522 | ipinfo.in | 2606:4700:3035::6815:1581 | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 532 | www.gov.ua | 104.21.23.72 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 545 | wilson.ns.cloudflare.com | 2606:4700:58::a29f:2c6e | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 643 | cfip.xxxxxxxx.tk | 190.93.244.201 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 783 | 104.18.166.232 | 104.18.166.232 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 872 | 172.64.229.106 | 172.64.229.106 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 898 | 172.64.229.82 | 172.64.229.82 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 957 | 104.20.21.202 | 104.20.21.202 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 1029 | 162.159.38.165 | 162.159.38.165 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 1086 | 104.18.36.73 | 104.18.36.73 | IPv4 | h2 | ✅ 成功 | 58 | cloudflare |
| 1112 | 2a06:98c1:50:6850:2b9a:bd2:325b:9ba6 | 2a06:98c1:50:6850:2b9a:bd2:325b:9ba6 | IPv6 | h2 | ✅ 成功 | 58 | cloudflare |
| 16 | www.ipget.net | 2606:4700:3037::ac43:cf1a | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 172 | www.whatismyip.com | 2606:4700:20::681a:d17 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 229 | 162.159.36.104 | 162.159.36.104 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 237 | palera.in | 104.21.58.72 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 270 | [2606:4700:964f::6e2c:588e] | 2606:4700:964f::6e2c:588e | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 271 | 172.67.106.26 | 172.67.106.26 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 453 | 172.67.64.214 | 172.67.64.214 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 479 | 162.159.39.62 | 162.159.39.62 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 484 | 2a06:98c1:310d:4c:4b41:a84:50ee:e810 | 2a06:98c1:310d:4c:4b41:a84:50ee:e810 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 499 | 104.20.19.201 | 104.20.19.201 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 507 | 104.17.100.254 | 104.17.100.254 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 663 | 2a06:98c1:310a:0:15:735e:c4e:e2f7 | 2a06:98c1:310a:0:15:735e:c4e:e2f7 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 665 | 2a06:98c1:310c:6a:19f2:494:88cc:d5f | 2a06:98c1:310c:6a:19f2:494:88cc:d5f | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 699 | 172.64.49.146 | 172.64.49.146 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 719 | 162.159.38.226 | 162.159.38.226 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 825 | 172.67.72.212 | 172.67.72.212 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 1016 | 2a06:98c1:3102:96:65b:cff7:1c28:b82a | 2a06:98c1:3102:96:65b:cff7:1c28:b82a | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 1018 | 2a06:98c1:3100:7f01:2f67:5ef8:2a97:8d82 | 2a06:98c1:3100:7f01:2f67:5ef8:2a97:8d82 | IPv6 | h2 | ✅ 成功 | 59 | cloudflare |
| 1074 | 172.64.53.118 | 172.64.53.118 | IPv4 | h2 | ✅ 成功 | 59 | cloudflare |
| 47 | huxley.ns.cloudflare.com | 108.162.195.188 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 178 | [2606:4700:440f::53aa:4126] | 2606:4700:440f::53aa:4126 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 391 | 162.159.24.131 | 162.159.24.131 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 498 | 104.26.12.227 | 104.26.12.227 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 530 | cf.0sm.com | 2606:4700:3031::ac43:bb91 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 531 | 162.159.36.26 | 162.159.36.26 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 543 | wilson.ns.cloudflare.com | 162.159.44.110 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 560 | 104.17.30.164 | 104.17.30.164 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 585 | 2a06:98c1:310b:43:e83a:f5ed:8126:81dc | 2a06:98c1:310b:43:e83a:f5ed:8126:81dc | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 778 | 104.17.193.113 | 104.17.193.113 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 802 | 2a06:98c1:3105:900d:3fc7:e3c6:68cd:ece3 | 2a06:98c1:3105:900d:3fc7:e3c6:68cd:ece3 | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 818 | 104.20.24.244 | 104.20.24.244 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 1015 | 2a06:98c1:310e:5f9e:101d:94ce:cb6b:49ca | 2a06:98c1:310e:5f9e:101d:94ce:cb6b:49ca | IPv6 | h2 | ✅ 成功 | 60 | cloudflare |
| 1033 | 172.67.69.100 | 172.67.69.100 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 1082 | 162.159.39.150 | 162.159.39.150 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 1085 | 108.162.193.242 | 108.162.193.242 | IPv4 | h2 | ✅ 成功 | 60 | cloudflare |
| 10 | 104.18.37.13 | 104.18.37.13 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 132 | www.4444.cloudflare.182682.xyz | 2606:4700:3032::818:669e | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 496 | 104.26.4.190 | 104.26.4.190 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 506 | 104.16.155.76 | 104.16.155.76 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 760 | 6666.cloudflare.182682.xyz | 104.16.250.22 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 801 | 2a06:98c1:51::ee:b8fb:877f | 2a06:98c1:51::ee:b8fb:877f | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 937 | 2a06:98c1:51:aa:3e22:dd48:6279:eeb9 | 2a06:98c1:51:aa:3e22:dd48:6279:eeb9 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 1009 | 2a06:98c1:51:0:4371:ce16:475:2557 | 2a06:98c1:51:0:4371:ce16:475:2557 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 1020 | 108.162.198.97 | 108.162.198.97 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 1088 | 162.159.32.119 | 162.159.32.119 | IPv4 | h2 | ✅ 成功 | 61 | cloudflare |
| 1106 | 2a06:98c1:310a:fb:5613:e6aa:93f8:91f9 | 2a06:98c1:310a:fb:5613:e6aa:93f8:91f9 | IPv6 | h2 | ✅ 成功 | 61 | cloudflare |
| 9 | shopify.com | 23.227.38.33 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 77 | www.hugedomains.com | 2606:4700:20::681a:725 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 221 | moura.ns.cloudflare.com | 2a06:98c1:50::ac40:23d9 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 285 | ashton.ns.cloudflare.com | 2606:4700:58::a29f:2cad | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 529 | cf.0sm.com | 2606:4700:3031::6815:785 | IPv6 | h2 | ✅ 成功 | 62 | cloudflare |
| 646 | cfip.xxxxxxxx.tk | 104.17.127.110 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 726 | 104.18.42.16 | 104.18.42.16 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 742 | cmcc.877774.xyz | 104.16.149.3 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 762 | 6666.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 788 | 162.159.12.120 | 162.159.12.120 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 895 | 104.25.248.93 | 104.25.248.93 | IPv4 | h2 | ✅ 成功 | 62 | cloudflare |
| 59 | www.okcupid.com | 104.16.239.254 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 512 | ipv4.ip.sb | 104.26.12.31 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 567 | ct.877774.xyz | 172.64.229.217 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 729 | cmcc.877774.xyz | 104.16.148.3 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 744 | cmcc.877774.xyz | 104.16.149.5 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 879 | 172.67.73.129 | 172.67.73.129 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 882 | 172.67.79.218 | 172.67.79.218 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 1036 | 104.18.37.66 | 104.18.37.66 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 1060 | 172.66.0.179 | 172.66.0.179 | IPv4 | h2 | ✅ 成功 | 63 | cloudflare |
| 15 | www.ipget.net | 104.21.15.212 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 35 | trevor.ns.cloudflare.com | 172.64.35.154 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 92 | craig.ns.cloudflare.com | 108.162.195.192 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 340 | 104.19.223.58 | 104.19.223.58 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 511 | 104.18.35.166 | 104.18.35.166 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 524 | steamdb.info | 172.66.175.250 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 662 | 2a06:98c1:50:8be4:5078:7eea:e43d:164 | 2a06:98c1:50:8be4:5078:7eea:e43d:164 | IPv6 | h2 | ✅ 成功 | 64 | cloudflare |
| 752 | cmcc.877774.xyz | 104.16.149.244 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 878 | 104.20.29.234 | 104.20.29.234 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 1063 | 104.17.24.177 | 104.17.24.177 | IPv4 | h2 | ✅ 成功 | 64 | cloudflare |
| 451 | 108.162.195.1 | 108.162.195.1 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 1044 | 172.64.151.212 | 172.64.151.212 | IPv4 | h2 | ✅ 成功 | 65 | cloudflare |
| 189 | xn--b6gac.eu.org | 2606:4700:3034::ac43:99fd | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 254 | ip.gs | 172.67.160.28 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 487 | 2a06:98c1:3106:7319:3a35:b2f6:24ef:ea97 | 2a06:98c1:3106:7319:3a35:b2f6:24ef:ea97 | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 601 | 162.159.41.141 | 162.159.41.141 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 616 | 104.20.21.147 | 104.20.21.147 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 707 | 172.64.154.226 | 172.64.154.226 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 723 | 162.159.44.101 | 162.159.44.101 | IPv4 | h2 | ✅ 成功 | 66 | cloudflare |
| 1107 | 2a06:98c1:3107:515b:5ec2:c60:d108:d92e | 2a06:98c1:3107:515b:5ec2:c60:d108:d92e | IPv6 | h2 | ✅ 成功 | 66 | cloudflare |
| 6 | 104.16.45.84 | 104.16.45.84 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 26 | iplocation.io | 104.26.11.222 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 426 | 104.17.142.212 | 104.17.142.212 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 497 | 104.20.18.47 | 104.20.18.47 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 510 | 162.159.34.55 | 162.159.34.55 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 809 | 108.162.198.198 | 108.162.198.198 | IPv4 | h2 | ✅ 成功 | 67 | cloudflare |
| 19 | comicabc.com | 172.67.174.21 | IPv4 | h2 | ✅ 成功 | 68 | cloudflare |
| 488 | 2803:f800:51:6a7b:7c95:5585:9678:1549 | 2803:f800:51:6a7b:7c95:5585:9678:1549 | IPv6 | h2 | ✅ 成功 | 68 | cloudflare |
| 586 | 2a06:98c1:3101:6cce:1edc:88:628d:fd50 | 2a06:98c1:3101:6cce:1edc:88:628d:fd50 | IPv6 | h2 | ✅ 成功 | 68 | cloudflare |
| 814 | 104.20.31.132 | 104.20.31.132 | IPv4 | h2 | ✅ 成功 | 68 | cloudflare |
| 168 | www.whatismyip.com | 172.67.69.129 | IPv4 | h2 | ✅ 成功 | 69 | cloudflare |
| 228 | 104.16.61.163 | 104.16.61.163 | IPv4 | h2 | ✅ 成功 | 69 | cloudflare |
| 405 | 104.18.89.52 | 104.18.89.52 | IPv4 | h2 | ✅ 成功 | 69 | cloudflare |
| 1087 | 162.159.45.103 | 162.159.45.103 | IPv4 | h2 | ✅ 成功 | 69 | cloudflare |
| 127 | www.4444.cloudflare.182682.xyz | 104.18.185.26 | IPv4 | h2 | ✅ 成功 | 70 | cloudflare |
| 480 | 2a06:98c1:310b:2522:4bfe:492f:64b3:2d36 | 2a06:98c1:310b:2522:4bfe:492f:64b3:2d36 | IPv6 | h2 | ✅ 成功 | 70 | cloudflare |
| 670 | 172.64.41.216 | 172.64.41.216 | IPv4 | h2 | ✅ 成功 | 70 | cloudflare |
| 745 | cmcc.877774.xyz | 104.16.149.6 | IPv4 | h2 | ✅ 成功 | 70 | cloudflare |
| 518 | www.pcmag.com | 2606:4700::6810:1476 | IPv6 | h2 | ✅ 成功 | 71 | cloudflare |
| 564 | ct.877774.xyz | 172.64.229.174 | IPv4 | h2 | ✅ 成功 | 71 | cloudflare |
| 983 | 172.64.145.253 | 172.64.145.253 | IPv4 | h2 | ✅ 成功 | 71 | cloudflare |
| 305 | 456.cloudflare.182682.xyz | 104.21.224.5 | IPv4 | h2 | ✅ 成功 | 72 | cloudflare |
| 476 | 162.159.0.115 | 162.159.0.115 | IPv4 | h2 | ✅ 成功 | 72 | cloudflare |
| 772 | 104.26.8.171 | 104.26.8.171 | IPv4 | h2 | ✅ 成功 | 72 | cloudflare |
| 687 | 104.26.4.4 | 104.26.4.4 | IPv4 | h2 | ✅ 成功 | 73 | cloudflare |
| 799 | 2a06:98c1:51:6e:e874:db4f:a1d5:2163 | 2a06:98c1:51:6e:e874:db4f:a1d5:2163 | IPv6 | h2 | ✅ 成功 | 73 | cloudflare |
| 1084 | 162.159.35.254 | 162.159.35.254 | IPv4 | h2 | ✅ 成功 | 73 | cloudflare |
| 34 | trevor.ns.cloudflare.com | 162.159.44.154 | IPv4 | h2 | ✅ 成功 | 74 | cloudflare |
| 477 | 162.159.45.93 | 162.159.45.93 | IPv4 | h2 | ✅ 成功 | 74 | cloudflare |
| 481 | 2a06:98c1:310e:68:b803:ed16:7e58:d249 | 2a06:98c1:310e:68:b803:ed16:7e58:d249 | IPv6 | h2 | ✅ 成功 | 74 | cloudflare |
| 528 | cf.0sm.com | 172.67.187.145 | IPv4 | h2 | ✅ 成功 | 74 | cloudflare |
| 558 | 104.16.153.12 | 104.16.153.12 | IPv4 | h2 | ✅ 成功 | 74 | cloudflare |
| 8 | 172.67.75.172 | 172.67.75.172 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 534 | www.gov.ua | 2606:4700:3035::6815:1748 | IPv6 | h2 | ✅ 成功 | 75 | cloudflare |
| 781 | 172.64.153.140 | 172.64.153.140 | IPv4 | h2 | ✅ 成功 | 75 | cloudflare |
| 46 | 172.67.120.0 | 172.67.120.0 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 83 | sullivan.ns.cloudflare.com | 162.159.44.161 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 1037 | 104.18.44.124 | 104.18.44.124 | IPv4 | h2 | ✅ 成功 | 76 | cloudflare |
| 7 | 104.18.39.196 | 104.18.39.196 | IPv4 | h2 | ✅ 成功 | 77 | cloudflare |
| 485 | 2a06:98c1:310b:5429:cdf:3003:ae9c:e62e | 2a06:98c1:310b:5429:cdf:3003:ae9c:e62e | IPv6 | h2 | ✅ 成功 | 77 | cloudflare |
| 478 | 172.64.52.110 | 172.64.52.110 | IPv4 | h2 | ✅ 成功 | 78 | cloudflare |
| 517 | www.pcmag.com | 2606:4700::6810:1576 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 798 | 2a06:98c1:310a:73ae:49fb:f5c4:1394:7e53 | 2a06:98c1:310a:73ae:49fb:f5c4:1394:7e53 | IPv6 | h2 | ✅ 成功 | 79 | cloudflare |
| 546 | wilson.ns.cloudflare.com | 2803:f800:50::6ca2:c36e | IPv6 | h2 | ✅ 成功 | 80 | cloudflare |
| 209 | bowen.ns.cloudflare.com | 162.159.44.83 | IPv4 | h2 | ✅ 成功 | 81 | cloudflare |
| 158 | dylan.ns.cloudflare.com | 108.162.195.187 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 284 | ashton.ns.cloudflare.com | 172.64.35.173 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 327 | 172.64.35.24 | 172.64.35.24 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 924 | 2a06:98c1:51:878:e123:da31:b2ee:2017 | 2a06:98c1:51:878:e123:da31:b2ee:2017 | IPv6 | h2 | ✅ 成功 | 82 | cloudflare |
| 1000 | 162.159.21.16 | 162.159.21.16 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 1021 | 172.64.53.89 | 172.64.53.89 | IPv4 | h2 | ✅ 成功 | 82 | cloudflare |
| 162 | dylan.ns.cloudflare.com | 2803:f800:50::6ca2:c3bb | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 208 | bowen.ns.cloudflare.com | 108.162.195.83 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 491 | 172.67.77.196 | 172.67.77.196 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 525 | steamdb.info | 2606:4700:10::ac42:affa | IPv6 | h2 | ✅ 成功 | 83 | cloudflare |
| 606 | 162.159.3.89 | 162.159.3.89 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 997 | 162.159.39.26 | 162.159.39.26 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 1083 | 172.64.157.151 | 172.64.157.151 | IPv4 | h2 | ✅ 成功 | 83 | cloudflare |
| 243 | benedict.ns.cloudflare.com | 172.64.35.205 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 295 | julio.ns.cloudflare.com | 2803:f800:50::6ca2:c3d1 | IPv6 | h2 | ✅ 成功 | 84 | cloudflare |
| 409 | abdullah.ns.cloudflare.com | 162.159.44.203 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 925 | 162.159.45.0 | 162.159.45.0 | IPv4 | h2 | ✅ 成功 | 84 | cloudflare |
| 150 | decker.ns.cloudflare.com | 2a06:98c1:50::ac40:239b | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 155 | kyree.ns.cloudflare.com | 2606:4700:58::a29f:2ccf | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 206 | braden.ns.cloudflare.com | 2a06:98c1:50::ac40:23a9 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 350 | otto.ns.cloudflare.com | 2803:f800:50::6ca2:c387 | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 355 | damien.ns.cloudflare.com | 108.162.195.168 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 410 | abdullah.ns.cloudflare.com | 172.64.35.203 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 412 | abdullah.ns.cloudflare.com | 2803:f800:50::6ca2:c3cb | IPv6 | h2 | ✅ 成功 | 85 | cloudflare |
| 443 | 162.159.13.51 | 162.159.13.51 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 470 | 162.159.44.176 | 162.159.44.176 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 565 | ct.877774.xyz | 172.64.229.185 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 598 | 172.64.34.153 | 172.64.34.153 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 994 | 162.159.38.52 | 162.159.38.52 | IPv4 | h2 | ✅ 成功 | 85 | cloudflare |
| 94 | craig.ns.cloudflare.com | 172.64.35.192 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 232 | rustam.ns.cloudflare.com | 172.64.35.148 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 547 | wilson.ns.cloudflare.com | 2a06:98c1:50::ac40:236e | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 576 | 108.162.198.69 | 108.162.198.69 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 672 | 162.159.36.223 | 162.159.36.223 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 741 | cmcc.877774.xyz | 104.16.149.2 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 1027 | 162.159.39.198 | 162.159.39.198 | IPv4 | h2 | ✅ 成功 | 86 | cloudflare |
| 1096 | 2803:f800:50:2:de50:735a:ebe5:3eab | 2803:f800:50:2:de50:735a:ebe5:3eab | IPv6 | h2 | ✅ 成功 | 86 | cloudflare |
| 3 | 2400:cb00:2049:b8:e642:b685:71f1:d6ac | 2400:cb00:2049:b8:e642:b685:71f1:d6ac | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 157 | kyree.ns.cloudflare.com | 2a06:98c1:50::ac40:23cf | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 303 | uriah.ns.cloudflare.com | 2a06:98c1:50::ac40:23c2 | IPv6 | h2 | ✅ 成功 | 87 | cloudflare |
| 812 | 162.159.0.41 | 162.159.0.41 | IPv4 | h2 | ✅ 成功 | 87 | cloudflare |
| 212 | bowen.ns.cloudflare.com | 2803:f800:50::6ca2:c353 | IPv6 | h2 | ✅ 成功 | 88 | cloudflare |
| 241 | benedict.ns.cloudflare.com | 108.162.195.205 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 722 | 172.64.52.189 | 172.64.52.189 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 897 | 162.159.49.244 | 162.159.49.244 | IPv4 | h2 | ✅ 成功 | 88 | cloudflare |
| 1 | [2606:4700:9add::880:52fc] | 2606:4700:9add::880:52fc | IPv6 | h2 | ✅ 成功 | 89 | cloudflare |
| 2 | 104.20.29.62 | 104.20.29.62 | IPv4 | h2 | ✅ 成功 | 89 | cloudflare |
| 218 | moura.ns.cloudflare.com | 172.64.35.217 | IPv4 | h2 | ✅ 成功 | 89 | cloudflare |
| 380 | lewis.ns.cloudflare.com | 2803:f800:50::6ca2:c39f | IPv6 | h2 | ✅ 成功 | 89 | cloudflare |
| 1006 | 162.159.34.205 | 162.159.34.205 | IPv4 | h2 | ✅ 成功 | 89 | cloudflare |
| 1089 | 108.162.198.254 | 108.162.198.254 | IPv4 | h2 | ✅ 成功 | 89 | cloudflare |
| 93 | craig.ns.cloudflare.com | 162.159.44.192 | IPv4 | h2 | ✅ 成功 | 90 | cloudflare |
| 105 | pranab.ns.cloudflare.com | 2803:f800:50::6ca2:c3c7 | IPv6 | h2 | ✅ 成功 | 90 | cloudflare |
| 915 | 172.64.52.181 | 172.64.52.181 | IPv4 | h2 | ✅ 成功 | 90 | cloudflare |
| 202 | braden.ns.cloudflare.com | 162.159.44.169 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 375 | 172.64.52.127 | 172.64.52.127 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 725 | 172.64.229.134 | 172.64.229.134 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 793 | 162.159.1.39 | 162.159.1.39 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 1077 | 162.159.11.252 | 162.159.11.252 | IPv4 | h2 | ✅ 成功 | 91 | cloudflare |
| 4 | 172.64.154.18 | 172.64.154.18 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 5 | 172.67.78.23 | 172.67.78.23 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 148 | decker.ns.cloudflare.com | 2606:4700:58::a29f:2c9b | IPv6 | h2 | ✅ 成功 | 92 | cloudflare |
| 188 | xn--b6gac.eu.org | 2606:4700:3032::6815:5a4e | IPv6 | h2 | ✅ 成功 | 92 | cloudflare |
| 291 | julio.ns.cloudflare.com | 108.162.195.209 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 347 | otto.ns.cloudflare.com | 162.159.44.135 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 475 | 108.162.194.125 | 108.162.194.125 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 486 | 2a06:98c1:3105:af:a833:8bb4:57b3:c4fd | 2a06:98c1:3105:af:a833:8bb4:57b3:c4fd | IPv6 | h2 | ✅ 成功 | 92 | cloudflare |
| 588 | 2a06:98c1:51:e7:5abb:89e:d67d:c1a4 | 2a06:98c1:51:e7:5abb:89e:d67d:c1a4 | IPv6 | h2 | ✅ 成功 | 92 | cloudflare |
| 717 | 2a06:98c1:50:f771:e9b:84bd:5505:3935 | 2a06:98c1:50:f771:e9b:84bd:5505:3935 | IPv6 | h2 | ✅ 成功 | 92 | cloudflare |
| 868 | 172.64.52.150 | 172.64.52.150 | IPv4 | h2 | ✅ 成功 | 92 | cloudflare |
| 38 | trevor.ns.cloudflare.com | 2a06:98c1:50::ac40:239a | IPv6 | h2 | ✅ 成功 | 93 | cloudflare |
| 51 | huxley.ns.cloudflare.com | 2803:f800:50::6ca2:c3bc | IPv6 | h2 | ✅ 成功 | 93 | cloudflare |
| 489 | 2a06:98c1:3107:0:cf9c:104d:1e03:9644 | 2a06:98c1:3107:0:cf9c:104d:1e03:9644 | IPv6 | h2 | ✅ 成功 | 93 | cloudflare |
| 521 | ipinfo.in | 2606:4700:3034::ac43:c6cb | IPv6 | h2 | ✅ 成功 | 93 | cloudflare |
| 991 | 162.159.45.121 | 162.159.45.121 | IPv4 | h2 | ✅ 成功 | 93 | cloudflare |
| 701 | 172.64.40.196 | 172.64.40.196 | IPv4 | h2 | ✅ 成功 | 94 | cloudflare |
| 929 | 108.162.198.168 | 108.162.198.168 | IPv4 | h2 | ✅ 成功 | 94 | cloudflare |
| 146 | decker.ns.cloudflare.com | 162.159.44.155 | IPv4 | h2 | ✅ 成功 | 95 | cloudflare |
| 240 | palera.in | 2606:4700:3035::6815:3a48 | IPv6 | h2 | ✅ 成功 | 95 | cloudflare |
| 244 | benedict.ns.cloudflare.com | 2606:4700:58::a29f:2ccd | IPv6 | h2 | ✅ 成功 | 95 | cloudflare |
| 806 | 162.159.39.20 | 162.159.39.20 | IPv4 | h2 | ✅ 成功 | 95 | cloudflare |
| 821 | 104.26.12.33 | 104.26.12.33 | IPv4 | h2 | ✅ 成功 | 95 | cloudflare |
| 952 | 172.67.79.249 | 172.67.79.249 | IPv4 | h2 | ✅ 成功 | 96 | cloudflare |
| 526 | steamdb.info | 2606:4700:10::6814:22d4 | IPv6 | h2 | ✅ 成功 | 100 | cloudflare |
| 850 | 172.64.53.15 | 172.64.53.15 | IPv4 | h2 | ✅ 成功 | 100 | cloudflare |
| 377 | lewis.ns.cloudflare.com | 162.159.44.159 | IPv4 | h2 | ✅ 成功 | 101 | cloudflare |
| 899 | 162.159.27.183 | 162.159.27.183 | IPv4 | h2 | ✅ 成功 | 101 | cloudflare |
| 702 | 162.159.1.145 | 162.159.1.145 | IPv4 | h2 | ✅ 成功 | 102 | cloudflare |
| 145 | decker.ns.cloudflare.com | 108.162.195.155 | IPv4 | h2 | ✅ 成功 | 104 | cloudflare |
| 474 | 172.64.50.51 | 172.64.50.51 | IPv4 | h2 | ✅ 成功 | 107 | cloudflare |
| 490 | 104.20.26.58 | 104.20.26.58 | IPv4 | h2 | ✅ 成功 | 108 | cloudflare |
| 246 | benedict.ns.cloudflare.com | 2a06:98c1:50::ac40:23cd | IPv6 | h2 | ✅ 成功 | 118 | cloudflare |
| 408 | abdullah.ns.cloudflare.com | 108.162.195.203 | IPv4 | h2 | ✅ 成功 | 121 | cloudflare |
| 1097 | 162.159.6.106 | 162.159.6.106 | IPv4 | h2 | ✅ 成功 | 121 | cloudflare |
| 308 | 456.cloudflare.182682.xyz | 104.17.25.173 | IPv4 | h2 | ✅ 成功 | 126 | cloudflare |
| 292 | julio.ns.cloudflare.com | 162.159.44.209 | IPv4 | h2 | ✅ 成功 | 141 | cloudflare |
| 22 | 168.138.165.174 | 168.138.165.174 | IPv4 | h2 | ✅ 成功 | 696 | cloudflare |

### 延迟分布分析

- **超快 (<50ms)**: 578 条记录
- **快 (50-100ms)**: 517 条记录
- **正常 (100-200ms)**: 13 条记录
- **慢 (200-500ms)**: 0 条记录
- **很慢 (>500ms)**: 1 条记录


---

## 详细分析

### 按IP版本统计
- **IPv4 失败**: 8 次
- **IPv6 失败**: 0 次

### 按协议统计

- **none**: 5 次失败
- **h2**: 4 次失败


---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
