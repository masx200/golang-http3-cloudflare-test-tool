# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 13:42:10
- **数据来源**: connectivity_results-20251212-134210.json
- **总测试数**: 452
- **失败测试数**: 2
- **成功测试数**: 450
- **失败率**: 0.44%
- **平均延迟**: 84.26ms
- **最小延迟**: 63ms
- **最大延迟**: 667ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 13:42:11
- **IP地址**: 2a09:bac5:7497:1c64::2d4:5f
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

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 95   | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 375  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

### 📈 错误分析总结

#### 主错误类型分布

- **连接超时**: 2 次 (100.0%)

#### 错误模式分析

**超时集中度分析**: 共有 2 次超时，主要集中在IP段 198.41（1
次），可能存在网络路由问题或目标服务器负载过高

**协议协商分析**: 有 2 次失败是因为协议协商失败（protocol:
none），说明无法与目标建立HTTP/3或其他现代协议连接

**IP版本分析**:
所有失败的测试都使用IPv4，IPv6连接可能更稳定或目标服务器的IPv6配置更好

---

## 🚀 延迟最低的 100 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名                             | 目标IP                    | IP版本 | 协议 | 状态    | 延迟(ms) | 服务器     |
| ---- | ------------------------------------- | ------------------------- | ------ | ---- | ------- | -------- | ---------- |
| 7    | www.ipget.net                         | 2606:4700:3031::ac43:cf1a | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 433  | www.wto.org                           | 172.64.146.66             | IPv4   | h2   | ✅ 成功 | 63       | cloudflare |
| 435  | www.wto.org                           | 2606:4700:4406::ac40:9242 | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 11   | comicabc.com                          | 2606:4700:3036::6815:400a | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 61   | www.gov.ua                            | 2606:4700:3033::ac43:d17f | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 258  | fbi.gov                               | 2606:4700::6810:95f4      | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 261  | cf.090227.xyz                         | 2a06:98c1:3105::6812:230f | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 343  | silkbook.com                          | 2606:4700:20::681a:9a0    | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 383  | www.udemy.com                         | 2606:4700::6810:8eed      | IPv6   | h2   | ✅ 成功 | 64       | cloudflare |
| 434  | www.wto.org                           | 104.18.41.190             | IPv4   | h2   | ✅ 成功 | 64       | cloudflare |
| 59   | www.gov.ua                            | 104.21.23.72              | IPv4   | h2   | ✅ 成功 | 65       | cloudflare |
| 130  | cu.877774.xyz                         | 104.26.4.113              | IPv4   | h2   | ✅ 成功 | 65       | cloudflare |
| 171  | toy-people.com                        | 104.26.3.36               | IPv4   | h2   | ✅ 成功 | 65       | cloudflare |
| 253  | cf.zhetengsha.eu.org                  | 2a06:98c1:3105::6812:230f | IPv6   | h2   | ✅ 成功 | 65       | cloudflare |
| 395  | 104.26.13.31                          | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 65       | cloudflare |
| 9    | comicabc.com                          | 104.21.64.10              | IPv4   | h2   | ✅ 成功 | 66       | cloudflare |
| 16   | www.pcmag.com                         | 2606:4700::6810:1476      | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 36   | ipinfo.in                             | 2606:4700:3031::6815:1581 | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 62   | www.gov.ua                            | 2606:4700:3031::6815:1748 | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 211  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::ac43:9bac | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 318  | ip.sb                                 | 2606:4700:20::681a:c1f    | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 319  | ip.gs                                 | 188.114.97.3              | IPv4   | h2   | ✅ 成功 | 66       | cloudflare |
| 324  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 335  | whatismyipaddress.com                 | 2606:4700::6813:de4f      | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 337  | www.visa.com.hk                       | 104.18.21.69              | IPv4   | h2   | ✅ 成功 | 66       | cloudflare |
| 348  | [2606:4700:440b::3e6e:5f06]           | 2606:4700:440b::3e6e:5f06 | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 406  | 172.67.181.209                        | 172.67.181.209            | IPv4   | h2   | ✅ 成功 | 66       | cloudflare |
| 444  | japan.com                             | 2606:4700:20::681a:53c    | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 446  | japan.com                             | 2606:4700:20::ac43:465c   | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 8    | www.ipget.net                         | 2606:4700:3036::6815:fd4  | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 12   | comicabc.com                          | 2606:4700:3030::ac43:ae15 | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 34   | ipinfo.in                             | 172.67.198.203            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 35   | ipinfo.in                             | 2606:4700:3037::ac43:c6cb | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 50   | ct.877774.xyz                         | 172.64.229.236            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 64   | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc  | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 70   | www.4chan.org                         | 104.16.228.229            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 72   | iplocation.io                         | 104.26.10.222             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 91   | www.okcupid.com                       | 104.18.160.63             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 110  | www.hugedomains.com                   | 104.26.7.37               | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 113  | www.hugedomains.com                   | 2606:4700:20::681a:625    | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 118  | 172.67.243.218                        | 172.67.243.218            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 126  | www.visa.com.sg                       | 104.18.13.229             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 133  | cu.877774.xyz                         | 104.26.4.116              | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 154  | na.877774.xyz                         | 104.18.38.235             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 163  | pranab.ns.cloudflare.com              | 2a06:98c1:50::ac40:23c7   | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 170  | toy-people.com                        | 104.26.2.36               | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 174  | toy-people.com                        | 2606:4700:20::681a:324    | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 176  | zread.ai                              | 172.67.202.78             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 199  | www.whatismyip.com                    | 104.26.12.23              | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 202  | www.whatismyip.com                    | 2606:4700:20::ac43:4581   | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 215  | cmcc.877774.xyz                       | 104.16.149.12             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 236  | cmcc.877774.xyz                       | 104.16.148.12             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 246  | saas.sin.fan                          | 162.159.36.5              | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 255  | fbi.gov                               | 104.16.148.244            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 260  | cf.090227.xyz                         | 104.18.43.174             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 280  | www.glassdoor.com                     | 104.17.64.70              | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 292  | time.is                               | 2606:4700:20::681a:d36    | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 305  | palera.in                             | 2606:4700:3032::ac43:9d7a | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 326  | singapore.com                         | 104.26.12.140             | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 329  | singapore.com                         | 2606:4700:20::ac43:4bc2   | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 344  | silkbook.com                          | 2606:4700:20::ac43:4bd0   | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 349  | dnschecker.org                        | 104.26.6.89               | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 353  | dnschecker.org                        | 2606:4700:20::681a:659    | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 393  | icook.tw                              | 2606:4700:10::6814:1c4a   | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 424  | ifconfig.co                           | 172.67.168.106            | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 15   | www.pcmag.com                         | 2606:4700::6810:1576      | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 19   | cf.0sm.com                            | 2606:4700:3037::ac43:bb91 | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 20   | cf.0sm.com                            | 2606:4700:3032::6815:785  | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 42   | ipv4.ip.sb                            | 104.26.13.31              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 51   | 172.67.75.172                         | 172.67.75.172             | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 57   | shopify.com                           | 23.227.38.33              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 63   | 172.67.110.232                        | 172.67.110.232            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 66   | 103.160.204.59                        | 103.160.204.59            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 69   | www.4chan.org                         | 104.16.229.229            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 74   | iplocation.io                         | 2606:4700:20::ac43:4664   | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 103  | cfip.xxxxxxxx.tk                      | 104.27.21.118             | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 141  | craig.ns.cloudflare.com               | 2803:f800:50::6ca2:c3c0   | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 155  | freeyx.cloudflare88.eu.org            | 141.101.121.127           | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 172  | toy-people.com                        | 172.67.72.18              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 196  | dylan.ns.cloudflare.com               | 2803:f800:50::6ca2:c3bb   | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 201  | www.whatismyip.com                    | 104.26.13.23              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 231  | cmcc.877774.xyz                       | 104.16.148.5              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 245  | saas.sin.fan                          | 162.159.36.20             | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 256  | fbi.gov                               | 104.16.149.244            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 272  | www.ipchicken.com                     | 104.26.7.112              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 289  | time.is                               | 104.26.13.54              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 290  | time.is                               | 2606:4700:20::681a:c36    | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 303  | palera.in                             | 104.21.58.72              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 313  | ip.sb                                 | 172.67.75.172             | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 320  | ip.gs                                 | 188.114.96.3              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 366  | julio.ns.cloudflare.com               | 2a06:98c1:50::ac40:23d1   | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 374  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304 | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 388  | cfip.1323123.xyz                      | 104.16.133.220            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 392  | icook.tw                              | 2606:4700:10::ac42:9e73   | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 426  | ifconfig.co                           | 2606:4700:3037::6815:365b | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 438  | stock.hostmonit.com                   | 172.67.187.251            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 14   | www.pcmag.com                         | 104.16.20.118             | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 33   | ipinfo.in                             | 104.21.21.129             | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 46   | ct.877774.xyz                         | 172.64.229.174            | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 56   | 104.18.37.13                          | 104.18.37.13              | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |

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

_此报告由 HTTP/3 连接测试报告生成器自动生成_
