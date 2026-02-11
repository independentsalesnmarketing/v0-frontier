"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Download, Upload } from "lucide-react"

const TOTAL_TEST_DURATION = 20000 // 20 seconds
const UPDATE_INTERVAL = 100 // 100ms
const TEST_DATA_SIZE = 100 * 1024 * 1024 // 100 MB

export default function InternetSpeedTest() {
  const [isTestRunning, setIsTestRunning] = useState(false)
  const [downloadSpeed, setDownloadSpeed] = useState(0)
  const [uploadSpeed, setUploadSpeed] = useState(0)
  const [testProgress, setTestProgress] = useState(0)
  const [currentTest, setCurrentTest] = useState<"download" | "upload" | null>(null)

  const simulateSpeedTest = (testType: "download" | "upload") => {
    const startTime = Date.now()
    let dataTransferred = 0
    const maxSpeed = testType === "download" ? 100 : 50 // Max 100 Mbps down, 50 Mbps up

    const updateTest = () => {
      const elapsedTime = Date.now() - startTime
      const progress = (elapsedTime / (TOTAL_TEST_DURATION / 2)) * 100

      // Simulate network conditions and throttling
      const randomFactor = 0.7 + Math.random() * 0.3 // 70% to 100% of max speed
      const instantSpeed = maxSpeed * randomFactor
      dataTransferred += (instantSpeed * 1024 * 1024) / 8 / (1000 / UPDATE_INTERVAL)

      const averageSpeed = (dataTransferred * 8) / (1024 * 1024) / (elapsedTime / 1000)

      if (testType === "download") {
        setDownloadSpeed(averageSpeed)
      } else {
        setUploadSpeed(averageSpeed)
      }

      setTestProgress(progress)

      if (progress < 100) {
        setTimeout(updateTest, UPDATE_INTERVAL)
      } else {
        if (testType === "download") {
          setCurrentTest("upload")
          simulateSpeedTest("upload")
        } else {
          setIsTestRunning(false)
          setCurrentTest(null)
        }
      }
    }

    updateTest()
  }

  const runSpeedTest = () => {
    setIsTestRunning(true)
    setTestProgress(0)
    setDownloadSpeed(0)
    setUploadSpeed(0)
    setCurrentTest("download")
    simulateSpeedTest("download")
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#0a192f] text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Frontier Internet Speed Test</h1>

      <div className="max-w-md mx-auto bg-[#1d2d50] p-6 rounded-lg shadow-md">
        <p className="mb-4 text-center">Test your current internet speed with our quick and easy speed test tool.</p>

        {!isTestRunning && (
          <Button onClick={runSpeedTest} className="bg-[#e10600] hover:bg-[#ff6b6b] text-white w-full mb-4">
            Start Speed Test
            <ArrowRight className="ml-2" />
          </Button>
        )}

        {isTestRunning && (
          <div className="space-y-4">
            <Progress value={testProgress} className="w-full" />
            <p className="text-center text-sm text-gray-600">
              {currentTest === "download" ? "Testing download speed..." : "Testing upload speed..."}
            </p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="text-center">
            <Download className="w-8 h-8 mx-auto mb-2 text-[#64ffda]" />
            <p className="font-semibold">Download Speed</p>
            <p className="text-2xl font-bold">
              {downloadSpeed.toFixed(2)} <span className="text-sm font-normal">Mbps</span>
            </p>
          </div>
          <div className="text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-[#ff6b6b]" />
            <p className="font-semibold">Upload Speed</p>
            <p className="text-2xl font-bold">
              {uploadSpeed.toFixed(2)} <span className="text-sm font-normal">Mbps</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center bg-[#f8f9fa] text-[#0a192f]">
        <h2 className="text-2xl font-semibold mb-4">Not satisfied with your speed?</h2>
        <p className="mb-4">Upgrade to Frontier Fiber for lightning-fast internet speeds!</p>
        <Button asChild className="bg-[#e10600] hover:bg-[#ff6b6b] text-white">
          <a href="/internet">Explore Frontier Fiber Plans</a>
        </Button>
      </div>

      <div className="mt-12 bg-[#1d2d50] p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">About Our Speed Test</h2>
        <p>
          The Frontier Internet Speed Test provides an estimate of your current internet connection's performance. It
          measures both download and upload speeds by simulating data transfer over a 20-second period. Keep in mind
          that results may vary based on factors such as network congestion, time of day, and the number of devices
          connected to your network. For the most accurate results, we recommend running the test multiple times at
          different times of the day.
        </p>
      </div>
    </div>
  )
}
