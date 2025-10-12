import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Box,
  Container,
  Globe,
  Home,
  Info,
  Minus,
  Play,
  Server,
  Settings,
  Square,
  CircleStop,
  RefreshCw,
  X,
} from "lucide-react";

export default function DampAppDashboard() {
  return (
    <div
      className="flex w-full h-full select-none bg-background relative overflow-hidden"
    >
      {/* Sidebar - Icon Only */}
      <div className="group peer text-sidebar-foreground h-full">
        <div className="relative h-full w-12 flex border-r">
          <div className="bg-sidebar flex h-full w-full flex-col">
            {/* Sidebar Header - Icon Only */}
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md">
                <Box className="size-4" />
              </div>
            </div>

            {/* Sidebar Content - Icons Only */}
            <div className="flex min-h-0 flex-1 flex-col gap-2 px-2">
              <nav className="space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors bg-sidebar-accent"
                  title="Dashboard"
                >
                  <Home className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  title="Services"
                >
                  <Server className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors relative hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  title="Sites"
                >
                  <Globe className="size-4" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-secondary text-secondary-foreground border-transparent inline-flex items-center justify-center">
                    4
                  </Badge>
                </button>
              </nav>

              <nav className="mt-auto space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  title="Settings"
                >
                  <Settings className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  title="About"
                >
                  <Info className="size-4" />
                </button>
              </nav>
            </div>

            {/* Sidebar Footer - Icon Only */}
            <div className="p-2">
              <button className="w-full flex items-center justify-center p-2 rounded-md hover:bg-accent/50 transition-colors">
                <div className="relative">
                  <Container className="size-4" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background bg-emerald-500 animate-pulse shadow-emerald-500/50 shadow-lg" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-background relative flex w-full flex-1 flex-col overflow-y-hidden">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 top-0 z-30">
          <div className="flex items-center gap-2 px-4">
            <button className="rounded-md">
              <div className="flex items-center gap-2">
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-semibold">DAMP</span>
                  <small className="truncate text-xs text-muted-foreground capitalize">
                    dashboard
                  </small>
                </div>
              </div>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3 mr-2">
            <button
              className="h-8 w-8 rounded-md hover:bg-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Minimize window"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              className="h-8 w-8 rounded-md hover:bg-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Maximize window"
            >
              <Square className="h-4 w-4" />
            </button>
            <button
              className="h-8 w-8 rounded-md hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Close window"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">
            Hi, Welcome back{" "}
            <span
              className="inline-block"
              style={{
                display: "inline-block",
                transformOrigin: "70% 70%",
                animation:
                  "1.5s ease 0s infinite normal none running wave-hand",
              }}
            >
              👋
            </span>
          </h1>
          <style>
            {`
          @keyframes wave-hand {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(20deg); }
            20% { transform: rotate(-10deg); }
            30% { transform: rotate(20deg); }
            40% { transform: rotate(-5deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}
          </style>

          {/* Featured Banner */}
          <div className="overflow-hidden rounded-md p-8 py-4 flex items-center justify-between bg-gradient-to-65 from-orange-400 via-purple-600 to-blue-500">
            <div className="w-86 shrink-0">
              <h2 className="text-lg font-bold text-white drop-shadow-lg">
                Local services
              </h2>
              <p className=" text-white mb-4 drop-shadow-md">
                Run local databases and dev tools instantly.
              </p>
              <div className="flex gap-4">
                <button className="h-7 rounded-md px-2.5 text-xs bg-white/20 hover:bg-white/30 text-secondary-foreground shadow-xs shadow-black/5 inline-flex items-center justify-center font-medium">
                  Browse services
                </button>
                <button className="h-7 rounded-md px-2.5 text-xs hover:bg-white/30 text-accent-foreground inline-flex items-center justify-center font-medium">
                  Learn more
                </button>
              </div>
            </div>
            <div className="flex shrink flex-nowrap gap-4 pr-0">
              <Card className="text-white w-70 bg-white/20 backdrop-blur-sm border-white/30 py-0 rounded-md">
                <div className="flex flex-row items-center gap-4 p-4 rounded-t-md">
                  <div className="self-start mt-0.5 bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">
                    <img
                      alt="Redis"
                      className="w-4 h-4"
                      src="https://cdn.simpleicons.org/redis"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-base font-semibold text-white drop-shadow-lg">
                      Redis Cache
                    </div>
                    <div className="text-white text-xs drop-shadow-md">
                      Fast in-memory cache for development.
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="text-white w-70 bg-white/20 backdrop-blur-sm border-white/30 py-0 rounded-md">
                <div className="flex flex-row items-center gap-4 p-4 rounded-t-md">
                  <div className="self-start mt-0.5 bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">
                    <img
                      alt="SQLite"
                      className="w-4 h-4"
                      src="https://cdn.simpleicons.org/sqlite"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-base font-semibold text-white drop-shadow-lg">
                      SQLite Database
                    </div>
                    <div className="text-white text-xs drop-shadow-md">
                      Local SQL database for dev and testing.
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="text-white w-70 bg-white/20 backdrop-blur-sm border-white/30 py-0 rounded-md">
                <div className="flex flex-row items-center gap-4 p-4 rounded-t-md">
                  <div className="self-start mt-0.5 bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">
                    <img
                      alt="Mailpit"
                      className="w-4 h-4"
                      src="https://cdn.simpleicons.org/maildotru"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-base font-semibold text-white drop-shadow-lg">
                      Mailpit
                    </div>
                    <div className="text-white text-xs drop-shadow-md">
                      Local email capture for dev/testing.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 w-full">
            <div className="flex flex-col items-center justify-center p-4 bg-card border rounded-md">
              <p className="font-medium">Installed Services</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-card border rounded-md">
              <p className="font-medium">Running Services</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="flex col-span-2 items-center justify-between p-4 bg-card border rounded-md">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm font-medium">Sites Status</p>
                  <p className="text-xs text-muted-foreground">
                    Local sites overview
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-3 gap-1">
                  <span className="text-2xl font-bold text-yellow-500">4</span>
                  <span className="text-xs text-accent-foreground">
                    Created
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-3 gap-1">
                  <span className="text-2xl font-bold text-green-500">0</span>
                  <span className="text-xs text-accent-foreground">
                    Running
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Your Local Services</h2>
                <p className="text-sm text-muted-foreground">
                  Quickly view and manage installed services.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="h-10 w-10 rounded-md inline-flex items-center justify-center bg-background text-accent-foreground border border-input shadow-xs shadow-black/5"
                  disabled
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                </button>
                <button className="h-10 w-10 rounded-md inline-flex items-center justify-center bg-background text-accent-foreground border border-input hover:bg-accent shadow-xs shadow-black/5">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Service Cards Carousel */}
            <div className="flex gap-4">
              <Card className="text-card-foreground flex flex-col border shadow-sm rounded-md p-0 gap-0 bg-background flex-1">
                <div className="flex flex-row items-center gap-4 p-4 rounded-t-md group">
                  <div className="self-start mt-0.5 bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">
                    <img
                      alt="mysql"
                      className="w-4 h-4"
                      src="https://cdn.simpleicons.org/mysql"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-base font-semibold">
                      MySQL Database
                    </div>
                    <div className="text-muted-foreground text-xs">
                      MySQL database server for local development
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    Running
                  </Badge>
                </div>
                <div className="flex flex-row gap-2 items-center justify-between bg-card border-t rounded-b-md px-4 py-2">
                  <button className="h-7 rounded-md px-2.5 text-xs bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xs shadow-black/5 flex items-center gap-2">
                    <Square className="w-4 h-4 text-destructive" />
                    Stop
                  </button>
                  <button className="h-7 rounded-md px-2.5 text-xs text-accent-foreground hover:bg-accent flex items-center gap-1 group">
                    <Settings className="w-4 h-4 group-hover:animate-spin" />
                  </button>
                </div>
              </Card>

              <Card className="text-card-foreground flex flex-col border shadow-sm rounded-md p-0 gap-0 bg-background flex-1">
                <div className="flex flex-row items-center gap-4 p-4 rounded-t-md group">
                  <div className="self-start mt-0.5 bg-primary/10 w-6 h-6 rounded-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 132.292 121.708"
                      className="w-4 h-4 text-black dark:text-white"
                    >
                      <path
                        d="M12.321 0l53.861 53.918L120.365 0zM5.155 9.025l60.842 59.673 61.211-59.489-.185 36.835L66.921 70.54l15.164 12.616-8.137 5.986-41.609.184c-4.838-.022-25.877-18.34-27.185-41.255z"
                        fill="currentColor"
                        fillOpacity=".941"
                      />
                      <path
                        d="M78.385 72.049l53.907-21.679-8.031 57.318-11.845-9.132c-21.727 23.171-45.255 26.289-67.997 20.837S12.281 98.39 5.155 83.8-.67 53.116 2.843 38.769c1.13 10.511-1.313 16.316 6.38 33.612 6.31 11.399 14.413 20.417 25.89 24.956 13.9 6.195 32.247 3.357 41.701-3.039l14.24-12.156z"
                        fill="#00b786"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="text-base font-semibold">Mail Testing</div>
                    <div className="text-muted-foreground text-xs">
                      Email testing server for local development
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    Running
                  </Badge>
                </div>
                <div className="flex flex-row gap-2 items-center justify-between bg-card border-t rounded-b-md px-4 py-2">
                  <button className="h-7 rounded-md px-2.5 text-xs bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xs shadow-black/5 flex items-center gap-2">
                    <Square className="w-4 h-4 text-destructive" />
                    Stop
                  </button>
                  <button className="h-7 rounded-md px-2.5 text-xs text-accent-foreground hover:bg-accent flex items-center gap-1 group">
                    <Settings className="w-4 h-4 group-hover:animate-spin" />
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Docker Status and Quick Actions */}
          <Card className="text-card-foreground flex flex-col border shadow-sm rounded-md p-4 bg-background">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Docker Engine Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-background/50 border rounded-md">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium">Connection Status</p>
                        <p className="text-xs text-muted-foreground">
                          Docker daemon connectivity
                        </p>
                      </div>
                    </div>
                    <Badge className="text-xs bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-background/50 border rounded-md">
                    <div>
                      <p className="text-sm font-medium">Engine Version</p>
                      <p className="text-xs text-muted-foreground">
                        Docker runtime version
                      </p>
                    </div>
                    <Badge className="text-xs" variant="secondary">
                      v28.3.2
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    className="w-full justify-start rounded-md h-8.5 px-3 text-[0.8125rem] bg-background text-accent-foreground border border-input hover:bg-accent shadow-xs shadow-black/5 inline-flex items-center gap-1.5"
                    disabled
                  >
                    <Play className="w-4 h-4 mr-2 text-emerald-500" />
                    Start All Services
                  </button>
                  <button className="w-full justify-start rounded-md h-8.5 px-3 text-[0.8125rem] bg-background text-accent-foreground border border-input hover:bg-accent shadow-xs shadow-black/5 inline-flex items-center gap-1.5">
                    <CircleStop className="w-4 h-4 mr-2 text-destructive" />
                    Stop All Services
                  </button>
                  <button className="w-full justify-start rounded-md h-8.5 px-3 text-[0.8125rem] bg-background text-accent-foreground border border-input hover:bg-accent shadow-xs shadow-black/5 inline-flex items-center gap-1.5 group">
                    <RefreshCw className="h-4 w-4 mr-2 group-hover:animate-spin" />
                    Refresh Services
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
