import { Badge } from "@/components/ui/badge";
import {
  Box,
  Container,
  Globe,
  Home,
  Info,
  Minus,
  Server,
  Settings,
  Square,
  X,
  Search,
  Plus,
  RefreshCw,
  Terminal,
  Sparkles,
  Code,
  Trash2,
  FolderOpen,
} from "lucide-react";

export default function DampAppSites() {
  return (
    <div
      className="flex w-full h-full select-none bg-fd-background relative overflow-hidden"
    >
      {/* Sidebar - Icon Only */}
      <div className="group peer text-fd-foreground h-full">
        <div className="relative h-full w-12 flex border-r">
          <div className="bg-sidebar flex h-full w-full flex-col">
            {/* Sidebar Header - Icon Only */}
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center justify-center w-8 h-8 bg-fd-primary text-fd-primary-foreground rounded-md">
                <Box className="size-4" />
              </div>
            </div>

            {/* Sidebar Content - Icons Only */}
            <div className="flex min-h-0 flex-1 flex-col gap-2 px-2">
              <nav className="space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Dashboard"
                >
                  <Home className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Services"
                >
                  <Server className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors relative bg-fd-accent"
                  title="Sites"
                >
                  <Globe className="size-4" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-fd-secondary text-fd-secondary-foreground border-transparent inline-flex items-center justify-center">
                    4
                  </Badge>
                </button>
              </nav>

              <nav className="mt-auto space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Settings"
                >
                  <Settings className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="About"
                >
                  <Info className="size-4" />
                </button>
              </nav>
            </div>

            {/* Sidebar Footer - Icon Only */}
            <div className="p-2">
              <button className="w-full flex items-center justify-center p-2 rounded-md hover:bg-fd-accent/50 transition-colors">
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
      <main className="bg-fd-background relative flex w-full flex-1 flex-col overflow-y-hidden">
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 top-0 z-30">
          <div className="flex items-center gap-2 px-4">
            <button className="rounded-md">
              <div className="flex items-center gap-2">
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-xs font-semibold">DAMP</span>
                  <span className="truncate text-xs text-fd-muted-foreground capitalize">
                    sites
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3 mr-2">
            <button
              className="h-8 w-8 rounded-md hover:bg-fd-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Minimize window"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              className="h-8 w-8 rounded-md hover:bg-fd-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
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

        {/* Sites Content */}
        <div className="flex flex-col h-[calc(100vh-3.5rem)]">
          {/* Search Bar */}
          <div className="relative border-y">
            <input 
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex w-full min-w-0 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pt-4 pb-4 pl-12 pr-2 h-10 rounded-none bg-background dark:bg-background focus-visible:ring-0 border-0"
              placeholder="Search sites..."
              value=""
              readOnly
            />
            <Search className="pointer-events-none absolute top-1/2 left-6 size-4 -translate-y-1/2 opacity-50 select-none" />
          </div>

          {/* Main Content - Sidebar and Detail */}
          <div className="flex h-full">
            {/* Left Sidebar - Sites List */}
            <div className="w-80 bg-background border-r flex flex-col gap-4 pl-6 p-4">
              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-end gap-4">
                  <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-background text-accent-foreground border border-input hover:bg-accent rounded-md px-2.5 gap-1.25 text-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 opacity-100 h-8" title="Refresh sites">
                    <RefreshCw className="h-4 w-4 mr-2 group-hover:animate-spin" />
                    Refresh
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1 overflow-hidden">
                <div className="relative h-full">
                  <div className="size-full rounded-[inherit] overflow-y-auto">
                    <div style={{ minWidth: "100%", display: "table" }}>
                      <div className="flex flex-col gap-2 pr-3">
                        {/* Add Site Button */}
                        <button className="flex items-center gap-4 p-3 border rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full focus-visible:translate-x-2">
                          <div className="flex items-center justify-center gap-3 flex-1">
                            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                              <Plus className="h-8 w-8" />
                              <span className="text-xs">Add Site</span>
                            </div>
                          </div>
                        </button>

                        {/* test-newtype Site */}
                        <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <img alt="Laravel" className="w-8 h-8" src="https://cdn.simpleicons.org/laravel" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold capitalize">test-newtype</span>
                                <Badge className="text-xs bg-secondary text-secondary-foreground">PHP 8.4</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                test-newtype.local
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-blue-600 dark:text-blue-400">Ready to start</span>
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* new-typwsite Site */}
                        <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <img alt="Laravel" className="w-8 h-8" src="https://cdn.simpleicons.org/laravel" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold capitalize">new-typwsite</span>
                                <Badge className="text-xs bg-secondary text-secondary-foreground">PHP 8.4</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                new-typwsite.local
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-blue-600 dark:text-blue-400">Ready to start</span>
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* laravel-test12 Site - Active/Selected */}
                        <button className="flex items-center gap-4 p-3 border bg-muted rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <img alt="Laravel" className="w-8 h-8" src="https://cdn.simpleicons.org/laravel" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold capitalize">laravel-test12</span>
                                <Badge className="text-xs bg-secondary text-secondary-foreground">PHP 8.4</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                laravel-test12.local
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-green-600 dark:text-green-400">Running</span>
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* prestashop16 Site */}
                        <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <img alt="PHP" className="w-8 h-8" src="https://cdn.simpleicons.org/php" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold capitalize">prestashop16</span>
                                <Badge className="text-xs bg-secondary text-secondary-foreground">PHP 8.4</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                prestashop16.local
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-blue-600 dark:text-blue-400">Ready to start</span>
                              </div>
                            </div>
                          </div>
                        </button>

                        {/* testsitesquery Site */}
                        <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <img alt="PHP" className="w-8 h-8" src="https://cdn.simpleicons.org/php" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold capitalize">testsitesquery</span>
                                <Badge className="text-xs bg-secondary text-secondary-foreground">PHP 8.4</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground truncate flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                testsitesquery.local
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-blue-600 dark:text-blue-400">Ready to start</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Site Detail */}
            <div className="flex-1 overflow-hidden p-4">
              <div className="relative h-full">
                <div className="size-full rounded-[inherit] overflow-y-auto">
                  <div style={{ minWidth: "100%", display: "table" }}>
                    <div className="pr-3">
                      {/* Browser Preview */}
                      <div className="h-36 overflow-hidden duration-700 rounded hover:h-90 hover:duration-800 hover:transition-[height] max-h-max">
                        <div className="w-full max-w-2xl mx-auto relative">
                          {/* Browser Frame SVG */}
                          <svg width="1203" height="753" viewBox="0 0 1203 753" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <g clipPath="url(#path0)">
                              <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5] dark:fill-[#404040]"></path>
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5] dark:fill-[#404040]"></path>
                              <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white dark:fill-[#262626]"></path>
                              <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]"></circle>
                              <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]"></circle>
                              <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5] dark:fill-[#404040]"></circle>
                              <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" className="fill-[#E5E5E5] dark:fill-[#404040]"></path>
                              <g className="mix-blend-luminosity">
                                <path d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z" fill="#A3A3A3"></path>
                              </g>
                              <g className="mix-blend-luminosity">
                                <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">laravel-test12.local</text>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="path0">
                                <rect width="1203" height="753" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          {/* Iframe Preview Placeholder */}
                          <div className="absolute inset-0 top-[6.9%] left-[0.08%] right-[0.08%] bottom-[1.6%] overflow-hidden">
                            <div className="aspect-video bg-card flex items-center justify-center overflow-hidden">
                              <div className="text-muted-foreground text-sm">
                                Site Preview
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Site Details */}
                      <div className="space-y-4 p-2">
                        {/* Header with Logo and Actions */}
                        <div className="flex items-baseline justify-between mb-0 -mt-7 z-10">
                          <div className="z-10 bg-background p-2 rounded-md flex items-center">
                            <img alt="Laravel" className="h-11 w-11" src="https://cdn.simpleicons.org/laravel" />
                          </div>
                          <div className="flex gap-2 items-center">
                            <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-background text-accent-foreground border border-input hover:bg-accent size-8.5 rounded-md shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 w-8.5 h-8.5 p-0" title="Open site in browser">
                              <Globe className="h-4 w-4" />
                            </button>
                            <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-background text-accent-foreground border border-input hover:bg-accent size-8.5 rounded-md shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 w-8.5 h-8.5 p-0" title="Open site folder">
                              <FolderOpen className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Site Title */}
                        <div className="flex items-start justify-between px-2">
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold capitalize">laravel-test12</h2>
                          </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-col gap-4 px-2">
                          <div className="text-muted-foreground inline-flex items-center justify-center rounded-lg p-[3px] bg-muted w-full h-8">
                            <button className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:outline-ring dark:data-[state=active]:border-input text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 gap-1.5 border border-transparent focus-visible:outline-1 ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background dark:data-[state=active]:bg-background data-[state=active]:text-secondary-foreground hover:text-muted-foreground/70 dark:hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-none data-[state=active]:shadow-xs">
                              Actions
                            </button>
                            <button className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:outline-ring dark:data-[state=active]:border-input text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 gap-1.5 border border-transparent focus-visible:outline-1 ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background dark:data-[state=active]:bg-background data-[state=active]:text-secondary-foreground hover:text-muted-foreground/70 dark:hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-none">
                              Environment
                            </button>
                            <button className="dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:outline-ring dark:data-[state=active]:border-input text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 gap-1.5 border border-transparent focus-visible:outline-1 ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background dark:data-[state=active]:bg-background data-[state=active]:text-secondary-foreground hover:text-muted-foreground/70 dark:hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border-none">
                              Volume Sync
                            </button>
                          </div>

                          {/* Actions Tab Content */}
                          <div>
                            <div className="grid grid-cols-6 gap-3">
                              <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-background text-accent-foreground border border-input hover:bg-accent h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 col-span-3">
                                <Terminal className="h-4 w-4 mr-2" />
                                Open Terminal
                              </button>
                              <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-background text-accent-foreground border border-input hover:bg-accent h-8.5 px-3 gap-1.5 text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 w-full rounded-md col-span-3">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Open Tinker
                              </button>
                              <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-primary text-primary-foreground hover:bg-primary/90 h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 col-span-5">
                                <Code className="h-4 w-4 mr-2" />
                                Open in VS Code
                              </button>
                              <button className="cursor-pointer group focus-visible:outline-hidden inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-xs shadow-black/5 col-span-1" aria-label="Remove Site">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
