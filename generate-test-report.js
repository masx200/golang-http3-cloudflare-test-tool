#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";
import { Command } from 'commander';

/**
 * 生成HTTP/3连接测试失败报告
 * 从connectivity_results.json中提取所有失败的测试结果并生成格式化报告
 * 新增功能：输出延迟最低的前100条记录
 */

class TestReportGenerator {
  constructor(resultsFilePath, options = {}) {
    this.resultsFilePath = resultsFilePath;
    this.allTests = []; // 存储所有测试结果（包括成功的）
    this.failedTests = [];
    this.successfulTests = [];
    this.options = {
      topLatencyCount: options.topLatencyCount || 100,
      includeLatencySection: options.includeLatencySection !== false,
      ...options
    };
    this.statistics = {
      total: 0,
      failed: 0,
      success: 0,
      failureRate: 0,
      avgLatency: 0,
      minLatency: Infinity,
      maxLatency: 0,
    };
  }

  /**
   * 读取并解析测试结果文件
   */
  loadResults() {
    try {
      console.log("正在读取测试结果文件...");
      const fileContent = readFileSync(this.resultsFilePath, "utf8");
      const results = JSON.parse(fileContent);

      console.log(`成功读取 ${results.length} 条测试记录`);
      return results;
    } catch (error) {
      console.error("读取测试结果文件失败:", error.message);
      process.exit(1);
    }
  }

  /**
   * 分析测试结果，提取失败的测试和成功的测试
   */
  analyzeResults(results) {
    console.log("正在分析测试结果...");

    this.statistics.total = results.length;
    let totalLatency = 0;
    let validLatencyCount = 0;

    results.forEach((result, index) => {
      const testRecord = {
        index: index + 1,
        host: result.host || "Unknown",
        target_ip: result.target_ip || "Unknown",
        ip_version: result.ip_version || "Unknown",
        protocol: result.protocol || "none",
        status_code: result.status_code,
        latency_ms: result.latency_ms || 0,
        server_header: result.server_header || "N/A",
        error_msg: result.error_msg || "No error message",
        timestamp: result.timestamp || new Date().toISOString(),
        success: result.success,
      };

      // 存储所有测试结果
      this.allTests.push(testRecord);

      if (result.success === false) {
        this.failedTests.push(testRecord);
      } else if (result.success === true) {
        this.successfulTests.push(testRecord);
        this.statistics.success++;
      }

      // 计算延迟统计
      if (result.latency_ms && typeof result.latency_ms === 'number' && result.latency_ms > 0) {
        totalLatency += result.latency_ms;
        validLatencyCount++;
        this.statistics.minLatency = Math.min(this.statistics.minLatency, result.latency_ms);
        this.statistics.maxLatency = Math.max(this.statistics.maxLatency, result.latency_ms);
      }
    });

    this.statistics.failed = this.failedTests.length;
    this.statistics.failureRate = (
      (this.statistics.failed / this.statistics.total) *
      100
    ).toFixed(2);

    this.statistics.avgLatency = validLatencyCount > 0 ?
      (totalLatency / validLatencyCount).toFixed(2) : 0;

    console.log(
      `分析完成: 失败 ${this.statistics.failed} 条，成功 ${this.statistics.success} 条`,
    );
    console.log(`延迟统计: 平均 ${this.statistics.avgLatency}ms，最小 ${this.statistics.minLatency}ms，最大 ${this.statistics.maxLatency}ms`);
  }

  /**
   * 获取延迟最低的前N条记录
   */
  getTopLatencyRecords(count = this.options.topLatencyCount) {
    // 过滤出有有效延迟数据的记录
    const validLatencyTests = this.allTests.filter(test =>
      test.latency_ms &&
      typeof test.latency_ms === 'number' &&
      test.latency_ms > 0
    );

    // 按延迟升序排序
    return validLatencyTests
      .sort((a, b) => a.latency_ms - b.latency_ms)
      .slice(0, count);
  }

  /**
   * 生成Markdown格式的报告
   */
  generateMarkdownReport() {
    const reportDate = new Date().toLocaleString("zh-CN");

    let report = `# HTTP/3 连接测试失败报告

## 报告概要

- **生成时间**: ${reportDate}
- **数据来源**: ${basename(this.resultsFilePath)}
- **总测试数**: ${this.statistics.total}
- **失败测试数**: ${this.statistics.failed}
- **成功测试数**: ${this.statistics.success}
- **失败率**: ${this.statistics.failureRate}%
- **平均延迟**: ${this.statistics.avgLatency}ms
- **最小延迟**: ${this.statistics.minLatency === Infinity ? 'N/A' : this.statistics.minLatency + 'ms'}
- **最大延迟**: ${this.statistics.maxLatency}ms

---

## 失败测试详情

`;

    if (this.failedTests.length === 0) {
      report += `🎉 **恭喜！所有测试都成功了！**\n\n`;
    } else {
      // 按错误类型分组统计
      const errorGroups = this.groupErrorsByType();

      report += `### 错误类型统计\n\n`;
      Object.entries(errorGroups).forEach(([errorType, count]) => {
        report += `- **${errorType}**: ${count} 次\n`;
      });

      report += `\n### 失败测试列表\n\n`;
      report += `| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态码 | 延迟(ms) | 服务器 | 错误信息 |\n`;
      report += `|------|-----------|--------|--------|------|--------|----------|--------|----------|\n`;

      this.failedTests.forEach((test) => {
        const host =
          test.host.length > 20
            ? test.host.substring(0, 17) + "..."
            : test.host;
        const errorMsg =
          test.error_msg.length > 50
            ? test.error_msg.substring(0, 47) + "..."
            : test.error_msg;
        const serverHeader =
          test.server_header.length > 15
            ? test.server_header.substring(0, 12) + "..."
            : test.server_header;

        report += `| ${test.index} | ${host} | ${test.target_ip} | ${test.ip_version} | ${test.protocol} | ${
          test.status_code || "N/A"
        } | ${test.latency_ms} | ${serverHeader} | ${errorMsg} |\n`;
      });
    }

      // 添加延迟最低的记录部分
    if (this.options.includeLatencySection) {
      const topLatencyRecords = this.getTopLatencyRecords();

      if (topLatencyRecords.length > 0) {
        report += `

---

## 🚀 延迟最低的 ${topLatencyRecords.length} 条记录

以下显示了延迟最低的测试记录，包括成功和失败的测试：

| 序号 | 主机/域名 | 目标IP | IP版本 | 协议 | 状态 | 延迟(ms) | 服务器 |
|------|-----------|--------|--------|------|------|----------|--------|`;

        topLatencyRecords.forEach((test) => {
          const host = test.host.length > 20
            ? test.host.substring(0, 17) + "..."
            : test.host;
          const serverHeader = test.server_header.length > 15
            ? test.server_header.substring(0, 12) + "..."
            : test.server_header;
          const status = test.success ? '✅ 成功' : '❌ 失败';

          report += `| ${test.index} | ${host} | ${test.target_ip} | ${test.ip_version} | ${test.protocol} | ${status} | ${test.latency_ms} | ${serverHeader} |\n`;
        });

        // 延迟分布统计
        report += `\n### 延迟分布分析\n\n`;

        const latencyRanges = {
          '超快 (<50ms)': 0,
          '快 (50-100ms)': 0,
          '正常 (100-200ms)': 0,
          '慢 (200-500ms)': 0,
          '很慢 (>500ms)': 0
        };

        topLatencyRecords.forEach(test => {
          const latency = test.latency_ms;
          if (latency < 50) latencyRanges['超快 (<50ms)']++;
          else if (latency < 100) latencyRanges['快 (50-100ms)']++;
          else if (latency < 200) latencyRanges['正常 (100-200ms)']++;
          else if (latency < 500) latencyRanges['慢 (200-500ms)']++;
          else latencyRanges['很慢 (>500ms)']++;
        });

        Object.entries(latencyRanges).forEach(([range, count]) => {
          report += `- **${range}**: ${count} 条记录\n`;
        });
      }
    }

    report += `

---

## 详细分析

### 按IP版本统计
`;

    // 按IP版本统计
    const ipv4Failed = this.failedTests.filter(
      (t) => t.ip_version === "IPv4",
    ).length;
    const ipv6Failed = this.failedTests.filter(
      (t) => t.ip_version === "IPv6",
    ).length;

    report += `- **IPv4 失败**: ${ipv4Failed} 次\n`;
    report += `- **IPv6 失败**: ${ipv6Failed} 次\n\n`;

    // 按协议统计
    const protocolStats = {};
    this.failedTests.forEach((test) => {
      protocolStats[test.protocol] = (protocolStats[test.protocol] || 0) + 1;
    });

    report += `### 按协议统计\n\n`;
    Object.entries(protocolStats).forEach(([protocol, count]) => {
      report += `- **${protocol}**: ${count} 次失败\n`;
    });

    report += `

---

## 建议和后续操作

1. **检查网络连接**: 确认网络连接稳定
2. **验证DNS解析**: 检查DNS服务器是否正常工作
3. **检查防火墙设置**: 确认防火墙没有阻止相关端口
4. **联系服务提供商**: 如果失败率较高，可能需要联系网络服务提供商
5. **重新运行测试**: 在网络条件改善后重新运行测试进行验证

---

*此报告由 HTTP/3 连接测试报告生成器自动生成*
`;

    return report;
  }

  /**
   * 按错误类型分组
   */
  groupErrorsByType() {
    const errorGroups = {};

    this.failedTests.forEach((test) => {
      let errorType = "未知错误";

      if (test.error_msg) {
        if (
          test.error_msg.includes("timeout") ||
          test.error_msg.includes("超时")
        ) {
          errorType = "连接超时";
        } else if (
          test.error_msg.includes("connection") ||
          test.error_msg.includes("连接")
        ) {
          errorType = "连接错误";
        } else if (
          test.error_msg.includes("DNS") ||
          test.error_msg.includes("解析")
        ) {
          errorType = "DNS解析错误";
        } else if (
          test.error_msg.includes("TLS") ||
          test.error_msg.includes("SSL") ||
          test.error_msg.includes("证书")
        ) {
          errorType = "TLS/SSL错误";
        } else if (test.protocol === "none") {
          errorType = "协议协商失败";
        }
      } else {
        errorType = "无错误信息";
      }

      errorGroups[errorType] = (errorGroups[errorType] || 0) + 1;
    });

    return errorGroups;
  }

  /**
   * 生成JSON格式的报告
   */
  generateJsonReport() {
    const topLatencyRecords = this.getTopLatencyRecords();

    return {
      report_info: {
        generated_at: new Date().toISOString(),
        source_file: basename(this.resultsFilePath),
        total_tests: this.statistics.total,
        failed_tests: this.statistics.failed,
        success_tests: this.statistics.success,
        failure_rate: parseFloat(this.statistics.failureRate),
      },
      latency_statistics: {
        average_latency_ms: parseFloat(this.statistics.avgLatency),
        min_latency_ms: this.statistics.minLatency === Infinity ? null : this.statistics.minLatency,
        max_latency_ms: this.statistics.maxLatency,
        top_latency_count: topLatencyRecords.length,
        latency_ranges: this.getLatencyRanges(topLatencyRecords),
      },
      statistics: {
        by_ip_version: {
          ipv4: this.failedTests.filter((t) => t.ip_version === "IPv4").length,
          ipv6: this.failedTests.filter((t) => t.ip_version === "IPv6").length,
        },
        by_protocol: this.getProtocolStatistics(),
        by_error_type: this.groupErrorsByType(),
      },
      failed_tests: this.failedTests,
      // successful_tests: this.successfulTests,
      top_latency_records: topLatencyRecords,
    };
  }

  /**
   * 获取延迟范围统计
   */
  getLatencyRanges(records = null) {
    const targetRecords = records || this.allTests;
    const latencyRanges = {
      '超快 (<50ms)': 0,
      '快 (50-100ms)': 0,
      '正常 (100-200ms)': 0,
      '慢 (200-500ms)': 0,
      '很慢 (>500ms)': 0
    };

    targetRecords.forEach(test => {
      if (!test.latency_ms || typeof test.latency_ms !== 'number') return;

      const latency = test.latency_ms;
      if (latency < 50) latencyRanges['超快 (<50ms)']++;
      else if (latency < 100) latencyRanges['快 (50-100ms)']++;
      else if (latency < 200) latencyRanges['正常 (100-200ms)']++;
      else if (latency < 500) latencyRanges['慢 (200-500ms)']++;
      else latencyRanges['很慢 (>500ms)']++;
    });

    return latencyRanges;
  }

  /**
   * 获取协议统计信息
   */
  getProtocolStatistics() {
    const protocolStats = {};
    this.failedTests.forEach((test) => {
      protocolStats[test.protocol] = (protocolStats[test.protocol] || 0) + 1;
    });
    return protocolStats;
  }

  /**
   * 保存报告到文件
   */
  saveReport(format = "markdown") {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    if (format === "markdown" || format === "both") {
      const markdownReport = this.generateMarkdownReport();
      const markdownFile = `failed-test-report-${timestamp}.md`;
      writeFileSync(markdownFile, markdownReport, "utf8");
      console.log(`Markdown报告已保存到: ${markdownFile}`);
    }

    if (format === "json" || format === "both") {
      const jsonReport = this.generateJsonReport();
      const jsonFile = `failed-test-report-${timestamp}.json`;
      writeFileSync(jsonFile, JSON.stringify(jsonReport, null, 2), "utf8");
      console.log(`JSON报告已保存到: ${jsonFile}`);
    }
  }

  /**
   * 在控制台显示简要报告
   */
  displaySummary() {
    console.log("\n" + "=".repeat(50));
    console.log("HTTP/3 连接测试报告摘要");
    console.log("=".repeat(50));
    console.log(`总测试数: ${this.statistics.total}`);
    console.log(
      `失败测试数: ${this.statistics.failed} (${this.statistics.failureRate}%)`,
    );
    console.log(`成功测试数: ${this.statistics.success}`);

    // 显示延迟统计
    if (this.statistics.avgLatency > 0) {
      console.log("\n📊 延迟统计:");
      console.log(`  平均延迟: ${this.statistics.avgLatency}ms`);
      console.log(`  最小延迟: ${this.statistics.minLatency === Infinity ? 'N/A' : this.statistics.minLatency + 'ms'}`);
      console.log(`  最大延迟: ${this.statistics.maxLatency}ms`);
    }

    if (this.failedTests.length > 0) {
      console.log("\n❌ 主要失败原因:");
      const errorGroups = this.groupErrorsByType();
      Object.entries(errorGroups)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .forEach(([errorType, count]) => {
          console.log(`  - ${errorType}: ${count} 次`);
        });
    }

    // 显示最佳延迟记录
    if (this.options.includeLatencySection) {
      const topLatencyRecords = this.getTopLatencyRecords(5);
      if (topLatencyRecords.length > 0) {
        console.log("\n🚀 最佳延迟记录 (前5条):");
        topLatencyRecords.forEach((test, index) => {
          const status = test.success ? '✅' : '❌';
          const host = test.host.length > 25 ? test.host.substring(0, 22) + "..." : test.host;
          console.log(`  ${index + 1}. ${status} ${host} - ${test.latency_ms}ms (${test.protocol})`);
        });
      }
    }

    console.log("=".repeat(50));
  }
}

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 主执行函数
function main() {
  // 解析命令行参数
  const program = new Command();
  program
    .name('generate-test-report')
    .description('HTTP/3 连接测试报告生成器')
    .version('2.0.0')
    .option('-f, --file <path>', '测试结果文件路径', 'connectivity_results.json')
    .option('-c, --count <number>', '延迟最低的记录数量', '100')
    .option('--no-latency-section', '不包含延迟最低记录部分')
    .option('-o, --output <format>', '输出格式 (markdown, json, both)', 'both');

  program.parse(process.argv);
  const options = program.opts();
  const resultsFilePath = options.file.startsWith('/') ? options.file : join(__dirname, options.file);

  console.log("HTTP/3 连接测试失败报告生成器 v2.0.0");
  console.log("=".repeat(40));
  console.log(`数据文件: ${resultsFilePath}`);
  console.log(`延迟记录数量: ${options.count}`);
  console.log(`输出格式: ${options.output}`);

  // 检查文件是否存在
  if (!existsSync(resultsFilePath)) {
    console.error(`错误: 找不到测试结果文件 ${resultsFilePath}`);
    console.log("请确保 connectivity_results.json 文件存在于指定路径中");
    process.exit(1);
  }

  // 创建报告生成器
  const generatorOptions = {
    topLatencyCount: parseInt(options.count),
    includeLatencySection: options.latencySection !== false,
  };
  const generator = new TestReportGenerator(resultsFilePath, generatorOptions);

  // 加载和分析测试结果
  const results = generator.loadResults();
  generator.analyzeResults(results);

  // 显示简要报告
  generator.displaySummary();

  // 保存报告
  generator.saveReport(options.output);

  console.log("\n✅ 报告生成完成！");

  // 显示延迟统计信息
  const topLatencyRecords = generator.getTopLatencyRecords();
  if (topLatencyRecords.length > 0) {
    console.log(`📊 延迟最低的 ${topLatencyRecords.length} 条记录已添加到报告中`);
    console.log(`   最快延迟: ${topLatencyRecords[0].latency_ms}ms`);
    console.log(`   最慢延迟: ${topLatencyRecords[topLatencyRecords.length - 1].latency_ms}ms`);
  }
}

// 如果直接运行此脚本
if (import.meta.main) {
  main();
}

export default TestReportGenerator;
