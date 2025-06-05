// Mobile app utility functions

export interface AppSettings {
  theme: "light" | "dark" | "auto"
  language: "bn" | "en" | "ar"
  notifications: boolean
  autoDownload: boolean
  offlineMode: boolean
  dataUsage: "low" | "medium" | "high"
}

export interface UserProgress {
  dailyQuranReading: number
  weeklyGoals: number
  monthlyTargets: number
  totalDownloads: number
  favoriteCategories: string[]
}

export class MobileAppManager {
  private static instance: MobileAppManager
  private settings: AppSettings
  private progress: UserProgress

  private constructor() {
    this.settings = this.loadSettings()
    this.progress = this.loadProgress()
  }

  static getInstance(): MobileAppManager {
    if (!MobileAppManager.instance) {
      MobileAppManager.instance = new MobileAppManager()
    }
    return MobileAppManager.instance
  }

  // Settings Management
  private loadSettings(): AppSettings {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("islamic-app-settings")
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return {
      theme: "light",
      language: "bn",
      notifications: true,
      autoDownload: false,
      offlineMode: true,
      dataUsage: "medium",
    }
  }

  saveSettings(settings: Partial<AppSettings>) {
    this.settings = { ...this.settings, ...settings }
    if (typeof window !== "undefined") {
      localStorage.setItem("islamic-app-settings", JSON.stringify(this.settings))
    }
  }

  getSettings(): AppSettings {
    return this.settings
  }

  // Progress Management
  private loadProgress(): UserProgress {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("islamic-app-progress")
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return {
      dailyQuranReading: 0,
      weeklyGoals: 0,
      monthlyTargets: 0,
      totalDownloads: 0,
      favoriteCategories: [],
    }
  }

  updateProgress(progress: Partial<UserProgress>) {
    this.progress = { ...this.progress, ...progress }
    if (typeof window !== "undefined") {
      localStorage.setItem("islamic-app-progress", JSON.stringify(this.progress))
    }
  }

  getProgress(): UserProgress {
    return this.progress
  }

  // Download Management
  async downloadContent(contentId: string, url: string): Promise<boolean> {
    try {
      if (!this.settings.offlineMode) {
        throw new Error("Offline mode is disabled")
      }

      // Simulate download process
      const response = await fetch(url)
      const blob = await response.blob()

      // Store in IndexedDB for offline access
      await this.storeOfflineContent(contentId, blob)

      // Update download count
      this.updateProgress({
        totalDownloads: this.progress.totalDownloads + 1,
      })

      return true
    } catch (error) {
      console.error("Download failed:", error)
      return false
    }
  }

  private async storeOfflineContent(contentId: string, blob: Blob): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("IslamicAppDB", 1)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => {
        const db = request.result
        const transaction = db.transaction(["content"], "readwrite")
        const store = transaction.objectStore("content")

        store.put({ id: contentId, data: blob, timestamp: Date.now() })

        transaction.oncomplete = () => resolve()
        transaction.onerror = () => reject(transaction.error)
      }

      request.onupgradeneeded = () => {
        const db = request.result
        if (!db.objectStoreNames.contains("content")) {
          db.createObjectStore("content", { keyPath: "id" })
        }
      }
    })
  }

  // Notification Management
  async scheduleNotification(title: string, body: string, time: Date): Promise<boolean> {
    if (!this.settings.notifications) {
      return false
    }

    if ("serviceWorker" in navigator && "Notification" in window) {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        // Schedule notification using service worker
        const registration = await navigator.serviceWorker.ready
        await registration.showNotification(title, {
          body,
          icon: "/icon-192.png",
          badge: "/icon-192.png",
          tag: "islamic-reminder",
          requireInteraction: true,
        })
        return true
      }
    }
    return false
  }

  // Prayer Time Management
  getPrayerTimes(date: Date = new Date()): Record<string, string> {
    // This would typically integrate with a prayer time API
    // For demo purposes, returning static times
    return {
      fajr: "৫:১৫",
      sunrise: "৬:৩০",
      dhuhr: "১২:৩০",
      asr: "৪:১৫",
      maghrib: "৬:৪৫",
      isha: "৮:০০",
    }
  }

  // Data Usage Monitoring
  getDataUsage(): { used: number; limit: number } {
    // Mock data usage tracking
    const limits = {
      low: 50, // 50MB
      medium: 200, // 200MB
      high: 500, // 500MB
    }

    return {
      used: Math.floor(Math.random() * 100), // Random usage for demo
      limit: limits[this.settings.dataUsage],
    }
  }

  // Offline Content Management
  async getOfflineContent(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("IslamicAppDB", 1)

      request.onerror = () => reject(request.error)

      request.onsuccess = () => {
        const db = request.result
        const transaction = db.transaction(["content"], "readonly")
        const store = transaction.objectStore("content")
        const getAllRequest = store.getAll()

        getAllRequest.onsuccess = () => resolve(getAllRequest.result)
        getAllRequest.onerror = () => reject(getAllRequest.error)
      }
    })
  }

  // App Performance Monitoring
  trackUserAction(action: string, metadata?: any) {
    if (typeof window !== "undefined") {
      const analytics = {
        action,
        timestamp: Date.now(),
        metadata,
        userId: this.getUserId(),
      }

      // Store analytics data
      const existing = JSON.parse(localStorage.getItem("app-analytics") || "[]")
      existing.push(analytics)

      // Keep only last 100 events
      if (existing.length > 100) {
        existing.splice(0, existing.length - 100)
      }

      localStorage.setItem("app-analytics", JSON.stringify(existing))
    }
  }

  private getUserId(): string {
    let userId = localStorage.getItem("user-id")
    if (!userId) {
      userId = "user_" + Math.random().toString(36).substr(2, 9)
      localStorage.setItem("user-id", userId)
    }
    return userId
  }
}

// Export singleton instance
export const appManager = MobileAppManager.getInstance()
