"use client"

import { useState } from "react"
import { Download, Pause, Play, Trash2, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DownloadTask {
  id: string
  title: string
  size: string
  progress: number
  status: "downloading" | "paused" | "completed" | "failed"
  speed: string
  timeRemaining: string
}

export function DownloadManager() {
  const [downloads, setDownloads] = useState<DownloadTask[]>([
    {
      id: "1",
      title: "কুরআন তিলাওয়াত গাইড",
      size: "15.2 MB",
      progress: 65,
      status: "downloading",
      speed: "1.2 MB/s",
      timeRemaining: "8s",
    },
    {
      id: "2",
      title: "হাদিস সংকলন",
      size: "8.5 MB",
      progress: 100,
      status: "completed",
      speed: "",
      timeRemaining: "",
    },
  ])

  const pauseDownload = (id: string) => {
    setDownloads((prev) =>
      prev.map((download) => (download.id === id ? { ...download, status: "paused" as const } : download)),
    )
  }

  const resumeDownload = (id: string) => {
    setDownloads((prev) =>
      prev.map((download) => (download.id === id ? { ...download, status: "downloading" as const } : download)),
    )
  }

  const deleteDownload = (id: string) => {
    setDownloads((prev) => prev.filter((download) => download.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "downloading":
        return "bg-blue-100 text-blue-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "downloading":
        return "ডাউনলোড হচ্ছে"
      case "paused":
        return "বিরতি"
      case "completed":
        return "সম্পন্ন"
      case "failed":
        return "ব্যর্থ"
      default:
        return "অজানা"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          ডাউনলোড ম্যানেজার
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {downloads.map((download) => (
          <div key={download.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-sm">{download.title}</h3>
                <p className="text-xs text-gray-600">{download.size}</p>
              </div>
              <Badge className={getStatusColor(download.status)}>{getStatusText(download.status)}</Badge>
            </div>

            {download.status !== "completed" && (
              <div className="space-y-2">
                <Progress value={download.progress} className="h-2" />
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{download.progress}%</span>
                  {download.status === "downloading" && (
                    <span>
                      {download.speed} • {download.timeRemaining} বাকি
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              {download.status === "downloading" && (
                <Button size="sm" variant="outline" onClick={() => pauseDownload(download.id)}>
                  <Pause className="h-4 w-4" />
                </Button>
              )}
              {download.status === "paused" && (
                <Button size="sm" variant="outline" onClick={() => resumeDownload(download.id)}>
                  <Play className="h-4 w-4" />
                </Button>
              )}
              {download.status === "completed" && (
                <Button size="sm" variant="outline">
                  <FolderOpen className="h-4 w-4" />
                </Button>
              )}
              <Button size="sm" variant="outline" onClick={() => deleteDownload(download.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {downloads.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Download className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>কোনো ডাউনলোড নেই</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
