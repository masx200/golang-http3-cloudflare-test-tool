# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: 2025/12/12 14:50:04
- **数据来源**: connectivity_results-20251212-145003.json
- **总测试数**: 441
- **失败测试数**: 2
- **成功测试数**: 439
- **失败率**: 0.45%
- **平均延迟**: 87.95ms
- **最小延迟**: 63ms
- **最大延迟**: 618ms

## 🌐 当前测试环境信息

- **获取时间**: 2025/12/12 14:50:04
- **IP地址**: 2a09:bac1:7680:8628::499:18
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

| 序号 | 主机/域名        | 目标IP         | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息                                 |
| ---- | ---------------- | -------------- | ------ | ---- | ------ | -------- | ------ | ---------------------------------------- |
| 24   | cfip.xxxxxxxx.tk | 198.41.212.130 | IPv4   | none | N/A    | 0        | N/A    | dial tcp 198.41.212.130:443: i/o timeout |
| 234  | 172.64.201.25    | 172.64.201.25  | IPv4   | none | N/A    | 0        | N/A    | dial tcp 172.64.201.25:443: i/o timeout  |

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
| 425  | www.wto.org                           | 2a06:98c1:3102::6812:29be | IPv6   | h2   | ✅ 成功 | 63       | cloudflare |
| 149  | pranab.ns.cloudflare.com              | 2803:f800:50::6ca2:c3c7   | IPv6   | h2   | ✅ 成功 | 66       | cloudflare |
| 42   | ipv4.ip.sb                            | 104.26.12.31              | IPv4   | h2   | ✅ 成功 | 67       | cloudflare |
| 163  | toy-people.com                        | 2606:4700:20::681a:224    | IPv6   | h2   | ✅ 成功 | 67       | cloudflare |
| 73   | 103.160.204.59                        | 103.160.204.59            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 107  | www.hugedomains.com                   | 2606:4700:20::681a:625    | IPv6   | h2   | ✅ 成功 | 68       | cloudflare |
| 244  | fbi.gov                               | 104.16.148.244            | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 319  | silkbook.com                          | 104.26.9.160              | IPv4   | h2   | ✅ 成功 | 68       | cloudflare |
| 14   | www.ipget.net                         | 2606:4700:3036::6815:fd4  | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 22   | cf.0sm.com                            | 2606:4700:3037::ac43:bb91 | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 48   | ipinfo.in                             | 2606:4700:3031::6815:1581 | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 82   | www.4chan.org                         | 104.16.228.229            | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 205  | [2606:4700:440f::53aa:4126]           | 2606:4700:440f::53aa:4126 | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 302  | ip.gs                                 | 104.21.14.176             | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 321  | silkbook.com                          | 2606:4700:20::ac43:4bd0   | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 398  | eur.877774.xyz                        | 104.21.29.164             | IPv4   | h2   | ✅ 成功 | 69       | cloudflare |
| 434  | stock.hostmonit.com                   | 2606:4700:3033::ac43:bbfb | IPv6   | h2   | ✅ 成功 | 69       | cloudflare |
| 9    | comicabc.com                          | 188.114.96.3              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 20   | cf.0sm.com                            | 172.67.187.145            | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 44   | ipv4.ip.sb                            | 172.67.75.172             | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 54   | 172.67.75.172                         | 172.67.75.172             | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 56   | shopify.com                           | 23.227.38.33              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 60   | ct.877774.xyz                         | 172.64.229.236            | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 79   | iplocation.io                         | 2606:4700:20::681a:bde    | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 88   | icook.hk                              | 2606:4700:3037::ac43:a168 | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 132  | cu.877774.xyz                         | 104.26.4.115              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 161  | toy-people.com                        | 2606:4700:20::681a:324    | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 180  | cloudflare-ip.mofashi.ltd             | 2606:4700:3037::6815:48e9 | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 198  | www.whatismyip.com                    | 104.26.13.23              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 200  | www.whatismyip.com                    | 2606:4700:20::681a:c17    | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 277  | time.is                               | 2606:4700:20::681a:d36    | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 299  | ip.sb                                 | 2606:4700:20::ac43:4bac   | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 308  | singapore.com                         | 104.26.12.140             | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 335  | dnschecker.org                        | 2606:4700:20::ac43:49d8   | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 354  | gamer.com.tw                          | 104.18.3.197              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 366  | tasteatlas.com                        | 2606:4700::6811:2469      | IPv6   | h2   | ✅ 成功 | 70       | cloudflare |
| 376  | 104.18.37.40                          | 104.18.37.40              | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 423  | www.wto.org                           | 104.18.41.190             | IPv4   | h2   | ✅ 成功 | 70       | cloudflare |
| 41   | 104.16.45.84                          | 104.16.45.84              | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 52   | steamdb.info                          | 2606:4700:10::ac42:affa   | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 59   | ct.877774.xyz                         | 172.64.229.217            | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 70   | www.gov.ua                            | 2606:4700:3031::6815:1748 | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 78   | iplocation.io                         | 172.67.70.100             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 108  | www.hugedomains.com                   | 2606:4700:20::681a:725    | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 120  | sullivan.ns.cloudflare.com            | 2606:4700:58::a29f:2ca1   | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 125  | yx-auto.pages.dev                     | 2606:4700:310c::ac42:2f70 | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 160  | toy-people.com                        | 104.26.3.36               | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 177  | 104.16.223.179                        | 104.16.223.179            | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 182  | 104.17.79.11                          | 104.17.79.11              | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 210  | cmcc.877774.xyz                       | 104.16.149.12             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 220  | cmcc.877774.xyz                       | 104.16.148.9              | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 223  | cmcc.877774.xyz                       | 104.16.148.12             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 227  | cmcc.877774.xyz                       | 104.16.149.3              | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 275  | time.is                               | 2606:4700:20::ac43:449d   | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 306  | local-aria2-webui.masx200.ddns-ip.net | 172.67.157.182            | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 307  | local-aria2-webui.masx200.ddns-ip.net | 2606:4700:3031::ac43:9db6 | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 311  | singapore.com                         | 2606:4700:20::681a:d8c    | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 322  | silkbook.com                          | 2606:4700:20::681a:9a0    | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 328  | 172.67.106.26                         | 172.67.106.26             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 333  | dnschecker.org                        | 104.26.7.89               | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 341  | cf.877774.xyz                         | 2606:4700:4406::ac40:9242 | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 357  | [2606:4700:4408::18c5:3304]           | 2606:4700:4408::18c5:3304 | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 368  | 104.17.142.12                         | 104.17.142.12             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 371  | www.udemy.com                         | 2606:4700::6810:8eed      | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 380  | icook.tw                              | 2606:4700:10::6814:1c4a   | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 392  | japan.com                             | 104.26.4.60               | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 394  | japan.com                             | 2606:4700:20::681a:43c    | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 395  | japan.com                             | 2606:4700:20::681a:53c    | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 397  | eur.877774.xyz                        | 104.21.47.209             | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 417  | ifconfig.co                           | 172.67.168.106            | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 419  | ifconfig.co                           | 2606:4700:3030::ac43:a86a | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 421  | www.csgo.com                          | 195.85.59.95              | IPv4   | h2   | ✅ 成功 | 71       | cloudflare |
| 435  | stock.hostmonit.com                   | 2606:4700:3037::6815:7c1  | IPv6   | h2   | ✅ 成功 | 71       | cloudflare |
| 6    | cf.090227.xyz                         | 2606:4700:440a::ac40:98f1 | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 19   | www.pcmag.com                         | 2606:4700::6810:1476      | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 21   | cf.0sm.com                            | 104.21.7.133              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 23   | cf.0sm.com                            | 2606:4700:3032::6815:785  | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 51   | steamdb.info                          | 172.66.175.250            | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 58   | ct.877774.xyz                         | 172.64.229.195            | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 67   | [2606:4700:9add::880:52fc]            | 2606:4700:9add::880:52fc  | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 83   | www.4chan.org                         | 104.16.229.229            | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 84   | [2606:4700:8de6::5fa2:799e]           | 2606:4700:8de6::5fa2:799e | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 86   | icook.hk                              | 104.21.90.210             | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 95   | 172.67.120.0                          | 172.67.120.0              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 99   | www.okcupid.com                       | 104.18.160.63             | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 103  | www.hugedomains.com                   | 104.26.7.37               | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 105  | www.hugedomains.com                   | 104.26.6.37               | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 115  | 172.67.243.218                        | 172.67.243.218            | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 138  | cu.877774.xyz                         | 104.26.4.112              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 142  | na.877774.xyz                         | 104.18.38.235             | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 159  | toy-people.com                        | 172.67.72.18              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 169  | decker.ns.cloudflare.com              | 2a06:98c1:50::ac40:239b   | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 173  | zread.ai                              | 2606:4700:3033::6815:4cf0 | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 178  | cloudflare-ip.mofashi.ltd             | 188.114.97.3              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 179  | cloudflare-ip.mofashi.ltd             | 188.114.96.3              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 224  | cmcc.877774.xyz                       | 104.16.148.244            | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 228  | cmcc.877774.xyz                       | 104.16.149.4              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 233  | saas.sin.fan                          | 162.159.36.5              | IPv4   | h2   | ✅ 成功 | 72       | cloudflare |
| 238  | cf.zhetengsha.eu.org                  | 2a06:98c1:3108::6812:2a62 | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |
| 241  | xn--b6gac.eu.org                      | 2606:4700:3037::ac43:99fd | IPv6   | h2   | ✅ 成功 | 72       | cloudflare |

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
